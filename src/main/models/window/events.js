import { ipcMain } from 'electron';
import { EVENTS } from 'shared/constants';
import { minimize, maximize, unmaximize, close } from './services';

export const initWindowEvents = (window) => {
  ipcMain.handle(EVENTS.WINDOW.MINIMIZE, () => minimize(window));
  ipcMain.handle(EVENTS.WINDOW.MAXIMIZE, () => maximize(window));
  ipcMain.handle(EVENTS.WINDOW.UNMAXIMIZE, () => unmaximize(window));
  ipcMain.handle(EVENTS.WINDOW.CLOSE, () => close(window));
};
