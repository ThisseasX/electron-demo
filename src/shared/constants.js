import packageJson from '../../package.json';

export const EVENTS = {
  DOGS: {
    GET_DOGS: 'dogs:get-dogs',
    ADD_DOG: 'dogs:add-dog',
    DELETE_DOGS: 'dogs:delete-dogs',
  },
};

export const APP = {
  NAME: packageJson.name,
  TITLE: 'Electron Demo',
};
