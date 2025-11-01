const beautyMenu = document.getElementById('beautyMenu');
const beautyDropdown = document.getElementById('beautyDropdown');

beautyMenu.addEventListener('mouseenter', () => {
  beautyDropdown.style.display = 'block';
});
beautyMenu.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!beautyDropdown.matches(':hover')) {
      beautyDropdown.style.display = 'none';
    }
  }, 100);
});
beautyDropdown.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!beautyMenu.matches(':hover')) {
      beautyDropdown.style.display = 'none';
    }
  }, 100);
});
beautyDropdown.addEventListener('mouseenter', () => {
  beautyDropdown.style.display = 'block';
});
