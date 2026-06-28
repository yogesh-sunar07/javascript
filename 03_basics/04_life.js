// immediately invoked function expression(IIFE)
(function yogesh(){
    console.log("this is yogesh");
    
})();
// some time there is problem of global scope polution to escape from that ue use IIFE
((name)=>{
    console.log(`this is ${name}`);
    
})("yogesh")