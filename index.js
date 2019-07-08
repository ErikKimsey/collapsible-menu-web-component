// import './components/Menu.js';

let settings = {
	width: 500,
	height: 500,
	say: 'OI'
};
let collapseItems = {
	title: 'Article',
	subItems: [ 'Gravy', 'Groovy', 'Doovy' ]
};
let body = window.document.body;
let menu = document.createElement('menu-container');
let collapsible = document.createElement('collapsible-list');

collapsible.crap = collapseItems;
menu.menu = settings;

menu.appendChild(collapsible);

body.appendChild(menu);
