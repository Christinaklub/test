export function createFlower(x){}
console.log (x.id);

const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const amountElement = document.getElementById("amount");
const mainContent = document.getElementById("main-content");


const allFlowers = [flower1, flower2, flower3]

allFlowers.forEach((x) => {
    console.log(x.id);

    //hiver fat i skabelonen 
    const template = document.getElementById("template");

    // clone template
    const clone = document.importNode(template.content, true);

    //udfyller img kopien 


    if (x.imgUrl){ 
      const img = clone.getElementById ("img");
      img.src = x.imgUrl;
      img.id = "image-" + x.id;

    } else if (x.img_base64) {
      const img  = clone.getElementById("img");
      img.src = x.img_base64;
    }

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
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
  }
});

// Idé til optimering af koden.
function addToTotal(price) {
  document.getElementById("total").innerText = price;
}


addButton.addEventListener("click", () => {
  //alert("Hej fra addbutton");
  amountElement.innerText = Number(amountElement.innerText) + 1;
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
  }
});


addButton.addEventListener("click", () => {
  //alert("Hej fra addbutton");
  amountElement.innerText = Number(amountElement.innerText) + 1;
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
  }
});

function addToTotal(price) {
  document.getElementById("total").innerText = price;
}