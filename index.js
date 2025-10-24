

//console.log(process.argv);
// const metodo =process.argv[2];
// const recurso = process.argv[3];

let [, , metodo, recurso, ...params]= process.argv;
metodo = metodo.toUpperCase();
recurso = recurso.toLowerCase();


//act 1: GET products
if(metodo == 'GET' && recurso == "products"){
const response = await fetch('https://fakestoreapi.com/products')
const data = await response.json();
console.log(data);
}

//ACTIVIDAD 2
if (metodo == 'GET' && recurso.startsWith('products/')){
    //let [, id] = recurso.split("/");
    let id = recurso.split("/")[1];
    id = parseInt(id);

    if(isNaN(id) || id <= 0){
        console.log("no es un numero")
    }
 
    fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data));

}


//ACTIVIDAD 3 --- agregar un producto con POST
if(metodo == 'POST' && recurso == "products"){
    const [title, price, category] = params;
    
    const product = { 
        title, 
        price, 
        category,
    }
    fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
})
    .then(response => response.json())
    .then(data => console.log(data));
}


//---ACTIVIDAD 4 DELETE
 if(metodo == "DELETE" && recurso.startsWith('products/')){
    const id = parseInt(recurso.split("/")[1]);

    fetch('https://fakestoreapi.com/products/' + id, {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data));
    
 }