/*declaramos amigos como un array vacía, pa irle agregando elementos según vayamos avanzando*/ 
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

//prohibiendo por comparación estricta la entrada de datos vacíos
if (nombre === "")  {
    alert("Por favor, ingrese un nombre.");
    return;
                    }

    // Validar que solo contenga letras y espacios
    let soloLetras = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!soloLetras.test(nombre))   {
        alert("El nombre solo puede contener letras. No se permiten números ni símbolos.");
        input.value = "";
        return;
                                    }

        //Si es válido, entonces añadimos el nombre al array "amigos"
        amigos.push(nombre);
        //borrando el campo de texto para no tener que borrarlo al escribir y añadir un nombre
        input.value = "";
        //mostramos la lista nueva en la pantalla, con el nombre agregado reciéntemente 
        mostrarLista();

                        }


//Colocamos los datos obtenidos en el HTML (mostramos los datos en pantalla xd)
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

/*función para escoger un nombre de forma aleatoria */
function sortearAmigo() {
    /*para impedir el sorteo si no hay nombres*/
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    //lógica agregada como en la adivinanza del número
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //acá obtenemos el resultado c:
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

//Funcionalidad para que la tecla "Enter" = "Añadir" funcione y sea SOLO en el input
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // llama a la función (agrega el nombre al presionar enter)
    }
}
);