import path from 'path';
import { app } from 'electron';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const dbDir = path.join(app.getPath('userData'));
const adapter = new JSONFile(path.join(dbDir, 'db.json'));
const db = new Low(adapter, { dogs: [] });

db.read();

export { db };
