'use client'

import { AddItem } from "../AddItems";

export function MenuItems() {
    return (
        <section className="w-full flex flex-col items-center">
            <AddItem
                image="/instrumentos/violao/violaoPreto.jpg"
                title="Violao"
                category="Guitarra"
                text="Violão Harmonics GC-C10BK Acústico Clássico Nylon, possui Braço em Nato, Escala e Tampo em Linden, Trastes de 52mm em Cobre e Acabamento em Verniz Brilhante. Um instrumento perfeito para músicos iniciantes e até mais experientes que não abrem mão do som tradicional de um violão de qualidade. Apresenta um acabamento sofisticado considerado acima da média se comparado a violões similares, sendo assim, uma ótima opção de custo-benefício. As escalas ergonomicamente dimensionadas, trastes polidos de baixa espessura e o encordoamento em nylon facilitando o posicionamento das notas, com maciez para os dedos e melhorando a tocabilidade do usuário. O corpo pintado de maneira artesanal apresenta um acabamento brilhante que além de aumentar a durabilidade do produto, realça e valoriza ainda mais a cor e estética do instrumento. Por serem violões com cordas de nylon que proporcionam um timbre aveludado, são indicados para MPB, samba e melodias mais suaves ou mesmo ritmos que necessitem de dedilhados. Garanta já o seu!"
                preco="5999,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/watch?v=IAEuKZ_mMCw"
            />
            <AddItem
                image="/GuitarraPreta.jpg"
                title="Guitarra com corpo em basswood"
                category="Guitarra"
                text="Guitarra com corpo em basswood, braço e escala em maple, ponte standard tremolo e captadores single-coil.
                O clássico som stratocaster agora ao seu alcance.
                A guitarra SX SST conta com 21 trastes, corpo em basswood, braço em maple, escala em maple, 3 singles, tremolo standard, 2 controles de tonalidade, 1 volume, chave de 5 posições, marcação dot, ferragens cromadas, acompanha Gig Bag de nylon e chave para regulagem do tensor/ponte."
                preco="1539,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/embed/WwmAB8Wx6DY"
            />
            <AddItem
                image="/saxofone.jpg"
                title="Saxofone ST 503"
                category="Saxofone"
                text="O ST 503 é um dos saxofones mais tradicionais da linha de metais da Eagle. Destaca-se pela qualidade de sua construção e pelos materiais que o compõem. As chaves ergonômicas, ajustadas manualmente, proporcionam maior conforto, respostas rápidas e afinação precisa. Este modelo apresenta um visual impressionante e uma sonoridade excepcional."
                preco="1339,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/watch?v=zSkbT20OHtA"
            />
            <AddItem
                image="/violacaipira.jpg"
                title="Violao Caipira Giannini Elétrica VS14"
                category="GuitVarra"
                text="Viola Caipira Giannini Elétrica VS14, ideal para quem está começando a aprender. Possui sonoridade boa com todos os requisitos iniciais da marca Giannini. Esse modelo conta com um afinador digital embutido e pré-amplificador de 3 bandas"
                preco="3339,99"
                sound="/instrumentos/guitarra/sound/riffguita1.mp3"
                videoDemo="https://www.youtube.com/watch?v=G3AsDzOYzRY"
            />
        </section>
    );
}
