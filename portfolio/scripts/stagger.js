(function(){

	angular.module('StaggerApp', ["ngRoute", "ngAnimate"])

	//What tells angular to work with youtube and vimeo

	.config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       'self',
       'https://www.youtube.com/**',
       'https://player.vimeo.com/video/**',
       'http://bit.ly/**',
       'https://codepen.io/alvaro/**'
     ]);
   })
	.controller('staggerCtrl', function($location, $anchorScroll){
		var self = this;
		self.viewable = false;
		self.titleBar = false;
		self.navigateTo = function(page){
			$location.path( "/" + page );
			$anchorScroll('top');

		};

		var portfolios = [
			{
				title:'Web Development',
				paragraph:'These are projects I\'ve been working on'
			},
			{
				title:'Graphic Design',
				paragraph:'A selection of my best graphic design work'
			}
		];

		var kidMovies = [
			{
				moviePic: '../images/elevating/cover.jpg',
				movieTitle: 'Elevating CRE',
				movieDescription: 'For this project I created the logo and website for a yearly event',
				bigPics: ['../images/elevating/elevating_01.jpg','../images/elevating/elevating_02.jpg','../images/elevating/elevating_03.jpg','../images/elevating/elevating_04.jpg'],
				projectLink:'http://www.elevatingcre.com'
			},
			{
				moviePic: '../images/gun_developer/cover.jpg',
				movieTitle: 'Gun - Developer',
				movieDescription: 'GUN developer site makes it easy to developers to start their first project with GUN, it has the documentation and tutorials on how to interact with it.',
				bigPics: ["../images/gun_developer/gun_dev_01.jpg", "../images/gun_developer/gun_dev_02.jpg", "../images/gun_developer/gun_dev_03.jpg"],
				tags:["incredibles", "family", "Animation", "superpowers", "Disney"],
				projectLink:'http://gun.js.org'
			},
			{
				moviePic: '../images/frugality/cover.jpg',
				movieTitle: 'Frugality',
				movieDescription: 'Frugality is a framework that will let business save money when sending JS objects to servers.',
				bigPics:["../images/frugality/frugality_01.jpg", "../images/frugality/frugality_02.jpg"],
				videos:["http://bit.ly/2b077F7"],
				projectLink:'http://gun.js.org/frugality'
			},
			{
				moviePic: '../images/quote_machine/cover.jpg',
				movieTitle: 'Random quote machine',
				movieDescription: 'A random quote machine generator using jQuery, the user will be able to tweet it as well',
				videos:['http://bit.ly/2bk0Fuk']
			},
			{
				moviePic:'../images/wiki_search/cover.jpg',
				movieTitle: 'Wikisearch',
				movieDescription: 'A simple single page application using angular that lets the user look for anything and will find articles from wikipedia and a link that takes them to it.',
				bigPics: ['../images/wiki_search/wikisearch.jpg'],
				projectLink: 'http://bit.ly/2aPCKjz'
			}
		];

		var actionMovies = [
			{
				moviePic: '../images/bbluemel/cover.jpg',
				movieTitle: 'Breanna Bluemel Master Aesthetician',
				movieDescription: 'In this project I created a brand identity for a master aesthetician who is looking to start her own business.',
				bigPics:['../images/bbluemel/bluemel_01.jpg', '../images/bbluemel/bluemel_02.jpg', '../images/bbluemel/bluemel_03.jpg', '../images/bbluemel/bluemel_04.jpg'],
				tags:["Branding", "Logo", "Marketing", "Graphic Design"]
			},
			{
				moviePic: '../images/cbcBanners/cover.jpg',
				movieTitle: 'CBC Advisors recruiting materials',
				movieDescription: 'These are marketing materials that CBC Advisors used in open houses to attract top agents for their commerical real estate brokerage.',
				bigPics:['../images/cbcBanners/banners_01.jpg', '../images/cbcBanners/banners_02.jpg', '../images/cbcBanners/banners_03.jpg', '../images/cbcBanners/banners_04.jpg', '../images/cbcBanners/banners_05.jpg', '../images/cbcBanners/banners_06.jpg'],
				tags:['Corporate Identity', 'Branding', 'Marketing', 'Banners'],
			},
			{
				moviePic: '../images/constantine/cover.jpg',
				movieTitle: 'Constantine: Hail to the King',
				movieDescription: 'A mock-up marketing campaign for a sequel I was disappointed Warner Brothers never produced.',
				bigPics:['../images/constantine/constantine-master_01.jpg', '../images/constantine/constantine-master_02.jpg', '../images/constantine/constantine-master_03.jpg', '../images/constantine/constantine-master_04.jpg', '../images/constantine/constantine-master_06.jpg', '../images/constantine/constantine-master_07.jpg', '../images/constantine/constantine-master_09.jpg', '../images/constantine/constantine-master_10.jpg', '../images/constantine/constantine-master_11.jpg'],
				tags:["Marketing", "Advertisement", "Photo Manipulation", "Packaging"]
			},
			{
				moviePic: '../images/wingNutz/cover.jpg',
				movieTitle: 'Wing Nutz marketing package',
				movieDescription: 'The objective of this marketing package is to show potential investors why it is a good idea to have your own Wing Nutz franchise and how you can get one.',
				bigPics:['../images/wingNutz/wng-nutz-composition_01.jpg', '../images/wingNutz/wng-nutz-composition_02.jpg', '../images/wingNutz/wng-nutz-composition_03.jpg', '../images/wingNutz/wng-nutz-composition_04.jpg', '../images/wingNutz/wng-nutz-composition_06.jpg'],
				tags:["Marketing", "Branding", "Packaging", "Labels", "Logo"]
			},
			{
				moviePic: '../images/wineBottle/cover.jpg',
				movieTitle: 'Ganhaarr: Wine label',
				movieDescription: 'Class project where the objective was to create our own wine label.',
				bigPics:['../images/wineBottle/bottle_01.jpg', '../images/wineBottle/bottle_02.jpg'],
				tags:["Marketing", "Branding", "Packaging", "Labels", "Logo"]
			},
			{
				moviePic: '../images/gun_promo/cover.jpg',
				movieTitle: 'Ganhaarr: Wine label',
				movieDescription: 'Class project where the objective was to create our own wine label.',
				bigPics:['../images/gun_promo/gun_promo_01.jpg', '../images/gun_promo/gun_promo_02.jpg', '../images/gun_promo/gun_promo_03.jpg'],
				videos:['https://www.youtube.com/embed/F1GB8P6_gVo?rel=0'],
				tags:["Marketing", "Branding", "Packaging", "Labels", "Logo"]
			}
		];

		self.movies = [];
		self.currentMovie = [];
		// self.currentPortfolio;

		self.popUpBtn = function(movie){
			self.currentMovie = movie;
			self.viewable = true;
			smoothScroll('goToTop');
		};

		self.kidMoviesBtn = function(){
			self.movies = [];
			for(var i =0; i < kidMovies.length; i++){
				self.movies.push(kidMovies[i]);
			}
			self.currentPortfolio = portfolios[0];
			self.titleBar = true;
			smoothScroll('container');
		};
		self.actionMoviesBtn = function(){
			self.movies = [];
			for(var i=0; i < actionMovies.length; i++){
				self.movies.push(actionMovies[i]);
			}
			self.currentPortfolio = portfolios[1];
			self.titleBar = true;
			smoothScroll('container');
		};
		function currentYPosition() {
		    // Firefox, Chrome, Opera, Safari
		    if (self.pageYOffset) return self.pageYOffset;
		    // Internet Explorer 6 - standards mode
		    if (document.documentElement && document.documentElement.scrollTop)
		        return document.documentElement.scrollTop;
		    // Internet Explorer 6, 7 and 8
		    if (document.body.scrollTop) return document.body.scrollTop;
		    return 0;
		}

		function elmYPosition(eID) {
		    var elm = document.getElementById(eID);
		    var y = elm.offsetTop;
		    var node = elm;
		    while (node.offsetParent && node.offsetParent != document.body) {
		        node = node.offsetParent;
		        y += node.offsetTop;
		    } return y;
		}

		function smoothScroll(eID) {
		    var startY = currentYPosition();
		    var stopY = elmYPosition(eID);
		    var distance = stopY > startY ? stopY - startY : startY - stopY;
		    if (distance < 100) {
		        scrollTo(0, stopY); return;
		    }
		    var speed = Math.round(distance / 100);
		    speed = 20;
		    var step = Math.round(distance / 25);
		    var leapY = stopY > startY ? startY + step : startY - step;
		    var timer = 0;
		    if (stopY > startY) {
		        for ( var i=startY; i<stopY; i+=step ) {
		            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
		        } return;
		    }
		    for ( var j=startY; j>stopY; j-=step ) {
		        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		    }
		}
	})

	.directive('popUp',function(){
		return{
			restrict: "E",
			templateUrl: 'pages/pop-up.html'
		};
	})

	.directive('parallax', parallaxFn);
	function parallaxFn(){
		var directive = {
			scope:{},
			restrict: 'E',
			templateUrl: 'pages/parallax_header.html',
			link: parallaxFx
		};
		return directive;
		function parallaxFx(scope, element, attrs){
			var scene = element[0];
			new Parallax(scene);
		}
	}

})(angular);





















