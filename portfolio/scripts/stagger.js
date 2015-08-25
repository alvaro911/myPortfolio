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
	.controller('staggerCtrl', function($location){
		var self = this;
		self.viewable = false;
		self.titleBar = false;
		self.navigateTo = function(page){
			$location.path( "/" + page );
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
				tags: ["Ang", "Nickelodeon", "Animation"]
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
				moviePic: 'https://mir-s3-cdn-cf.behance.net/projects/202/12278979.548295cac0db2.jpg',
				movieTitle: 'Die Hard',
				movieDescription: 'Best action movie ever made, YiPieKiYay!',
				bigPics:["http://bit.ly/1hmkuA3", "http://bit.ly/1P9q0Ba", "http://bit.ly/1MdH7DG"],
				videos:["https://www.youtube.com/embed/8YXi9JAgdf0", "https://www.youtube.com/embed/I6wRZCV7naE"],
				tags:["Action","John McClane"]
			},
			{
				moviePic: 'https://mir-s3-cdn-cf.behance.net/projects/202/3784618.545ec841a3b72.jpg',
				movieTitle: 'Man on Fire',
				movieDescription: 'Great movie where Denzel Washington kicks mexican cartel ass in order to get together with his one tru love, a lil rich white kid?? Wtf, dudo was a pedo',
				bigPics:["http://bit.ly/1MU4i4Y", "http://bit.ly/1J0iOIR", "http://bit.ly/1gg8m2I"],
				videos:["https://www.youtube.com/embed/g4kLizDXLY0", "https://www.youtube.com/embed/v1MjWvrqKnw"],
				tags:['Denzel Washington', 'Action', 'suspense'],
			},
			{
				moviePic: 'https://mir-s3-cdn-cf.behance.net/projects/202/e186c226926453.55756515da394.png',
				movieTitle: 'The Dark Knight Rises',
				movieDescription: 'The greatest Batman saga ever made... Seriously if you disagree you\'re dead to me',
				bigPics:["http://bit.ly/1JPx1qV", "http://bit.ly/1gNRPUF", "http://bit.ly/1OUbPPM", "http://bit.ly/1eW8P99"],
				videos:["https://www.youtube.com/embed/VqKkbpcuFbI"],
				tags:["Batman", "Action", "Dark Knight"]
			}
		];

		self.movies = [];
		self.currentMovie = [];
		// self.currentPortfolio;

		self.popUpBtn = function(movie){
			self.currentMovie = movie;
			self.viewable = true;
		};

		self.kidMoviesBtn = function(){
			self.movies = [];
			for(var i =0; i < kidMovies.length; i++){
				self.movies.push(kidMovies[i]);
			}
			self.currentPortfolio = portfolios[0];
			self.titleBar = true;
			console.log(self.titleBar);
		};
		self.actionMoviesBtn = function(){
			self.movies = [];
			for(var i=0; i < actionMovies.length; i++){
				self.movies.push(actionMovies[i]);
			}
			self.currentPortfolio = portfolios[1];
			self.titleBar = true;
			console.log(self.titleBar);
		};


	})
	.directive('popUp',function(){
		return{
			restrict: "E",
			templateUrl: 'pages/pop-up.html'
		};
	});

})(angular);





















