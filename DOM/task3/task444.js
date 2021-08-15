const str = document.querySelector(".white");
const showEvent = (event) => {
	alert("block")
};
str.addEventListener('click' , showEvent);

const link = document.querySelector('.adres');

const f = (event) => {
	event.preventDefault();
	event.stopPropagation();
	alert('tttttt')
};
link.addEventListener('click', f);
  

   
   

   
      
