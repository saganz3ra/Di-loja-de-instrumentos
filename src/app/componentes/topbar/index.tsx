'use client'

export function Topbar() {
    return (
        <section className="bg-red-300 border border-blue-400 flex w-full h-20 items-center justify-between p-7 ">
            <ul className="flex  items-center justify-between ">
                {/* acessibilidade vai ser um botao que emglobará os outros */}
                <li className="p-7"> <a href="">Home</a></li>
                <li className="p-7"> <a href="">Acessibilidade</a></li>{/*on click  */}

                <li className="p-7"> <a href="">Fale Conosco</a></li>

                <li className="p-7"> <a href="">Menu principal</a></li>

            </ul>
        </section>

    );
}