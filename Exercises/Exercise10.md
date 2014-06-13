#Exercise 10: reuse glass picker as parameter editor
Remember that glass editor we made as the very first thing? - lets go back and reuse it as a macro parameter editor, in case we ever want to have a cocktail glass image path as a macro parameter (happens all the time).

##Edit the /app_plugins/first/package.manifest
Just add a isParameterEditor value to the propertyEditor definition, and after a app restart, it will show up in the list of macro parameter editors.

	propertyEditors:[
		{
			name: "My first editor",
			alias: "My.First",
			isParameterEditor: true,
			editor:{
				view: "~/app_plugins/first/editor.html"
			}
		}
	]
