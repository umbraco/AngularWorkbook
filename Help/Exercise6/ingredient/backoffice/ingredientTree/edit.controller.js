angular.module("umbraco")
	.controller("My.Ingredient.EditController", function($scope, $routeParams, notificationsService, ingredientResource){
		
		if($routeParams.create){
			$scope.ingredient = {};
		}else{
			ingredientResource.getById($routeParams.id).then(function(response){
				$scope.ingredient = response.data;
			});
		}


		$scope.save = function(){
			ingredientResource.save($scope.ingredient).then(function(response){
				$scope.ingredient = response.data;
				notificationsService.success("Ingredient saved!");
			});
		};


	});