import { CategBar } from "./components/CategBar";
import { Footerson } from "./components/Footer";
import { MenuItems } from "./components/MenuItems";
import { Topbar } from "./components/Topbar";


export default function Home() {
  return (
    <section className="border border-none flex flex-col  items-center ">
      <Topbar />


      <CategBar />

      <main className=" w-10/12 flex items-center">
        <MenuItems />


      </main>


      <Footerson />
    </section>


  );
}
