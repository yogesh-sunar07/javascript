const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const password = 1234;

r1.question("Enter your name",(name)=>{

    r1.question("Enter your password",(code)=>{
    code = Number(code);
    
        
    
    if (password === code){
        console.log("welcome "+ name);
    }

    else{
        console.log("error");
        
    }
         r1.close();
         
    })
})