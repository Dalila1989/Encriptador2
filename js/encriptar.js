var mensaje = document.querySelector("#mensaje-encriptar");
var input = document.querySelector("#mensaje-cifrado");

var botonNuevo =document.querySelector("#boton-nuevo");
botonNuevo.addEventListener("click",function(event){
    console.log("hizo clic");
    limpiar();
    botonCopiar.classList.add("invisible")
});

var botonEncriptar = document.querySelector("#boton-encriptar");
botonEncriptar.addEventListener("click",function(event){
    console.log("hizo clic");
    //capturaMensaje(mensaje);
    separar(mensaje);
    console.log(cifrado);
    input.value = cifrado;
    ocultarDibujo();
    input.classList.remove("invisible");
    botonCopiar.classList.remove("invisible"); 
   });

var botonDesencriptar = document.querySelector("#boton-desencriptar");
botonDesencriptar.addEventListener("click",function(event){

    desencriptar(mensaje);
    ocultarDibujo();
    input.classList.remove("invisible");
    botonCopiar.classList.remove("invisible"); 
});

var botonCopiar = document.querySelector("#boton-copiar");
    botonCopiar.addEventListener("click",function(event){
    console.log("hizo clic");
   copiar(input);
});



//function transforma en cadena

function separar(mensaje){    
    var cadena = mensaje.value
    var letras = cadena.split("");
    var llaves ={
    a: "ai",
    e: "enter",
    i: "iner",
    o: "ober",
    u:"ufat"

    }
return cifrado = letras.map(letras => llaves[letras]? llaves[letras] : letras).join("");
   


}
function desencriptar(mensaje){
    var desencriptado = mensaje.value.replace(/ai/g, "a").replace(/enter/g,"e").replace(/iner/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
 return input.value = desencriptado;  
}
function copiar(input){
    input.select();
    document.execCommand("copy")
}

function ocultarDibujo(){
    
        if(mensaje.value == 0){
            
                console.log("mensajeeee")
                alert("intrudca un mensaje")
                document.getElementById("lupa").style.display = "inline";
                document.getElementById("mensaje").style.display = "block";
                document.getElementById("minuscula").style.display = "block";

        }
        else{
            
            document.getElementById("lupa").style.display = "none";
            document.getElementById("mensaje").style.display = "none";
            document.getElementById("minuscula").style.display = "none";
        }
}
function limpiar(){
    input.classList.add("invisible");
    document.getElementById("lupa").style.display = "inline";
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("minuscula").style.display = "block";
    mensaje.value = "";

}