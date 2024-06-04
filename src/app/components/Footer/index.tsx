'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footerson() {
    return (
        <footer className="bg-teal-950 w-full flex flex-col items-center p-4 text-white">
            <div className="w-full max-w-7xl flex justify-between items-center">    
                <div className="flex gap-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/about" className="hover:underline">Sobre</a>
                    <a href="/contact" className="hover:underline">Contato</a>
                </div>

                <div className="text-sm">
                    <p>Email: TopZeraInstrumentos@gmail.com</p>
                    <p>Telefone: (42) 99827-5678</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook color="white" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter color="white" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram color="white" />
                    </a>
                </div>
            </div>

            <div className="mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} TopZeraInstrumentos. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
