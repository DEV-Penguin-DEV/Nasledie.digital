import '../sass/style.scss';
import AppPresenter from './presentors/presentor.js';
import { startSelects } from './functions/selects';
startSelects();
const mainContainer = document.querySelector('#circles');

const appPresenter = new AppPresenter(mainContainer);

appPresenter.init();


