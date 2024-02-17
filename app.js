let textoEntrada = "";
let textoSaida = "";
let textoBotaoCopiar = "";
const regex = "[^a-z ]";

document.getElementById('resultado_descripto').style.display = 'none';

function criptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

    textoSaida = textoEntrada.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('resultado_cripto').style.display = 'none';
    document.getElementById('resultado_descripto').style.display = 'block';
}

function descriptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

    textoSaida = textoEntrada.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('resultado_cripto').style.display = 'none';
    document.getElementById('resultado_descripto').style.display = 'block';
}

function copiar() {
    navigator.clipboard.writeText(textoBotaoCopiar);
}

function validarEntradaCrip(){
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('textoAviso').style.color = '#495057'; 
        document.getElementById('textoAviso').style.fontSize= '15px';            
        criptografar();   
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado_cripto').style.display = 'block';
        document.getElementById('resultado_descripto').style.display = 'none';
        document.getElementById('textoAviso').style.color = '#e63636';
        document.getElementById('textoAviso').style.fontSize= '25px';    
    }
}

function validarEntradaDescrip() {
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('textoAviso').style.color = '#495057'; 
        document.getElementById('textoAviso').style.fontSize= '15px';    
       descriptografar();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado_cripto').style.display = 'block';
        document.getElementById('resultado_descripto').style.display = 'none';
        document.getElementById('textoAviso').style.color = '#e63636'; 
        document.getElementById('textoAviso').style.fontSize= '25px';            
    }
}