import { formattedPokemonName } from '@/utils/pokemon'
import { PokemonData } from '@/utils/types'

const colors: Record<string, string> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
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
        style={{ '--color': colors[pokemonData.type] } as React.CSSProperties}
        className={`aspect-square w-full rounded-xl border-2 border-[var(--color)] ${isSelected ? 'bg-[var(--color)]' : 'hover:bg-[var(--color)]'}`}
      />
      {formattedPokemonName(pokemonData.name)}
    </div>
  )
}
