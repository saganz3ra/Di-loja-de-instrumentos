'use client'

import { SearchBar } from "./SearchBar";
import { CategButton } from "./categButton";
import { PersonalButton } from "./personalButtons";

export function Topbar() {
    return (
        <section className="bg-red-300 border border-blue-400 flex w-full h-20 items-center justify-between p-7">

            <div className="flex items-center">
                <CategButton classname="" />
                <ul className="hidden md:flex items-center space-x-11">
                    <li ><a href="">Home</a></li>
                    <li ><a href="">Tema</a></li>
                    <li ><a href="">Acessórios</a></li>
                    <li className="whitespace-nowrap"><a href="">Itens Para Iniciantes</a></li>
                </ul>
            </div>

            <SearchBar />

            <PersonalButton />
        </section>
    );
}
