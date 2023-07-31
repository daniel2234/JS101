// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.
let color = 'yellow'
let colors = ['red','green','blue']

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors)

//this logs the colors array ['red','green','blue', 'yellow']
//we declare and initialize two variables:

//on line 1, the variable color is declared an initialized to the string 'yellow'

//on line 2, the variable colors is declared and initialized to an array containing three strings, 'red', 'green', 'blue'

//on lines 4-6 we declare the function updatesColors, it defines one parameter, passing in the variable color //NOte that the colors parameter 'shadows', or blocks access to, the colors variable declared in the global scope in line 2

//we onvoke the updateColors function on line 8, passing in the colors variable declared on line 2, as an argument, because the function defined the parameter colors, and because the variable we passed in as an argument poinrts to  reference type value, the colors variable on line 2 and the colors paramets (essentially a varible scoped to the function) both point to the same array. Within function body we call push on this array and pass in the color variable (which the function can assess) which has the value of the string 'yellow'. this modifies the array by appening this value as a new element in the array

//on Line 9 we log the value of the colors variable declared on line 2. Since this variable points to the same array as the one referenced by the colors parameter in the function, we see the modifies value output


// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

//this logs ['red', 'green', 'blue', 'undefined'];

//the code in this exa,ple is almost identical to the code example in Example 1, with one key difference: the updateColors function defines a second parameter color. As with Exercise 1, the colors function parameter blocks access to the global colors variable

//When we invoke the function, however, we only pass in one argument, colors which references the array ['red','green','blue']
//as before, we call the push method on this array, but rather than pass in th ecolor global variable(which points to the string 'yellow;) we instead pass in the color parameter. Since we didn't pass in an argument for color when invoking the function, this parameter has a value of undefined

//the array is stil modified, as in Exercise 1, so when we log the colors global variable on line 9 we again see the modified value, but the last element is undefined instead of 'yellow'


// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

//This logs the array ['red', 'green', 'blue', 'purple', 'pink']

//As with Exercise 2, our updateColors function defines two parameters. In this example though, we pass in two arguments when invoking the function. We also invoke the function twice.

//We again have global website, colors, initialized to an array containing three strings, 'red', 'green', 'blue'. Here we also have the global variables color1 and color2 initialzied to the string 'purple' and 'pink' respectively

// On the first invocation of updateColors we pass in the colors variable as the first argument and color1 as the second argument.
//Within the scope of the function, the colors parameter references the same array to which the global colors variables on line 3 points, and the color parameters points to the string value 'purple'. The function mutatest the array which colors references, appending the string 'purple'

//Since the global colors variable references the same array as the one we mutated within the function, if we wre to log colors at this point we would see output the mutated array ['red', 'green', 'blue', 'purple']. Instaed, however we spoke the function for a second time. We again pas in the global colors varaible as the first argument (remember that the aray it references has been mutated, so at this point it has a value of ['red', 'green', 'blue', 'purple']) adn as the second argument we pass in color2

//As with the first invocation, the colors parameter again references the same array to which the global colors variable points. the color parameter on this occasion has a value of 'pink', and this value is append to the array.

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2); // line 11
console.log(colors);

//As with Exercise 3, this again logs the array ['red', 'green', 'blue', 'purple', 'pink']. There's a difference here in that we return the value of the colors parameter when we woke the function, and also declare and assign another global varaible newColors to that return value. The underlying principles at work are teh same, however

//When updateColors is first invokes, we pass in the global colors variable. colors references an array, which at this point has a value of ['red', 'green', 'blue']. We also pass in color1 which has value of 'purple'. When the function is invoked on line 10, the color parameter is initialized to 'purple' and is appended to the array referenced to the array referenced by the colors parameter. At this point the array refernce by both the colors parameter and the global colors variable has a value of ['red', 'green', 'blue', 'purple']. we then return the value of colors parameter

//On line 11 we again invoke updateColors, passing in newColors as the first argument. We could have also passed in colors, since both variables reference the same array. For the second argument, we pass in color2, which has a value of 'pink'. Just as in Exercise 3, this value is appended to the array referenced by both colors and newColors


//Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

//This logs the array ['red', 'green', 'blue']

//in some ways this is similar to Exercise 4 except that here we two functions, both of which mutate the array passed in.

// We declare and initialize the global varaible color to the string 'purple; on line 1. On line 2, we declare and initialize the global variable colors to an array conating three strings, 'red', 'green' and 'blue'

//We declare two functions:

//addColor which defines two parameters colors and color. it calls push on colors passing in color as an argument and the returns colors
//removeColor which defines one parameter colors. it calls pop on colors and then returns colors. (Note that the colors object is mutated.)

