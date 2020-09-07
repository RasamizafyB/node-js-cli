#!/usr/bin/env node
const axios = require('axios');
const { getCode, getName } = require('country-list');
var CountryYear = process.argv.slice(2);
let code = getCode(CountryYear[0]);
let countryName = getName(code);
let year = CountryYear[1];

axios
  .get('https://date.nager.at/Api/v2/PublicHolidays/' + year + '/' + code)
  .then(
    (response) => {
      //   console.log(response.data);
      console.log('');
      console.log('');
      console.log('');
      console.log('Holidays in ' + countryName + ' for the year ' + year);
      console.log('* * * * * * * * * * * * * * * * *');
      response.data.forEach((element) => {
        // console.log(element.date + ' ' + element.name);
        console.log('');
        console.log('Date : ' + element.date);
        console.log('Name : ' + element.name);
        console.log('Local Name : ' + element.localName);
        console.log('');
        console.log('* * * * * * * * * * * * * * * * *');
      });
    },
    (error) => {
      console.log(error);
    }
  );
