let inp = document.getElementById('o');
console.log(inp);

let sub = document.getElementById('form');


sub.onsubmit = function(){
    if(document.getElementById('o').value == ""){
        document.getElementById('o').focus();
    }else{
        alert('jfhf');
    }
    //alert(document.getElementById('o').value);
    };



    //document.getElementById("name").focus();