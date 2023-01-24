import '../sass/style.scss';
import { startPositions } from './functions/circles';
import { startSelects } from './functions/selects.js';
import { startEditing } from './functions/editing-person.js';
import AppPresenter from './presentors/presentor.js';

startPositions();
startSelects();
startEditing();

const mainContainer = document.querySelector('.root');

const appPresenter = new AppPresenter(mainContainer);

appPresenter.init();
