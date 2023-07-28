import { ipcMain } from 'electron';
import { EVENTS } from 'shared/constants';
import { getDogs, addDog, deleteDogs } from './services';

export const initDogsEvents = () => {
  ipcMain.handle(EVENTS.DOGS.GET_DOGS, getDogs);
  ipcMain.handle(EVENTS.DOGS.ADD_DOG, addDog);
  ipcMain.handle(EVENTS.DOGS.DELETE_DOGS, deleteDogs);
};
