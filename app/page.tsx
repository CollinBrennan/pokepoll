import { fetchPokemonPair } from '@/utils/actions'
import Form from './form'

export default async function Home() {
  return (
    <main>
      <Form initialPokemon={await fetchPokemonPair()} />
    </main>
  )
}
