import { PokemonData } from '@/utils/types'

const borderColors: Record<string, string> = {
  normal: 'border-[#A8A77A]',
  fire: 'border-[#EE8130]',
  water: 'border-[#6390F0]',
  electric: 'border-[#F7D02C]',
  grass: 'border-[#7AC74C]',
  ice: 'border-[#96D9D6]',
  fighting: 'border-[#C22E28]',
  poison: 'border-[#A33EA1]',
  ground: 'border-[#E2BF65]',
  flying: 'border-[#A98FF3]',
  psychic: 'border-[#F95587]',
  bug: 'border-[#A6B91A]',
  rock: 'border-[#B6A136]',
  ghost: 'border-[#735797]',
  dragon: 'border-[#6F35FC]',
  dark: 'border-[#705746]',
  steel: 'border-[#B7B7CE]',
  fairy: 'border-[#D685AD]',
}

const backgroundColors: Record<string, string> = {
  normal: 'bg-[#A8A77A]',
  fire: 'bg-[#EE8130]',
  water: 'bg-[#6390F0]',
  electric: 'bg-[#F7D02C]',
  grass: 'bg-[#7AC74C]',
  ice: 'bg-[#96D9D6]',
  fighting: 'bg-[#C22E28]',
  poison: 'bg-[#A33EA1]',
  ground: 'bg-[#E2BF65]',
  flying: 'bg-[#A98FF3]',
  psychic: 'bg-[#F95587]',
  bug: 'bg-[#A6B91A]',
  rock: 'bg-[#B6A136]',
  ghost: 'bg-[#735797]',
  dragon: 'bg-[#6F35FC]',
  dark: 'bg-[#705746]',
  steel: 'bg-[#B7B7CE]',
  fairy: 'bg-[#D685AD]',
}

type Props = {
  pokemonData: PokemonData
  isSelected: boolean
}

export default function Pokemon({ pokemonData, isSelected }: Props) {
  return (
    <div className="group capitalize">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
        alt={pokemonData.name}
        className={`aspect-square w-full rounded-xl border-2 ${borderColors[pokemonData.type]} group-hover:${backgroundColors[pokemonData.type]} ${isSelected && backgroundColors[pokemonData.type]}`}
      />
      {pokemonData.name}
    </div>
  )
}
