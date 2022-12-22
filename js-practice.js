// 12/22/22
function getCount(str) {
  const vowels = ['a','e','i','o','u']
  let count = 0
  
  for ( let i=0; i < str.length; i++){
    vowels.includes(str[i]) ? count += 1 : count += 0
  }
    
  return count;
}

// recommended!
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

console.log("positiveSum", positiveSum([-59,-50,-70,-13,-49,80,-65,16,6,99,-65,-83,79,-81,66,86,-77,-66,48,89,-61,-80,14,-29,-66,-42,67,-30,-80,46,62,-89,87,-34,71,2,5,59,97,10,-15,79,-41,-29,-100,-70])) // should equal 1168

//-------------------------------
