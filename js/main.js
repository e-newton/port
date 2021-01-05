let root = document.documentElement;

let dark = new Date().getHours() < 10 || new Date().getHours() > 17;
dark = !dark
function changeTheme(){
  dark = !dark;
}

function swapTheme() {
  dark = !dark;
  if (dark) {
    root.style.setProperty('--background-color', 'var(--background-color-dark)')
    root.style.setProperty('--primary-colour', 'var(--primary-colour-dark)')
    root.style.setProperty('--image-background-colour', 'var(--image-background-colour-dark)')
    root.style.setProperty('--list-item-background-colour', 'var(--list-item-background-colour-dark)')
    root.style.setProperty('--project-border-colour', 'var(--project-border-colour-dark)')
    root.style.setProperty('--project-info-colour', 'var(--project-info-colour-dark)')
    root.style.setProperty('--menu-boy-colour', 'var(--menu-boy-colour-dark)')
    root.style.setProperty('--text-colour', 'var(--text-colour-dark)')
    root.style.setProperty('--glow-colour', 'var(--glow-colour-dark)')
    root.style.setProperty('--accent-colour', 'var(--accent-colour-dark)')
    root.style.setProperty('--list-group-active-colour', 'var(--list-group-active-colour-dark)')
    root.style.setProperty('--contact-logo-colour', 'var(--contact-logo-colour-dark)')
  } else {
    root.style.setProperty('--background-color', 'var(--background-color-light)')
    root.style.setProperty('--primary-colour', 'var(--primary-colour-light)')
    root.style.setProperty('--image-background-colour', 'var(--image-background-colour-light)')
    root.style.setProperty('--list-item-background-colour', 'var(--list-item-background-colour-light)')
    root.style.setProperty('--project-border-colour', 'var(--project-border-colour-light)')
    root.style.setProperty('--project-info-colour', 'var(--project-info-colour-light)')
    root.style.setProperty('--menu-boy-colour', 'var(--menu-boy-colour-light)')
    root.style.setProperty('--text-colour', 'var(--text-colour-light)')
    root.style.setProperty('--glow-colour', 'var(--glow-colour-light)')
    root.style.setProperty('--accent-colour', 'var(--accent-colour-light)')
    root.style.setProperty('--list-group-active-colour', 'var(--list-group-active-colour-light)')
    root.style.setProperty('--contact-logo-colour', 'var(--contact-logo-colour-light)')
  }
}
swapTheme();
console.log('all loaded', swapTheme)
