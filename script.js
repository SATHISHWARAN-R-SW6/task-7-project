// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// a. Get all the countries from Asia continent /region using Filter function

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log(asianCountries);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// b. Get all the countries with a population of less than 2 lakhs using Filter function

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesWithLowPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log(countriesWithLowPopulation);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// c. Print the following details name, capital, flag using forEach function

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const name = country.name.common;
      const capital = country.capital?.[0];
      const flag = country.flags.png;

      console.log("Name:", name);
      console.log("Capital:", capital);
      console.log("Flag:", flag);
      console.log("----------------------");
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// d. Print the total population of countries using reduce function

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const totalPopulation = data.reduce((accumulator, country) => {
      const countryPopulation = country.population;
      return accumulator + countryPopulation;
    }, 0);

    console.log("Total Population:", totalPopulation);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// e. Print the country which uses US Dollars as currency.

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesUsingUSD = data.filter((country) => {
      return country.currencies && country.currencies.USD;
    });

    countriesUsingUSD.forEach((country) => {
      const name = country.name.common;
      console.log("Country using US Dollars:", name);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
