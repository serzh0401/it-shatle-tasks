let num 
let arr = [];
while(num !== 15 ){
    let num = prompt("enter number" , "");
 arr.push(num)
 if(num === 15){
    break;
    console.log(arr);
}
};
console.log(arr);

let arr1 = [];
console.log(arr);
for(i = 0;i < arr.length; i ++){
arr1.push( Number(arr[i]));
};
console.log(arr1);


let sum = arr1.reduce((a, b) => a + b, 0);
console.log(sum);




    
    
