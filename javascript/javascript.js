const btnMenu = document.querySelector('#dropdownMenu2');
const menuLinks = document.querySelector('.dropdown-menu');
const btnSubmitRegistration = document.querySelector('.btn-primary.login');
const btnDropdownMenu = document.querySelector('.dropdown-menu');
const partNavbar = document.querySelector('#navbar');
//console.log(btnDropdownMenu, partNavbar);

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







btnSubmitRegistration.addEventListener('click', showHideNavbar);
btnMenu.addEventListener('click', openHideDropdownMenu);