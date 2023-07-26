import { ipcMain } from 'electron';
import { getFile } from './services';

export const initFileEvents = () => {
  ipcMain.handle('get-file', getFile);
};
