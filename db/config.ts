import { defineDb, defineTable, column } from 'astro:db';

const Bookings = defineTable({
  columns: {
    id: column.number(),
    date: column.date(),
    time: column.text(),
    car: column.number(),
    parking_spot: column.text(),
  },
  foreignKeys: [
    {
      columns: ['car'],
      references: () => [Cars.columns.id],
    },
  ]
});

const Cars = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    model: column.text(),
    make: column.text(),
    year: column.number(),
    color: column.text(),
    owner: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {Bookings, Cars},
});
