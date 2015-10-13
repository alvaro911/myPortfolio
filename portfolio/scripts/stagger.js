(function(){

	angular.module('StaggerApp', ["ngRoute", "ngAnimate"])

	//What tells angular to work with youtube and vimeo

	.config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       'self',
       'https://www.youtube.com/**',
       'https://player.vimeo.com/video/**',
       'https://bitly.com/shorten/**'
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
				title:'Programming Portfolio',
				paragraph:'These are projects I\'ve been working on'
			},
			{
				title:'Graphic Design Portfolio',
				paragraph:'A selection of my best graphic design work'
			}
		];

		var kidMovies = [
			{
				moviePic: 'https://mir-s3-cdn-cf.behance.net/projects/202/17926101.548d2d2a7ce91.jpg',
				movieTitle: 'The Last Air Bender',
				movieDescription: 'Ang is the last Airbender, and he goes in a quest to become the Avatar and stop the Fire Nation',
				bigPics: ["http://bit.ly/1HpnxMC", "http://bit.ly/1ILre4T"],
				videos: ["https://www.youtube.com/embed/gwdx3VY9bhw"],
				tags: ["Ang", "Nickelodeon", "Animation"],
				projectLink:'http://www.behance.net'
			},
			{
				moviePic: 'https://mir-s3-cdn-cf.behance.net/projects/202/15078531.54890dc71096a.jpg',
				movieTitle: 'The Incredibles',
				movieDescription: 'A particular family, where their members have superpowers. The father has a midlife crisis and puts his family at risk when he tries to relive his glory days',
				bigPics: ["http://bit.ly/1SW0Yvg", "http://bit.ly/1eW608f", "http://bit.ly/1P9oPBP"],
				videos:["https://www.youtube.com/embed/1LASc8ewLaw", "https://www.youtube.com/embed/eZbzbC9285I"],
				tags:["incredibles", "family", "Animation", "superpowers", "Disney"]
			},
			{
				moviePic: 'https://mir-s3-cdn-cf.behance.net/projects/202/14568851.5485b426bba74.jpg',
				movieTitle: 'The Lion King',
				movieDescription: 'Simba is the throne heir, but his bastard jealous uncle commits such a horrible act that scars kids for life.',
				bigPics:["http://bit.ly/1HunyPE", "http://bit.ly/1Eci5g0", "http://bit.ly/1MU19SJ"],
				videos:["https://www.youtube.com/embed/f0fReuRs890", "https://www.youtube.com/embed/4sj1MT05lAA"],
				tags:["Animation", "Disney", "family"]
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
				movieDescription: 'The objective of this marketing package is to show potential investors why is a good idea to have your own Wing Nutz franchise and how you can get one.',
				bigPics:['../images/wingNutz/wng-nutz-composition_01.jpg', '../images/wingNutz/wng-nutz-composition_02.jpg', '../images/wingNutz/wng-nutz-composition_03.jpg', '../images/wingNutz/wng-nutz-composition_04.jpg', '../images/wingNutz/wng-nutz-composition_06.jpg'],
				tags:["Marketing", "Branding", "Packaging", "Labels", "Logo"]
			},
			{
				moviePic: '../images/wineBottle/cover.jpg',
				movieTitle: 'Ganhaarr: Wine label',
				movieDescription: 'Class project where the objective was to create our own wine label.',
				bigPics:['../images/wineBottle/bottle_01.jpg', '../images/wineBottle/bottle_02.jpg'],
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
	});

})(angular);





















