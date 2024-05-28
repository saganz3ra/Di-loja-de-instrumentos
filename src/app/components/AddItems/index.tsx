'use client'

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { Heart, MessageCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";

export interface IaddItem {
    image: string;
    title: string;
    text: string;
    category: string;
    sound: string;
    preco: string;
    videoDemo: string;
}

export const AddItem = ({ image, title, text, category, sound, preco, videoDemo }: IaddItem) => {
    return (
        <section className="flex flex-col mb-4">
            <div className="border-orange-400  border grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
                <div className="md:col-span-1 flex justify-center items-center">
                    <Image src={image} width={500} height={500} alt="" className="bg-contain md:w-full md:h-96 rounded-md" />
                </div>
                <div className="border border-red-400 text-black bg-red-200 p-5">
                    <p className=" font-bold text-2xl text-start mb-3">{title}</p>
                    <p className=" overflow-hidden text-ellipsis mb-3" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                        {text}
                    </p>
                    <div className=" text-2xl mb-3">R$ {preco}
                        <button className="ml-7 text-lg p-3 bg-black">Comprar</button>
                        <p className="text-sm">Até 10x sem juros</p>
                    </div>
                    <div>
                        <div className="flex justify-start gap-2 w-full h-10">
                            <AlertDialog>
                                <AlertDialogTrigger className=" w-full text-white text-sm font-bold bg-black hover:bg-white hover:text-black p-2">Mais Informações...</AlertDialogTrigger>
                                <AlertDialogContent className="border-yellow-400 border grid gap-2 grid-cols-1 md:grid-cols-3 p-2">
                                    <AlertDialogDescription>
                                        <p className="text-black font-bold text-2xl text-start mb-3">{title}</p>
                                        <p className="text-black overflow-hidden text-ellipsis mb-3">
                                            {text}
                                        </p>
                                        <div className="text-white text-2xl mb-3">R$ {preco}
                                            <button className="ml-7 text-lg p-3 bg-black">Comprar</button>
                                            <p className="text-sm">Até 10x sem juros</p>
                                        </div>
                                        <div>
                                            <audio controls className="text-white line-clamp-1 md:line-clamp-6 mb-3">
                                                <source src={sound} type="audio/mpeg" />
                                                Não está funcionando
                                            </audio>
                                        </div>
                                    </AlertDialogDescription>
                                    <AlertDialogFooter>
                                        <div className="flex w-full justify-between">
                                            <div className="grid grid-cols-4 mt-4 md:mt-1 gap-2 text-black">
                                                <button><Heart /></button>
                                                <button><ShoppingCart /></button>
                                                <button><MessageCircle /></button>
                                            </div>
                                            <AlertDialogCancel>Sair</AlertDialogCancel>
                                        </div>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>

                    <div className="text-white mt-5 bg-black rounded-sm p-1 mb-3">
                        <ul>
                            <li><a href="">{category}</a></li>
                        </ul>
                    </div>
                    <div className="border border-yellow-500  flex justify-center gap-7  text-white text-sm bg-black ">
                        <button><Heart /></button>
                        <button><ShoppingCart /></button>
                        <button><MessageCircle /></button>
                    </div>
                </div>


                <div className="border border-green-500 p-2 hidden lg:flex flex-col justify-start items-center">
                    <p className="mb-4 text-white bg-black">Video de demonstração do instrumento</p>
                    <iframe
                        className="w-full h-64"
                        src={videoDemo}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <p className="mt-4 text-white bg-black">Timbre do Instrumento</p>
                    <audio controls className="text-white line-clamp-1 md:line-clamp-6 mb-3 h-9">
                        <source src={sound} type="audio/mpeg" />
                        Não está funcionando
                    </audio>
                </div>

            </div>
        </section>
    );
}
