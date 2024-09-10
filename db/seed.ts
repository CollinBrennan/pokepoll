import { db } from './db'
import { pokemon } from './schema'

export async function seed() {
  await db.insert(pokemon).values([
    { id: 2, name: 'ivysaur', type: 'grass', votes: 2 },
    { id: 10, name: 'caterpie', type: 'bug', votes: 4 },
    { id: 147, name: 'dratini', type: 'dragon', votes: 8 },
    { id: 26, name: 'raichu', type: 'electric', votes: 16 },
    { id: 67, name: 'machoke', type: 'fighting', votes: 32 },
    { id: 146, name: 'moltres', type: 'fire', votes: 64 },
    { id: 92, name: 'gastly', type: 'ghost', votes: 128 },
    { id: 27, name: 'sandshrew', type: 'ground', votes: 256 },
    { id: 17, name: 'pidgeotto', type: 'normal', votes: 512 },
    { id: 23, name: 'ekans', type: 'poison', votes: 1028 },
    { id: 97, name: 'hypno', type: 'psychic', votes: 2056 },
  ])
}
