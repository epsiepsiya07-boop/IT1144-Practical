document.addEventListener("DOMContentLoaded",function(){
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit",function(event) {
	event.preventDefault();
	
	const name = document.getElementById("name").value;
	alert(`Thank you,${name}! your message hasbeen sent succesfully.`);
	
	contactForm.reset();
});

});



function buyProduct() {
	alert("Product added Successfully!");
}
function showInfo(){
	alert("ABC Shop provides quality products at affordable prices.");
}
