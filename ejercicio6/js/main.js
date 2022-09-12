function toggleText(texto, boton){
    var translucid = document.querySelector("#"+texto);
    var innerText = document.querySelector("#"+boton);
    if (translucid.style.display == 'block'){
        translucid.style.display = 'none';
    // luego cambiar texto boton a "mostrar texto"
        innerText.innerHTML = "Mostrar";
    }
    else {
        translucid.style.display = 'block';
        innerText.innerHTML = "Ocultar";
    }
}