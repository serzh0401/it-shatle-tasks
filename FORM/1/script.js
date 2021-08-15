document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Form has submited");
    let sub = document.getElementById('i');
console.log(sub);
sub.setAttribute('disabled', 'disabled');
let forma = document.getElementById("form");
forma.reset();

});

let sub = document.getElementById('i');
console.log(sub);
