function SwitchTheme() {
    const root = document.documentElement
    if (getComputedStyle(root).getPropertyValue('--background-colour').trim() === '#FFFFFF') {
        root.style.setProperty('--text-grey-background', '#FFFFFF');
        root.style.setProperty('--text-colour-bluebg', '#000000');
		root.style.setProperty('--light-background', '#1c1c1c');
		root.style.setProperty('--background-colour', '#2d2e2e');
		root.style.setProperty('--secondary-background', '#003889');
		root.style.setProperty('--button-hover-colour', '#562342');
    } else {
        root.style.setProperty('--text-grey-background', '#000000');
        root.style.setProperty('--text-colour-bluebg', '#FFFFFF');
		root.style.setProperty('--light-background', '#F0F0F0');
		root.style.setProperty('--background-colour', '#FFFFFF');
		root.style.setProperty('--secondary-background', '#003889');
		root.style.setProperty('--button-hover-colour', '#E3E3E3');
    }
}