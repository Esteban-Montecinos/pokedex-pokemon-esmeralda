import FixStartEnd from "./components/FixStartEnd";
import PokedexLabel from "./components/PokedexLabel";
import ListOfPokemon from "./services/ListOfPokemon";
import { MdCatchingPokemon } from "react-icons/md";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
export default function Home() {
  return (
    <main className="grid grid-cols-1 2xl:grid-cols-5 items-center content-center justify-items-center justify-center w-full my-20">
      <div>
      <MdCatchingPokemon className="text-[600px] justify-self-start -ml-60 animate-spin-slow text-slate-900 hidden 2xl:grid"/>
      </div>
      <PokedexLabel className="hidden 2xl:grid"/>
      <div className="grid grid-cols-1 col-span-2">
        <div className="grid grid-cols-2">
          <div></div>
          <BiSolidUpArrow className="animate-bounce-up  place-self-center text-red-500 text-5xl mb-2" />
        </div>
        <div className="snap-y snap-mandatory h-[70vh] max-h-screen overflow-y-auto max-w-xl items-center justify-items-center justify-center grid grid-cols-1 rounded">
          
          <FixStartEnd/>
          <ListOfPokemon />
          <FixStartEnd/>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <BiSolidDownArrow className="animate-bounce-down place-self-center text-red-500 text-5xl" />
        </div>
      </div>
    </main>
  );
}
