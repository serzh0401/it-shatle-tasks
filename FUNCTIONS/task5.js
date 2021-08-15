
let str = 'HELLO';
let arr = [];

    for(i = 0; i < str.length; i ++){
        arr.push(str[i]);
                 
    };

    delete arr[0];
    delete arr[arr.length -1];

        console.log(arr);
        let str2 = arr.join('');
        console.log(str2);
  
