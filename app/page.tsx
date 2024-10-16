import { fetchPokemonPair } from '@/actions/pokemonActions'
import VoteContainer from './vote-container'

export default async function Home() {
  const initialPokemon = await fetchPokemonPair()

  return (
    <div>
      <VoteContainer initialPokemon={initialPokemon} />
      <div className="absolute left-4 bottom-4">
        Made by{' '}
        <a
          href="https://github.com/CollinBrennan/pokepoll"
          target="_blank"
          className="underline"
        >
          Collin Brennan
        </a>
      </div>
    </div>
  )
}
