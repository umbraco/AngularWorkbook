angular.module("umbraco")
	.controller("My.IngredientController", function($scope, ingredientResource, assetsService){
		
		assetsService.loadJs("/app_plugins/ingredient/highcharts.min.js")
		.then(function(){
				
			$scope.find = function(event, term){
				if (term !== "") {
	                $scope.ingredients = ingredientResource.search(term);
	            } else {
	                $scope.ingredients = undefined;
	            }
			};



			$scope.renderChart = function (){

				//collect an array from model.value
				var data = [];

				_.forEach($scope.model.value, function (ing) {
					//only add if ingredient has a .percentage
				       if (ing.percentage) {
			                 	data.push([ing.name, ing.percentage]);
				       }
				});
				
				//we find an element with ID 'container" and add the chart data to.
				$('#container').highcharts({
					series: [{
				                    type: 'pie',
				                    data: data
				            }]
				});
			};


			$scope.$watch("model.value", 
				function(newIngredients, oldIngredients) {
				       		$scope.renderChart();  
				}, true);



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
		
	});
