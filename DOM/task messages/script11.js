const ul = document.createElement('ul');
let sum = 0;
let addLi = () => {
    let value = prompt('enter number' , '')
    if(!value || isNaN(+value)){
        document.body.appendChild(ul);
    }else{
        sum += +value;
        let li = document.createElement('li');
        li.innerHTML = sum + value;
        ul.appendChild(li);
        addLi();

    }
}
addLi();