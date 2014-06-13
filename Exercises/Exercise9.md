#Exercise 9: add some style
One final detail, lets import some custom css to make the glass picker stand out a bit, copy /help/exercise9-start/style.css to /app_plugins/first/style.css, then register it in the /app_plugins/first/package.manifest file like so:

	{
		propertyEditors:[
		...
		],
		css:[
			"~/app_plugins/first/style.css"
		]
	}

The stylesheet targets a `<div>` with the class “my-glass-editor” so add that class to the `<div>` element wrapping the glass editor view.

Restart the app, and reload umbraco, now open the content editor to see the new styles added

__Notice__: The stylesheet is imported as a global stylesheet on app start and therefore affect the entire application, you can therefore also override global application styles if you wish.