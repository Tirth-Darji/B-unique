const { Client } = require('pg');
const fs = require('fs');
async function setupDb() {
  const adminClient = new Client({
    user: 'postgres',
    password: 'Lavanya@10',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
  });
  
  try {
    await adminClient.connect();
    console.log('Connected to default postgres database.');
    
    const res = await adminClient.query("SELECT 1 FROM pg_database WHERE datname = 'globetrotter'");
    if (res.rowCount === 0) {
      await adminClient.query('CREATE DATABASE globetrotter');
      console.log('Database globetrotter created.');
    } else {
      console.log('Database globetrotter already exists.');
    }
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await adminClient.end();
  }
  
  const appClient = new Client({
    user: 'postgres',
    password: 'Lavanya@10',
    host: 'localhost',
    port: 5432,
    database: 'globetrotter'
  });
  
  try {
    await appClient.connect();
    console.log('Connected to globetrotter database.');
    
    const schemaSql = fs.readFileSync('db/schema.sql', 'utf8');
    await appClient.query(schemaSql);
    console.log('Schema applied successfully.');
  } catch (err) {
    console.error('Error applying schema:', err);
  } finally {
    await appClient.end();
  }
}

setupDb();
