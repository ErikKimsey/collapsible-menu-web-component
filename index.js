/**
 * sub-item feeds into collapse-item
 * collapse-item feeds into menu-container
 * in index.js, querySelector('menu-container'), then...
 * ...append menu-container to body
 */

// (function() {

// 	bloop();
// })();
function bloop() {
	let body = document.querySelector('body');
	let menu = document.querySelector('.menu-container');
	// body.appendChild(menu);
	console.log(menu);
}

window.addEventListener('DOMContentLoaded', bloop, false);
