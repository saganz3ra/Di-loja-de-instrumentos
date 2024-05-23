import { MenuItems } from "./components/MenuItems";
import { CategBar } from "./components/CategBar";
import { Footerson } from "./components/Footer";
import { Topbar } from "./components/Topbar";


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
