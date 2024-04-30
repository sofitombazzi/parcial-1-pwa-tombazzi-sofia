//Creo una constante donde guardar la URL de la pagina donde voy a sacar los datos
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

//Pruebo que se vea en consola
console.log(URL_POKEMON);

//Traigo lo que hay en la URL
fetch(URL_POKEMON).then(data => {
    console.log(data);
});