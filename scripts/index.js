var experienceClick = function(id) {
  var text = document.getElementById(id).children[1];
  if (text.classList.contains('hidden')) {
    text.classList.replace('hidden', 'visible');
  } else {
    text.classList.replace('visible', 'hidden');
  }
}
