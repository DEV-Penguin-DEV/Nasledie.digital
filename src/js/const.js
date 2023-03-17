import { START_MODE } from './start-mode';

export const View = {
  CIRCLES: 'CIRCLES',
  TABLE: 'TABLE',
};

export const PATH_BASE = START_MODE === 'product' ? '/wp-content/plugins/nasledie-circles/build/imag' : 'imag';

export const MEDIA_MOBILE_SIZE = window.matchMedia('(max-width: 750px)');

export const DEFAULT_AVATAR_PATH = `${PATH_BASE}/avatar-default.png`;

export const ROOT_ELEMENT = document.querySelector('#circles');

export const TEST_SEARCHING_PERSON_LIST = [
  {
    surname: 'Сергеев',
    name: 'Константин',
    fatherName: 'Александрович'
  },
  {
    surname: 'Иванов',
    name: 'Иван',
    fatherName: 'Александрович'
  },
  {
    surname: 'Сергеев',
    name: 'Вадим',
    fatherName: 'Ивавович'
  },
  {
    surname: 'Сергеев',
    name: 'Виталий',
    fatherName: 'Витальевич'
  },
  {
    surname: 'Сергеев',
    name: 'Сергей',
    fatherName: 'Александрович'
  },
  {
    surname: 'Сергеев',
    name: 'Сергун',
    fatherName: 'Александрович'
  },
  {
    surname: 'Сергеев',
    name: 'Виниамин',
    fatherName: 'Виниаминович'},
];
