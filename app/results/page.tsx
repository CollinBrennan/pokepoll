import { fetchAllVotes } from '@/utils/actions'
import Chart from './chart'

export default async function ResultsPage() {
  const pokemon = await fetchAllVotes()
  return (
    <div className="pt-8">
      <Chart data={pokemon} />
    </div>
  )
}
