const promesa = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 1000);
        });

    };  

function init(){

}
init();
