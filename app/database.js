import pg from 'pg'; 

// client pour se connécter à la bdd avec le module PG, le PG_URL est récupérer dans le .env

const { Client } = pg;

const client = new Client(process.env.PG_URL);

await client.connect();

export default client;