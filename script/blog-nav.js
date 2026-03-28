/*
This is a javascript file that generates a navigation bar based on the page (and file names) stored in the websites "blog" folder.

Important note about naming files: blog files MUST be formatted in the following format:
[YEAR]-[MONTH]-[DAY]-[BLOG NAME].html

This file will load all the .html files and do a substring to organize the files into a sidebar.
*/

const years = [2025]
const articles = {
	"2025":[
		{"id":"2025-03-18-sonic-unleashed", "title":"Sonic Unleashed - The Innovator of Xbox 360 Game Preservation"},
		{"id":"2025-03-18-sonic-unleashed", "title":"Sonic Unleashed - The Innovator of Xbox 360 Game Preservation"},
	],
}

createBlogSidebar()

function createBlogSidebar() {
	let sidebarParent = document.getElementById('blog-sidebar')

	for (let i = 0; i < years.length; i++) {
		createYearEntries(sidebarParent, years[i])
		console.log(years[i])
	}
}

// Creates and populates the year entries.
function createYearEntries(sidebarParent, year) {
	// Create a div for the year
	let yearParent = document.createElement('div')
	yearParent.classList.add('blog-sidebar-year')
	
	let yearHeader = document.createElement('p')
	yearHeader.classList.add('blog-sidebar-header')
	yearHeader.innerHTML = '<span class="blog-sidebar-header-arrow">⮞</span>' + year
	yearHeader.addEventListener('click', () => 
	{
		toggleYear(yearParent)
	})

	let articleParent = document.createElement('section')
	articleParent.classList.add('blog-sidebar-article-list')

	// Add the articles for a specific year.
	for (let i = 0; i < articles[year].length; i++) {
		let article = document.createElement('a')
		article.setAttribute('href', articles[year][i]['id'] + '.html')
		article.classList.add('blog-sidebar-article')
		article.innerText = articles[year][i]['title']
		articleParent.appendChild(article)
	}

	yearParent.appendChild(yearHeader)
	yearParent.appendChild(articleParent)
	sidebarParent.appendChild(yearDivision)
}

function toggleYear(header) {
	

}
