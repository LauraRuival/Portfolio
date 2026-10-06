
// This function toggles the visibility of the mobile menu when the menu button is clicked
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu-content');
   
    menu.classList.toggle('show');
}

function toggleSubmenu(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    button.setAttribute('aria-expanded', String(!isExpanded));
}
