using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;

using Umbraco.Core;
using Umbraco.Web.Models.Trees;
using Umbraco.Web.Mvc;
using Umbraco.Web.Trees;

using umbraco;
using umbraco.BusinessLogic.Actions;
using Constants = Umbraco.Core.Constants;


/// <summary>
/// Summary description for PeopleTreeController
/// </summary>

//add treecontroller
[Tree("settings", "ingredientTree", "Ingredient")]
[PluginController("Ingredient")]
public class IngredientTreeController : TreeController
{   

    
    protected override TreeNodeCollection GetTreeNodes(string id, FormDataCollection queryStrings)
    {
        //check if we're rendering the root node's children
        if (id == Constants.System.Root.ToInvariantString())
        {
            var ctrl = new IngredientApiController();
            var nodes = new TreeNodeCollection();

            foreach (var ingredient in ctrl.GetAll())
            {
                var node = CreateTreeNode(ingredient.Id.ToString(), "-1", queryStrings, ingredient.Name, "icon-cocktail", false);
                nodes.Add(node);
            
            }
            return nodes;
        }

        //this tree doesn't suport rendering more than 1 level
        throw new NotSupportedException();
    }

    
    
    protected override MenuItemCollection GetMenuForNode(string id, FormDataCollection queryStrings)
    {
        var menu = new MenuItemCollection();

        if (id == Constants.System.Root.ToInvariantString())
        {
            // root actions              
            menu.Items.Add<CreateChildEntity, ActionNew>(ui.Text("actions", ActionNew.Instance.Alias));
            menu.Items.Add<RefreshNode, ActionRefresh>(ui.Text("actions", ActionRefresh.Instance.Alias), true);
            return menu;
        }
                    

        menu.Items.Add<ActionDelete>(ui.Text("actions", ActionDelete.Instance.Alias));   

        return menu;
    }
}