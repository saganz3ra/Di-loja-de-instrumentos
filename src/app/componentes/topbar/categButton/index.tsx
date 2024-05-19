'use client'

import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ITopBar {
    classname: string;
}

export const CategButton = ({ classname }: ITopBar) => {
    const [burguercateg, setBurguercateg] = useState(false);
    const [categButton, setCategButton] = useState(false);
    return (
        <section className="h-20 flex items-center w-full justify-between p-2">
            <div className="max-w-7xl m-auto flex justify-between w-full">

                {/*burguer button*/}
                <button className={`md:hidden ${burguercateg && ""}`}
                    onClick={() => setBurguercateg(!burguercateg)}>
                    <AlignJustify color="#ffffff" />
                </button>
                <div className={cn(`${burguercateg ? "block" : "hidden"} rounded-md absolute top-12`, classname)}>
                    <ul className=" p-4 gap-8 text-xm text-white lg:text-base ">
                        <li className="">
                            <Link href={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link href={""}>Acessórios</Link>
                        </li>
                        <li className={cn("", classname)}>
                            <button className={`flex ${categButton && ""}`}
                                onClick={() => setCategButton(!categButton)} >
                                Tema

                            </button>
                        </li>
                    </ul>
                    {/* clique tema */}
                    <div className={`${categButton ? "block" : "hidden"} bg-zinc-200 absolute top-25 grid grid-cols-1`}>
                        <ul className="p-4 gap-8 text-xm text-black lg:text-base ">


                        </ul>
                    </div>
                </div>
            </div>


        </section>
    );





}