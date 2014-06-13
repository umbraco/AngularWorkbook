#Exercise 7: deleting ingredients dialog
We have a delete menu action on each ingredient in the tree, we need a dialog for this as well. So we will follow the same pattern as the previous exercise. 

There is already a delete view and a controller in /help/exercise7-start/ copy these into the ingredientTree folder you used in the last exercise. 

Make sure everything works and then wire up the controller to call the ingredientResource to delete an item. 

To setup the ingredientResource, you need this: 

	myService.delete = function(id){
	   return $http.delete("Backoffice/Ingredient/IngredientApi/DeleteById?id="+id);
	};

Other then that, you are on your own, all in the name of learning by doing :)

There are a couple of helpful services to control the tree and menus displayed, which are also listed in the controller in the start files:


	navigationService.hideDialog();

and 

	treeService.removeNode($scope.currentNode);

Also, by default, all dialogs have access to the current active tree node with 

	$scope.currentNode