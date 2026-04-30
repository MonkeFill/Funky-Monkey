function SendApplication() {
		
    alert("You have signed up!");
    window.location.href = "index.html";
}
	
	window.addEventListener('load', function() { /*listening for when the form is sent*/
    const form = document.getElementById('SignupForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
			SendApplication();
        });
    }
});