import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';


//Adding the main directories that will be used

const HOME = os.homedir();
const WATCH_LATER_DIR = path.join(HOME, 'WatchLater');
const READ_LATER_DIR = path.join(HOME, 'ReadLater');