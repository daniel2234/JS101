function lowerInitial(word) {
  if (word.length === 0) { // If word contains an empty String
    return '-';           //returns a dash instead of proceeding
  }
  return word[0].toLowerCase(); // word is guaranteed to have at least // 1 character, so word[0] never evaluates as undefined.
}

lowerInitial('Joe');    // "j"
lowerInitial('Karen');  // "k"

lowerInitial('');       // TypeError: Cannot read property 'toLowerCase' of undefined

//planning your code
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));     // Logs "Australia, Brazil, Cuba, Senegal"


alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry


let object = { "name": "Ferdinand", "age": 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13 }';  // JSON string

function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
//       Unexpected token i in JSON at position 0"
// Logs "Finished parsing data."
// Returns null