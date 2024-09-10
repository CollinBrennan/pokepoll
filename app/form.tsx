'use client'

import { fetchPokemon, fetchVotePercent, upsertVote } from '@/utils/actions'
import { PokemonData } from '@/utils/types'
import Link from 'next/link'
import { useState } from 'react'
import Pokemon from './pokemon'

type Props = {
  initialPokemon: [first: PokemonData, second: PokemonData]
}

export default function Form({ initialPokemon }: Props) {
  const [pokemon, setPokemon] = useState(initialPokemon)
  const [hasVoted, setHasVoted] = useState(false)
  const [votePercent, setVotePercent] = useState(0)
  const [selected, setSelected] = useState<PokemonData>()

  async function handleClick(selectedPokemon: PokemonData) {
    setSelected(selectedPokemon)
    setVotePercent(
      pokemon[0].id === selectedPokemon.id
        ? await fetchVotePercent(pokemon[0].id, pokemon[1].id)
        : await fetchVotePercent(pokemon[1].id, pokemon[0].id),
    )
    await upsertVote(
      selectedPokemon.id,
      selectedPokemon.name,
      selectedPokemon.type,
    )
    setHasVoted(true)
    setPokemon(await fetchPokemon())
  }

  return (
    <>
      {hasVoted && (
        <div>
          <div>
            {votePercent}% of people prefer{' '}
            <span className="capitalize">{selected!.name}</span>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setHasVoted(false)}
              className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black"
            >
              Vote again
            </button>
            <Link
              href="/results"
              className="mt-4 rounded bg-pink-500 px-4 py-2 font-semibold"
            >
              View results
            </Link>
          </div>
        </div>
      )}
      <div
        className={`flex items-center gap-4 pt-4 ${hasVoted ? 'hidden' : ''}`}
      >
        <button onClick={() => handleClick(pokemon[0])} className="w-full">
          <Pokemon {...pokemon[0]} />
        </button>

        <p className="font-bold">OR</p>

        <button onClick={() => handleClick(pokemon[1])} className="w-full">
          <Pokemon {...pokemon[1]} />
        </button>
      </div>
    </>
  )
}
