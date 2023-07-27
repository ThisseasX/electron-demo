import path from 'path';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { APP } from 'shared/constants';
import { createDirIfNotExists } from 'utils';

const dbDir = path.join(process.env.LOCALAPPDATA, APP.TITLE);

createDirIfNotExists(dbDir);

const adapter = new JSONFile(path.join(dbDir, 'db.json'));
const db = new Low(adapter, { dogs: [] });

db.read();

export { db };
