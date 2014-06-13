angular.module("umbraco")
	.controller("My.IngredientController", function($scope, ingredientResource){
			
		
		$scope.find = function(event, term){
			if (term !== "") {
                $scope.ingredients = ingredientResource.search(term);
            } else {
                $scope.ingredients = undefined;
            }
		};


		if(!angular.isArray($scope.model.value)){
			$scope.model.value =[];
		}
		$scope.select = function(ingredient){
			$scope.model.value.push(ingredient);
		};

		$scope.remove = function(index){
			$scope.model.value.splice(index, 1);
		}

		
		//notice how throlled find is a parameter-less function
		//but we can still pass in $scope.searchTerm
		$scope.throttledFind = _.throttle(function(){
				if ($scope.searchTerm !== "") {
	                $scope.ingredients = ingredientResource.search($scope.searchTerm);
	            } else {
	                $scope.ingredients = undefined;
	            }
		},500);
		
	});
