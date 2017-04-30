angular.module('vinoApp')
	.controller('winesIndexController', winesIndexController);

winesIndexController.$inject = ['$http'];

function winesIndexController($http){
	let vm = this;

	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/wines'
	}).then(onSuccess, onError)

	function onSuccess(res){
		console.log('all wine data: ', res.data);
		vm.pokemons = res.data.wines;
	}
	function onError(err){
		console.log('there was an error: ', err);
	}
};