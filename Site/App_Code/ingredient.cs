using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;

/// <summary>
/// Summary description for Ingredient
/// </summary>
/// 

[TableName("ingredient")]
[DataContract(Name="ingredient", Namespace = "")]
public class Ingredient
{
    [DataMember(Name="id")]
	public int Id { get; set; }
    
    [DataMember(Name = "name")]
    public string Name { get; set; }
    
    [DataMember(Name = "description")]
    public string Description { get; set; }
}