import { ipcRenderer } from 'electron';
import { EVENTS } from 'shared/constants';

export const minimize = () => ipcRenderer.invoke(EVENTS.WINDOW.MINIMIZE);
export const maximize = () => ipcRenderer.invoke(EVENTS.WINDOW.MAXIMIZE);
export const unmaximize = () => ipcRenderer.invoke(EVENTS.WINDOW.UNMAXIMIZE);
export const close = () => ipcRenderer.invoke(EVENTS.WINDOW.CLOSE);
