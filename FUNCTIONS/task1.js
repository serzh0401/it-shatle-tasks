let sayHello = (name) => {
    if(name == "Mark"){
        alert("hi " + name)
    }else{
        alert("hello " + name)
    }
}

sayHello("oleg");
sayHello("Mark");


//functionexpression

let sayHi = function(name) {
    if(name == "Mark"){
        alert("hi " + name)
    }else{
        alert("hello " + name)
    }
  };

  sayHi("oleg");
  sayHi("Mark");