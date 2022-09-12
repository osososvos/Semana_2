function toggleText(){
    var translucid = document.querySelector("span");
    var innerText = document.querySelector("#bt");
    if (translucid.style.display == 'block'){
        translucid.style.display = 'none';
    // luego cambiar texto boton a "mostrar texto"
        innerText.innerHTML = "Keep reading";
    }
    else {
        translucid.style.display = 'block';
        innerText.innerHTML = "Hide Text";
    }
}
