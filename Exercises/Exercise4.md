#Exercise 4: Connect editor and service
Now that we have a simple editor running, and can pull in data from our service, its time to really make it do some work. In this exercise we will enable the user to pick ingredients from the service, enable search for ingredients, and store all the ingredients data in the Umbraco cache, for easy use on the drinks page. 

##Setup search and type-ahead
Instead of using a long list of ingredients to pick from, we will use a simple type-ahead directive to search for needed ingredients. So first of all we need to make the ingredientResource search ingredients by name: 

Add the following method to ingredient.resource.js:
 
	myService.search = function(name){
	return $http.get("Backoffice/Ingredient/IngredientApi/getByName?name=" +
	name);
	};

Then we need to wire up our view and controller to call the search method, first add a controller method to populate the list of ingredients found:

	$scope.find = function(event, term){
		$scope.ingredients = ingredientResource.search(term);
	}

we then add a textbox to call this method as we type: 

	<input type="text" 
	ng-keyup="find($event, searchTerm)" 
	ng-model="searchTerm" />

Reload the page, and see how the list updates as you type.

Now that we have a way to search for ingredients, we need to store them on $scope.model.value to persist them to the document.

To do this, we add a select() method which we can then wire up to the list of ingredients with ng-click:

	if(!angular.isArray($scope.model.value)){
		$scope.model.value =[];
	}
	$scope.select = function(ingredient){
		$scope.model.value.push(ingredient);
	};

Notice we also ensure that the model.value is an array we can push data to incase its not defined.

To use the $scope.select function from our view, we wrap the ingredient label in a link with an ng-click attribute:

	<li ng-repeat="ingredient in ingredients.data">
		<a ng-click="select(ingredient)">
			{{ingredient.name}}
		</a>
	</li>
 
##Displaying selected ingredients
Finally  we need a table to list the selected values:

	<table>
	<tr ng-repeat="ingredient in model.value">
			<td><input type="text" ng-model="ingredient.quantity"/></td>
			<td>
				{{ingredient.name}}
			</td>
		</tr>
	</table>

Notice how we also add a quantity field to the ingredient object, try populating this and see how its included in the saved data. (use {{model.value | json }} for a quick raw view - or use the browser debugging tools.

##Removing selected values
Last thing we need in the ingredient editor, is to be able to remove selected ingredients from the table. First we add a link to the ingredient row:

	<a href ng-click="remove($index)">Remove</a>

we then need to add this remove method to the controller:

	$scope.remove = function(index){
		$scope.model.value.splice(index, 1);
	}

Don’t worry if your editor looks like crap while working on it, we are just prototyping, but just in case, the __/help/exercise4__ files has a prettified html view