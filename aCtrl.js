myapp.controller('aCtrl', function($scope) {
	$scope.yourname='hahah';
	$scope.points=[5,1,2,3,4];
	$scope.yourname_ = function() {
		return $scope.yourname + "hahha";
	};
	$scope.quantity=2;
	$scope.price=100000;
	$scope.names=[{name:"a",count:5}, {name:"b",count:1}, {name:"c",count:2}];
	$scope.count=0;

	$scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
})

