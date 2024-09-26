import {db, Cars} from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({request}) => {
    const body = await request.json();
    const { model, make, year, color, owner } = body;
    await db.insert(Cars).values([{ model, make, year, color, owner }]);
    return new Response(JSON.stringify({ status: 200, body: 'Car added' }));
}