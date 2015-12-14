myapp.controller('bCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.x = $routeParams.x;
}])