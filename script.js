   

function clickHandler(productPrice, productId, isIncrease){

   let productCount = parseInt(document.getElementById(productId+"-count").value)
  
   if (isIncrease == true) {
      productCount++;
   }
   if (isIncrease==false && productCount>0) {
      productCount--;
   }
   document.getElementById(productId+"-count").value = productCount;
   document.getElementById(productId+"-total").innerText = productCount * productPrice;

   calculateTotal();
   
}

function calculateTotal(){
   let phoneTotal = parseInt(document.getElementById("phone-total").innerText);
   let caseTotal = parseInt(document.getElementById("case-total").innerText)
   let subTotal = phoneTotal + caseTotal;
   let Tex = (subTotal*5)/100;
   let finalTotal = subTotal +Tex;
   
   document.getElementById("subTotal").innerText = subTotal;
   document.getElementById("Tex").innerText = Tex;
   document.getElementById("finalTotal").innerText = finalTotal;
}



function submitFunction(){

    
   let inputArea = document.getElementsByClassName("input");

   for (let i = 0; i < inputArea.length; i++) {
        inputArea[i].value = 0;
    
   }

   let priceArea = document.getElementsByClassName("price");

   for (let i = 0; i < priceArea.length; i++) {
        priceArea[i].innerText = "$" + 00;
   }

   document.getElementById("subTotal").innerText = 00;
   document.getElementById("Tex").innerText = 00;
   document.getElementById("finalTotal").innerText = 00;
}