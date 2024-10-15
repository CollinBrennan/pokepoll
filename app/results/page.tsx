import { fetchAllVotes } from '@/actions/pokemonActions'
import Chart from './chart'

export default async function ResultsPage() {
  const data = await fetchAllVotes()
  return (
    <div className="w-full flex justify-center">
      <div className="pt-8 px-4 w-full max-w-screen-lg">
        <Chart data={data} />
      </div>
    </div>
  )
}
