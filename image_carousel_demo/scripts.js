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
    dot.setAttribute("data-index", `${i}`);
    dot.onclick = showImage;
    navContainer.appendChild(dot);
    }
  }
function showImage() {
  let dotIndex = this.dataset.index;
  let currentlyVisible = document.getElementsByClassName("slide visible")[0]
  let imageIndex = document.querySelectorAll(`[data-image='${dotIndex}']`)[0];

  if(imageIndex.className === "slide visible"){
    console.log("Already visible! dont change")
  } else if (imageIndex.className !== "slide visible") {
    currentlyVisible.className = "slide";
    imageIndex.className = "slide visible";
  }
       // console.log(currentlyVisible);

}
