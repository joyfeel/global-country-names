import countryList from "./country-names.json!";
import uniqueRandomArray from 'unique-random-array';

//let log = console.log.bind(console);

let countryInfoArray = countryList.countries.country;
let targetCountry = uniqueRandomArray(countryInfoArray)();

export function random () {
	return targetCountry.countryName + ': ' + targetCountry.countryCode;
}

export function all () {
	let tempArr = [];

	countryInfoArray.forEach(x => {
		tempArr.push(x.countryName);
	});

	return tempArr;
}