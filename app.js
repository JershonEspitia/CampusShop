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
    actionBtnPantalones(btnPantalones);
    actionBtnCarrito(btnCarrito);
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
        infoData.removeAttribute("id");
        let idUnico = 1;
        allProducts.forEach(element => {
            infoData.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card">
                    <div class="headProduct">
                        <img id="img${idUnico}" class="imageProduct" src="${element.imagen}" alt="producto">
                    </div>
                    <div class="bodyCard">
                        <div class="namePriceProduct">
                            <h3 id="title${idUnico}" class="titleProduct">${element.nombre}</h3>
                            <h5 id="price${idUnico}" class="priceProduct">$ ${element.precio}</h5>
                        </div>
                        <a id="button${idUnico}" class="myButton">Agregar</a>
                    </div>
                </div>
                `
            );
            idUnico += 1;
        });
        myButtonsAdd();
    });
};

let actionBtnAbrigos = (btnAbrigos)=>{
    btnAbrigos.addEventListener("click", async()=>{

        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnAbrigos.textContent}`;

        let resAbrigo = await getOne({endPoint: endPointAbrigo});
        
        let infoData = document.querySelector(".info-data");
        infoData.innerHTML = ""
        infoData.removeAttribute("id");
        let idUnico = 1;
        resAbrigo.forEach(element => {
            infoData.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card">
                    <div class="headProduct">
                        <img id="img${idUnico}" class="imageProduct" src="${element.imagen}" alt="producto">
                    </div>
                    <div class="bodyCard">
                        <div class="namePriceProduct">
                            <h3 id="title${idUnico}" class="titleProduct">${element.nombre}</h3>
                            <h5 id="price${idUnico}" class="priceProduct">$ ${element.precio}</h5>
                        </div>
                        <a id="button${idUnico}" class="myButton">Agregar</a>
                    </div>
                </div>
                `
            );
            idUnico += 1;
        });
        myButtonsAdd();
    });
};

let actionBtnCamisetas = (btnCamisetas)=>{
    btnCamisetas.addEventListener("click", async()=>{

        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnCamisetas.textContent}`;

        let resCamiseta = await getOne({endPoint: endPointCamiseta});
        
        let infoData = document.querySelector(".info-data");
        infoData.innerHTML = ""
        infoData.removeAttribute("id");
        let idUnico = 1;
        resCamiseta.forEach(element => {
            infoData.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card">
                    <div class="headProduct">
                        <img id="img${idUnico}" class="imageProduct" src="${element.imagen}" alt="producto">
                    </div>
                    <div class="bodyCard">
                        <div class="namePriceProduct">
                            <h3 id="title${idUnico}" class="titleProduct">${element.nombre}</h3>
                            <h5 id="price${idUnico}" class="priceProduct">$ ${element.precio}</h5>
                        </div>
                        <a id="button${idUnico}" class="myButton">Agregar</a>
                    </div>
                </div>
                `
            );
            idUnico += 1;
        });
        myButtonsAdd();
    });
};

let actionBtnPantalones = (btnPantalones)=>{
    btnPantalones.addEventListener("click", async()=>{

        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnPantalones.textContent}`;

        let resPantalon = await getOne({endPoint: endPointPantalon});
        
        let infoData = document.querySelector(".info-data");
        infoData.innerHTML = ""
        infoData.removeAttribute("id");
        let idUnico = 1;
        resPantalon.forEach(element => {
            infoData.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card">
                    <div class="headProduct">
                        <img id="img${idUnico}" class="imageProduct" src="${element.imagen}" alt="producto">
                    </div>
                    <div class="bodyCard">
                        <div class="namePriceProduct">
                            <h3 id="title${idUnico}" class="titleProduct">${element.nombre}</h3>
                            <h5 id="price${idUnico}" class="priceProduct">$ ${element.precio}</h5>
                        </div>
                        <a id="button${idUnico}" class="myButton">Agregar</a>
                    </div>
                </div>
                `
            );
            idUnico += 1;
        });
        myButtonsAdd();
    });
};

let actionBtnCarrito = (btnCarrito)=>{
    btnCarrito.addEventListener("click", ()=>{
        let titleSection = document.querySelector("#titleSection");
        titleSection.textContent = `${btnCarrito.querySelector("#nombreCarrito").textContent}`;

        renderCarrito();
    });
};

let renderCarrito = ()=>{
    let infoData = document.querySelector(".info-data");
    infoData.innerHTML = ""
    infoData.setAttribute("id","dataInfo")

    let idUnico = 0;
    let totalCompra = 0

    if(carritoCompra.length === 0) {
        infoData.insertAdjacentHTML(
            "beforeend",
            `
            <h4>NO HAY PRODUCTOS EN TU CARRITO :(</H4>
            `
        );
    } else {
        carritoCompra.forEach(element => {

            infoData.insertAdjacentHTML(
                "beforeend",
                `
                <div id="${idUnico}" class="cardCarrito">
                    <div class="bodyCard">
                        <div class="headProduct">
                            <img id="img${idUnico}" class="imageProductCarrito" src="${element.imagen}" alt="producto">
                        </div>
                        <div class="nameProduct">
                            <h4>Nombre</h4>
                            <h5 id="title${idUnico}" class="titleProduct">${element.nombre}</h5>
                        </div>
                        <div class="cantidadProduct">
                            <h4>Cantidad</h4>
                            <h5>CANTIDAD</h5>
                        </div>
                        <div class="precioProduct">
                            <h4>Precio</h4>
                            <h5>${element.precio}</h5>
                        </div>
                        <div class="subtotalProduct">
                            <h4>Subtotal</h4>
                            <h5>SUBTOTAL</h5>
                        </div>
                        <div>
                            <a id="${idUnico}" class="myButton btnEliminar btnEliminarOne">ELIMINAR</a>
                        </div>

                    </div>
                </div>
                `
            );
            idUnico += 1;
            totalCompra = totalCompra + Number(element.precio.split(" ")[1])
        });

        infoData.insertAdjacentHTML(
            "beforeend",
            `
            <div class="espacioCompra">
                <div>
                    <a id="vaciarCarrito" class="myButton btnEliminar">VACIAR CARRITO</a>
                </div>
                <div id="cantidadTotal">
                    <div>
                        <h4>Total:</h4>
                        <span>${totalCompra}</span>
                    </div>
                    <div>
                        <a id="comprarTodo" class="myButton">COMPRAR AHORA</a>
                    </div>
                </div>
            </div>
            `
        );

        eliminarCarrito();
        eliminarProducto();
    }
};

let myButtonsAdd = ()=>{
    let myButton = document.querySelectorAll(".myButton");

    myButton.forEach(element => {
        element.addEventListener("click", ()=>{
            let numCarrito = document.querySelector("#cantidadItem");
            let cardProduct = element.parentNode.parentNode;
            let img = cardProduct.querySelector(".imageProduct").src
            let nombre = cardProduct.querySelector(".titleProduct").textContent
            let precio = cardProduct.querySelector(".priceProduct").textContent

            let product = {
                "imagen": img,
                "nombre": nombre,
                "precio": precio
            }

            carritoCompra.push(product);
            numCarrito.textContent = carritoCompra.length;
        });
    });
};

let eliminarProducto = ()=>{
    let btnEliminar = document.querySelectorAll(".btnEliminarOne");
    btnEliminar.forEach(element => {
        element.addEventListener("click", ()=>{
            let numCarrito = document.querySelector("#cantidadItem");
            carritoCompra.splice(Number(element.id), 1);
            alert("Producto eliminado :(")
            numCarrito.textContent = carritoCompra.length;
            renderCarrito();
        });
    });
};

let eliminarCarrito = ()=>{
    let vaciarCarrito = document.querySelector("#vaciarCarrito");
    let comprarCarrito = document.querySelector("#comprarTodo");
    vaciarCarrito.addEventListener("click", ()=>{
        carritoCompra = []
        alert("Se elimaron todos los productos :(");
        window.location.reload();
    });
    comprarCarrito.addEventListener("click", ()=>{
        carritoCompra = []
        alert("GRACIAS POR TU COMPRA, VUELVE PRONTO! :D");
        window.location.reload();
    });
}