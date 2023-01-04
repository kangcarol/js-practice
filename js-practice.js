// 12/22/22
function getCount(str) {
  const vowels = ['a','e','i','o','u']
  let count = 0
  
  for ( let i=0; i < str.length; i++){
    vowels.includes(str[i]) ? count += 1 : count += 0
  }
    
  return count;
}

// RECOMMEND:
// function getCount(str) {
//   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

console.log(getCount('carol'))

//-------------------------------

function positiveSum(arr) {
  let sum = 0
  
  for (let i=0; i < arr.length;i++ ){
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  
  return sum
}

//RECOMMEND:
// function positiveSum(arr) {
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

console.log("positiveSum", positiveSum([-59,-50,-70,-13,-49,80,-65,16,6,99,-65,-83,79,-81,66,86,-77,-66,48,89,-61,-80,14,-29,-66,-42,67,-30,-80,46,62,-89,87,-34,71,2,5,59,97,10,-15,79,-41,-29,-100,-70])) // should equal 1168

//-------------------------------

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
  return list.sort(function(a,b){return a-b})[0]

}

var max = function(list){
  return list.sort(function(a,b){return b-a})[0]

}


//RECOMMEND:
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

//-------------------

// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
  return (array.reduce((acc, current) => acc + current ))/array.length
}

//-----------

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length > 0){
    return (array.reduce((acc, current) => acc + current ))/array.length  
  } else{
    return 0  
  }
}

//-----------------

function getMiddle(s)
{
  return (s.length % 2 !== 0) ? s[Math.ceil(s.length/2)-1] : s[Math.floor(s.length/2-1)]+s[Math.floor(s.length/2)]
}

console.log("middle", getMiddle("test"))
console.log("middle", getMiddle("testing"))

//-----------------


function descendingOrder(n){
  let str = n.toString()
  let arr = str.split("")
  
  let sortedArr = arr.map(char => parseInt(char)).sort(function(a,b){return b-a})
  return parseInt(sortedArr.join(""))


  // return (arr.map(char => parseInt(char))).join("")
  
  // change number into string
  // split string, becomes array of characters
  // change char into number (MAP!)
  
      // maybe sort THEN??
  
  // sort descending array of numbers
  // join back up again into str
  // change str back into number
}

console.log(descendingOrder(1021))


//----------------

function findShort(s){
  let words = s.split(' ')
  let lengths = words.map(word => word.length)
  return Math.min(...lengths)
  
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

//----------------

const multiply = (a,b) => { 
  return a* b
}

console.log("MULTIPLY =", multiply(5,6))


//----------------

function fizzbuzz(num){
  
  if (num % 15 === 0) {
    return 'fizzbuzz'
  }

  if (num % 5 === 0){
    return 'fizz'
  }

  if (num %3 === 0) {
    return 'buzz'
  }
}

console.log("FIZZBUZZ", fizzbuzz(10)) // fizz 
console.log("FIZZBUZZ", fizzbuzz(9)) // buzz
console.log("FIZZBUZZ", fizzbuzz(15)) // fizzbuzz