import { fetchPokemon } from '@/utils/actions'
import Form from './form'

export default async function Home() {
  return (
    <main>
      <h1 className="py-8 text-xl font-bold text-zinc-400">
        Which Pokémon do you like more?
      </h1>
      <Form initialPokemon={await fetchPokemon()} />
    </main>
  )
}
