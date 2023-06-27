import Image from "next/image";
import { NumerFormat } from "../components/NumerFormat";
import { MdCatchingPokemon } from "react-icons/md";

const url = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=133";

const fetchPokemon = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const promises = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    return data;
  });
  const results = Promise.all(promises);
  return results;
};

export default async function ListOfPokemon() {
  const pokemon = await fetchPokemon();
  return (
    <>
      
      {pokemon &&
        pokemon.map((poke, index) => (
          <div
            key={index}
            className="max-w-xl snap-center text-center h-72 justify-center grid gap-x-2 grid-cols-2 p-0 m-0 "
          >
            <div className="grid bg-white h-full border-x-2">
              <Image
                src={poke.sprites.front_default}
                alt={poke.name}
                width={350}
                height={350}
                className="self-center"
              />
            </div>
            <div className="flex text-black uppercase bg-yellow-400 h-full -z-50">
              <MdCatchingPokemon className="text-red-500 self-center text-3xl mx-1 z-50" />
              <p className="self-center text-3xl font-bold tracking-wider z-50">
                {NumerFormat(index + 1) + " " + poke.name}
              </p>
            </div>
          </div>
        ))}
        <div className="fixed justify-self-end border-4 border-white max-w-[280px] w-full py-6 rounded-lg">
      </div>
    </>
  );
}
