var myapp = angular.module('myapp', []).
	config(['$routeProvider', function($routeProvider) {
  		$routeProvider.
      		when('/a', {templateUrl: 'a.html', controller: 'aCtrl'}).
      		when('/b/:x', {templateUrl: 'b.html', controller: 'bCtrl'}).
      		otherwise({redirectTo: '/a'});
}]); 