'use client'

import { fetchPokemonPair, fetchVotePercent, insertVote } from '@/utils/actions'
import { PokemonData } from '@/utils/types'
import { useState } from 'react'
import Pokemon from './pokemon'

type Props = {
  initialPokemon: [first: PokemonData, second: PokemonData]
}

type Choice = {
  picked: PokemonData
  other: PokemonData
}

export default function Form({ initialPokemon }: Props) {
  const [pokemon, setPokemon] = useState(initialPokemon)
  const [hasVoted, setHasVoted] = useState(false)
  const [choice, setChoice] = useState<Choice>()
  const [votePercent, setVotePercent] = useState(0)

  const isFirstSelected = hasVoted && choice?.picked.id === pokemon[0].id
  const isSecondSelected = hasVoted && choice?.picked.id === pokemon[1].id

  async function handleClick(picked: PokemonData, other: PokemonData) {
    setVotePercent(await fetchVotePercent(picked.id, other.id))
    setChoice({ picked, other })
    await insertVote(picked.id, other.id)
    setHasVoted(true)
  }

  async function handleVoteAgain() {
    setPokemon(await fetchPokemonPair())
    setHasVoted(false)
  }

  return (
    <div>
      <h1 className="pt-8">
        {hasVoted
          ? `${votePercent}% pick ${choice?.picked.name} over ${choice?.other.name}`
          : 'Which pokemon do you like more?'}
      </h1>
      <div className={`flex items-center gap-4 pt-4`}>
        <div className="relative">
          <button
            disabled={hasVoted}
            onClick={() => handleClick(pokemon[0], pokemon[1])}
            className="w-full disabled:pointer-events-none disabled:opacity-25"
          >
            <Pokemon pokemonData={pokemon[0]} isSelected={isFirstSelected} />
          </button>
          {isFirstSelected && (
            <div className="scale-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
              {votePercent}%
            </div>
          )}
        </div>

        <div className="relative">
          <button
            disabled={hasVoted}
            onClick={() => handleClick(pokemon[1], pokemon[0])}
            className="w-full disabled:pointer-events-none disabled:opacity-25"
          >
            <Pokemon pokemonData={pokemon[1]} isSelected={isSecondSelected} />
          </button>
          {isSecondSelected && (
            <div className="scale-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
              {votePercent}%
            </div>
          )}
        </div>
      </div>
      <button
        disabled={!hasVoted}
        onClick={handleVoteAgain}
        className="mt-8 rounded bg-white px-4 py-2 font-bold text-black disabled:opacity-50"
      >
        Vote again
      </button>
    </div>
  )
}
