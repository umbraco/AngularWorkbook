using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Web.Editors;
using Umbraco.Web.Mvc;

/// <summary>
/// Summary description for PeopleController
/// </summary>
/// 
[PluginController("Ingredient")]
public class IngredientApiController : UmbracoAuthorizedJsonController
{
    public Ingredient PostSave(Ingredient ingredient) {
        if (ingredient.Id > 0)
            DatabaseContext.Database.Update(ingredient);
        else
            DatabaseContext.Database.Save(ingredient);

        return ingredient;
    }

    public int DeleteById(int id) {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        return db.Delete<Ingredient>(id);     
    }

    
    public Ingredient GetById(int id) {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        var query = new Sql().Select("*").From("ingredient").Where<Ingredient>(x => x.Id == id);

        return db.Fetch<Ingredient>(query).FirstOrDefault();
    }

    public IEnumerable<Ingredient> GetByName(string name) {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        var query = new Sql().Select("*").From("ingredient").Where("name LIKE '%" + name +"%'");
        return db.Fetch<Ingredient>(query);
    }

    public IEnumerable<Ingredient> GetAll()
    {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        var query = new Sql().Select("*").From("ingredient");

        return db.Fetch<Ingredient>(query);
    }
}