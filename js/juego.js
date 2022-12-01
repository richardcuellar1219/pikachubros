var escenario = document.querySelector('#escenario');
var mario = document.querySelector('#runner img');
var avanceEscenario = 0;

var intervaloEscenario = setInterval(moverEscenario, 100);

document.addEventListener('keydown', saltar);
document.addEventListener('keyup', correr);

//var seta = setTimeout(salirSeta, 5000);
var tiempoIntervalo = Math.random() * 5000;
var seta = setInterval(salirSeta, tiempoIntervalo);


function moverEscenario() {
    avanceEscenario -= 10;
    escenario.style.backgroundPosition = avanceEscenario + 'px 0px';
}

function saltar(e) {
    switch (e.keyCode) {
        case 32:
            mario.src = "images/salto.gif";
            mario.style.display = 'inline-block';
            mario.style.paddingBottom = "100px";
            break;
    }

}

function correr(e) {
    switch (e.keyCode) {
        case 32:
            mario.src = "images/mario.gif";
            mario.style.paddingBottom = "0px";
            break;
    }
}


function salirSeta() {
    var malo = document.createElement('div');
    var avanceMalo = 0;
    malo.className = 'malo';

    escenario.appendChild(malo);
    var intervaloBicho = setInterval(function () {
        if (avanceMalo <= 850) {
            avanceMalo += 15;
            malo.style.marginRight = avanceMalo + 'px';
        } else {
            malo.parentNode.removeChild(malo);
            clearInterval(intervaloBicho);
        }
    }, 100);



}

