import { createFlower } from "./create-flower-v2.js";
import { fetchFlowers, postFlower } from "./flower-api.js";
import { imageToBase64 } from "./image-helpers.js";

const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const amountElement = document.getElementById("amount");
const mainContent = document.getElementById("main-content");


const form = document.getElementById("create-flower")

form.addEventListener("submit", async (event) =>  {
  console.log ("hello from form");
  event.preventDefault();
  const data =  new FormData(form);

  const name = data.get("name");
  console.log ("name");

  const price = data.get("price");
  console.log ("price");

  const image = data.get("image");
  console.log ("image");

  const base64 = await imageToBase64(image);
  console.log (base64);
  

  const flower = {
    name: name,
    price: price,
    img_base64: base64,
  };

  const x = postFlower(flower);
});

/*
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
*/

//const allFlowers = [flower1, flower2, flower3]


 async function load(){
  const body = await fetchFlowers ();

  body.forEach((x) => {
    createFlower(x);
});
}

load();