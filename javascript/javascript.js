const btnMenu = document.querySelector('#dropdownMenu2');
const menuLinks = document.querySelector('.dropdown-menu');
const btnSubmitRegistration = document.querySelector('.btn-primary.login');
const btnDropdownMenu = document.querySelector('.dropdown-menu');
const partNavbar = document.querySelector('#navbar');
const btnFirstRegistration = document.querySelector('#btnRegistration');
const journalNavbar = document.querySelector('.journal_navbar');
const firstRegistrationForm = document.querySelector('#first-registration');
const activityTable = document.querySelector('.activity');
const scheduleDay = document.querySelector('.schedule');
const gradesActivity = document.querySelector('#grades');
const  firstRegistrationSendForm = document.querySelector('#registration');
console.log(firstRegistrationSendForm);

window.onload = function(elements){
	btnDropdownMenu.style.display = 'none';
	partNavbar.style.display = 'none';
}

//console.log(btnSubmitRegistration);
//console.log(btnMenu, menuLinks, btnSubmitRegistration);

let openHideDropdownMenu = function(event, elem){
	console.log(menuLinks);
	if (menuLinks.style.display == 'block'){
		menuLinks.style.display = 'none'
	} else {menuLinks.style.display = 'block'}

	}

let showHideNavbar = function(event, elem = btnDropdownMenu){
		event.preventDefault();
		//console.log('Hura!', btnDropdownMenu);
		if(!event) event=window.event;
		let registrationForm = event.target; 
		//console.log(registrationForm);// || event.srcElement;//= event.target;
		let hideElementRegistration = registrationForm.parentNode.parentNode.parentNode.parentNode;
		hideElementRegistration.style.display = 'none';
		//console.log(hideElementRegistration);
		let showElementNavbar = registrationForm.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		console.log(showElementNavbar);
		showElementNavbar.style.display = 'block';
		
		//inputForm.parentNode.appendChild(elem);//addAdditionalContainer);
	};


let showHideRegistrationForm = function(event, elem){
	console.log('Hura!');
	journalNavbar.style.display = 'none';
	firstRegistrationForm.style.display = 'block';

}

let sendForm = function(event, elem){
	console.log('Hura!');
	firstRegistrationForm.style.display = 'none';
	journalNavbar.style.display = 'block';
	let addElementContainer = document.createElement('div');
	addElementContainer.classList.add("redbox");
	addElementContainer.innerHTML = "Please, check your email for confirm";
	journalNavbar.appendChild(addElementContainer);

}





btnFirstRegistration.addEventListener("click", showHideRegistrationForm, true );
btnSubmitRegistration.addEventListener('click', showHideNavbar);
btnMenu.addEventListener('click', openHideDropdownMenu);
firstRegistrationForm.addEventListener('click', sendForm);