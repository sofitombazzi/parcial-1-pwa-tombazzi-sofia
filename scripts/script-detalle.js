const id_pokemon = window.location.href.split('?id=')[1];

console.log(id_pokemon);

//Armo mi div
const mostrarDetalles = (pokemon) => {
    //Traigo mi contenedor del HTML
    const contenedor = document.getElementById("contenedor-detalles");
    const div = document.createElement("div");

    const titular = document.createElement('h3');
    titular.innerText = pokemon.name;
    const descripcion = document.createElement('p');

    div.appendChild(titular, descripcion);
    contenedor.appendChild(div);
}

