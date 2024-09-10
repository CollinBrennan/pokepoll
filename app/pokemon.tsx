import { PokemonData } from '@/utils/types'

const colors: Record<string, string> = {
  normal: 'border-[#A8A77A] group-hover:bg-[#A8A77A]',
  fire: 'border-[#EE8130] group-hover:bg-[#EE8130]',
  water: 'border-[#6390F0] group-hover:bg-[#6390F0]',
  electric: 'border-[#F7D02C] group-hover:bg-[#F7D02C]',
  grass: 'border-[#7AC74C] group-hover:bg-[#7AC74C]',
  ice: 'border-[#96D9D6] group-hover:bg-[#96D9D6]',
  fighting: 'border-[#C22E28] group-hover:bg-[#C22E28]',
  poison: 'border-[#A33EA1] group-hover:bg-[#A33EA1]',
  ground: 'border-[#E2BF65] group-hover:bg-[#E2BF65]',
  flying: 'border-[#A98FF3] group-hover:bg-[#A98FF3]',
  psychic: 'border-[#F95587] group-hover:bg-[#F95587]',
  bug: 'border-[#A6B91A] group-hover:bg-[#A6B91A]',
  rock: 'border-[#B6A136] group-hover:bg-[#B6A136]',
  ghost: 'border-[#735797] group-hover:bg-[#735797]',
  dragon: 'border-[#6F35FC] group-hover:bg-[#6F35FC]',
  dark: 'border-[#705746] group-hover:bg-[#705746]',
  steel: 'border-[#B7B7CE] group-hover:bg-[#B7B7CE]',
  fairy: 'border-[#D685AD] group-hover:bg-[#D685AD]',
}

export default function Pokemon({ name, imageURL, type }: PokemonData) {
  return (
    <div className="group capitalize">
      <img
        src={imageURL}
        alt={name}
        className={`aspect-square w-full rounded-xl border-2 ${colors[type]}`}
      />
      {name}
    </div>
  )
}
