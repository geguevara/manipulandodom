const form = document.querySelector("#form");
const input = document.querySelector("#input-number");
const errorMessage = document.querySelector("#error-span");
const card = document.querySelector("#card");
const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

let cardPizzas = JSON.parse(localStorage.getItem("pizza")) || [];

const saveLocalStorage = () =>{
  localStorage.setItem("pizza", JSON.stringify(cardPizzas));
}

const searchPizza = (value) =>{
  pizzas.find((pizza)=>pizza.id === value);
  
}

const showEmpty = () =>{
  errorMessage.textContent= `Ingrese un numero` 
}

const createCard = () => {
  const {imagen, nombre , precio} = pizza;
  return` <div id="card-container">
  <img src="${imagen}" alt="" srcset="">
  <h2>${nombre}</h2>
  <p>${precio}</p>
</div>`
}

const renderPizza = (pizza) =>{
  if (!pizza){
    errorMessage.textContent= `No existe pizza con ese id.`;
    
  }else{
    return createCard(pizza)
  }
}

const submitHandler = (e) =>{
    e.preventDefault();
    const searchedId= input.value;
    if (!searchedId){
      showEmpty();
      return;
    }
    const searchedPizza = searchPizza (Number(searchedId));
    renderPizza(searchedPizza);
    saveLocalStorage(searchedPizza);
    addForm.reset();
}
const init = () =>{
  /* document.addEventListener("DOMContentLoaded", renderPizza) */
  form.addEventListener("submit", submitHandler);

};
init();