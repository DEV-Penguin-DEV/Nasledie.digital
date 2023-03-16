import '../sass/style.scss';
import AppPresenter from './presentors/presentor.js';
import { ROOT_ELEMENT } from './const';

const mainContainer = ROOT_ELEMENT;

const appPresenter = new AppPresenter(mainContainer);

appPresenter.init();


