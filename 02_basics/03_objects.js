//++++++++++++++++++++++ singleton++++++++++++++++++++++++
//Object.create

//+++++++++object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "yogesh",
    "full name" : "yogesh sunar",
    [mySym] : "myKey1",  
    age : 18,
    location : "dumkibas",
    email : "yogesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","sunday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email ="chatgpt@gmail.com"
// // Object.freeze(JsUser)// freeze object no change 
// JsUser.email ="dipesh@mail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JsUsers");
    

}
JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
    

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

