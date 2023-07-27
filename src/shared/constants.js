import packageJson from '../../package.json';

export const EVENTS = {
  GET_DOGS: 'get-dogs',
  ADD_DOG: 'add-dog',
  DELETE_DOGS: 'delete-dogs',
};

export const APP = {
  NAME: packageJson.name,
  TITLE: 'Electron Demo',
};
