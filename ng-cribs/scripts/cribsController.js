angular
    .module('ngCribs')
    .controller('cribsController', function($scope,cribsFactory){

	$scope.cribs;
	$scope.priceInfo = {
		min: 0,
		max: 10000000
	}
	$scope.newListing={};
	$scope.addCrib=function(newListing){
$scope.cribs.push(newListing);
	}
	cribsFactory.getCribs().success(function(data){
		$scope.cribs= data;

	}).error(function(error){
		console.log(error);
	});
	
	
	
});
