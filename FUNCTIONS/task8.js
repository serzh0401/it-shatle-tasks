let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
    let str = arr.join();

console.log(str);

//let arrResalt = str.split(',' + 'green');
//console.log(arrResalt);
let arr1 = [];

for(i =0; i < arr.length; i ++){
arr1.push(arr[i] + 'green')
};
console.log(arr1);

[arr1[3], arr1[4] ] = [arr1[4], arr1[3]];

console.log(arr1);
