import './sass/main.scss';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';
import render from './js/render-markup';
import showError from './js/showError.js';

const debounce = require('lodash.debounce');

refs.input.oninput = debounce(onInput, 500);

function onInput() {
  fetchCountries(refs.input.value).then(data => {
    if (data) {
      if (data.length > 10) showError('Too match results');
      else if (data.length > 2) render.CountriesList(data);
      else render.Card(data[0]);
    } else showError('Nothing found');
  });
}
