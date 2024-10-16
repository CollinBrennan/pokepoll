import { fetchAllPokemon, fetchVotePercent } from '@/actions/pokemonActions'
import CompareContainer from './compare-container'

export default async function ComparePage({
  searchParams,
}: {
  searchParams?: { p1?: string; p2?: string; tag?: string }
}) {
  const options = await fetchAllPokemon()
  const votePercent = await fetchVotePercent(
    parseInt(searchParams?.p1 ?? '1'),
    parseInt(searchParams?.p2 ?? '1')
  )

  return (
    <div className="w-full flex flex-col items-center">
      <div className="pt-16 px-4 w-full max-w-screen-lg">
        <h1 className="text-xl font-bold">Compare</h1>
        <div>{votePercent}</div>

        <CompareContainer pokemonOptions={options} />
      </div>
    </div>
  )
}
