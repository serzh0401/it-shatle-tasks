function text() {
	let elem = document.createElement("p.text");
	elem.innerHTML = "это всеголишь текст";
	document.body.appendChild(elem);
  };

  text();

  function alert() {
	let elem1 = document.createElement("div.alert");
	elem1.innerHTML = "это сообщение об ошибке";
	document.body.appendChild(elem1);
	elem1.style.color = "blue";
	//elem1.style.fontSize = "100px";
	elem1.style.backgroundColor = "red";
	elem1.style.padding = "20px";
	elem1.style.top = "50px";
	elem1.style.left = "2px";
  };

   alert();
   

  
   


  