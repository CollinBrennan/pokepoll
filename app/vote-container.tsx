import { fetchPokemonPair } from '@/actions/pokemonActions'
import { formattedPokemonName, pokemonColors } from '@/utils/pokemonUtils'

export default async function VoteContainer() {
  const [pokemon1, pokemon2] = await fetchPokemonPair()

  return (
    <div className="relative flex flex-aspect w-screen h-screen">
      <div
        style={
          {
            backgroundColor: pokemonColors[pokemon1.type],
          } as React.CSSProperties
        }
        className="relative h-full w-1/2 size-aspect"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon1.id}.png`}
          className="size-full object-scale-down drop-shadow-xl"
          alt={pokemon1.name}
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-16 text-xl bg-zinc-900 font-bold px-8 py-2 rounded-full">
          {formattedPokemonName(pokemon1.name)}
        </div>
      </div>

      <div
        style={
          {
            backgroundColor: pokemonColors[pokemon2.type],
          } as React.CSSProperties
        }
        className="relative h-full w-1/2 size-aspect"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon2.id}.png`}
          className="size-full object-scale-down drop-shadow-xl"
          alt={pokemon2.name}
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-16 text-xl bg-zinc-900 font-bold px-8 py-2 rounded-full">
          {formattedPokemonName(pokemon2.name)}
        </div>
      </div>

      <div className="flex text-xl font-bold justify-center items-center aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white size-16 text-black">
        OR
      </div>
    </div>
  )
}
