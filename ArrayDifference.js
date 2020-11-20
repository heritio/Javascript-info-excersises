let arr1 = [1, "calf", 3, "piglet",5];
let arr2 = [1, "calf", 3, 4,6];

let ourArrs = [];
ourArrs.push(arr1,arr2);
let sorted = ourArrs.sort((a,b) => {return a.length - b.length});
console.log(sorted);
let temp1 = [];
let temp2 = [];
let newArr = [];

for(let i = 0; i < sorted[1].length; i++){
  if(sorted[0].includes(sorted[1][i])){
    continue;
  }else{
    temp1.push(sorted[1][i]);
  }
}

for(let k = 0; k < sorted[0].length; k++){
  if(sorted[1].includes(sorted[0][k])){
    continue;
  }else{
    temp2.push(sorted[0][k]);
  }
}
console.log(temp1);
console.log(temp2);
newArr = [...temp1,...temp2];
console.log(newArr);







