import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const pokemon = sqliteTable('pokemon', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  votes: integer('votes').notNull(),
})
