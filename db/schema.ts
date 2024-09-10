import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { nanoid } from 'nanoid'

export const pokemon = sqliteTable('pokemon', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
})

export const vote = sqliteTable('vote', {
  id: text('id')
    .$defaultFn(() => nanoid(11))
    .primaryKey(),
  vote: integer('vote')
    .references(() => pokemon.id)
    .notNull(),
  other: integer('other')
    .references(() => pokemon.id)
    .notNull(),
  date: text('timestamp')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
})
