let arr = [" Алексей", " Вячеслав", " Григорий", " Настя", " Павел"];
let arr1 = [];

for(i = 0; i < arr.length;i ++){
    arr1.push(arr[i].split(''));
};
console.log(arr1);
let arr2 = [];

for(g = 0; g < arr1.length; g ++){
     
        let result = arr1[g].filter(function (item, index, array) {   
      
        return array.indexOf(item) !== array.lastIndexOf(item); 
        
      });
      //console.log(result);
      arr2.push(result.join(''));
  
};

  console.log(arr2);
  console.log(arr2.indexOf("ее"));

 for(k = 0; k < arr2.length; k ++){
   if(arr2[k].length > 1){
     //console.log(arr2.indexOf(arr2[k]));
     console.log(arr[arr2.indexOf(arr2[k])]);
   }
 };

 

