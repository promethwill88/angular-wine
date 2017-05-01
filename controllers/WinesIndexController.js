angular.module('vinoApp')
	.controller('winesIndexController', winesIndexController);

winesIndexController.$inject = ['$http', '$scope'];

function winesIndexController($http, $scope){
	$scope.wines = [];
	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/wines'
	}).then(onSuccess, onError)

	function onSuccess(res){
		console.log('all wine data: ', res.data);
		$scope.wines = res.data.wines;
	}
	function onError(err){
		console.log('there was an error: ', err);
	}
};