function convertType1(floor){
    switch (true) { 
        case floor == - 1 || floor >= 14:
            console.log(floor);
            break;
        case floor > -1 && floor <= 12:
            console.log(floor + 1);
            break;           
    }
    
}

convertType1(8);

//Второй вариант задачи : написать функцмю через Function Expression (convertType2)
let floor = prompt('введите номер этажа');
let convertType2;

if (floor == - 1 || floor >= 14) {
    convertType2 = function() {
    console.log(floor);
  }
} else if(floor > -1 && floor <= 12) {
    convertType2 = function() {
    console.log(+floor + 1);
  }
}

convertType2();

//Третий вариант задачи:с помощью стрелочного синтаксиса (convertType3)
let convertType3 = (floor) => {
  if(floor == - 1 || floor >= 14){
    console.log(floor);
}else if(floor > -1 && floor <= 12){
    console.log(floor + 1);
}
};

convertType3(17);

