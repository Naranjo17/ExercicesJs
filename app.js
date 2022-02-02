const TA = document.getElementById("TA");

const btnMayuscula = document.querySelector("#mayus");
const convertirAMatyuscula = () =>  TA.value = TA.value.toUpperCase();
btnMayuscula.addEventListener("click", convertirAMatyuscula);

const btnMinuscula = document.querySelector("#minus");
const convertirAMinuscula = () => TA.value = TA.value.toLowerCase();
btnMinuscula.addEventListener("click", convertirAMinuscula)



const btnCapitalizar = document.querySelector ("#capit");
const capitalizarTexto = () => TA.value =  TA.value.replace(/\w\S*/g, (w) =>(w.replace(/^\w/, (c) => c.toUpperCase())));
btnCapitalizar.addEventListener("click", capitalizarTexto)

const btnReset = document.querySelector ("#res");
btnReset.addEventListener("click", resetTextArea)

function resetTextArea(){
    document.getElementById("TA").value = "";
}

