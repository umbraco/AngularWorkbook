#Exercise 1: Our very first property editor
This exercise will result in a basic property editor, that will show you how to connect your editor with Umbraco on the serverside, and how to populate and sync data in the UI. 

##The manifest
Create a new folder at /app_plugins/first/, inside this folder, create a new file and call it package.manifest.

This file is used to, among other things,register property editors. So we will add a bit of json to describe what we are adding:

```json
{
	propertyEditors:
	[
		{
			name: "My editor",
			alias: "my.editor",
			editor:{
				view: "~/app_plugins/first/editor.html"
			}	
		}
	]
}
```

So we create a propertyEditors array, which we then add a single editor to. This editor has basic meta data like name, alias and most importantly, the path to the html that will show in the Ui when loaded. 

##Editing the view
Let’s add that view, which is a .html file at `/app_plugins/first/editor.html`, then Open the editor.html file, and add nothing but:

```html
<input type="text" ng-model="model.value" /> 
```

Now, lets restart the application, by opening the `web.config` and make an edit like a linebreak or space to “touch it”. Every time we change the manifest, we must make the application restart to pickup the changes. 

After restart, create a new data type named “**glass picker**”, and choose “**My editor**” from the list of available editors, add that data type to the “drink” document type as a property with the alias “**glass**” and open a page of that type.
