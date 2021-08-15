document.getElementById('i').onclick = function scrollUp() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};


let but = document.querySelector('.SubmitButton');

document.onscroll = function (event)
  { 
  but.style.position = 'fixed';
  but.style.top = '10px';
  but.style.left = '100px';
  };