function show_camada1() {
    document.getElementById("camada1").style.visibility="visible"; //tornando o elemento visivel
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
}

function show_camada2 () {
    document.getElementById("camada1").style.visibility="hidden"; //tornando o elemento visivel
    document.getElementById("camada2").style.visibility="visible";
    document.getElementById("camada3").style.visibility="hidden";
}

function show_camada3 () {
    document.getElementById("camada1").style.visibility="hidden"; //tornando o elemento visivel
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="visible";
}

function some_tudo() {
    document.getElementById("camada1").style.visibility="hidden"; //tornando o elemento visivel
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden ";
}

/*
comentario de mais de uma linha 
*/