//On line 14 we invoke removeColor, passing in the global colors variable as an argument.
//At this point the colors parameters within the scope of the function and the global colors variable both point to the same array ['red', 'green', 'blue']// we then mutate that array by calling the Array method pop on it. This removes the last element of the array, so the array which the colors parameter and the global colors variable both reference now has a value of ['red', 'green'], the function returns a reference to this array, and it is this reference to wchih newColors is assigned.

// A key aspect of this function though, is what happens on line 11. Here we assign color to the return value of colors.pop90
//the pop method retun the element that it removes, so in this case that return value is the string 'blue', What is color though? since we haven't defined a color parametter, nor declared a new variable of that name within the scope of the function, we need to look outside of the function scope, The coloe refernece on line 11 is the global color variable that we declared on line 1. Line 11 is therefore a reassignment of this variable.

//At this point, once we've invoked removeColor, the global color varible has a value of 'blue' and the global colors and newColors variables boht point to the same array which has a value of ['red', 'green']

//We then invoke addColor on line 15, passing in the colors and color global variables.
//Within the scope of the function the colors paramets points to the same array as teh global colors variable and the color parameter has the value of 'blue'. we then append the value of color to the array and return a refernce to teh colors array (though we dont do anythin with the return value)

//at this point the array to which the global colors and newColors, variables both point has a value of ['red', 'green', 'blue'], and so this is what is output when newColors is logged on line 19


//Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
  //.slice() is without modifying the original string
  //.toUpperCase() does not modify original string 
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word); //hello!!!
console.log(capitalizedWord); //Hello
console.log(exclaimedWord); //hello!!!

//Here we have two functions, capitalize and exclaim, Neither function define any parameters, but both return a value

//on line 9, we declare an initializr the global variable word to the string 'hello'
//on line 10, we declare and initialize the global variable capitalizedWord to the return value of invoking capitalize. Within the body of the function a few things happen:

// we reference the first letter of word, which is 'h', using bracket notation and call the String method toUpperCase on it. This returns a new string 'H'
// we call the String method slice on word, passing in the index 1 as an argument. This returns a new string 'ello'
//we concatenate these two new strings using the + operator to form the new string 'Hello'
//we then return this string 'Hello' and so capitalizedWord is assigned to this value

//Note that although we passed in word as an argument to the function invocation, we don't use that argument within the function and the word referenced on line 2 is the global variable word. Since this variable is assigned to a primitivem however, nothing we do on line 2 changes it in any way.

//On line 11, we invokde the exclaim function ,passing in the capitalizeWord variable. As with the capitalize function invocation we dont use the argument within the function, within the function, word references the global word variable that was declared on line 9. We reassign this variable to a value with is the initial value of word('hello') concatenated using the + operator with the string '!!!' to produce a new string 'hello!!!', AS well as reassigning word to this new string, we alos return it, assigning exclaimedWord to this value.

//After our function invocations therefore, word and exclaimedWord have a value of 'hello!!!' and capitalizedWord has a value of 'Hello'. It is these values we see when we log the three variables on lines 13-15.

// Question 7
// What will the following code log to the console and why? Don't run it until you have tried to answer.

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word); //hello
console.log(capitalizedWord); //Hello
console.log(exclaimedWord); //Hello!!!

//At first glance this looks identical to Exercise 6, but there's a key difference: the capitalize and exclaim functions both define a function parameter word

//in the case of the capitalize function this parameter doesn't really make any difference to what happens. We pass in the global variable word as an argument to the function invocation, so the word parameter also has a value of 'hello' but at a different memory location. We then create a new string 'Hello' in the same way as before (concatenatinf the return value of the toUpperCase and slice method) and return the value of this new string from the function. The global variable capitalizedWord is then assigned to this value.

//In the case of exclaim however, the definition and use of a word parameter has a big difference in the final output. When we invoke the exclaim function on line 11 we pass in capitalizedWord as an argument. At this point capitalizedWord and the word parameter in the scope of the function boht have the same value 'Hello', though at different places in memory. We then reassign the parameter word to a new string 'Hello!!!' which is its initial value concatenated with the string '!!!'. Not the that this doesn't affect the value of global variable word declared on line 9 since the parameter 'shadows' and blocks access to this variable. The value of the new string 'Hello!!!' is then returned by the function,  and it is this value to which exclaimedWord is assigned

//After our function invocation, word still has its initial value of 'hello', capitalizedWord has the value of 'Hello' which is was returned by the capitalize function invocation, and exclaimedWord has a value of 'Hello!!!' which was returned by the excalim function invocation. It is these values we see when we log the three variables on lines 13-15