var global = [] ;
var sum = 0 ;
function getdata() {


   console.log("checkout");

   var storedArray = localStorage.getItem("CART");
   var ha = JSON.parse(storedArray);

   let count = 1 ; 
   for (let a of ha) {
      
    
    var table = document.getElementById("cart");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);

    cell1.innerHTML = count.toString() ;
    cell2.innerHTML = a.item;
    cell3.innerHTML = a.price ; 


    sum = sum + parseFloat(a.price) ; 

    count++;

   }

   document.getElementById("subtotal").value = sum.toFixed(3)  ; 
   document.getElementById("tax").value =  (sum * 0.045).toFixed(3) ; 
   document.getElementById("total").value = (sum + ( sum * 0.045)).toFixed(3)  ; 
  

};

