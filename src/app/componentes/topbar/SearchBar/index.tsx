'use client'

import { Search } from "lucide-react"
import { FaMicrophone } from "react-icons/fa6"

export const SearchBar = () => {
    return (
        <section className="flex justify-center h-11 mt-2">
            <div className="flex items-center border-y-4 border-gray-300 rounded-lg">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="px-1 md:px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-500 text-md"
                />
                <button className=" text-2xl text-black">
                    <FaMicrophone />
                </button>

            </div>
            <button className="hidden md:block md:px-4 md:py-2 text-white bg-blue-500 rounded-r-lg hover:bg-white hover:text-black focus:outline-none focus:bg-blue-600">
                <Search />
            </button>
        </section>
    )
}
