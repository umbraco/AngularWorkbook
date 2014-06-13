angular.module("umbraco.resources")
	.factory("ingredientResource", function($http){

	var myService = {};	
	
	
	myService.getAll = function(){
		return $http.get("Backoffice/Ingredient/IngredientApi/getAll");
	};

	myService.search = function(name){
		return $http.get("Backoffice/Ingredient/IngredientApi/getByName?name=" +
	name);
	};


	return myService;
});
