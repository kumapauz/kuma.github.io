kofiWidgetOverlay.draw('kumapauz', {
	'type': 'floating-chat',
	'floating-chat.donateButton.text': 'Support me',
	'floating-chat.donateButton.background-color': '#ff5f5f',
	'floating-chat.donateButton.text-color': '#fff'
});


const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('footer-date').innerText = currentYear;