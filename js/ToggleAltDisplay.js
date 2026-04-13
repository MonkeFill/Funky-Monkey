function toggleAltDisplay() {
	const rootStyle = getComputedStyle(document.documentElement);
	const Blue = rootStyle.getPropertyValue('--dark-blue');
	const Grey = rootStyle.getPropertyValue('--background-grey');
	const images = document.querySelectorAll('img');

	images.forEach(img => {
		let label = img.nextElementSibling;
		
		// Check if the label already exists
		if (label && label.classList.contains('alt-label')) {
			label.remove();
			img.style.display = "block"; // Bring the image back
		} else {
			const text = img.alt || "No Alt Text Provided!";
			const div = document.createElement('div');
			
			// 1. Capture the image's current width before hiding it
			const currentWidth = img.clientWidth;	

			div.className = 'alt-label';
			div.style.backgroundColor = Blue;
			div.style.color = Grey;
			div.style.padding = "10px";
			div.style.fontSize = "15px";
			div.innerText = text;

			// 2. Set the box width to match the image exactly
			div.style.width = currentWidth + "px";
			div.style.display = "block"; // Ensures it stacks below
			div.style.boxSizing = "border-box"; // Prevents padding from making it wider

			// 3. "Remove" the image visually
			img.style.display = "none";

			img.parentNode.insertBefore(div, img.nextSibling);
		}
	});
}