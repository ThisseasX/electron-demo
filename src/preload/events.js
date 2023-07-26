import { ipcRenderer } from 'electron';

export const getFile = (name) => ipcRenderer.invoke('get-file', name);
