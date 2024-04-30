//Creo una constante donde guardar la URL de la pagina donde voy a sacar los datos
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

//Pruebo que se vea en consola
console.log(URL_POKEMON);

//Traigo lo que hay en la URL con Fetch
fetch(URL_POKEMON)
//Le pido la data en forma de JSON
.then(data => data.json ())
//Imprimo los resultados en forma de lista y los guardo en la constante results
.then(result => {
    const results = result.results;
    console.log(results);
});