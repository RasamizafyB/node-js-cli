# node-js-cli
Loading ReadMe...
## What is it ?
holidates is a tool I created during my training in web development at BeCode Liège, Belgium. It will allow you to display a list of holidays of the current year for the country name you will enter.

## How it works ?
- You enter the name of a country in english.
- it checks with the country-list package that the country name entered is correct and supported by the API.
- converts the country name into its country code,
- makes an HTTP request to the API of the nager.date service.
- retrieves the holidays data of the chosen country,
- transform the data into a readable and understandable list (date : holiday)
## How to install it ?
You can install it using npm :
```js
npm install @rasamizafy/holidates
```

Version
1.0.1

## Dependance
- [axios](https://github.com/axios/axios)
- [country-list](https://www.npmjs.com/package/country-list)

