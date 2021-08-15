import cardTemplate from '../templates/card.hbs';
import refs from './refs.js';

function Card(country) {
  refs.countriesList.style.listStyle = 'none';
  refs.countriesList.innerHTML = cardTemplate(country);
}

function CountriesList(list) {
  refs.countriesList.style.listStyle = 'disc';
  refs.countriesList.innerHTML = list.map(country => `<li><h2>${country.name}<h2></li>`).join('');
}

export default { Card, CountriesList };
