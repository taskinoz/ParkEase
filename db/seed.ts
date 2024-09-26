import { db, Cars, Bookings } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Cars).values([
		{ model: 'Model S', make: 'Tesla', year: 2021, color: 'white', owner: 'Elon Musk' },
		{ model: 'Model 3', make: 'Tesla', year: 2021, color: 'black', owner: 'Elon Musk' },
		{ model: 'Model X', make: 'Tesla', year: 2021, color: 'blue', owner: 'Elon Musk' },
		{ model: 'Model Y', make: 'Tesla', year: 2021, color: 'red', owner: 'Elon Musk' },
		{ model: 'Cybertruck', make: 'Tesla', year: 2021, color: 'silver', owner: 'Elon Musk' },
		{ model: 'Roadster', make: 'Tesla', year: 2021, color: 'black', owner: 'Elon Musk' },
		{ model: 'Sedan', make: 'BMW', year: 2021, color: 'white', owner: 'BMW' },
		{ model: 'SUV', make: 'BMW', year: 2021, color: 'black', owner: 'BMW' },
		{ model: 'Coupe', make: 'BMW', year: 2021, color: 'blue', owner: 'BMW' },
		{ model: 'Convertible', make: 'BMW', year: 2021, color: 'red', owner: 'BMW' },
		{ model: 'Truck', make: 'BMW', year: 2021, color: 'silver', owner: 'BMW' },
		{ model: 'Van', make: 'BMW', year: 2021, color: 'black', owner: 'BMW' },
		{ model: 'Hatchback', make: 'BMW', year: 2021, color: 'white', owner: 'BMW' },
		{ model: 'Wagon', make: 'BMW', year: 2021, color: 'black', owner: 'BMW' },
		{ model: 'Minivan', make: 'BMW', year: 2021, color: 'blue', owner: 'BMW' },
		{ model: 'Pickup', make: 'BMW', year: 2021, color: 'red', owner: 'BMW' },
	]);

	await db.insert(Bookings).values([
		{ id: 1, date: new Date('2021-10-01'), time: '10:00', car: 1, parking_spot: 'A1' },
		{ id: 2, date: new Date('2021-10-01'), time: '11:00', car: 2, parking_spot: 'A2' },
		{ id: 3, date: new Date('2021-10-01'), time: '12:00', car: 3, parking_spot: 'A3' },
		{ id: 4, date: new Date('2021-10-01'), time: '13:00', car: 4, parking_spot: 'A4' },
		{ id: 5, date: new Date('2021-10-01'), time: '14:00', car: 5, parking_spot: 'A5' },
		{ id: 6, date: new Date('2021-10-01'), time: '15:00', car: 6, parking_spot: 'A6' },
		{ id: 7, date: new Date('2021-10-01'), time: '16:00', car: 7, parking_spot: 'A7' },
		{ id: 8, date: new Date('2021-10-01'), time: '17:00', car: 8, parking_spot: 'A8' },
		{ id: 9, date: new Date('2021-10-01'), time: '18:00', car: 9, parking_spot: 'A9' },
		{ id: 10, date: new Date('2021-10-01'), time: '19:00', car: 10, parking_spot: 'A10' },
		{ id: 11, date: new Date('2021-10-01'), time: '20:00', car: 11, parking_spot: 'A11' },
		{ id: 12, date: new Date('2021-10-01'), time: '21:00', car: 12, parking_spot: 'A12' },
		{ id: 13, date: new Date('2021-10-01'), time: '22:00', car: 13, parking_spot: 'A13' },
	]);
}
