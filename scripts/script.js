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
    //Traigo el primer resultado
    const primerResultado = results[0];
    console.log(primerResultado);
    mostrarTarjeta();
});

//Armo mi mi primer tarjeta para mostrar la información
    const mostrarTarjeta = (pokemon) => {
        console.log(pokemon);
        const contenedor = document.getElementById("contenedor");
        console.log(contenedor);
    }

