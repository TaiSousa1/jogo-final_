var personagem = document.getElementById("personagem")
var obstaculo = document.getElementById("obstaculo")

function jump(){
    if(personagem.classList != "animate"){
        personagem.classList.add("animate");
    }
    setTimeout(function(){
        personagem.classList.remove("animate");
    },500);
}

///
var checkDead = setInterval(function(){
    var persogemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"))

    var obstaculoLeft = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"))

    if(obstaculoLeft<20 && obstaculoLeft>0 && personagemTop>=130){
        obstaculo.style.animation = "none";
        obstaculo.style.display = "none";
        alert("Game over");
    }

}, 10);
