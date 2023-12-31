import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import { electronApp, is, optimizer, platform } from '@electron-toolkit/utils';
import { initDogsEvents } from 'models/dogs';
import { initEmailEvents } from 'models/email';
import { initWindowEvents } from 'models/window';

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  window.on('ready-to-show', window.show);

  window.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    window.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    window.loadFile(path.join(__dirname, '../renderer/index.html'));
  }

  initDogsEvents();
  initEmailEvents();
  initWindowEvents(window);
};

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.thisseasx.electron-demo');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (!platform.isMacOS) {
      app.quit();
    }
  });
});
