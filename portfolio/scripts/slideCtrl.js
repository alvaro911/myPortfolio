/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {
	angular.module("StaggerApp")
	.controller('slideCtrl', function(){
		var self = this;
		self.showMenu = false;
		var bodyEl = document.body,
			content = document.querySelector( '.menu-wrap' ),
			openbtn = document.getElementById( 'open-button' ),
			closebtn = document.getElementById( 'close-button' ),
			isOpen = false;

		// function init() {
		// 	initEvents();
		// }

		self.closeMenu = function(){
			self.showMenu = false;
		};

		// function initEvents() {
		// 	// close the menu element if the target it´s not the menu element or one of its descendants..
		// 	content.addEventListener( 'click', function(ev) {
		// 		var target = ev.target;
		// 		if( isOpen && target !== openbtn ) {
		// 			self.toggleMenu();
		// 		}
		// 	} );
		// }

		self.toggleMenu = function () {
			self.showMenu = !self.showMenu;
		};

		// init();

	});
})();