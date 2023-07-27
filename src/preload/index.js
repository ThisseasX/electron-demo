import { contextBridge } from 'electron';
import * as dogs from 'models/dogs';

contextBridge.exposeInMainWorld('api', {
  dogs,
});
