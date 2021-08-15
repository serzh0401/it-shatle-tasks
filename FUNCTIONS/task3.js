function isInteger(x) {
    return (x ^ 0) === x;
  };
function pow(x , n){
    if(isInteger(x) == true && x > 1){
        let resalt = Math.pow(x , n); 
        console.log(resalt);
    }else{
        console.log('не целое число')
    }
        };

pow(7 , 2);
