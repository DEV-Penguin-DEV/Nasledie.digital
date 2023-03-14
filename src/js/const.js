import { START_MODE } from './start-mode';

export const View = {
  CIRCLES: 'CIRCLES',
  TABLE: 'TABLE',
};

export const PATH_BASE = START_MODE === 'product' ? '/wp-content/plugins/nasledie-circles/build/imag/' : '/img/';

export const MEDIA_MOBILE_SIZE = window.matchMedia('(max-width: 750px)');

export const DEFAULT_AVATAR_PATH = `${PATH_BASE}/avatar-default.png`;
