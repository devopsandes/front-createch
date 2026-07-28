import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollIndicator } from "./ScrollIndicator";

export default function LegalesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen md:h-screen bg-black text-white flex flex-col font-sans md:overflow-hidden">
            <Header />
            <main
                id="legales-main"
                className="flex-1 w-full px-6 md:px-12 lg:px-24 py-10 md:py-16 md:overflow-y-auto hide-scrollbar"
            >
                <div className="max-w-3xl mx-auto">{children}</div>
            </main>
            <ScrollIndicator />
            <Footer />
        </div>
    );
}
