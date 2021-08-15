let addEl = document.querySelector('button[type="submit"]');
console.log(addEl);
let delbut = document.querySelector('button[type="sub"]');
console.log(delbut);
addEl.addEventListener("click", {
  handleEvent(event) {
    text = document.createElement('div');
    text.className = "i";
    text.innerHTML = 'hello';
    document.body.appendChild(text);
  text.style.marginLeft = 25 +"px";
  text.style.marginTop = 25 +"px";
 
  
  
  }
});
//let list1 = document.querySelectorAll("body:last-child");

//console.log(list1)

//e.onclick = function(){
  //alert('lkgu')
//};

//e.onclick = function( event ) {
  //let tag = event.target;
  //if( tag.tagName == "div" ) {
    //tag.remove();
  //} 
//};
//div.addEventListener('click', e => {
    //div.removeChild(e.target);
//})

let wrpPhoto = document.querySelector('.i');
console.log(wrpPhoto);



    let description = document.getElementsByTagName('div');
    console.log(description);
    

    let table = document.body.children;

       
    console.log(table);
    
    //let c = description[0];
    //console.log(c);

    
  
 




//Array.from(document.querySelectorAll('.i')).forEach(function(e, i) {
 // e.onclick = function() {
      //console.log(this.innerHTML, i);
 // }
//});
  
 

//console.log(text);


//let b = a[0];

//b.remove();

