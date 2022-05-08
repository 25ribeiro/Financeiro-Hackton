const buttonAction = document.getElementById("submit");

buttonAction.addEventListener('click', function(){

    let rendaValue = document.getElementById("renda").value;

    let guardarValue = document.getElementById("guardar").value;

    let periodo = document.getElementById("periodo").value;

    let output = document.getElementById("economia");

    let finalText = ""+ guardarValue*periodo;

    output.innerHTML = finalText.bold();


})