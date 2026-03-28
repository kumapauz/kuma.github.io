/*
 This file is responsible for creating common elements on the screen,
 such as the Navigation bar and the 
*/

// Get the parent elements
const navBar = document.querySelector('#nav-bar');
const footer = document.querySelector('#footer');

const navBarData = {
	"pages" : [["GAMES", "games.html"],
		["BLOGS", "blogs.html"],
		["SOCIALS", "socials.html"]]
}

const footerData = {
	"year" : 2026,
}

/// <summary> Called when the webpage loads. Creates the navigation menu. </summary>
function createNavBar() : void {
	if (!navBar) {
		console.log('Navbar creation failed on this page.');
		return;
	}

	createNavBarLogo();

	for (const pageIndex in navBarData.pages) {
		const element : HTMLAnchorElement = document.createElement('a');
		element.classList.add('nav-element');
		element.classList.add('nav-link');
		element.innerText = `${navBarData.pages[pageIndex][0]}`;
		element.href = `${navBarData.pages[pageIndex][1]}`;
		navBar.appendChild(element);
	}
}

function createNavBarLogo() : void {
	const logo : HTMLImageElement = document.createElement('img');
	logo.classList.add('nav-img');
	logo.src = 'img/logo.png';
	
	const element : HTMLAnchorElement = document.createElement('a');
	element.id = 'nav-logo';
	element.href = 'index.html';
	element.appendChild(logo);
	navBar.appendChild(element);
}

function createFooter() : void {
	if (!footer) {
		console.log('Footer creation failed on this page.');
		return;
	}

	console.log('Creating footer');
	const text : HTMLParagraphElement = document.createElement('p');
	text.classList.add('footer-text');
	text.innerHTML = `<em>Copyright &copy; KumaPauZ ${footerData.year}</em>`;

	footer.appendChild(text);
}


createNavBar();
createFooter();


