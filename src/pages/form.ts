import {db, Cars} from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({request}) => {

    // Check if the request is not a form submission
    if (request.headers.get('content-type') !== 'application/x-www-form-urlencoded') {
        const body = await request.json();
        const { model, make, year, color, owner } = body;
        await db.insert(Cars).values([{ model, make, year, color, owner }]);
        return new Response(JSON.stringify({ status: 200, body: 'Car added' }));
    }

    // Parse the form data
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Extract the car data
    const { model, make, year, color, owner } = data;

    // Validate the car data
    if (!model || !make || !year || !color || !owner) {
        return new Response(JSON.stringify({ status: 400, body: 'Missing required fields' }));
    }

    // Insert the car into the database
    await db.insert(Cars).values([{ 
        model: model as string, 
        make: make as string, 
        year: parseInt(year as string), 
        color: color as string, 
        owner: owner as string 
    }]);

    return new Response(JSON.stringify({ status: 200, body: 'Car added' }));
}