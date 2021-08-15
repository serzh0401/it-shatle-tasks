let sub = document.getElementById('forma');
console.log(sub);
sub.onsubmit = function(){
//let a = document.getElementById('i');
//console.log(a.value);
alert(document.getElementById('i').value);
};

let b = document.getElementsByName("a");



     //let chbox=document.getElementById('1417');
    //console.log(chbox);
    //if(chbox.checked == true){
        //alert('lklk')
   // };

var checkbox = document.querySelector('[type="checkbox"]');
var button = document.querySelector('button');

// Event Listener:
sub.addEventListener('change', function(event) {
  if(event.target.checked){
    alert("jug;oig;");
  }
  
    //alert(event.target.checked);
});