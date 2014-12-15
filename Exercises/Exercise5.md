#Exercise 5: Managing an ingredients tree
This is not really an exercise, but more a walkthrough on how the tree works and where it gets its data from. 

All files for the tree is located in /app_code for easy inspection - if you would, you can also compile these files into a dll with visual studio, but for this workshop, its more approachable to have the class file as readable text. 

##Ingredient.cs
Contains the schema for the ingredient class, it is annotated with the table it will store data in, as well as annotations that describe how the data from the database is converted to JSON and back again

##IngredientApiController.cs
Class creating the rest end-point for all the $http calls we make from our angular files. It is setup to inherit from `UmbracoAuthorizedJsonController` which means that all calls must contain a security token (angular does this for us automatically) and you must be logged into the backoffice to access data. 

The controller is automatically wired up to be accessible at 

	/umbraco/Backoffice/Ingredient/IngredientApi/

##IngredientTreeController.cs
Class for the ingredient tree, it is annotated with tree meta data, that specifies the section (location of the tree), alias and label. 

	[Tree("settings", "ingredientTree", "Ingredient")]

It contains methods for providing tree items for the tree, and menu items for each item in the tree. By default the tree contains no information about which views to use with the tree items, since these are setup by convention to point at __/app_plugins/ingredient/backoffice/ingredientTree/__

This means we can focus on adding the html into the /app_plugins/ingredient/ folder to wire up the dialogs and editors we need to for our custom tree.
