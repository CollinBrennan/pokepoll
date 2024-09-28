import { fetchAllPokemon, fetchVotePercent } from '@/utils/actions'
import CompareStats from './compare-stats'

export default async function ComparePage({
  searchParams,
}: {
  searchParams?: { p1?: string; p2?: string; tag?: string }
}) {
  const options = await fetchAllPokemon()
  const votePercent = await fetchVotePercent(
    parseInt(searchParams?.p1 ?? '1'),
    parseInt(searchParams?.p2 ?? '1'),
  )

  return (
    <div>
      <h1>Compare</h1>
      <div>{votePercent}</div>

      <CompareStats pokemonOptions={options} />
    </div>
  )
}
