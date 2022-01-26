const hdr = document.querySelector('header');
window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 50) {
    hdr.classList.add('active');
  } else {
    hdr.classList.remove('active');
  }
}