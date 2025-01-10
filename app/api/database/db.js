// import { drizzle } from 'drizzle-orm/sqlite';
import { drizzle } from 'drizzle-orm/singlestore/driver';
import sqlite3 from 'sqlite3';
import { resolve } from 'path';

const dbPath = resolve(process.cwd(), 'db.sqlite'); // Ensure this path is correct
const sqliteDb = new sqlite3.Database(dbPath);
export const db = drizzle(sqliteDb);
