//Program: Create an object temperatureConverter with methods toCelsius() and toFahrenheit() to convert temperatures between Celsius and Fahrenheit.in js
//Task: Add input for temperature values and convert them back and forth.
const temperatureConverter = {
    toCelsius(f) {
        return ((f - 32) * 5) / 9;
    },
    toFahrenheit(c) {
        return (c * 9) / 5 + 32;
    }
};
const celsius =50;
console.log(`Fahrenheit:${temperatureConverter.toFahrenheit(celsius)}`);

const fahrenheit =100;
console.log(`Celsius:${temperatureConverter.toCelsius(fahrenheit)}`);