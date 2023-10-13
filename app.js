import { getOne } from "./storage/methods.js";
import { endPointAbrigo, endPointCamiseta, endPointPantalon, endPointCarro } from "./storage/endPointsProducts.js"

addEventListener("DOMContentLoaded", async() => {
    let btnTodos = document.querySelector("#todosProducts");
    let btnAbrigos = document.querySelector("#abrigos");
    let btnCamisetas = document.querySelector("#camisetas");
    let btnPantalones = document.querySelector("#pantalones");
    let btnCarrito = document.querySelector("#carrito");

    // console.log( await getOne({endPoint: endPointAbrigo}));
    // console.log( await getOne({endPoint: endPointCamiseta}));
    // console.log( await getOne({endPoint: endPointPantalon}));
    // console.log( await getOne({endPoint: endPointCarro}));
    
    actionBtnTodos(btnTodos);
});

let actionBtnTodos = (btnTodos)=>{
    btnTodos.addEventListener("click", async()=>{
        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnTodos.textContent}`;

        let allProducts = []

        let resAbrigo = await getOne({endPoint: endPointAbrigo});
        resAbrigo.forEach(element => {
            allProducts.push(element)
        });
        let resCamiseta = await getOne({endPoint: endPointCamiseta});
        resCamiseta.forEach(element => {
            allProducts.push(element)
        });
        let resPantalon = await getOne({endPoint: endPointPantalon});
        resPantalon.forEach(element => {
            allProducts.push(element)
        });
        
        let infoData = document.querySelector(".info-data");
        allProducts.forEach(element => {
            infoData.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card">
                    <div class="headProduct">
                        <img class="imageProduct" src="${element.imagen}" alt="producto">
                    </div>
                    <div class="bodyCard">
                        <div class="namePriceProduct">
                            <h3 class="titleProduct">${element.nombre}</h3>
                            <h5 class="priceProduct">$ ${element.precio}</h5>
                        </div>
                        <a href="#" class="myButton">Agregar</a>
                    </div>
                </div>
                `
            );
        });
        
    });
};