'use strict';

// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// //https://restcountries.com/v2/

// //XMLHTTP REQUEST
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   //CORS = CROSS ORIGIN RESOURSE SETTING this should either be yess or unknown
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>

  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
//  });
//};
// getCountryData('portugal');
// getCountryData('USA');

//promises fetch Api
//const request = fetch('https://restcountries.com/v3.1/name/portugal');
//console.log(request);

//A Promise is an object that is used as a placeholder for the future result of an asynchronous operation

// VANILLA JS
/*const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
getCountryData('portugal'); */

// ARROW fUNCTION
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('portugal');

//CHAINING PROMISES
