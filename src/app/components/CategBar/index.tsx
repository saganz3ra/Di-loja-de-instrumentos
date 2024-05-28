'use client';

import Link from 'next/link';
import { FaDrum, FaGuitar, FaKeyboard, FaMicrophone } from 'react-icons/fa6';
import { IoMusicalNote } from 'react-icons/io5';

// Import Swiper React components and styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

interface Category {
    name: string;
    icon: JSX.Element;
    href: string;
}

export function CategBar() {
    const categories: Category[] = [
        { name: 'Bateria', icon: <FaDrum />, href: '/categorias/bateria' },
        { name: 'Guitarra', icon: <FaGuitar />, href: '/categorias/guitarra' },
        { name: 'Violão', icon: <FaGuitar />, href: '/categorias/violao' },
        { name: 'Microfone', icon: <FaMicrophone />, href: '/categorias/microfone' },
        { name: 'Teclado', icon: <FaKeyboard />, href: '/categorias/teclado' },
        { name: 'Baixo', icon: <FaGuitar />, href: '/categorias/baixo' },
        { name: 'Saxofone', icon: <IoMusicalNote />, href: '/categorias/saxofone' },
        { name: 'Trompete', icon: <IoMusicalNote />, href: '/categorias/trompete' },
        { name: 'Violino', icon: <IoMusicalNote />, href: '/categorias/violino' },
    ];

    return (
        <section className=" bg-gradient-to-r from-red-500 to-red-800 w-full h-20  flex items-start justify-center">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={3}
                breakpoints={{
                    768: {
                        slidesPerView: 5
                    },

                    1024: {
                        slidesPerView: 7,
                    },
                }}
                navigation
                scrollbar={{ draggable: true, hide: true }}
                className="w-full md:w-11/12 "
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-between space-x-7 p-4 text-lg">
                            <Link href={category.href} legacyBehavior>
                                <a className="flex items-center text-xl text-black bg-red-200 bg-opacity-10 p-2 
                                hover:bg-red-500 hover:text-white rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <span className="m-2">{category.icon}</span>
                                    {category.name}
                                </a>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section >
    );
}
