import { Pool } from "pg";

const connectionString = 'postgres://mqrhkceq:xL85AJ4lPFNiY4BfHpMompfVnGs6EwLy@tyke.db.elephantsql.com/mqrhkceq';

const db = new Pool({ connectionString });

export default db;