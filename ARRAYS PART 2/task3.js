let arr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let arrResalt = [];

for(i = 0;i < arr.length;i ++){
    if(arr[i] > 10){
        arrResalt.push(arr[i]);
    }
};
console.log(arrResalt);


let results = arr.filter(function(item, index, array) {
    return item > 10;
  });

  console.log(results);

