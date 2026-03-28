var navBar = document.querySelector('#nav-bar');
var footer = document.querySelector('#footer');
var navBarData = {
    "pages": [["GAMES", "games.html"],
        ["BLOGS", "blogs.html"],
        ["SOCIALS", "socials.html"]]
};
var footerData = {
    "year": 2026,
};
function createNavBar() {
    if (!navBar) {
        console.log('Navbar creation failed on this page.');
        return;
    }
    createNavBarLogo();
    for (var pageIndex in navBarData.pages) {
        var element = document.createElement('a');
        element.classList.add('nav-element');
        element.classList.add('nav-link');
        element.innerText = "".concat(navBarData.pages[pageIndex][0]);
        element.href = "".concat(navBarData.pages[pageIndex][1]);
        navBar.appendChild(element);
    }
}
function createNavBarLogo() {
    var logo = document.createElement('img');
    logo.classList.add('nav-img');
    logo.src = 'img/logo.png';
    var element = document.createElement('a');
    element.id = 'nav-logo';
    element.href = 'index.html';
    element.appendChild(logo);
    navBar.appendChild(element);
}
function createFooter() {
    if (!footer) {
        console.log('Footer creation failed on this page.');
        return;
    }
    console.log('Creating footer');
    var text = document.createElement('p');
    text.classList.add('footer-text');
    text.innerHTML = "<em>Copyright &copy; KumaPauZ ".concat(footerData.year, "</em>");
    footer.appendChild(text);
}
createNavBar();
createFooter();
