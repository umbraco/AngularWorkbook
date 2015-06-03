#Exercise 11: add a chart
Final exercise of the day, which involves pie-charts. First of all, copy __/help/exercise11-start/highcharts.min.js__ into /app_plugins/ingredient/. 

Open __/app_plugins/ingredient/editor.controller.js__ and using a core Umbraco service called assetsService, we can lazy load any javascript file, and at the same time pause execution till its fully loaded, since the loading returns a “promise”:

##Loading external asset

```javascript
assetsService.loadJs("/app_plugins/ingredient/highcharts.min.js")
	.then(function(){
			<<<< all the $scope functions already added, >>>>
	});
```

Like anything else in Angular, this service must be injected in the controllers function.

That means, when the code inside .then() executes, the file is already loaded, and we can safely reference any of its functions. This is exactly what we will do, to instantiate a pie chart based on our drink ingredients:

##Rendering a chart

```javascript
$scope.renderChart = function () {	
	//collect an array from model.value
var data = [];

_.forEach($scope.model.value, function (ing) {
	//only add if ingredient has a .percentage
       if (ing.percentage) {
         	data.push([ing.name, ing.percentage]);
       }
});

//we find an element with ID 'container" and add the chart data to.
$('#container')
	.highcharts({
			series: [{
	                    type: 'pie',
	                    data: data
	            	}]
	 	});
};
```

Every time we call __$scope.renderChart()__; the chart will be built based on our current set of ingredients.

##Update the view
We need 2 more things, adding a percentage form input in the table, and the div for displaying the chart.

For the form input we use a `<input type=”number” />` to ensure we get an interger, as highcharts requires, add it inside the model.value loop in the ingredient table.

```html
<input type="number" class="span2" ng-model="ingredient.percentage"/>
````

Then we add a basic div to load the charts into (required by highcharts) just below the ingredient table:

```html
<div id="container" style="height: 400px; width: 600px;"></div>
```

Try calling __$scope.renderChart()__ and see what happens.

##Trigger chart on changes to model.value
Instead of manually calling renderChart() or making it rely on user action, we can instead 
use $scope.$watch to monitor if a value on the scope changes.

```javascript
$scope.$watch("model.value", 
function(newIngredients, oldIngredients) {
       		$scope.renderChart();  
}, 
true);
```

Attach a browser debugger inside the $watch state to monitor when it’s triggered by changes and additions to the ingredients list.
