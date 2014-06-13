angular.module("umbraco")
	.controller("My.IngredientController", function($scope, ingredientResource){
			
			$scope.ingredients = ingredientResource.getAll();
	
	});
