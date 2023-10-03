//console.log('ok');

let price = 0;
const discount = "SELL200";
let totalPrice, discount20 = 0, count = 0;

function myFunction(id) {
        //alert("Button was clicked using addEventListener!");
        count++;
        const selectedItemContainer = document.getElementById(id);
     //   console.log(selectedItemContainer.childNodes[3].childNodes[3]);
        const itemName = selectedItemContainer.childNodes[3].childNodes[3].innerText;
        const li = document.createElement("li");
        li.innerText = count + "." + " " + itemName;
        document.getElementById("list").appendChild(li);
    
    
        const productPriceString = selectedItemContainer.childNodes[3].childNodes[5].childNodes[0].innerText;
    
        const productPrice = parseFloat(productPriceString);
    
        price = price + productPrice;
        discount20 = 0;
    
        if(price > 0){
            document.getElementById("make-purchase").disabled = false;
        }
    
        if(price >= 200){
            document.getElementById("apply").disabled = false;
        }
    
        document.getElementById("total-price").innerText = price.toFixed(2);
        document.getElementById("discount20").innerText = discount20.toFixed(2);
        document.getElementById("final-price").innerText = price.toFixed(2);
    
      //  console.log(price.toFixed(2));
}

document.getElementById("product-1").addEventListener("click", function(){
    myFunction("product-1");
  });

  document.getElementById("product-2").addEventListener("click", function(){
    myFunction("product-2");
  });

  document.getElementById("product-3").addEventListener("click", function(){
    myFunction("product-3");
  });

  document.getElementById("product-4").addEventListener("click", function(){
    myFunction("product-4");
  });

  document.getElementById("product-5").addEventListener("click", function(){
    myFunction("product-5");
  });

  document.getElementById("product-6").addEventListener("click", function(){
    myFunction("product-6");
  });


  document.getElementById("apply").addEventListener("click", function(){
   // alert("Button was clicked using addEventListener!");

    const discountInput = document.getElementById("discount").value;

    if(discount === discountInput){
       // alert("Button was clicked using addEventListener!");

       discount20 = price * .2;
       totalPrice = price * .8;

       document.getElementById("discount20").innerText = discount20.toFixed(2);
       document.getElementById("final-price").innerText = totalPrice.toFixed(2);
    }
    else{
        alert("Invalid Coupon. Please try again");
    }

    document.getElementById("discount").value = "";
  });