import { sql } from 'drizzle-orm'
import { integer, pgTable, text } from 'drizzle-orm/pg-core'
import { nanoid } from 'nanoid'

export const pokemon = pgTable('pokemon', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
})

export const vote = pgTable('vote', {
  id: text('id')
    .$defaultFn(() => nanoid(11))
    .primaryKey(),
  pick: integer('pick')
    .references(() => pokemon.id)
    .notNull(),
  other: integer('other')
    .references(() => pokemon.id)
    .notNull(),
  date: text('timestamp')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
})
