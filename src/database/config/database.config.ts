import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const config = new DataSource({
    type: "postgres",
    port: 5432,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
    schema: "aula",
    entities: ["src/database/entities/**/*.ts"],
    migrations: ["src/database/migrations/**/*.ts"],
});

export default config;
