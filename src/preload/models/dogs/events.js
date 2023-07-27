import { ipcRenderer } from 'electron';
import { EVENTS } from 'shared/constants';

export const getDogs = () => ipcRenderer.invoke(EVENTS.GET_DOGS);
export const addDog = (dog) => ipcRenderer.invoke(EVENTS.ADD_DOG, dog);
