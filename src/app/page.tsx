import { MenuItems } from "./componentes/MenuItems";
import { CategBar } from "./componentes/categBar";
import { Footerson } from "./componentes/footer";
import { Topbar } from "./componentes/topbar";


export default function Home() {
  return (
    <section className="border border-red-400 flex flex-col  items-center ">
      <Topbar />


      <CategBar />

      <main className="bg-orange-300 w-10/12 flex items-center">




        <MenuItems />


      </main>


      <Footerson />
    </section>


  );
}
