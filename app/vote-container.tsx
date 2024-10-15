'use client'

import {
  fetchPokemonPair,
  fetchVotePercent,
  insertVote,
} from '@/actions/pokemonActions'
import { formattedPokemonName, pokemonColors } from '@/utils/pokemonUtils'
import { PokemonData } from '@/utils/types'
import { useState, useTransition } from 'react'

type Props = {
  initialPokemon: [PokemonData, PokemonData]
}

type PokemonChoice = {
  pick: PokemonData
  other: PokemonData
}

export default function VoteContainer({ initialPokemon }: Props) {
  const [isPending, startTransition] = useTransition()
  const [[pokemon1, pokemon2], setPokemon] = useState(initialPokemon)
  const [hasVoted, setHasVoted] = useState(false)
  const [choice, setChoice] = useState<PokemonChoice>({
    pick: pokemon1,
    other: pokemon2,
  })
  const [votePercent, setVotePercent] = useState(0)
  const name1 = formattedPokemonName(pokemon1.name)
  const name2 = formattedPokemonName(pokemon2.name)

  function handleVoteAgain() {
    startTransition(async () => setPokemon(await fetchPokemonPair()))
    setHasVoted(false)
  }

  function handleVote(choice: PokemonChoice) {
    setChoice(choice)
    startTransition(async () => {
      setVotePercent(await fetchVotePercent(choice.pick.id, choice.other.id))
      await insertVote(choice.pick.id, choice.other.id)
    })
    setHasVoted(true)
  }

  return (
    <div className="relative flex flex-aspect w-screen h-screen">
      <button
        onClick={() => handleVote({ pick: pokemon1, other: pokemon2 })}
        disabled={hasVoted || isPending}
        style={
          {
            backgroundColor: pokemonColors[pokemon1.type],
          } as React.CSSProperties
        }
        className="group relative h-full w-1/2 size-aspect overflow-hidden"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon1.id}.png`}
          className={`size-full object-scale-down drop-shadow-xl brightness-90 transition-all ${
            !hasVoted && 'group-hover:scale-110 group-hover:brightness-100'
          }`}
          alt={pokemon1.name}
        />
      </button>

      <button
        onClick={() => handleVote({ pick: pokemon2, other: pokemon1 })}
        disabled={hasVoted || isPending}
        style={
          {
            backgroundColor: pokemonColors[pokemon2.type],
          } as React.CSSProperties
        }
        className="group relative h-full w-1/2 size-aspect overflow-hidden"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon2.id}.png`}
          className={`size-full object-scale-down drop-shadow-xl brightness-90 transition-all ${
            !hasVoted && 'group-hover:scale-110 group-hover:brightness-100'
          }`}
          alt={pokemon2.name}
        />
      </button>

      <div className="flex flex-col w-72 rounded-xl bg-zinc-900 p-8 font-bold justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {hasVoted ? (
          <div className="flex flex-col">
            <div className="text-center">
              {votePercent}% choose {formattedPokemonName(choice.pick.name)}{' '}
              over {formattedPokemonName(choice.other.name)}
            </div>
            <button
              onClick={handleVoteAgain}
              className="bg-white mt-4 text-black px-4 py-2 rounded-xl disabled:brightness-50"
              disabled={isPending}
            >
              Vote again
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-xl">
              {name1}
              <br />
              or
              <br />
              {name2}
            </div>
            <div className="pt-4">Select the Pokémon you like more</div>
          </div>
        )}
      </div>
    </div>
  )
}
