myapp.directive('hello', function() {
	return {
		restrict: 'E',
		template: '<div>Hi there</div>',
        replace: true
	}
})