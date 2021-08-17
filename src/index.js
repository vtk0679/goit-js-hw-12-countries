import './sass/main.scss';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';
import render from './js/render-markup';
import showError from './js/showError.js';

const debounce = require('lodash.debounce');

refs.input.oninput = debounce(onInput, 500);

function onInput() {
  const request = refs.input.value;
  if (request.length > 1)
    fetchCountries(request).then(data => {
      if (data) {
        if (data.length === 1) render.Card(data[0]);
        else if (data.length >= 2 && data.length <= 10) render.CountriesList(data);
        else showError('Too match results');
      } else showError('Nothing found');
    });
}
