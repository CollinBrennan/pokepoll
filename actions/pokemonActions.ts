'use server'

import db from '@/db/drizzle'
import { pokemon, vote } from '@/db/schema'
import { PokemonData } from '@/utils/types'
import { and, count, eq } from 'drizzle-orm'

export async function fetchPokemonPair(): Promise<[PokemonData, PokemonData]> {
  let [id1, id2] = getIds()

  let pokemon1 = (await db.select().from(pokemon).where(eq(pokemon.id, id1)))[0]
  let pokemon2 = (await db.select().from(pokemon).where(eq(pokemon.id, id2)))[0]

  return [pokemon1, pokemon2]
}

export async function fetchVotePercent(
  pickedPokemonId: number,
  otherPokemonId: number
) {
  let votesVoted = (
    await db
      .select({ count: count() })
      .from(vote)
      .where(
        and(eq(vote.pick, pickedPokemonId), eq(vote.other, otherPokemonId))
      )
  )[0].count

  let votesOther = (
    await db
      .select({ count: count() })
      .from(vote)
      .where(
        and(eq(vote.pick, otherPokemonId), eq(vote.other, pickedPokemonId))
      )
  )[0].count

  if (!votesVoted && !votesOther) return 50

  let votePercent = Math.round((votesVoted / (votesVoted + votesOther)) * 100)

  return votePercent
}

export async function insertVote(
  pickedPokemonId: number,
  otherPokemonId: number
) {
  await db.insert(vote).values({
    pick: pickedPokemonId,
    other: otherPokemonId,
  })
}

function getIds(): [number, number] {
  let id1 = Math.floor(Math.random() * 151) + 1
  let id2 = Math.floor(Math.random() * 151) + 1
  while (id1 === id2) {
    id2 = Math.floor(Math.random() * 151) + 1
  }

  return [id1, id2]
}
