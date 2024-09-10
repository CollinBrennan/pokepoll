'use server'

import { db } from '@/db/db'
import { pokemon } from '@/db/schema'
import { desc, eq, sql } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { colorFromType } from './colorFromType'
import { PokemonData } from './types'

export async function fetchPokemon(): Promise<[PokemonData, PokemonData]> {
  let [id1, id2] = getIds()

  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
  let data = await res.json()
  let pokemon1 = {
    id: id1,
    name: data.name,
    imageURL: data.sprites.other['official-artwork'].front_default,
    type: data.types[0].type.name,
  }

  res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
  data = await res.json()
  let pokemon2 = {
    id: id2,
    name: data.name,
    imageURL: data.sprites.other['official-artwork'].front_default,
    type: data.types[0].type.name,
  }

  revalidatePath('/')

  return [pokemon1, pokemon2]
}

export async function upsertVote(id: number, name: string, type: string) {
  await db
    .insert(pokemon)
    .values({ id, name, type, votes: 1 })
    .onConflictDoUpdate({
      target: pokemon.id,
      set: { votes: sql`${pokemon.votes} + 1` },
    })
}

export async function fetchVotePercent(id1: number, id2: number) {
  let votes1 = (await db.select().from(pokemon).where(eq(pokemon.id, id1)))[0]
  let votes2 = (await db.select().from(pokemon).where(eq(pokemon.id, id2)))[0]

  if (!votes1 && !votes2) return 50
  if (!votes1) return 0
  if (!votes2) return 100

  return Math.round((votes1.votes / (votes1.votes + votes2.votes)) * 100)
}

export async function fetchAllPokemon() {
  let data = await db.select().from(pokemon).orderBy(desc(pokemon.votes))
  return data.map((entry) => ({
    id: entry.id,
    name: entry.name,
    fill: colorFromType(entry.type),
    votes: entry.votes,
  }))
}

function getIds(): [number, number] {
  let id1 = Math.floor(Math.random() * 151) + 1
  let id2 = Math.floor(Math.random() * 151) + 1
  while (id1 === id2) {
    id2 = Math.floor(Math.random() * 151) + 1
  }

  return [id1, id2]
}
