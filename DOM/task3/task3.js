let friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Павел"];
html = '<ol>';
friends.forEach(function(item, i, arr) { 
    
  //html += '<li>'+item+'</li>';
  if(i % 2){
	html += '<li>'+item+'</li>'; 
	let elem1 = document.createElement("li.even");
	elem1.innerHTML = item;
	document.body.appendChild(elem1);
	elem1.style.color = "blue";
	elem1.style.backgroundColor = "red";	
  }else{
	html += '<li>'+item+'</li>';
	let elem2 = document.createElement("li.odd");
	elem2.innerHTML = item;
	document.body.appendChild(elem2);
	elem2.style.color = "orange";
	elem2.style.backgroundColor = "green";	  
  }
  //html += '<li>'+item+'</li>';
});
html += '</ol>'

document.write(html);













