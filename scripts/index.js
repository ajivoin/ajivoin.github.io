var transitionLock = new Set();
var experienceClick = (id) => {
  if (!transitionLock.has(id)){
    transitionLock.add(id);
    var text = document.getElementById(id).children[1];
    text.classList.replace('hidden', 'visible') || text.classList.replace('visible', 'hidden');
    transitionLock.delete(id);
  }
}
