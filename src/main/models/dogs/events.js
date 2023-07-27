import { ipcMain } from 'electron';
import { EVENTS } from 'shared/constants';
import { getDogs, addDog } from './services';

export const initDogsEvents = () => {
  ipcMain.handle(EVENTS.GET_DOGS, getDogs);
  ipcMain.handle(EVENTS.ADD_DOG, addDog);
};
