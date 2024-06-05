'use client'

import { AddItem } from "../AddItems";

export function MenuItems() {
    return (
        <section className="w-full flex flex-col items-center resize: both;">
            <AddItem
                image="/Michael.png"
                title="Michael - Antares VM19E"
                category="Violão"
                text="Modelo: Violão Adulto 
                - Tampo: Spruce 
                - Braço em Basswood, 
                - Escala e Cavalete em Dark Maple 
                - Filete ABS no corpo e na escala 
                - Marcadores de escala Dot na Lateral 
                - Tensor Dual Action 
                - Tarraxas: Cromadas c/ borboletas madrepérola 
                - Encordoamento: Nylon (tensão normal) 
                - Tamanho: 4/4(39”) / 99cm 
                - Acompanha Capa exclusiva Michael 
                - Cor: Satin"
                preco="1100,00"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/ei97qjKLP9o?si=zL0mpe0RcezfKvTp"
            />
            <AddItem
                image="/Telecaster2.png" 
                title="Telecaster - SX STL50+" 
                category="Guitarra" 
                text="Modelo: SX STL50+  
                - Série Vintage  
                - Cordas: Daddario USA 
                - Braço: Maple Canadense selecionado 
                - Tensor: 2 vias 
                - Escala: Maple 
                - Corpo: Basswood 
                - Trastes de níquel: 21 
                - Tarraxas: Estilo vintage niqueladas 
                - Ferragens: Cromadas 
                - Ponte: Ponte estilo vintage cromada 
                - Controles: 1 vol, 1 tone, chave 3 posições 
                - Escala: 648 mm (25.5 pol) 
                - Largura do nut: 42 mm (1.65 pol) 
                - Escudo: Branco de 1 camada 
                - Marcação: Dot (Bolinha) 
                - Captadores single coil 
                - Acessórios: Gig Bag de nylon EB400, Chave para regulagem do tensor/ponte"
                preco="2600,00"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/WwmAB8Wx6DY"
            />
            <AddItem
                image="/LesPaul.png"
                title="Les Paul - Zakk Wylde"
                category="Guitarra"
                text="MARCA: Epiphone 
                - MODELO: Les Paul Custom 
                - SÉRIE: Zakk Wylde Signature 
                - ANO: 2008 
                - COR: Bullseye 
                - CORPO: Mogno 
                - BRAÇO: Hard Maple 
                - ESCALA: Rosewood 
                - MARCAÇÃO: Block 
                - TRASTES: 22 Medio Jumbo 
                - TARRAXAS: Grover 
                - FERRAGEM: Dourada 
                - PONTE: Tune o Matic 
                - CAPTAÇÃO: EMG HZ PASSIVA 
                - CONTROLES: 2 Vol, 2 Tone 
                - CHAVE: 3 Posições"
                preco="8500,00"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/G3AsDzOYzRY?si=uiXAT9DeC1JcflFP"
            />
            <AddItem
                image="/BateriaTama.png"
                title="Tama - Starclassic Walnut Birch Surf Green"
                category="Bateria"
                text="Marca: Tama 
                - Cor: Walnut Birch Surf Green 
                - Toms: 8x6, 10x7 e 12x8 flutuantes 
                - Surdos: 14x12 e 16x14 de chão 
                - Bumbo: 22x16 
                - Caixa: 14x7' 
                - Hi Hat Zildjian: 14' 
                - Crash Zildjian: 18' 
                - Hi Hat Zildjian: 21'"
                preco="9850,00"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/FViqgvpCEVQ?si=zohgjh7UPbTtqwV2"
            />
        </section>
    );
}
