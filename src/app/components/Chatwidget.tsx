"use client";

import { useState, useRef, useEffect } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "¡Hola! ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mostrar viñeta de bienvenida al inicio
  useEffect(() => {
    const hasSeenGreeting = sessionStorage.getItem("hasSeenGreeting");
    if (!hasSeenGreeting) {
      const timer = setTimeout(() => {
        setShowBubble(true);
        sessionStorage.setItem("hasSeenGreeting", "true");
        // Ocultar burbuja después de 20 segundos
        setTimeout(() => setShowBubble(false), 20000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Particles Effect Implementation
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      z: number;
      prevZ: number;
      speed: number;
      color: string;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.prevZ = 0;
        this.speed = 0;
        this.color = "";
        this.reset();
      }

      reset() {
        this.x = (Math.random() - 0.5) * canvas.width * 2.5;
        this.y = (Math.random() - 0.5) * canvas.height * 2.5;
        this.z = Math.random() * canvas.width;
        this.prevZ = this.z;
        const isBlue = Math.random() > 0.5;
        this.color = isBlue ? "100, 200, 255" : "255, 100, 100";
        this.speed = Math.random() * 2 + 0.8;
      }

      update() {
        this.prevZ = this.z;
        this.z -= this.speed;
        if (this.z <= 0) {
          this.reset();
          this.z = canvas.width;
          this.prevZ = this.z;
        }
      }

      draw() {
        if (!ctx) return;
        const sx = (this.x / this.z) * (canvas.width / 2) + canvas.width / 2;
        const sy = (this.y / this.z) * (canvas.height / 2) + canvas.height / 2;
        const px = (this.x / this.prevZ) * (canvas.width / 2) + canvas.width / 2;
        const py = (this.y / this.prevZ) * (canvas.height / 2) + canvas.height / 2;

        const zFactor = 1 - this.z / canvas.width;
        const radius = zFactor * 5;
        const opacity = zFactor * 1.0;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(${this.color}, ${opacity})`;
        ctx.lineWidth = radius;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }

    const particles = Array.from({ length: 160 }, () => new Particle());
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, threadId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error del servidor");

      if (data.threadId) setThreadId(data.threadId);
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Ocurrió un error. Intentá de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <style>{`
        @keyframes dash-loop {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes bubble-in {
          0% { opacity: 0; transform: translateX(20px) scale(0.8); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .main-container {
          position: fixed;
          bottom: 130px;
          right: 20px;
          width: 360px;
          height: 480px;
          z-index: 9998;
          padding: 1px;
          background: linear-gradient(135deg, #2563eb, #dc2626);
          border-radius: 6px;
          box-shadow: 0 20px 80px rgba(0,0,0,1);
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (min-width: 1024px) {
          .main-container {
            bottom: 110px;
            right: 40px;
            width: 380px;
            height: 520px;
          }
        }
        @media (max-width: 480px) {
          .main-container {
            width: calc(100% - 40px);
            height: 60vh;
            bottom: 210px;
            right: 20px;
          }
        }
        .inner-container {
          width: 100%;
          height: 100%;
          background: #000000;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #2563eb, #dc2626);
          border-radius: 10px;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .welcome-bubble {
          position: absolute;
          right: 110px;
          bottom: 20px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(59, 130, 246, 0.5);
          color: white;
          padding: 12px 18px;
          border-radius: 12px 12px 0 12px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(37, 99, 235, 0.2);
          animation: bubble-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          backdrop-filter: blur(10px);
          z-index: 10000;
        }
        @media (max-width: 480px) {
          .welcome-bubble {
            right: 75px; 
            bottom: 130px;
            font-size: 12px;
            padding: 8px 12px;
            white-space: normal;
            max-width: 150px;
            text-align: right;
          }
        }
        .welcome-bubble::after {
          content: "";
          position: absolute;
          right: -8px;
          bottom: 0;
          border-left: 10px solid rgba(59, 130, 246, 0.5);
          border-top: 10px solid transparent;
        }
      `}</style>

      {/* Activador del Chat */}
      <div
        onClick={() => {
          setIsOpen((v) => !v);
          setShowBubble(false);
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "100px",
          height: "100px",
          zIndex: 9999,
          cursor: "pointer",
          transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        className="chat-trigger-button"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .chat-trigger-button {
              bottom: 20px !important;
              right: 40px !important;
            }
          }
          @media (max-width: 480px) {
             .chat-trigger-button {
              bottom: 130px !important;
              right: 15px !important;
              width: 75px !important;
              height: 75px !important;
            }
          }
        `}</style>

        {/* Viñeta de Bienvenida */}
        {showBubble && !isOpen && (
          <div className="welcome-bubble">
            ¡Bienvenido! Puedes consultarme aquí
          </div>
        )}

        <svg width="100%" height="100%" viewBox="0 0 512 512" style={{ position: "relative", zIndex: 1, overflow: "visible" }}>
          <defs>
            <linearGradient id="glassesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
            </linearGradient>

            <linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
            </linearGradient>

            <pattern id="shirtParticles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#4b5563" opacity="0.4" />
              <circle cx="12" cy="10" r="1" fill="#9ca3af" opacity="0.3" />
              <circle cx="6" cy="16" r="1.2" fill="#374151" opacity="0.5" />
              <circle cx="16" cy="5" r="0.8" fill="#ffffff" opacity="0.15" />
            </pattern>
          </defs>

          {/* Borde de Seguimiento del Contorno */}
          {!isOpen && (
            <path
              className="neon-contour"
              d="M102,426 c0,0,0-50,80-100 L182,326 L156,300 V220 c0-55,45-100,100-100 s100,45,100,100 v80 c0,11-10,20-20,20 h-26 L332,326 c80,50,80,100,80,100 v40 H102 Z"
              fill="none"
              stroke="url(#contourGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="180 320"
              style={{
                animation: "dash-loop 2.5s linear infinite",
                filter: "drop-shadow(0 0 10px rgba(37, 99, 235, 1)) drop-shadow(0 0 16px rgba(220, 38, 38, 1))",
                transition: "all 0.4s ease"
              }}
            />
          )}

          {/* Cuerpo/Camiseta - Negro/Gris con Partículas */}
          <path d="M102,426c0,0,0-50,80-100h150c80,50,80,100,80,100v40H102V426z" fill="#111827" />
          <path d="M102,426c0,0,0-50,80-100h150c80,50,80,100,80,100v40H102V426z" fill="url(#shirtParticles)" />
          <path d="M102,426c0,0,0-50,80-100h150c80,50,80,100,80,100v40H102V426z" fill="none" stroke="#374151" strokeWidth="12" />

          {/* Cuello */}
          <rect x="236" y="300" width="40" height="40" fill="#f1f5f9" />
          <rect x="236" y="300" width="40" height="40" fill="none" stroke="#94a3b8" strokeWidth="8" />

          {/* Cabeza */}
          <path d="M156,220c0-55,45-100,100-100s100,45,100,100v80c0,11-10,20-20,20h-160c-11,0-20-9-20-20V220z" fill="#ffffff" />
          <path d="M156,220c0-55,45-100,100-100s100,45,100,100v80c0,11-10,20-20,20h-160c-11,0-20-9-20-20V220z" fill="none" stroke="#334155" strokeWidth="16" />

          {/* Headset */}
          <path d="M150,220c0-60,45-108,106-108s106,48,106,108" fill="none" stroke="#1e293b" strokeWidth="12" />
          <rect x="120" y="200" width="40" height="60" rx="10" fill="#334155" />
          <rect x="352" y="200" width="40" height="60" rx="10" fill="#334155" />

          {/* Micrófono */}
          <path d="M372,250 c0,40-60,40-100,40" fill="none" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
          <circle cx="265" cy="290" r="8" fill="#0f172a" />

          {/* Lentes de Oficina */}
          <g transform="translate(165, 185)">
            <rect x="0" y="0" width="80" height="55" rx="8" fill="url(#glassesGradient)" stroke="#000000" strokeWidth="8" />
            <rect x="102" y="0" width="80" height="55" rx="8" fill="url(#glassesGradient)" stroke="#000000" strokeWidth="8" />
            <path d="M80,25 q11,-15 22,0" fill="none" stroke="#000000" strokeWidth="8" strokeLinecap="round" />
            <line x1="-15" y1="20" x2="0" y2="20" stroke="#000000" strokeWidth="8" />
            <line x1="182" y1="20" x2="197" y2="20" stroke="#000000" strokeWidth="8" />
          </g>

          <path
            d="M226,275 q30,15 60,0"
            fill="none"
            stroke="#334155"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

      </div>

      {/* Ventana de chat Neon Square */}
      {isOpen && (
        <div className="main-container">
          <div className="inner-container">
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                pointerEvents: "none", zIndex: 0, opacity: 1, mixBlendMode: "screen"
              }}
            />

            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
              {/* Header */}
              <div style={{
                padding: "16px",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(0, 0, 0, 0.85)",
                display: "flex", alignItems: "center", gap: "12px",
                backdropFilter: "blur(20px)"
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "4px", background: "rgba(37,99,235,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(59,130,246,0.3)",
                  overflow: "hidden"
                }}>
                  <svg width="28" height="28" viewBox="0 0 512 512">
                    <defs>
                      <pattern id="shirtParticlesSmall" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="4" fill="#ffffff" opacity="0.2" />
                      </pattern>
                    </defs>
                    {/* Cuerpo simplificado */}
                    <path d="M102,426c0,0,0-50,80-100h150c80,50,80,100,80,100v40H102V426z" fill="#111827" />
                    <path d="M102,426c0,0,0-50,80-100h150c80,50,80,100,80,100v40H102V426z" fill="url(#shirtParticlesSmall)" />
                    {/* Cabeza */}
                    <path d="M156,220c0-55,45-100,100-100s100,45,100,100v80c0,11-10,20-20,20h-160c-11,0-20-9-20-20V220z" fill="#ffffff" />
                    {/* Lentes */}
                    <g transform="translate(165, 185)">
                      <rect x="0" y="0" width="80" height="55" rx="8" fill="#2563eb" />
                      <rect x="102" y="0" width="80" height="55" rx="8" fill="#2563eb" />
                    </g>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "white", fontWeight: "900", fontSize: "14px", letterSpacing: "0.8px", textTransform: "uppercase" }}>Asistente Createch</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 12px #22c55e" }} />
                    <span style={{ fontSize: "10px", color: "#4ade80", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>Online</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "white", opacity: 0.5, cursor: "pointer", padding: "4px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Chat Area */}
              <div className="custom-scrollbar" style={{
                flex: 1,
                overflowY: "auto",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                background: "transparent"
              }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth: "85%", padding: "14px", fontSize: "14px", lineHeight: "1.6",
                      borderRadius: msg.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0",
                      background: msg.role === "user" ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.1)",
                      border: msg.role === "user" ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(255,255,255,0.2)",
                      color: "white", fontWeight: "400", backdropFilter: "blur(10px)"
                    }}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px", borderRadius: "10px", display: "flex", gap: "8px" }}>
                      <div className="animate-bounce" style={{ width: "7px", height: "7px", background: "#3b82f6", borderRadius: "50%" }} />
                      <div className="animate-bounce" style={{ width: "7px", height: "7px", background: "#3b82f6", borderRadius: "50%", animationDelay: "0.2s" }} />
                      <div className="animate-bounce" style={{ width: "7px", height: "7px", background: "#3b82f6", borderRadius: "50%", animationDelay: "0.4s" }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Bar */}
              <div style={{ padding: "20px", background: "#000", borderTop: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Escribe tu mensaje..."
                    disabled={loading}
                    style={{
                      flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "6px", padding: "12px 16px", color: "white", fontSize: "14px", outline: "none"
                    }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    style={{
                      width: "48px", height: "48px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
                      background: input.trim() && !loading ? "linear-gradient(135deg, #2563eb, #dc2626)" : "rgba(255,255,255,0.05)",
                      border: "none", cursor: input.trim() && !loading ? "pointer" : "not-allowed", transition: "0.4s"
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}