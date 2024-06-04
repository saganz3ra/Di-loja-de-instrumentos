'use client'

import { CategButton } from './CategButton';
import { PersonalButton } from "./PersonalButtons";
import { SearchBar } from "./SearchBar";

export function Topbar() {
    return (
        <section className=" bg-gradient-to-r from-teal-900  to-teal-950 flex w-full h-20 items-center justify-between p-7">

            <div className="flex items-center">
                <CategButton classname="" />
            </div>

            <SearchBar />

            < PersonalButton />
        </section>
    );
}
