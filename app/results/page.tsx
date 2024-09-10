import { fetchAllPokemon } from '@/utils/actions'
import Chart from './chart'

export default async function ResultsPage() {
  const pokemon = await fetchAllPokemon()
  return (
    <div>
      <h1 className="py-8 text-xl font-bold text-zinc-400">Results</h1>
      <Chart data={pokemon} />
    </div>
  )
}
