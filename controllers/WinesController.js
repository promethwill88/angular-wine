angular.module('vinoApp')
	.controller('winesShowController', winesShowController);

	winesShowController.$inject = ['$http', '$routeParams', '$location'];

	function winesShowController($http, $routeParmas, $location){
		let vm = this;
		var winesId = $routeParams.id;
		$http({
			method: 'GET',
			url: 'https://super-crud.herokuapp.com/wines/' + winesId
		}).then(onSuccess, onError);

		function onSuccess(res){
			console.log('data for wine', winesId, ':', res.data);
			$scope.wines = res.data;
		}
		function onError(err){
			console.log('there was an error: ', err);
		}

	vm.updateWine = function(e){
		console.log('updating wine: ', e);
		$http({
			method: 'PUT',
			url: 'https://super-crud.herokuapp.com/wines/' + e._id,
			data: {
				name: e.name,
				year: e.year,
				country: e.country,
				price: e.price
			}
		}).then(onSuccess, onError);

		function onSuccess(res){
			console.log('updated data for wines: ', winesId, ':', res.data);
			vm.wine = res.data;
			$location.path('/');
		}
	};

	vm.deleteWine = function(e){
		console.log('deleting wine: ', e);
		$http({
			method: 'DELETE',
			url: 'https://super-crud.herokuapp.com/wines/' + wines._id,
		}).then(onSuccess, onError);

		function onSuccess(res){
			console.log('wine deleted: ', res.data);
			$location.path('/');
		}
	};
}