function toggleAltDisplay() {
	const rootStyle = getComputedStyle(document.documentElement);
	const Blue = rootStyle.getPropertyValue('--secondary-background');
	const Grey = rootStyle.getPropertyValue('--light-background: #F0F0F0');
	const images = document.querySelectorAll('img');

	images.forEach(img => {
		let label = img.nextElementSibling;
		if (label && label.classList.contains('alt-label')) {
			label.remove();
			img.style.display = "block";
		} else {
			const text = img.alt || "No Alt Text Provided!";
			const div = document.createElement('div');
			const currentWidth = img.clientWidth;	
			div.className = 'alt-label';
			div.style.backgroundColor = Blue;
			div.style.color = Grey;
			div.style.padding = "10px";
			div.style.fontSize = "15px";
			div.innerText = text;
			div.style.width = currentWidth + "px";
			div.style.display = "block";
			div.style.boxSizing = "border-box";
			img.style.display = "none";
			img.parentNode.insertBefore(div, img.nextSibling);
		}
	});
}