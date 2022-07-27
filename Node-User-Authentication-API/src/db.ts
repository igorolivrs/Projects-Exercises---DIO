import { Pool } from "pg";

const connectionString = 'Coloque aqui a url do seu banco de dados';

const db = new Pool({ connectionString });

export default db;