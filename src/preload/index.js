import { contextBridge } from 'electron';
import { getFile } from './events';

contextBridge.exposeInMainWorld('api', {
  getFile,
});
