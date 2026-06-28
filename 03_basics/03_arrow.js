const user = {
    username: "yogesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }


}

// user.welcomemessage()
// user.username = "dipesh"
// user.welcomemessage()

// console.log(this);// in node its give empty object in browser it give windows

// function water(){
//     let username = "yogesh"
//     console.log(this.username);//undefine
    
// }
// water()


// const milk = function(){
//     let username ="dipesh"
//     console.log(this.username);
    
// }


// const milk = ()=> {
//     let username ="dipesh"
//     console.log(this.username);
    
// }
// milk()

// const addtwo = (num1, num2)=>{
//     return num1+num2
// }

const addthree = (num1,num2,num3)=> (num1+num2+num3)
console.log(addthree(2,3,9))


//