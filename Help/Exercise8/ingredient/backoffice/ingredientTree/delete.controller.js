angular.module("umbraco").controller("My.Ingredient.DeleteController", function($scope, navigationService, treeService, ingredientResource){

	$scope.performDelete = function() {

		//mark it for deletion (used in the UI)
		$scope.currentNode.loading = true;

		ingredientResource.delete($scope.currentNode.id).then(function(){
			//helper to stop indicating a node in the tree is loading
			$scope.currentNode.loading = false;

			//tree service to remove nodes from the tree
			treeService.removeNode($scope.currentNode);
			
			//close the dialog and menu pane holding the dialog
			navigationService.hideDialog();
		});
		
	};


    $scope.cancel = function() {
    	//close the dialog
        navigationService.hideDialog();
    };

})