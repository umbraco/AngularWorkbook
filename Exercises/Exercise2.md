#Exercise 2: Our first controller
We continue to work with the glass editor.html file and will now add a controller to our view to introduce some more logic to our editor. 

##The controller setup
Add a new javascript file at __/app_plugins/glass/editor.controller.js__ - open it, and add a basic controller declaration to it like so: 

```javascript
angular.module("umbraco").controller("Glass.EditorController", function(){
    alert("Here I am");
});
````

##The view setup
We also need to tell the editor html view to actually load and use the controller we’ve setup, so modify the editors html to be like so: 

```html
<div ng-controller="Glas.EditorController">
    <input type="text" ng-model="model.value" />
</div>
```

##The manifest
We need to tell our application to actually load this controller.js file on application start, so open /app_plugins/first/package.manifest and add a javascript array to the configuration, like so: 

```json
{
    propertyEditors:[
        {
        
        }
    ],
    javascript: [
        "~/app_plugins/glass/editor.controller.js"
    ]
}
```

Restart the application - you will now see an alert box when you reload the page with the editor on. 

##$Scope
Now lets work with some data in our scope. First of all, inject the $scope, by adding it to the controllers function like so:

```javascript
angular.module("umbraco").controller("Glass.EditorController", function($scope){
    alert("Here I am");
});
```

This gives us access to work with data inside of the scope of the html element that’s calling the controller. 

Add a simple array of glasses to the $scope like so: 

```javascript
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
````

The images/glass files have already been added to the web site.

##Ng-repeat
We will now bind the data from the glasses array to our html, switch over to the “editor.html” view and replace the `<input />` element with an un-ordered list like below:

```html
<ul class="thumbnails">
    <li class="span3" ng-repeat="glass in glasses">
        <a href class="thumbnail">
            <img ng-src="{{glass.image}}" />
            <small>{{glass.name}}</small>
        </a>    
    </li>
</ul>
```

Notice how each item in the array are bound to the html, this is one of the most common ways to do templating in Angular.

##Ng-Click
Modify the `<a>` element inside the list. and add a ng-click attribute to it like so: 

```html
<a href class="thumbnail" ng-click="choose(glass)"> …
```

This means that when the link is clicked, it will try to execute a method called “choose” on the $scope. so lets add this method to the editor.controller.js file like so:

```javascript
$scope.choose = function(glass){
    $scope.model.value = glass.image;   
};
````

This will store the glass image on the property, and now be available to use in the drink template, so we can replace with hardcoded glass image reference with dynamic data.

This is the standard way of calling methods in a controller from a view in Angular.

##Ng-Class
Lets try one more thing with templating, indicate what item is currently selected. We can do this by applying the class “selected” to the <li> element that is currently picked.

In angular, we can apply classes based on conditions, by adding an ng-class attribute to the element like so:

```html
<li ng-class="{selected: glass.image === model.value}"> 
````

This performs a simple expression to determine if the class should be applied or not, in this case, it will return true if the image path is equal to the value on model.value.
