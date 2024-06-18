const tabs = window.document.querySelectorAll(".btn-item");

    tabs.forEach(tab => tab.addEventListener("click", () => tabclicado(tab)));
    const tabclicado = (tab) => {
        tabs.forEach(tab => tab.classList.remove("ativo"));
        tab.classList.add("ativo")
        const contents = document.querySelectorAll(".resultado");
        contents.forEach(content => content.classList.remove("mostrar"));
        const contentId = tab.getAttribute("content-id");
        const content = window.document.getElementById(contentId)
        content.classList.add("mostrar")}


const verMais = window.document.querySelectorAll(".ver-mais");        
verMais.forEach(ver => ver.addEventListener("click", () => btnClicado(ver)));

const btnClicado = (ver) =>{
        const resultados = document.querySelectorAll(".resultado");
        resultados.forEach(resultado => resultado.classList.remove("mostrar"));
        const value = ver.getAttribute("value")
        const elemento = window.document.getElementById(value)
        elemento.classList.add("mostrar")

        const itemTabs = document.querySelectorAll(".ativo");
        itemTabs.forEach(itemTab => itemTab.classList.remove("ativo"));

        const tabItens = document.querySelectorAll("." + value);
        tabItens.forEach(tabIten => tabIten.classList.add("ativo"));
}
