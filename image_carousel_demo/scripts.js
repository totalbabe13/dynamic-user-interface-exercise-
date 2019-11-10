function countSlides(){
  let numOfSlides = document.getElementsByClassName('slide')
  return numOfSlides.length;
};

function makeNavDots(){
  let numSlides    = countSlides();
  let navContainer = document.getElementById('nav-dots');

  for (var i = 0; i < numSlides; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.setAttribute("data-index", `${i}`)
    navContainer.appendChild(dot);
    }
  }
