"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

export function HeroTypewriter() {
    const { t } = useLanguage();
    const phrases = t.hero.phrases;

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const currentPhrase = phrases[wordIndex];
    const fullText = currentPhrase.prefix + currentPhrase.word;

    useEffect(() => {
        if (isPaused) return;

        const typingSpeed = isDeleting ? 40 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting) {

                if (text !== fullText) {
                    setText(fullText.slice(0, text.length + 1));
                } else {

                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        setIsDeleting(true);
                    }, 3000);
                }
            } else {

                if (text !== "") {
                    setText(fullText.slice(0, text.length - 1));
                } else {

                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, isPaused, wordIndex, fullText]);


    const prefixLength = currentPhrase.prefix.length;
    const typedPrefix = text.slice(0, prefixLength);
    const typedWord = text.slice(prefixLength);

    return (
        <span className="block mt-0 md:mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 md:gap-y-2 lg:gap-x-3 short-h-reduce-spacing">
            <span>{typedPrefix}</span>
            <span className="inline-flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-0 lg:pb-3">
                    {typedWord}
                </span>
                <span className="w-[1px] md:w-[4px] h-[1em] md:h-[1.2em] bg-gradient-to-b from-blue-600 to-red-600 ml-1 md:ml-2 animate-[pulse_1s_ease-in-out_infinite]" />
            </span>
        </span>
    );
}
