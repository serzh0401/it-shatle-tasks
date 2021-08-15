let arr = [];
let count = 5;
//let fistelem = 0;
function writeNumbers(a , b ,fistelem){
    if(a > b){
        [a, b] = [b, a];
    };
    while(a <= b){     
        arr.push(fistelem + (a - 1) * count);
        a ++;
     }
    };

writeNumbers(1 , 6 , 25);
console.log(arr);

function arraySum(arr){
    let sum = 0;
    for( i = 0; i < arr.length; i++){
        sum += arr[i];
        }
    console.log(sum / arr.length);
    }
    arraySum(arr);


