import { ipcRenderer } from 'electron';
import { EVENTS } from 'shared/constants';

export const sendEmail = () => ipcRenderer.invoke(EVENTS.EMAIL.SEND_EMAIL);
