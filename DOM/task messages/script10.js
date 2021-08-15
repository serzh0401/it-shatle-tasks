
   
  function showMessage(html , mcolor , left , top){
    let div = document.createElement('div');
    div.innerHTML =html;
    div.className = "alert";
  document.body.append(div);
  div.style.marginLeft = left +"px";
  div.style.marginTop = top +"px";
  div.style.color = mcolor;
  };

  //showMessage("hello" , 'red' , 0 , 35);
  function showNewMessage(html , mcolor , newLeft1 , newTop1){
    let div = document.createElement('div');
    div.innerHTML =html;
    div.className = "new";
  document.body.append(div);
  div.style.marginLeft = newLeft1 +"px";
  div.style.marginTop = newTop1 +"px";
  div.style.color = mcolor;
  };

  for(i = 0; i < 10; i ++){
    showMessage("hello" , 'red' , 0 , 35);
          
    }
  

  let a = document.querySelectorAll('.alert');
  console.log(a);
let b = a[0];
//b.remove();

function getDigit(){

  let newTop = +prompt("Input top value" , "");
  let newLeft = +prompt("Input left value" , "");


for(k = 0; k < a.length; k ++){

  
  //console.log(a[k]);
  function getCords(elem){
    let coords = elem.getBoundingClientRect();
    return{
        top: coords.top + window.pageYOffset ,
        left: coords.left + window.pageXOffset
    };
};

//let a = getCords(a[k]);
const abjArr = Object.entries(getCords(a[k]));
console.log(abjArr);
abjArr.forEach(([key, value]) => {
  console.table(key, value);
});

//console.log(abjArr);

let currentTop = abjArr[0][1]; //
let currentLeft = abjArr[1][1];

console.log(currentTop);
console.log(currentLeft);

let c = currentTop + 25;
let d = currentLeft + 25;

console.log(c);
console.log(d);




if(currentTop === newTop && currentLeft === newLeft){
  let div = document.createElement('div');
    div.innerHTML = "good day";
    div.className = "new";
  document.body.append(div);
  div.style.Left = d +"px";
  div.style.Top = c +"px";
  div.style.color = "green";
break;
  
}else{
  continue;
};
  


//showNewMessage("good day" , 'green' , newLeft = currentLeft +25 +"px"; , newTop = currentTop +25 +"px";);
//console.log(newLeft);




};


}

getDigit();









  
  
  