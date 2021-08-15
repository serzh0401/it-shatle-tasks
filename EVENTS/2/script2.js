let addEl = document.querySelector('button[type="submit"]');
let e = document.querySelector('button[type="sub"]');   
    
addEl.onclick = function(event){
    let text = document.createElement('div');
    text.className = "i";
    text.innerHTML = 'hello';        
    document.body.appendChild(text);
    e.onclick = function(){
        let all = document.querySelectorAll('.i');
        let last = all[all.length - 1];
        last.remove();
};
};
 





