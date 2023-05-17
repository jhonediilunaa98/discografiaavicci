// let menuVisible= false;
// //Fuuncion que oculta o muestra el menu

// function mostrarOcultarMenu(){
//     if(menuVisible){
//         document.getElementById("nav").classList="";
//         menuVisible =false;
//     }else{
//         document.getElementById("nav").classList="nav-responsive";
//         menuVisible = true;
//     }
// }

let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  const menu = document.querySelector('.nav');
  
  if (menuVisible) {
    menu.classList.remove('nav-responsive');
    menuVisible = false;
  } else {
    menu.classList.add('nav-responsive');
    menuVisible = true;
  }
}




