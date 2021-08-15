let arr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
console.log(arr[arr.length - 2]);

arr.splice(arr.length - 2 , arr.length - 2 , "предпоследний элемент" );
console.log(arr);