#Exercise 3: Adding a service 
Its time to look at another central Angular concept: the service. We will in this exercise create a service to fetch cocktail ingredients and list them out in an editor. The whole idea of using a service is to centralize and share our code, so this service will be used in multiple places as the workshop progresses.

__Note:__ The angular term is __“service”__, but in Umbraco we label all services that access the database as a __“resource”__ - and to make it even more confusing, we implement it using `angular.factory`.

##Copy the “first” folder
Copy the “/app_plugins/first” folder and paste it as “/app_plugins/ingredient” - we could have kept it in the first folder, but it’s also nice to keep things tidy. 

##The manifest
Open the “/app_plugins/ingredient/package.manifest” file and modify it so the previously named “first editor” is now called “ingredients editor” like so:

	{
		propertyEditors:[
		{
		name: "Ingredient editor",
	alias: "my.ingredient.editor",
	editor:{
		view: "~/app_plugins/ingredient/editor.html",
		valueType: "JSON"
	}	
		}
	],
	….
	}

__Notice:__ we also added __“valueType”__ - this makes umbraco store data from the editor as json, and will serialize it when we later access it in the template.

Also, we need to modify the javascript array so it includes 2 files, the ingredient.resource.js will be added in the next exercise

	javascript: [
		"~/app_plugins/ingredient/editor.controller.js",
		"~/app_plugins/ingredient/ingredient.resource.js"
	]

##Create the service file
Now create /app_plugins/ingredient/ingredient.resource.js and make a basic service registration like so: 

	angular.module("umbraco.resources")
	.factory("ingredientResource", function($http){

	var myService = {};	
		return myService;
	});

##GetAll() method
Now, lets make the ingredient service call our server for some data. We use $http which is included in Angular. 

	myService.getAll = function(){
	return $http.get("Backoffice/Ingredient/IngredientApi/getAll");
	}; 


This simply exposes our ajax call to the server as a simple API, which we could later change the actual implementation of, if we wanted to. 

Modify the editor view and controller to list the ingredients
Open /ingredient/editor.controller.js and inject the ingredientResource into the controller, by adding it to the controller function() like so: 
	
	angular.module("umbraco")
	.controller("My.IngredientController", 
	function($scope, ingredientResource){
				$scope.ingredients = ingredientResource.getAll();
	});

also, as you can see we modify the name of the controller, Switch to the html view, and list out the ingredients as a list: 

	<div ng-controller="My.IngredientController">
	<ul>
		<li ng-repeat="ingredient in ingredients.data">
			{{ingredient.name}}
	</li>
	</ul>	
	</div>

__Hint__: to see all the data in ingredients, use `{{ingredients | json}}``

We now have a central location where we can attach all our ingredient handling code, so we don’t have to keep this in different controllers, anywhere we will need access to this service, we simply inject ingredientResource.

##Testing
To test all this, restart the application, add a new data type called “ingredient picker” and select “Ingredient editor” as its editor. 
Then add it to the drink document type as a property with the alias “ingredients”

If everything is in order, you will see a list of drink ingredients like so:

- Campari
- Aperol
- Dry vermouth
- Sweet vermouth
- Rose vermouth
- Orange peel
- Gin
- Vodka
