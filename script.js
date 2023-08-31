const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const amountElement = document.getElementById("amount");
const mainContent = document.getElementById("main-content");

const flower1 = {
    id: 1,
    name: "Hortensia",
    price: 250,
    imgUrl: "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
};
const flower2 = {
    id: 2,
    name: "Solsikke",
    price: 200,
    imgUrl: "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
};
const flower3 = {
    id: 3,
    name: "Rose",
    price: 250,
    imgUrl: "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
};

const allFlowers = [flower1, flower2, flower3]
allFlowers.forEach((x) => {
    console.log(x.id);

    //hiver fat i skabelonen 
    const template = document.getElementById("template");

    // clone template
    const clone = document.importNode(template.content, true);

    //udfyller img kopien 
    const img = clone.getElementById ("img");
    img.src = x.imgUrl;
    img.id = "image-" + x.id;

    //udfylde nytt id for amount knapp
    const amountClone = clone.getElementById("amount");
    amountClone.id = "amount-" + x.id; 


    //udfylde minus knapp
    const minusClone = clone.getElementById("minus-button");
    minusClone.id = "minus-button-" + x.id; 

    minusClone.addEventListener("click", () =>{
        if (Number(amountClone.innerText)) {
        amountClone.innerText = Number(amountClone.innerText) - 1;
        }
        
    })


    //udfylde plus knapp
    const addClone = clone.getElementById("add-button");
    addClone.id = "add-" + x.id;

    addClone.addEventListener("click", () => {
        console.log ("hej fra plus knap");
        amountClone.innerText= Number(amountClone.innerText) + 1;
        
    });

    

    //setter den udfylde kopi på hjemmesiden
    mainContent.appendChild(clone)

})


addButton.addEventListener("click", () => {
  //alert("Hej fra addbutton");
  amountElement.innerText = Number(amountElement.innerText) + 1;

  // TODO : Add 250kr to total
  // addToTotal(250); Virker ikke endnu
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
    // TODO : Subtract 250kr from total
  }
});

// Idé til optimering af koden.
function addToTotal(price) {
  document.getElementById("total").innerText = price;
}


addButton.addEventListener("click", () => {
  //alert("Hej fra addbutton");
  amountElement.innerText = Number(amountElement.innerText) + 1;

  // TODO : Add 250kr to total
  // addToTotal(250); Virker ikke endnu
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
    // TODO : Subtract 250kr from total
  }
});

// Idé til optimering af koden.
function addToTotal(price) {
  document.getElementById("total").innerText = price;
}


addButton.addEventListener("click", () => {
  //alert("Hej fra addbutton");
  amountElement.innerText = Number(amountElement.innerText) + 1;

  // TODO : Add 250kr to total
  // addToTotal(250); Virker ikke endnu
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
    // TODO : Subtract 250kr from total
  }
});

// Idé til optimering af koden.
function addToTotal(price) {
  document.getElementById("total").innerText = price;
}