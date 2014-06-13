using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;

using Umbraco.Core;
using umbraco.BusinessLogic;
using umbraco.cms.businesslogic;
using umbraco.cms.businesslogic.web;

/// <summary>
/// Summary description for Ingredient
/// </summary>
/// 

public class ManifestWatcher : ApplicationEventHandler
{
    protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
    {
        
    }
}