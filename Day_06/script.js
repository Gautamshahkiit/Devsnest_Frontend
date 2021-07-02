let a = "w3resources";
let b = [1, 2, 3, 4, 5];
console.log(Array.isArray(a));
console.log(Array.isArray(b));

function arrayOrNot(a) {
  return Array.isArray(a);
}
console.log(arrayOrNot(a));
console.log(arrayOrNot(b));


//simple spread operator
bCopy = [...b];
console.log(bCopy);

bAgain = b.map((x) => x);
console.log(bAgain);

baa = b.slice();
console.log(baa);

console.log("hello");

//return first n elements from an array

const first = (array, n = 0) => {
  return array.slice(0, n);
}
console.log(first([7, 5, 0, -9], 3));

//join strings stored in an array
let arr = ['red', 'roses', 'are', 'soft'];
const join = arr => '"' + arr.join(',') + '"';
console.log( join(arr));

//most frequent item
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const ans = (arr) => {
  let max = -1;
  let count = 0;
  let char;
  for(let i = 0; i < arr.length; i++){
    count = 0;
    for(let j = i; j < arr.length; j++){
      if (arr[i] == arr[j])
        count++;
    }
    if (count > max){
      max = count;
      char = arr[i];
    }
  }
  return [char, max];
}

console.log(ans(arr1));