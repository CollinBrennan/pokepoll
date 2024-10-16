'use client'

import { PokemonData } from '@/utils/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  pokemonOptions: PokemonData[]
}

export default function CompareContainer({ pokemonOptions }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [pokemon1, setPokemon1] = useState(searchParams.get('p1'))
  const [pokemon2, setPokemon2] = useState(searchParams.get('p2'))

  function handleSearch() {
    const params = new URLSearchParams(searchParams)

    if (pokemon1) params.set('p1', pokemon1)
    else params.delete('p1')

    if (pokemon2) params.set('p2', pokemon2)
    else params.delete('p2')

    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(handleSearch, [pokemon1, pokemon2])

  return (
    <div>
      <select
        onChange={(e) => setPokemon1(e.target.value)}
        className="text-black"
        value={pokemon1 ?? 1}
      >
        {pokemonOptions.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
      <select
        onChange={(e) => setPokemon2(e.target.value)}
        className="text-black"
        value={pokemon2 ?? 1}
      >
        {pokemonOptions.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}
