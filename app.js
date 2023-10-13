import { getOne } from "./storage/methods.js";
import { endPointAbrigo, endPointCamiseta, endPointPantalon, endPointCarro } from "./storage/endPointsProducts.js"

let carritoCompra = [];

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
    actionBtnAbrigos(btnAbrigos);
    actionBtnCamisetas(btnCamisetas);
    actionBtnPantalon(btnPantalones);
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
        infoData.innerHTML = ""
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
        myButtons();
    });
};

let actionBtnAbrigos = (btnAbrigos)=>{
    btnAbrigos.addEventListener("click", async()=>{

        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnAbrigos.textContent}`;

        let resAbrigo = await getOne({endPoint: endPointAbrigo});
        
        let infoData = document.querySelector(".info-data");
        infoData.innerHTML = ""
        resAbrigo.forEach(element => {
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
        myButtons();
    });
};

let actionBtnCamisetas = (btnCamisetas)=>{
    btnCamisetas.addEventListener("click", async()=>{

        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnCamisetas.textContent}`;

        let resCamiseta = await getOne({endPoint: endPointCamiseta});
        
        let infoData = document.querySelector(".info-data");
        infoData.innerHTML = ""
        resCamiseta.forEach(element => {
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
        myButtons();
    });
};

let actionBtnPantalon = (btnPantalones)=>{
    btnPantalones.addEventListener("click", async()=>{

        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnPantalones.textContent}`;

        let resPantalon = await getOne({endPoint: endPointPantalon});
        
        let infoData = document.querySelector(".info-data");
        infoData.innerHTML = ""
        resPantalon.forEach(element => {
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
        myButtons();
    });
};

