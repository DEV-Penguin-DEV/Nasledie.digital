import '../sass/style.scss';
import AppPresenter from './presentors/presentor.js';

const mainContainer = document.querySelector('#circles');

const appPresenter = new AppPresenter(mainContainer);

appPresenter.init();


