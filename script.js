document.querySelector(".hamburger-menu")
.addEventListener("click",() =>{
	document.querySelector(".container").classList.toggle("change");
});
document.querySelector('.scroll-btn').addEventListener('click',() =>{
	document.querySelector('html').style.scrollBehavior='smooth';
	setTimeout(()=>{
		document.querySelector('html').style.scrollBehavior='unset';
	},1000);
})
function validation(){
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding="10px";
	if(name.length<5){
		text = "Please Enter Valid Name";
		error_message.innerHTML = text;
		return false;
	}
	if(subject.length<10){
		text = "Please Enter Correct Subject";
		error_message.innerHTML = text;
		return false;
	}
	if(isNaN(phone) || phone.length!=12){
		text = "Please Enter Valid Phone Number";
		error_message.innerHTML = text;
		return false;
	}
	if(email.indexOf("@") == -1|| email.length < 6){
		text = "Please Enter Valid Email";
		error_message.innerHTML = text;
		return false;
	}
	if(message.length<=100){
		text = "Please Enter Message More Than 100 characters";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Succesfully!")
	return true;
}