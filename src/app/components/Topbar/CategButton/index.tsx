import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';

interface ITopBar {
    classname: string;
}

export const CategButton = ({ classname }: ITopBar) => {
    const [burguercateg, setBurguercateg] = useState(false);
    const [categButton, setCategButton] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

    const themeMenuRef = useRef<HTMLUListElement>(null);

    const handleThemeMenuToggle = () => {
        setIsThemeMenuOpen(!isThemeMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
            setIsThemeMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isThemeMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isThemeMenuOpen]);

    return (
        <section className="h-20 flex items-center w-full justify-between p-2">
            <div className="max-w-7xl m-auto flex justify-between w-full relative">
                {/*burguer button*/}
                <button className={`lg:hidden ${burguercateg && ""}`}
                    onClick={() => setBurguercateg(!burguercateg)}>
                    <AlignJustify color="#fff" />
                </button>
                <div className={cn(`${burguercateg ? "block" : "hidden"} rounded-md absolute top-12`, classname)}>
                    <ul className="p-4 gap-8 text-xm text-white lg:text-base">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={""}>Zoom</Link>
                        </li>
                        <li>
                            <button className={`flex ${categButton && ""}`}
                                onClick={() => setCategButton(!categButton)}>
                                Tema
                            </button>
                        </li>
                    </ul>
                    {/* clique tema */}
                    <div className={`${categButton ? "block" : "hidden"} bg-zinc-200 absolute top-25 grid grid-cols-1 z-50`}>
                        <ul className="p-4 gap-8 text-xm text-black lg:text-base">
                            {/* Tema opções */}
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="hidden lg:flex items-center space-x-5 relative z-40">
                <button className="hover:bg-black p-3 transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link href="">Home</Link>
                </button>
                <li className="hover:bg-black p-3 transform transition-transform duration-300 ease-in-out hover:scale-110 relative">
                    <button
                        className="flex items-center"
                        onClick={handleThemeMenuToggle}
                    >
                        Tema
                    </button>
                    {isThemeMenuOpen && (
                        <ul
                            ref={themeMenuRef}
                            className="absolute text-black left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
                        >
                            <li className="p-2 hover:bg-gray-200"><Link href="">Alto Contraste</Link></li>
                            <li className="p-2 hover:bg-gray-200"><Link href="">Modo Escuro</Link></li>
                            <li className="p-2 hover:bg-gray-200"><Link href="">Modo Daltonismo</Link></li>
                        </ul>
                    )}
                </li>
                <button className="whitespace-nowrap hover:bg-black p-3 transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link href="">Itens Para Iniciantes</Link>
                </button>
                <li>
                    <div className="flex justify-between space-x-2 text-xl">
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-150"><FaSearchMinus /></button>
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-150"><FaSearchPlus /></button>
                    </div>
                </li>
            </ul>
        </section>
    );
};
