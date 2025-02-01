# Amigo Secreto

Este proyecto tiene como objetivo principal fortalecer mis habilidades en lógica de programación a través de la creación de una aplicación de sorteo de "Amigo Secreto".

## Descripción

La aplicación permite a los usuarios agregar amigos a una lista, mostrar la lista de amigos y sortear un amigo secreto aleatoriamente.
Además, incluye la funcionalidad para reiniciar el juego y comenzar desde cero.

hice algunas modificaciones en el html y css para el nuevo boton de reincio implementado, para asi porder hacerlo un poco más completo.

## Funcionalidades

### Agregar Amigos

La función `agregarAmigo` permite agregar nombres a la lista de amigos. Si el campo de entrada está vacío, se muestra un mensaje de alerta solicitando al usuario que ingrese un nombre.

### Mostrar Lista de Amigos

La función `listaAmigos` muestra los nombres de los amigos agregados en una lista desordenada (`<ul>`). Cada amigo se muestra como un elemento de lista (`<li>`).

### Sortear Amigo Secreto

La función `sortearAmigo` selecciona aleatoriamente un amigo de la lista y lo muestra como el "Amigo Secreto" elegido. Si no hay amigos en la lista, se muestra un mensaje de alerta.

### Reiniciar Juego

La función `reiniciarJuego` reinicia la lista de amigos y limpia los campos de entrada y resultados en el DOM. También oculta el botón de reinicio.

## Estructura del Código

```javascript
let amigos = [];
let campo = document.getElementById('amigo');
let lista = document.querySelector('#listaAmigos');
let result = document.getElementById('resultado');
let reinicio = document.querySelector('#reinicio');

// Agregar amigos
function agregarAmigo() {
    if (campo.value === '') {
        alert('Por Favor, inserte un nombre');
    } else {
        amigos.push(campo.value);
        campo.value = '';
        listaAmigos();
    }
}

// Mostrar lista de amigos
function listaAmigos() {
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        let nombre = document.createElement('li');
        nombre.textContent = amigo;
        lista.appendChild(nombre);
    }
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    } else {
        let i = Math.floor(Math.random() * amigos.length);
        let nombreElegido = amigos[i];
        result.textContent = `Amigo Secreto elegido es: ${nombreElegido}`;
        reinicio.classList.remove('hidden');
        reinicio.classList.add('button-draw');
        lista.innerHTML = '';
    }
}

// Reiniciar juego
function reiniciarJuego() {
    campo.value = '';
    result.innerHTML = '';
    amigos = [];
    lista.innerHTML = '';
    reinicio.classList.add('hidden');
    reinicio.classList.remove('button-draw');
}
```
## Cómo Utilizar la Aplicación
* Ingresa el nombre de un amigo en el campo de entrada.

* Haz clic en el botón para agregar el nombre a la lista.

* Repite el proceso para agregar más amigos.

* Haz clic en el botón de sorteo para elegir un amigo secreto aleatoriamente.

* Si deseas reiniciar el juego, haz clic en el botón de reinicio.

¡Espero que te sea de ayuda!


