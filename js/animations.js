AOS.init();
function containerMain(){
    let containerPrincipal = document.querySelector('.page');
    containerPrincipal.classList.add('magictime', 'vanishIn');
}
setTimeout(containerMain, 1000);

function tituloPrincipal(){
    let tituloNav = document.querySelector('.navbar-brand');
    tituloNav.classList.add('magictime', 'vanishIn');
}
setTimeout(tituloPrincipal, 2000);

function listaNav(){
    let listNav = document.querySelector('.navbar-nav');
    let iconGit = document.querySelector('.icon-github');
    let iconLinked = document.querySelector('.icon-linkedin');
    listNav.style.display = 'flex';
    iconGit.style.display = 'flex';
    iconLinked.style.display = 'flex';
    listNav.classList.add('magictime', 'vanishIn');
}
setInterval(listaNav, 2000);

function fotoPrincipal(){
    let fotoInicio = document.querySelector('.img-fluid');
    fotoInicio.classList.add('magictime', 'vanishIn');
}
setTimeout(fotoPrincipal, 3000);

function textoPrincipal() {
    let textoInicio = document.querySelector('.texto-inicial');
    textoInicio.classList.add('magictime', 'vanishIn');
}
setTimeout(textoPrincipal, 4000);

function cambiarColorNav() {
    let navigationBar = document.querySelector(".gradient");
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    navigationBar.classList.add("gradient-onchange"); 
  }else if(document.body.scrollTop < 400 || document.documentElement.scrollTop < 400){
    navigationBar.classList.remove("gradient-onchange");
  }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  
window.onscroll = function() {
    cambiarColorNav();
};
