// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    let campo = document.getElementById('amigo');
    if (campo.value === '') {
        alert('Por Favor, inserte un nombre')
    }else{
        amigos.push(campo.value);
        console.log(amigos);
        if (campo.value != '') {
            campo.value = '';
        }
    }
}
