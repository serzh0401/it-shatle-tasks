
  //.then(commits => console.log(commits));

  //try{
    //fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/sommits')
  //.then(response => console.log(JSON));
    //}catch (error) {
   // alert("h")
   // };

   let url = "https://api.github.com/users/";
   let usersInfo = [];
   const getUsers = (names) => {

   names.forEach(names => {
       fetch(url + name)
       .then(response => response.json())
       .then(user => usersInfo.push(user));
       
       

   });
   return usersInfo;
};
//getUsers(['justErema']);
console.log(getUsers(['justErema']));