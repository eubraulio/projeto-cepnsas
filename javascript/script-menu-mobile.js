function menuMostrar(){
    let menuLinks = window.document.getElementsByClassName("menu-links")[0];
    let cabecalho = window.document.getElementById('cabecalho')
        if(menuLinks.classList.contains('mostrar')){
            menuLinks.classList.remove('mostrar');
            cabecalho.style.borderBottom = "2px solid var(--cor1)"
        }
        else{
            menuLinks.classList.add('mostrar');
            cabecalho.style.borderBottom = "none"
        }
}