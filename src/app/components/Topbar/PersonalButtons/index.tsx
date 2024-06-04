'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { PurchaseDialog } from "../../AddItems";
import { useCart } from "../../AddItems/cartContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "../../DropdownMenu";

export function PersonalButton() {
    const { cartItems } = useCart();
    const menuItems = cartItems.map((item) => `${item.title} - R$ ${item.preco}`);

    return (
        <section className="flex space-x-3">
            <Sheet>
                <SheetTrigger className="mt-2 text-white rounded-sm h-12 justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <CircleUserRound />
                </SheetTrigger>
                <SheetContent className="bg-black">
                    <SheetHeader>
                        <SheetTitle className="text-5xl text-white mb-2">Login</SheetTitle>
                    </SheetHeader>
                    <section className="min-h-md flex flex-col justify-center bg-white bg-opacity-85 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                <form className="space-y-6" action="#" method="POST">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Endereço de e-mail</label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" autoComplete="email" required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                                        <div className="mt-1">
                                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox"
                                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Lembre de mim </label>
                                        </div>
                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-red-600 hover:text-red-500">Esqueceu sua senha?</a>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-950 bg-opacity-80 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                            Entrar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </SheetContent>
            </Sheet>
            <DropdownMenu>
                <DropdownMenuTrigger className="mt-2 text-white rounded-sm h-12 justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <ShoppingCart />
                    <span>{cartItems.length}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent isOpen={true}>
                    <DropdownMenuLabel>Meu Carrinho</DropdownMenuLabel>
                    {cartItems.map((item, index) => (
                        <DropdownMenuItem key={index}>
                            {item.title} - R$ {item.preco}
                        </DropdownMenuItem>
                    ))}
                    <PurchaseDialog />
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
}
