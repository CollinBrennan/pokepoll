'use server'

import { db } from '@/db/db'
import { pokemon, vote } from '@/db/schema'
import { count, desc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { colorFromType } from './colorFromType'
import { PokemonData } from './types'

export async function fetchPokemonPair(): Promise<[PokemonData, PokemonData]> {
  let [id1, id2] = getIds()

  let pokemon1 = (await db.select().from(pokemon).where(eq(pokemon.id, id1)))[0]
  let pokemon2 = (await db.select().from(pokemon).where(eq(pokemon.id, id2)))[0]

  revalidatePath('/')

  return [pokemon1, pokemon2]
}

export async function fetchAllVotes() {
  const data = await db
    .select({
      name: pokemon.name,
      type: pokemon.type,
      votes: count(vote),
    })
    .from(vote)
    .leftJoin(pokemon, eq(pokemon.id, vote.vote))
    .groupBy(vote.vote)
    .orderBy(desc(count(vote)))
  return data.map((entry) => ({
    name: entry.name!,
    fill: colorFromType(entry.type!),
    votes: entry.votes,
  }))
}

export async function insertVote(pokemonVoted: number, pokemonOther: number) {
  await db.insert(vote).values({
    vote: pokemonVoted,
    other: pokemonOther,
  })
}

export async function fetchVotePercent(id1: number, id2: number) {
  return 1
}

function getIds(): [number, number] {
  let id1 = Math.floor(Math.random() * 151) + 1
  let id2 = Math.floor(Math.random() * 151) + 1
  while (id1 === id2) {
    id2 = Math.floor(Math.random() * 151) + 1
  }

  return [id1, id2]
}
