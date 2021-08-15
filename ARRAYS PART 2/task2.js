let arr = ["anna" , 12 , "sam" , 9 , "kate" , 10 , "ron" , 9];
console.log(arr);
//arr.forEach(item => console.log(item));

arr.forEach(function(item, i, arr) {
    if(typeof(item) === 'string'){
        console.log(item + '- string value')
    }else{
        console.log(item + '- number value')  
    }
  });