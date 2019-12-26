var experienceClick = function(id) {
  var text = document.getElementById(id).children[1];
  text.classList.replace('hidden', 'visible') || text.classList.replace('visible', 'hidden');
}
