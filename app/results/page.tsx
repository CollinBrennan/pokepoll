import { fetchAllVotes } from '@/actions/pokemonActions'
import Chart from './chart'

export default async function ResultsPage() {
  const data = await fetchAllVotes()
  return (
    <div className="w-full flex flex-col items-center">
      <div className="pt-16 px-4 w-full max-w-screen-lg">
        <h1 className="text-xl font-bold">Results</h1>
        <div className="pt-4">
          <Chart data={data} />
        </div>
      </div>
    </div>
  )
}
