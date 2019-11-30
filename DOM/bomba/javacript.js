window.onload = function (){
    addEventListener('keyup', modificarBomba, false);

}
function modificarBomba(event){
    var key = event.keyCode;
    var coeficiente=5
    if(key === 38){
        inflarBomba();
    }else if (key === 40){
        
    }
}