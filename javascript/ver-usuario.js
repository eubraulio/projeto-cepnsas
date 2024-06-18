let usuario = document.querySelector(".usuario")
let info = document.querySelector(".info-usuario")

usuario.onclick = function(){
    usuario.classList.toggle("ativo")
    info.classList.toggle("ativo")
}
document.onclick = function(e){
    if(!usuario.contains(e.target) && !info.contains(e.target)){
        usuario.classList.remove("ativo")
        info.classList.remove("ativo")
    }
}