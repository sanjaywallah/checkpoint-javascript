// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `colors` that contains three colors.
// Type your solution immediately below this line:

var colors = ['red', 'white', 'blue']
console.log(colors)

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:
var last = colors[2]
console.log(last)


// #3: Create an empty array called `favoriteColors`.
// Type your solution immediately below this line:
var favoriteColors = []
 console.log(favoriteColors)


// #4: Create a `for` loop that adds each string in `colors` to `favoriteColors`.
// Type your solution immediately below this line:
for(i = 0; i < colors.length; i++) {
  favoriteColors.push(colors[i])
}



// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:
var instructor = {
  firstName: 'John',
  lastName: 'Blee',
  age: 60
}
console.log(instructor)


// #6: Add a `facial-hair` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:
instructor['facial-hair'] = true
console.log( instructor['facial-hair'] )
