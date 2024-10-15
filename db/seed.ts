import db from './drizzle'
import { pokemon } from './schema'

async function seed() {
  for (let i = 1; i <= 151; i++) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    let data = await res.json()
    await db.insert(pokemon).values({
      id: i,
      name: data.name,
      type: data.types[0].type.name,
    })
  }
}

seed()
