# Pre-entrega Curso Backend  
**Autor: Elizabeth Geno**  

Este proyecto es una aplicación de consola simple en **Node.js** que gestiona productos interactuando con la [FakeStore API](https://fakestoreapi.com/).

---

## Cómo Usar  

Para ejecutar cualquiera de las siguientes acciones, debes usar el script `start` de npm desde tu terminal.  

La estructura general del comando es:  
`npm run start <METODO> <recurso> [parámetros...]`

---

## Comandos Disponibles  

### 1. Obtener todos los productos  
Devuelve una lista completa de todos los productos en la API.  

**Comando:**  
`npm run start GET products`

---

### 2. Obtener un producto por ID  
Busca y devuelve un solo producto basado en el ID numérico que proporciones.  

**Comando:**  
`npm run start GET products/<id>`  

**Ejemplo:**  
`npm run start GET products/5`

---

### 3. Agregar un nuevo producto  
Crea un nuevo producto. Debes pasar el título, el precio y la categoría como argumentos adicionales.  

**Comando:**  
`npm run start POST products <titulo> <precio> <categoria>`  

**Ejemplo:**  
`npm run start POST products "Camiseta de Algodon" 25.50 "Ropa"`  


---

### 4. Eliminar un producto  
Simula la eliminación de un producto usando su ID.  
La API de FakeStore no borra realmente el registro, pero responde con el objeto que supuestamente fue eliminado.  

**Comando:**  
`npm run start DELETE products/<id>`  

**Ejemplo:**  
`npm run start DELETE products/10`
