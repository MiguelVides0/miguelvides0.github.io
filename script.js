const inputTexto = document.querySelector(".input-texto");
const mensaje= document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value= "";
    document.querySelector(".mensajeD").style.visibility="hidden";
    document.querySelector(".mensajeD1").style.visibility="hidden";
    document.querySelector(".copiar").style.visibility="visible";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value= textoDesencriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value= "";
    document.querySelector(".mensajeD").style.visibility="hidden";
    document.querySelector(".mensajeD1").style.visibility="hidden";
    document.querySelector(".copiar").style.visibility="visible";
}

function encriptar(stringEncriptada){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll
            (matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    let datoCopiar=document.getElementById("contenido");
    datoCopiar.select();
    datoCopiar.setSelectionRange(0,99999);
    document.execCommand("copy");
}