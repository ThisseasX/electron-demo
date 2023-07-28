import { contextBridge } from 'electron';
import * as dogs from 'models/dogs';
import * as email from 'models/email';

contextBridge.exposeInMainWorld('api', {
  dogs,
  email,
});
