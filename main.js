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
const form = document.querySelector("#form");
const input = document.querySelector("#input-number");
const errorMessage = document.querySelector("#error-span");
const card = document.querySelector("#card");

let listPizza = JSON.parse(localStorage.getItem("pizza")) || [];

const saveLocalStorage = (listPizza) => {
	localStorage.setItem("pizza", JSON.stringify(listPizza));
};

const selectPizza = (value) => pizzas.find(pizza=>pizza.id === value)
const isEmpty= () =>{
    errorMessage.textContent=`Ingresa un número.`
}
const createPizza = (pizza)=>{
    const {imagen, nombre, precio} = pizza
    return `
        <div id="card-container">
            <img src="${imagen}" alt="" srcset="">
            <h2>${nombre.toUpperCase()}</h2>
            <p>$ ${precio}</p>
        </div>
        `
}
const renderPizza=(pizza)=>{
    if(!pizza){
        errorMessage.textContent=`No existe este id.`
        
    }else{
        errorMessage.textContent=[]; 
        card.innerHTML= createPizza(pizza);
        
    }
}
const saveRenderPizza = (listPizza) =>{
    if (listPizza){
  card.innerHTML = createPizza(listPizza);
}
}
const submitSearch = (e)=>{
    e.preventDefault();
    const searchedId = input.value;
    if(!searchedId){
        isEmpty();
        return;
    }
    const searchedPizza = selectPizza(Number(searchedId));
    renderPizza(searchedPizza);
    saveLocalStorage(searchedPizza);
    form.reset();
};

const init =()=>{
    /* document.addEventListener("DOMContentLoaded", createPizza); */
    form.addEventListener("submit", submitSearch);
    saveRenderPizza(listPizza)
    
}
init()