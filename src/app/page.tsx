import { MenuItems } from "./componentes/MenuItems";
import { Footerson } from "./componentes/footer";
import { SlideProducts } from "./componentes/produtosSlide/slideProducts";
import { SideCateg } from "./componentes/sidebarleft";
import { Topbar } from "./componentes/topbar";


export default function Home() {
  return (
    <section className="border border-red-400 flex flex-col  items-center ">
      <Topbar />

      <SlideProducts />


      <main className="bg-orange-300 w-10/12 flex items-center justify-between">

        <SideCateg />


        <MenuItems />


      </main>


      <Footerson />
    </section>


  );
}
