// Header
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('change').classList.add('is-scrolled');
  } else {
    document.getElementById('change').classList.remove('is-scrolled');
  }
}
