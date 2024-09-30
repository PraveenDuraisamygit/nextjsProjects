import { pool } from "pg";
const database = new pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "admin",
  database: "restapi",
});
export default database;
