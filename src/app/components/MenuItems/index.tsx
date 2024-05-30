'use client'

import { AddItem } from "../AddItems";

export function MenuItems() {
    return (
        <section className="w-full flex flex-col items-center">
            <AddItem
                image="/instrumentos/violao/violaoPreto.jpg"
                title="Guitarra Stratocaster monosilabica suhsaihsu asidjfidfi aj iajdfi jasd "
                category="Guitarra"
                text="Esta guitarra Strato possui madeiras que trazem tratamento especial, detalhe que realça ainda mais o sustain e o timbre. Com corpo em Solidwood, braço em Hard Maple e escala em Blackwood, esta guitarra proporciona qualidade dos arranjos nos mais variados estilos."
                preco="2339,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/WwmAB8Wx6DY"
            />
            <AddItem
                image="/instrumentos/guitarra/GUIT-SQUIER-CV-60-ST-LRL-CAR_IMG2.webp"
                title="Guitarra"
                category="Guitarra"
                text="Esta guitarra Strato possui madeiras que trazem tratamento especial, detalhe que realça ainda mais o sustain e o timbre. Com corpo em Solidwood, braço em Hard Maple e escala em Blackwood, esta guitarra proporciona qualidade dos arranjos nos mais variados estilos."
                preco="2339,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/WwmAB8Wx6DY"
            />
            <AddItem
                image="/GUIT-SQUIER-CV-60-ST-LRL-CAR_IMG2.webp"
                title="Guitarra"
                category="Guitarra"
                text="Esta guitarra Strato possui madeiras que trazem tratamento especial, detalhe que realça ainda mais o sustain e o timbre. Com corpo em Solidwood, braço em Hard Maple e escala em Blackwood, esta guitarra proporciona qualidade dos arranjos nos mais variados estilos."
                preco="2339,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/WwmAB8Wx6DY"
            />
        </section>
    );
}
