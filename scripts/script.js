//Creo una constante donde guardar la URL de la pagina donde voy a sacar los datos
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

//Pruebo que se vea en consola
console.log(URL_POKEMON);

//Armo mi mi primer tarjeta para mostrar la información
const mostrarTarjeta = (pokemon) => {
    console.log(pokemon);
    //Traigo mi contenedor del HTML
    const contenedor = document.getElementById("contenedor");
    contenedor.addEventListener('click', () => {
        mostrarDetalle(pokemon);
    })
    //Creo el titulo
    const titulo = document.createElement("h2");
    titulo.innerText = pokemon.name;

    const descripcion = document.createElement('p');

    contenedor.appendChild(titulo, descripcion);
    console.log(contenedor);
}

//Creo funcion mostrar detalle
    const mostrarDetalle = (pokemon) => {
        window.location.href = "http://127.0.0.1:5500/paginas/detalle.html"
    };


//Traigo lo que hay en la URL con Fetch
fetch(URL_POKEMON)
//Le pido la data en forma de JSON
.then(data => data.json ())
//Imprimo los resultados en forma de lista y los guardo en la constante results
.then(result => {
    
    console.log(result);
    const results = result.results;
    const primerResultado = results[0];
    mostrarTarjeta(primerResultado);

});



