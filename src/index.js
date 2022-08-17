import './reset.css';
import './main.css';

import Tooltip from './ui-library/tooltip';
import Dropdown from './ui-library/dropdown';
import Tabs from './ui-library/tabs';
import Snackbar from './ui-library/snackbar';

// create tooltips
const tooltip = new Tooltip(document.querySelectorAll('.tooltip'));
tooltip.init();
window.addEventListener('resize', () => {
  tooltip.getTooltipsPosition();
});

// create dropdowns
const dropdowns = new Dropdown(document.querySelectorAll('.dropdown'));
dropdowns.init();

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const snackbarTrigger = document.querySelector('.snackbar-trigger');
snackbarTrigger.addEventListener('click', () => {
  snackbar.show(`You clicked me! I'm a snackbar.`);
});
