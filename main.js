import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import http from 'http';


//Adding the main directories that will be used
const PORT = 3000;
const HOME = os.homedir();
const WATCH_LATER_DIR = path.join(HOME, 'WatchLater');
const READ_LATER_DIR = path.join(HOME, 'ReadLater');

//checking if the directories exist or not and if they don't exist then creating them
if (!fs.existsSync(WATCH_LATER_DIR)) fs.mkdirSync(WATCH_LATER_DIR, { recursive: true });
if (!fs.existsSync(READ_LATER_DIR)) fs.mkdirSync(READ_LATER_DIR, { recursive: true });

console.log("Directories verified.");
console.log(`Videos path: ${WATCH_LATER_DIR}`);
console.log(`Articles path: ${READ_LATER_DIR}`);