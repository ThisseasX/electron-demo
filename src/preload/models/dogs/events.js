import { ipcRenderer } from 'electron';
import { EVENTS } from 'shared/constants';

export const getDogs = () => ipcRenderer.invoke(EVENTS.DOGS.GET_DOGS);
export const addDog = (dog) => ipcRenderer.invoke(EVENTS.DOGS.ADD_DOG, dog);
export const deleteDogs = () => ipcRenderer.invoke(EVENTS.DOGS.DELETE_DOGS);
