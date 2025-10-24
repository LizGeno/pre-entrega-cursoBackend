

//console.log(process.argv);
// const metodo =process.argv[2];
// const recurso = process.argv[3];

let [, , metodo, recurso]= process.argv;
metodo = metodo.toUpperCase();
recurso = recurso.toLowerCase();

if(metodo == 'GET' && recurso == "products"){
const response = await fetch('https://fakestoreapi.com/products')
const data = await response.json();
console.log(data);
}