
var cart = [];

function inLogic (obj){
    // alert("In logic Part")

   
    readData(obj);
    console.log("Data Logged In") ;
    calValue();
    
}

function readData(obj){

    cart.push(obj);
    console.log("Data Pushed to Local Storage !");
    localStorage.setItem("CART", JSON.stringify(cart));
    //alert("Item added to cart");
    console.log("Locally Stored");

}

function calValue() {
    
    var items = JSON.parse(localStorage.getItem("CART"));
   
    var sum = 0 ;
    console.log(items.length);
    for (const [key, value] of Object.entries(items)) {
            sum = sum + parseFloat(value.price) ; 
    }

document.getElementById("cart1").value = items.length ; 
document.getElementById("cart2").value = sum ; 
}


function checkout(){
  //  alert("Ready to checkout") ;
    var itemNo = document.getElementById("cart1").value ;
    if(itemNo == 0 ){
        alert("Please Add Atleast one item to checkout") ;
    }
    else{
        window.location.href = "check.html";
    }

}
