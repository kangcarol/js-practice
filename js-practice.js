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