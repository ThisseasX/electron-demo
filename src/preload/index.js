import { contextBridge } from 'electron';
import * as dogs from 'models/dogs';
import * as email from 'models/email';
import * as window from 'models/window';

contextBridge.exposeInMainWorld('api', {
  dogs,
  email,
  window,
});
