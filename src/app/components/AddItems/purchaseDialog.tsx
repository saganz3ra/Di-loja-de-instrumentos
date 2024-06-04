import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { CircleX } from "lucide-react";

const PurchaseDialog = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="ml-7 text-lg py-2 px-3 border border-green-800 bg-green-500 bg-opacity-20 hover:bg-green-500 hover:text-white rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110">
                Comprar
            </AlertDialogTrigger>
            <div className="alertDialogOverlay">
                <AlertDialogContent className="alertDialogContent">
                    <AlertDialogCancel className="absolute top-2 right-2 rounded-full text-white">
                        <CircleX />
                    </AlertDialogCancel>
                    <AlertDialogTitle className="text-2xl text-white mb-4">Informações de Compra</AlertDialogTitle>
                    <AlertDialogDescription className="text-white">
                        <form className="flex flex-col space-y-3">
                            <label className="flex flex-col">
                                Nome no Cartão:
                                <input type="text" className="p-2 rounded-md border-2 border-black" />
                            </label>
                            <label className="flex flex-col">
                                Número do Cartão:
                                <input type="text" className="p-2 rounded-md border-2 border-black" />
                            </label>
                            <label className="flex flex-col">
                                Data de Validade:
                                <input type="text" className="p-2 rounded-md border-2 border-black" />
                            </label>
                            <label className="flex flex-col">
                                Código de Segurança (CVV):
                                <input type="text" className="p-2 rounded-md border-2 border-black" />
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
    );
};

export default PurchaseDialog;
