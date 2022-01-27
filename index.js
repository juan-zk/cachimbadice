var lvl = 0

//aca se guarda la el orden que tiene que presionar para pasar el nivel
var pattern = []
//aca se guarda lo que el jugador pone
var usrpattern = []

//al presionar una tecla ejecuta startgame
$(document).keypress(startgame);

//presionar un boton
$(".btn").click(function (e) {
    var pressedBtn = e.currentTarget.id; //guardo que id de boton se presiono
    $("#" + pressedBtn).toggleClass("pressed");
    setTimeout(function () {
        $("#" + pressedBtn).toggleClass("pressed");
    }, 100);
    switch (pressedBtn) { //sonido para el boton presionado
        case "1":
            var sonido = new Audio("sounds/green.mp3")
            sonido.play();
            break;
        case "2":
            var sonido = new Audio("sounds/red.mp3")
            sonido.play();
            break;
        case "3":
            var sonido = new Audio("sounds/yellow.mp3")
            sonido.play();
            break;
        case "4":
            var sonido = new Audio("sounds/blue.mp3")
            sonido.play();
            break;
    }


    usrpattern.push(e.currentTarget.id) // guardo el boton presionado en el array de el usuario

    check(usrpattern.length - 1); // chequeo pasandole cual respuesta del usuario chequear

})

function startgame() { // pongo todo en 0, reseteo nivel y ya arranco con el primer nivel
    lvl = 1;
    $("h1").text("Nivel 1");

    pattern = [];
    usrpattern = [];

    console.log(pattern);
    console.log(usrpattern);

    animarrandom();
}

function nextlvl() { //sumo +1 al nivel, lo marco en pantalla y agrego otro al patron
    lvl++;
    $("h1").text("Nivel " + lvl);
    usrpattern = [];
    animarrandom();
}

function wrong() { //pongo mensaje de error y reseteo los patrones para volver a empezar
    $("h1").text("Fallaste, Cachimba no dijo eso! Presiona una tecla para volver a empezar");
    var sonido = new Audio("sounds/wrong.mp3");
    sonido.play();
    $("body").toggleClass("game-over");
    setTimeout(function () {
        $("body").toggleClass("game-over");
    }, 200);

    pattern = [];
    usrpattern = [];

}

function animarrandom() { //elijo un boton random, le pongo animacion y sonido y lo guardo en el patron del juego
    var r = Math.floor(Math.random() * 4) + 1;
    $("#" + r).animate({ opacity: 0.1 });
    $("#" + r).animate({ opacity: 1 });
    switch (r) {
        case 1:
            var sonido = new Audio("sounds/green.mp3")
            sonido.play();
            break;
        case 2:
            var sonido = new Audio("sounds/red.mp3")
            sonido.play();
            break;
        case 3:
            var sonido = new Audio("sounds/yellow.mp3")
            sonido.play();
            break;
        case 4:
            var sonido = new Audio("sounds/blue.mp3")
            sonido.play();
            break;
    }

    pattern.push(r.toString());
}

function check(index) { // chequeo la respuesta del jugador en la posicion y luego si ya igualo la cantidad en el patron del juego mando el siguiente lvl, si se equivoco en alguno llamo a wrong para que vuelva a empezar
    console.log(pattern);
    console.log(usrpattern);
    if (pattern[index] === usrpattern[index]) {
        console.log("correct")
        if (pattern.length === usrpattern.length) {
            setTimeout(function () {
                nextlvl();
            }, 1000);
        }

    }
    else {
        console.log("error")
        wrong();
    }
}