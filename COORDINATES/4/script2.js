let tabs = document.getElementsByClassName('tab');

let sections = document.getElementsByClassName('section');

for(let i =0; i<tabs.length; i++){
   tabs[i].onclick = tabclick
}

function tabclick(event){
  let tab = event.target;
  let tabId = tab.dataset.id;

  for(let k =0; k<tabs.length; k++){
    tabs[k].classList.remove('active');
    tabs[tabId-1].classList.add('active');

    sections[k].classList.remove('active');
    sections[tabId-1].classList.add('active'); 

  }
}