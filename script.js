/*const wrapper = document.getElementById("navi");

const animateSlider = x => {
  const slider = document.createElement("div");

  slider.className = "bubble";
  slider.style.left = `${x}px`;
  slider.style.width = 100%;

  wrapper.appendChild(slider);

  setTimeout(() => wrapper.removeChild(slider), 2000);
}
*/
var navi = document.getElementById("navi");
animateSlider = x => {
  var screenWidth = window.innerWidth;
  x = (x / screenWidth).toFixed(1);
  console.log(x);
  navi.style.setProperty('--s', x);
}

window.onmousemove = e => setTimeout(animateSlider(e.clientX),500);





