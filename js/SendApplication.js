function SendApplication() {
		
    alert("Your application has been sent off!");
    window.location.href = "index.html";
}
window.addEventListener('load', function() { /*listening for when the form is sent*/
    const form = document.getElementById('AppForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const formData = new FormData(form); /*formatting data*/
            fetch(form.action, { /*sending the application off*/
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    SendApplication(); 
                } else {
                    alert("Something went wrong please try again");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});