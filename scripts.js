let menuItem = document.getElementById('menu-element');
let actaulMenu = document.getElementById("nav-bar-container");
menuItem.onclick = dropMenu;

function dropMenu(){
  if(document.getElementsByClassName('visible').length === 0){
    actaulMenu.className = "visible";
  } else if (document.getElementsByClassName('visible').length !== 0) {
     actaulMenu.classList.remove("visible");
  }
}
