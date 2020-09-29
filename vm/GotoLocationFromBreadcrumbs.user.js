// ==UserScript==
// @name        Goto Location from Breadcrumbs
// @namespace   Violentmonkey Scripts
// @match       http://*/WebUI/item.aspx
// @match       https://*/WebUI/item.aspx
// @grant       none
// @version     0.1
// @author      Kunal Shetye
// @description 9/29/2020, 6:15:44 PM
// ==/UserScript==

window.organizationalItems = [];

jQuery(window).on('load',function(){
  waitForTridion();
});

function waitForTridion(){
    if(typeof $display !== "undefined" || typeof $evt !== "undefined"){      
      $evt.addEventHandler($display, "start", displayStart);
    }
    else{
      setTimeout(waitForTridion, 250);
    }
}

function displayStart(){
  $evt.addEventHandler($display.getView().properties.controls.fieldBuilder,"load", fieldBuilderLoad);
}

function fieldBuilderLoad(){
  loadOrganizationalItems ($display.getItem().getOrganizationalItem());
}

function loadOrganizationalItems(orgItem){
   if(!orgItem.isLoaded()){
      $evt.addEventHandler(orgItem,"load",function(){
        window.organizationalItems.push(orgItem.getId())
        if(orgItem.getId !== "tcm:0") {
          loadOrganizationalItems(orgItem.getOrganizationalItem());
        }
      });
      orgItem.load();
  }
  else{
    window.organizationalItems.push(orgItem.getId()); // we reached the publication
    zetHemOp();
  }
}

function zetHemOp(){
  window.organizationalItems.reverse();
  console.log(window.organizationalItems);
  jQuery.each(jQuery("#ItemAddressBar .addressbaritem"),function(i, v){
    var cmd = "javascript:s = new Tridion.Web.UI.Editors.Base.Selection(); s.addItem('"+window.organizationalItems[i]+"');$cme.getCommand('Goto')._execute(s)";
    jQuery(v).wrap('<a href="'+cmd+'"></a>')
  });
}