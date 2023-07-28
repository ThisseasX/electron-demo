import { ipcMain } from 'electron';
import { EVENTS } from 'shared/constants';
import { sendEmail } from './services';

export const initEmailEvents = () => {
  ipcMain.handle(EVENTS.EMAIL.SEND_EMAIL, sendEmail);
};
