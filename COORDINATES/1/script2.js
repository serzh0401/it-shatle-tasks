
let x = document.getElementById('xscroll');
let y = document.getElementById('yscroll');

document.onscroll = function (event)
  { 
  x.innerHTML = window.pageXOffset;
  y.innerHTML = window.pageYOffset;
  };