'use server'

import db from '@/db/drizzle'
import { pokemon } from '@/db/schema'
import { PokemonData } from '@/utils/types'
import { eq } from 'drizzle-orm'

export async function fetchPokemonPair(): Promise<[PokemonData, PokemonData]> {
  let [id1, id2] = getIds()

  let pokemon1 = (await db.select().from(pokemon).where(eq(pokemon.id, id1)))[0]
  let pokemon2 = (await db.select().from(pokemon).where(eq(pokemon.id, id2)))[0]

  return [pokemon1, pokemon2]
}

function getIds(): [number, number] {
  let id1 = Math.floor(Math.random() * 151) + 1
  let id2 = Math.floor(Math.random() * 151) + 1
  while (id1 === id2) {
    id2 = Math.floor(Math.random() * 151) + 1
  }

  return [id1, id2]
}
