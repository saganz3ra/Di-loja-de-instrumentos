'use client';

import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaMicrophone } from 'react-icons/fa6';

export const SearchBar = () => {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'pt-BR';

            recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
                const transcriptResult = event.results[0][0].transcript;
                if (inputRef.current) {
                    inputRef.current.value = transcriptResult;
                }
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Error occurred in recognition: ", event);
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        } else {
            console.warn("Speech Recognition API is not supported in this browser.");
        }
    }, []);

    const handleMicrophoneClick = () => {
        if (recognitionRef.current) {
            if (isListening) {
                recognitionRef.current.stop();
            } else {
                recognitionRef.current.start();
            }
            setIsListening(!isListening);
        }
    };

    return (
        <section className="flex justify-center h-11 mt-2">
            <div className="flex items-center  rounded-lg">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="px-1 w-36 md:w-72 md:px-4 py-2 rounded-l-lg focus:outline-none text-md text-black"
                    ref={inputRef}
                />
                <button
                    className="text-2xl md:text-3xl text-white rounded-lg"
                    onClick={handleMicrophoneClick}
                    style={{ marginLeft: '10px' }}
                >
                    <FaMicrophone />
                </button>
            </div>
            <button className="hidden md:block md:px-4 md:py-2 text-white rounded-r-lg  transform transition-transform duration-300 ease-in-out hover:scale-110">
                <Search />
            </button>
        </section>
    );
};
