// ==UserScript==
// @name        Goto Location from Breadcrumbs
// @namespace   Violentmonkey Scripts
// @match       http://*/WebUI/item.aspx
// @match       https://*/WebUI/item.aspx
// @grant       none
// @version     0.13
// @author      Kunal Shetye
// ==/UserScript==

unsafeWindow.gotoLocation = {};
unsafeWindow.gotoLocation.organizationalItems = [];

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
  prepTheBreadcrumbs();
}

function loadOrganizationalItems(orgItem){
   if(!orgItem.isLoaded()){
      $evt.addEventHandler(orgItem,"load",function(){
        unsafeWindow.gotoLocation.organizationalItems.push(orgItem.getId());
        if(!orgItem.getId().endsWith("-1")) {
          loadOrganizationalItems(orgItem.getOrganizationalItem());
        }
      });
      orgItem.load();
  }
  else{
    unsafeWindow.gotoLocation.organizationalItems.push(orgItem.getId()); 
    if(!orgItem.getId().endsWith("-1")) {
      loadOrganizationalItems(orgItem.getOrganizationalItem());
    }
  }
}


function prepTheBreadcrumbs(){
  jQuery.each(jQuery("#ItemAddressBar .addressbaritem"),function(i, v){
    var cmd = "javascript:window.gotoLocation.linkWasClicked("+i+");";
    jQuery(v).wrap('<a href="'+cmd+'"></a>')
  });
}

unsafeWindow.gotoLocation.linkWasClicked = function(i){
  loadOrganizationalItems($display.getItem().getOrganizationalItem());
  unsafeWindow.gotoLocation.organizationalItems.reverse();
  s = new Tridion.Web.UI.Editors.Base.Selection();
  s.addItem(unsafeWindow.gotoLocation.organizationalItems[i]);
  $cme.getCommand('Goto')._execute(s);
}