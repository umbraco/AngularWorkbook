angular.module("umbraco").controller("My.EditorController", function($scope){
	$scope.glasses = [
		{
			name: "cocktail",
			image: "/images/glasses/cocktail.jpg"
	},
	{
			name: "shot",
			image: "/images/glasses/shot.jpg"
	},
	{
			name: "highball",
			image: "/images/glasses/highball.jpg"
	},
	];

	$scope.choose = function(glass){
		$scope.model.value = glass.image;	
	};

	
});
