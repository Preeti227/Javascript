//Immediately Invoked Function Expression (IIFE)
//To reduce the global scope pollution 
(function fast(){
    console.log("Immediately Invoked Function Expression activated")
})();

(() => {
    console.log("IIFE executed");
})();

//Use semi-colon while using two IIFE functions