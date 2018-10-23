<h1 align = center >Angular Workbook</h1>

------

### Angular course implementing a Campari focused backend UI for frontend developers.

The goal of this workshop is to implement a complete drinks + ingredients handler in the backoffice. All the serverside components needed is included as code in app_code and all database modifications are already setup - it is however just adding a new simpel table and simple content to work with.

Also the solution comes with basic html files already setup, to avoid too much typing, so you can  focus on adding the angular specifics + manifests and umbraco bits. 

### The exercises will give you the chance to work with the following angular concepts:

- Create a .html view
- Add controllers
- Use the package.manifest to inject editors and .js files
- Create a angular service and inject it with dependency injection
- Configure property editors through the datatype editor
- Work with dialogs for a custom tree
- Work with a full editor for custom data in the custom tree following V7 conventions.
- Learn about browser debugging, logging and other angular dev tools

Each exercise has help files if you need them, these are located in the root of the folder you’ve been giving, next to the /site folder which you will run as your site. 

Each exercise has a folder specific to the exercise, like /help/exercise1/ - or if you need files get start with the exercise its named /help/exercise5-start/ -  by copying the contents of the help folder to the root of the /site/app_plugins/ folder, you will get the needed components for the exercise, or to bring your application up to speed.


## Before we start:

Download all your needed files, slides and a pdf of this workbook from this github repo

Unzip and right-click the /site/ folder and choose “Run as website in Microsoft webmatrix”
1
**The login to the umbraco site is:**

- user: admin@admin.com
- password: 1234

Ensure everything works, you should see a basic site with a basic structure, also, check the database, it should contain a ingredients table. 

**Optional**: if you have SQL Server running, you can migrate the database to that, however it adds nothing but a bit of speed and stability to your application.

Ensure your application is in **debug mode**, it should be set to this already, but if you want to check, look in the web.config file, around **line 117-118** 

## Exercises
Each exercise is to be worked on by the attendee, for the first couple of exercises, pretty much all information and code is provided, but as we progress, less and less detail is provided, so you must fill out the blanks as we get more and more experienced working with Umbraco and Angular.

### [Exercise 1: first property editor](Exercises/Exercise1.md)

### [Exercise 2: building a controller](Exercises/Exercise2.md)

### [Exercise 3: adding a service](Exercises/Exercise3.md)

### [Exercise 4: connecting editor and service](Exercises/Exercise4.md)

### [Exercise 5: serverside components overview](Exercises/Exercise5.md)

### [Exercise 6: creating ingredient editor](Exercises/Exercise6.md)

### [Exercise 7: deleting ingredients dialog](Exercises/Exercise7.md)

### [Exercise 8: adding configuration to a property editor](Exercises/Exercise8.md)

### [Exercise 9: add some style](Exercises/Exercise9.md)

### [Exercise 10: reuse an editor as a macro parameter editor](Exercises/Exercise10.md)

### [Exercise 11: $watch and $watchCollection](Exercises/Exercise11.md)
