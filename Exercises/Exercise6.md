#Exercise 6: Ingredient editor
If you click the tree root node, it will give you an error, saying it cannot find /app_plugins/ingredient/backoffice/IngredientTree/edit.html 

It is a convention in Umbraco 7 that you use the same editor view for creation and editing, so an editing view should always support an initial empty state.

##View and controller setup
To avoid spending too much time on typing html, copy /edit.html and edit.controller.html from the /help/exercise6-start/ folder and into your site - this will give us some basic html and a controller wired up

__Note__: Remember to add /app_plugins/ingredient/backoffice/ingredientTree/edit.controller.js to your __package.manifest__ file so it loads on application start.

##Add getById and save methods to the ingredientResource
We need to configure the ingredient resource to retrieve existing ingredients from the server, and also to save changes to these back to the server. 

We add two methods to ingredient.resource.js to do that:

```javascript
myService.getById = function(id){
	return $http.get("Backoffice/Ingredient/IngredientApi/GetById?id="+ id);
};

myService.save = function(ingredient){
	return $http.post("Backoffice/Ingredient/IngredientApi/PostSave", ingredient);
};
```

Again, these simply call the serverside REST api, which are defined in the .cs files in app_code

##Make the edit controller save and retrive
First the retrieve part, where we use $routeParams to determine the state of the editor:

```javascript
if($routeParams.create){
	$scope.ingredient = {};
}else{
	ingredientResource.getById($routeParams.id).then(function(response){
		$scope.ingredient = response.data;
	});
}
```

Then we add $scope.save to save the data: 

```javascript
$scope.save = function(){
	ingredientResource.save($scope.ingredient).then(function(response){
		$scope.ingredient = response.data;
		notificationsService.success("Ingredient saved!");
	});
};
```

__Notice__, how we’ve introduced $routeParams and notificationsService to the controller, just by having them injected in the controller function - again a core angular concept: dependency injection.
