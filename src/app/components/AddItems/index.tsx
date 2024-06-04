import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { CircleX, Heart, MessageCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "./cartContext";

export interface IaddItem {
    image: string;
    title: string;
    text: string;
    category: string;
    sound: string;
    preco: string;
    videoDemo: string;
}

export const PurchaseDialog = () => {
    return (
        <section className="flex justify-start gap-2 w-full h-10">
            <AlertDialog>
                <AlertDialogTrigger className="ml-7 text-lg py-2 px-3 border text-white bg-red-800 hover:bg-red-600 flex rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110">
                    Comprar
                </AlertDialogTrigger>
                <div className="alertDialogOverlay">
                    <AlertDialogContent className="alertDialogContent">
                        <AlertDialogCancel className="absolute top-2 right-2 rounded-full">
                            <CircleX />
                        </AlertDialogCancel>
                        <AlertDialogTitle className="text-2xl mb-4">Informações de Compra</AlertDialogTitle>
                        <AlertDialogDescription>
                            <form className="flex flex-col space-y-3">
                                <label className="flex flex-col">
                                    Nome no Cartão:
                                    <input type="text" className="p-2 rounded-md border-2 border-black dark:border-white" />
                                </label>
                                <label className="flex flex-col">
                                    Número do Cartão:
                                    <input type="text" className="p-2 rounded-md border-2 border-black dark:border-white" />
                                </label>
                                <label className="flex flex-col">
                                    Data de Validade:
                                    <input type="text" className="p-2 rounded-md border-2 border-black dark:border-white" />
                                </label>
                                <label className="flex flex-col">
                                    Código de Segurança (CVV):
                                    <input type="text" className="p-2 rounded-md border-2 border-black dark:border-white" />
                                </label>
                            </form>
                        </AlertDialogDescription>
                        <AlertDialogFooter className="mt-4 flex justify-end">
                            <button className="text-lg py-2 px-3 border border-green-800 bg-green-500 bg-opacity-20 hover:bg-green-500 hover:text-white rounded-md">
                                Confirmar Compra
                            </button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </div>
            </AlertDialog>
        </section>
    );
};

const DemoAudioVideo = ({ sound, videoDemo }: { sound: string, videoDemo: string }) => {
    return (
        <div className="border-x border-none p-2 lg:flex flex-col justify-start items-start">
            <p className="mb-2 p-2 border-none rounded-md">
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
                <p className="hidden xl:flex p-2 border-none rounded-md">
                    Timbre
                </p>
                <audio controls className="mt-2 ml-2 transform transition-transform duration-300 ease-in-out text-white line-clamp-1 md:line-clamp-6 mb-3 w-120 h-11">
                    <source src={sound} type="audio/mpeg" />
                    Não está funcionando
                </audio>
            </div>
        </div>
    );
}

export const AddItem = ({ image, title, text, category, sound, preco, videoDemo }: IaddItem) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = { image, title, text, category, sound, preco, videoDemo };
        addToCart(item);
    };

    return (
        <section className="flex flex-col mb-1 mt-3">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 bg-gradient-to-r ">
                <div className="md:col-span-1 flex justify-center items-center border-x border-none">
                    <Image src={image} width={500} height={500} alt="" className="bg-contain rounded-md" />
                </div>
                <div className="text-black dark:text-white p-5 border-x border-emerald-800 dark:border-emerald-300">
                    <p className="font-bold text-3xl text-start mb-3 overflow-hidden text-ellipsis"
                        style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>{title}</p>
                    <p className="p-1 border-none rounded-sm overflow-hidden text-ellipsis mb-3"
                        style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                        {text}
                    </p>
                    <div className="flex justify-start">
                        <p className="text-3xl font-bold">R$ {preco}</p>
                        <PurchaseDialog />
                    </div>
                    <p className="text-sm mb-3 border-b border-teal-950 pb-1 dark:border-teal-300">Até 10x sem juros</p>
                    <div>
                        <div className="flex justify-start gap-2 w-full h-10">
                            <AlertDialog>
                                <AlertDialogTrigger className="w-full p-2 bg-gray-500 bg-opacity-30 hover:bg-gray-900 hover:text-white rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 border-y border-none">
                                    Mais Informações...
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-gray-300 dark:bg-gray-800 flex justify-center p-2">
                                    <AlertDialogCancel className="absolute right-1 top-0 rounded-full">
                                        <CircleX />
                                    </AlertDialogCancel>
                                    <div className="h-96 w-full overflow-y-scroll scrollbar">
                                        <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
                                            <AlertDialogDescription>
                                                <p className="font-bold text-2xl text-start mb-3">{title}</p>
                                                <p className="overflow-hidden text-ellipsis mb-3">{text}</p>
                                            </AlertDialogDescription>
                                            <div className="text-black dark:text-white text-2xl grid grid-cols-2 p-2">
                                                R$ {preco}
                                                <PurchaseDialog />
                                                <p className="text-sm">Até 10x sem juros</p>
                                            </div>
                                            <AlertDialogFooter className="mt-2 mb-2">
                                                <div className="flex w-full justify-between">
                                                    <div className="grid grid-cols-4 mt-4 md:mt-1 gap-2">
                                                        <button><Heart /></button>
                                                        <button onClick={handleAddToCart}><ShoppingCart /></button>
                                                        <button><MessageCircle /></button>
                                                    </div>
                                                </div>
                                            </AlertDialogFooter>
                                        </div>
                                        <div className="bg-gray-300 dark:bg-gray-800">
                                            <DemoAudioVideo sound={sound} videoDemo={videoDemo} />
                                        </div>
                                        <div className="text-black dark:text-white text-2xl">
                                            R$ {preco}
                                            <PurchaseDialog />
                                            <p className="text-sm">Até 10x sem juros</p>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <div className="grid grid-cols-4 mt-4 md:mt-1 gap-2">
                                                <button><Heart /></button>
                                                <button onClick={handleAddToCart}><ShoppingCart /></button>
                                                <button><MessageCircle /></button>
                                            </div>
                                        </div>
                                    </div>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                    <div className="bg-gray-500 bg-opacity-10 mt-5 rounded-sm p-1 mb-3 w-24 flex justify-center">
                        <ul>
                            <li><a href="#">{category}</a></li>
                        </ul>
                    </div>
                    <div className="bg-opacity-3 opacity-70 hover:opacity-100 bg-teal-950 dark:bg-teal-700 rounded-sm p-1 mb-3 w-70 flex justify-center gap-7 text-white text-sm">
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <Heart />
                        </button>
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={handleAddToCart}>
                            <ShoppingCart />
                        </button>
                        <button className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <MessageCircle />
                        </button>
                    </div>
                </div>
                <DemoAudioVideo sound={sound} videoDemo={videoDemo} />
            </div>
        </section>
    );
};