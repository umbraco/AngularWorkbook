#Exercise 8: Add configuration to ingredient picker
We are now pretty much done, but lets add a bit of flexibility to the ingredients picker. In this simple example, we will simply turn off the quantity field. 

##Edit the package.manifest
Add a prevalues collection to the property editor: 

```json
propertyEditors:[
	{
		name: "Ingredient Editor",
		alias: "My.IngredientEditor",
		editor:{...},
		prevalues: {
		    fields:[
		        {
		           label: "Hide quantity field",
		           description: "Disables adding an ingredient quantity",
		           key: "hideQuantity",
		           view: "boolean"
		        }            
		    ]
		}
	}
]
```

__Restart the application__, open the ingredients datatype and you will now see the option to turn quantity on/off - turn it off by checking the box.

##Edit the view
Examine the model as raw json in the view like so:

```javascript
{{model | json }}
```

This will show us that model.config.hideQuantity is equal to “1” 

So, we can now use this to disable the html elements containing the quantity field with ng-if: 

```html
<td ng-if="model.config.hideQuantity !== '1'">
	<input type="text" ng-model="ingredient.quantity"/> 
</td>
```

##Extra assignment
Try adding another prevalue field, but set its view to “/app_plugins/ingredient/editor.prevalue.html”  - create a file in that location and see how you could easily add your own configuration with any kind of html and controller to back it.

You even have the same $scope.model to bind your values to, experiment and see how this works the exact same way as using property editors. 
