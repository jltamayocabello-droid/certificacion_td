/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Incrementa el valor de la variable valorInicial
 * 
 * @return {undefined} No devuelve nada
/*******  773cfedc-9799-4bb1-ba78-6571b02a4529  *******/
function contador(){

    let valorInicial = 0;
    function aumentar(){
        valorInicial++
    }
    function verContador(){
        return valorInicial;
    }
    return{
        aumentar,
        verContador
    }
    
};

let contador1 = contador();
console.log (contador.verContador());