const createLi = (name) =>{
    const li = document.createElement('li');
    const arr = name.split('');
    forEach(letter => {
        const span = document.createElement('span')
        span.innerHTML = letter;
        if(isSimilar(letter)){
            span.style.color = 'red';
        }
    })
}
const isSimilar = (letter , name) => name.toLowerCase().split(letter.toLowerCase());