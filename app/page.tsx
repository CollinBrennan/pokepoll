import { fetchPokemonPair } from '@/actions/pokemonActions'
import VoteContainer from './vote-container'

export default async function Home() {
  const initialPokemon = await fetchPokemonPair()

  return (
    <div>
      <VoteContainer initialPokemon={initialPokemon} />
    </div>
  )
}
