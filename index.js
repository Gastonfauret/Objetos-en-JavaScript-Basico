/* Los objetos nos permiten guardar una secuencia o un conjunto de propiedades
que están relacionadas con sus correspondientes valores */

var miPerro = {
    "nombre": "ramiro",
    "edad": 8,
    "peso": 15,
    "raza": "border collie"
}

/* Pueden ser llamados usando la "notacion de punto" */

miPerro.nombre; // Obtenemos: ramiro
miPerro.edad; // Obtenemos: 8
miPerro.peso; // Obtenemos: 15
miPerro.raza; // Obtenemos: border collie

console.log(`Mi perro se llama ${miPerro.nombre}`);
console.log(`La edad de mi perro es ${miPerro.edad} años`);
console.log(`El peso de mi perro es ${miPerro.peso} Kg`);
console.log(`La raza de mi perro es ${miPerro.raza}`);

/* También pueden ser llamadas con la "notacion de corchetes */
/* Nos permite acceder a objetos que tiene espacios en su nombre, pero también
podemos acceder a un objeto sin espacios.*/

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
}

miCuaderno["color"];
miCuaderno["categoria"];
miCuaderno["numero de paginas"];
miCuaderno["numero de hojas"];

console.log(miCuaderno["color"]);
console.log(miCuaderno["categoria"]);
console.log(miCuaderno["numero de paginas"]);
console.log(miCuaderno["numero de hojas"]);

/* Acceder a Propiedades: Variables */

var resultados = {
    1: "nora256",
    2: "gino567",
    3: "estefa543",
    4: "kiara098"
};

var posicion = 4;
console.log(resultados[posicion]); // Imprime: kiara098

var posicion = 2;
console.log(resultados[posicion]); // Imprime: gino567

/* Actualizar Propiedades */

var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul

mochila.color = "verde";
console.log(mochila.color); // verde

console.log(mochila.contenido); // ["botella de agua", "cuaderno"]

mochila.contenido.push("lapiz");
console.log(mochila.contenido); // ["botella de agua", "cuaderno", "lapiz"]

mochila.contenido = ["remera", "zapatillas", "ipad"]; // Asignamos nuevo array a "contenido".
console.log(mochila.contenido); // Imprime: ["remera", "zapatillas", "ipad"]

/* Agregar Propiedades */

var curso = {
    "titulo": "Aprende JS desde cero",
    "idioma": "español",
    "duracion": 30
};

/*Con Noatcion de Puntos */

curso.vistas = 34500;
console.log(curso.vistas); //Imprime: 34500
console.log(curso); // Imprime: {titulo: 'Aprende JS desde cero', idioma: 'español', duracion: 30, vistas: 34500}

/*Con Notacion de Corchetes */

curso["vistas"] = 34500;
console.log(curso.vistas); // //Imprime: 34500

/*Eliminar Propiedades */

console.log(curso.duracion); // Imorime: 30
delete curso.duracion; // Borra propiedad
console.log(curso.duracion);  // Imorime: undefined
console.log(curso); // Imprime: {titulo: 'Aprende JS desde cero', idioma: 'español', vistas: 34500}

/*Otro Ejemplo */

console.log(curso.idioma); // Imprime: español
delete curso.idioma; // Borra propiedad
console.log(curso.idioma);  // Imorime: undefined
console.log(curso); // Imprime: {titulo: 'Aprende JS desde cero', vistas: 34500}

/*Objetos para Busquedas */

function buscarElementoQuimico(simbolo) {   
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };

    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al")); // Imprime: Aluminio.
console.log(buscarElementoQuimico("S")); // Imprime: Azufre.
console.log(buscarElementoQuimico("Cl")); // Imprime: Cloro.
console.log(buscarElementoQuimico("He")); // Imprime: Helio.
console.log(buscarElementoQuimico("B")); // Imprime: Boro.
console.log(buscarElementoQuimico("Li")); // Imprime: Litio.

/* Verificar Propiedad */

var miAgenda = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56 
};

/* Verifica si el objeto tiene una propiedad */

miAgenda.hasOwnProperty("color");
console.log(miAgenda.hasOwnProperty("color")); // Imprime: true.
console.log(miAgenda.hasOwnProperty("origen")); // Imprime: false.

/*Aplicamos "hasOwnProperty()" en una funcion */
/*Verificacos si un objeto posee una propiedad */

function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return `Propiedad: ${obj[propiedad]}`
    } else {
        return `El objeto no tiene esta propiedad.`
    }
}

console.log(verificarPropiedad(miAgenda, "color")); // Imprime: Propiedad: verde
console.log(verificarPropiedad(miAgenda, "precio")); // Imprime: Propiedad: 4.56
console.log(verificarPropiedad(miAgenda, "origen")); // Imprime: El objeto no tiene esta propiedad.

/* Objetos Complejos */


