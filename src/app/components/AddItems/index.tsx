'use client'

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { CircleX, Heart, MessageCircle, ShoppingCart } from "lucide-react";
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

const DemoAudioVideo = ({ sound, videoDemo }: { sound: string, videoDemo: string }) => {
    return (
        <div className="border-x border-red-950 p-2 lg:flex flex-col justify-start items-start">
            <p className="mb-2 p-2 text-white bg-red-500 bg-opacity-30 hover:bg-red-500 hover:text-white rounded-md border-y border-red-900">
                Video de demonstração do instrumento
            </p>
            <iframe
                className="w-full h-64"
                src={videoDemo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <div className="flex justify-center items-center mt-2 text-md">
                <p className="hidden xl:flex p-2 text-white w-32 bg-red-500 bg-opacity-30 hover:bg-red-500 hover:text-white rounded-md border-y border-red-900">
                    Timbre
                </p>
                <audio controls className="mt-2 ml-2 transform transition-transform duration-300 ease-in-out hover:scale-110 text-white line-clamp-1 md:line-clamp-6 mb-3 w-48 h-11">
                    <source src={sound} type="audio/mpeg" />
                    Não está funcionando
                </audio>
            </div>
        </div>
    )
}

export const AddItem = ({ image, title, text, category, sound, preco, videoDemo }: IaddItem) => {
    return (
        <section className="flex flex-col mb-1 mt-3">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 bg-gradient-to-r from-red-500 to-red-800">
                <div className="md:col-span-1 flex justify-center items-center border-x border-red-950">
                    <Image src={image} width={500} height={500} alt="" className="bg-contain md:w-full md:h-96 rounded-md" />
                </div>
                <div className="text-black p-5 bg-gradient-to-b from-red-200 to-red-400 border-x border-red-950">
                    <p className="font-bold text-3xl text-start mb-3 overflow-hidden text-ellipsis"
                        style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>{title}</p>
                    <p className="p-1 bg-red-500 bg-opacity-20 border-x border-red-500 rounded-sm overflow-hidden text-ellipsis mb-3" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                        {text}
                    </p>
                    <div className="flex justify-start">
                        <p className="text-3xl font-bold">R$ {preco}</p>
                        <button className="ml-7 text-lg py-2 px-3 border border-green-800 bg-green-500 bg-opacity-20 hover:bg-green-500 hover:text-white rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110">Comprar</button>
                    </div>
                    <p className="text-sm mb-3 border-b border-red-500 pb-1">Até 10x sem juros</p>
                    <div>
                        <div className="flex justify-start gap-2 w-full h-10">
                            <AlertDialog>
                                <AlertDialogTrigger className="w-full p-2 bg-red-500 bg-opacity-30 hover:bg-red-500 hover:text-white rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 border-y border-red-900">
                                    Mais Informações...
                                </AlertDialogTrigger>


                                <AlertDialogContent className=" bg-red-500 flex justify-center p-2">
                                    <AlertDialogCancel className="absolute right-1 top-0 rounded-full "><CircleX></CircleX></AlertDialogCancel>

                                    <div className=" h-96 w-full overflow-y-scroll scrollbar ">
                                        <div className="p-3 rounded-md bg-red-950 text-white">
                                            <AlertDialogDescription>
                                                <p className=" font-bold text-2xl text-start mb-3">{title}</p>
                                                <p className=" overflow-hidden text-ellipsis mb-3">{text}</p>

                                            </AlertDialogDescription>
                                            <div className="text-white text-2xl">
                                                R$ {preco}
                                                <button className="ml-7 text-lg p-3 bg-black text-white">Comprar</button>
                                                <p className="text-sm">Até 10x sem juros</p>
                                            </div>
                                            <AlertDialogFooter className="mt-2 mb-2">
                                                <div className="flex w-full justify-between">
                                                    <div className="grid grid-cols-4 mt-4 md:mt-1 gap-2 ">
                                                        <button><Heart /></button>
                                                        <button><ShoppingCart /></button>
                                                        <button><MessageCircle /></button>
                                                    </div>
                                                </div>
                                            </AlertDialogFooter></div>
                                        <div className="bg-red-700">
                                            <DemoAudioVideo sound={sound} videoDemo={videoDemo} /></div>
                                        <div className="text-white text-2xl">
                                            R$ {preco}
                                            <button className="ml-7 text-lg p-3 bg-black text-white">Comprar</button>
                                            <p className="text-sm">Até 10x sem juros</p>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <div className="grid grid-cols-4 mt-4 md:mt-1 gap-2">
                                                <button><Heart /></button>
                                                <button><ShoppingCart /></button>
                                                <button><MessageCircle /></button>
                                            </div>
                                        </div>
                                    </div>
                                </AlertDialogContent>
                            </AlertDialog>

                        </div>
                    </div>

                    <div className="opacity-70 hover:opacity-100 text-white mt-5 bg-red-950 rounded-sm p-1 mb-3 w-32 flex justify-center">
                        <ul>
                            <li><a href="">{category}</a></li>
                        </ul>
                    </div>
                    <div className="bg-red-500 bg-opacity-3 hover:bg-red-500 hover:text-white rounded-md border-y border-red-900 flex justify-center gap-7 text-white text-sm">
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-110"><Heart /></button>
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-110"><ShoppingCart /></button>
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-110"><MessageCircle /></button>
                    </div>
                </div>

                <DemoAudioVideo sound={sound} videoDemo={videoDemo} />
            </div>
        </section>
    );
}
