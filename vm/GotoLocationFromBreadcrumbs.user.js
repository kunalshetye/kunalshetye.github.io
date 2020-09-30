// ==UserScript==
// @name        Goto Location from Breadcrumbs
// @namespace   Violentmonkey Scripts
// @match       http://*/WebUI/item.aspx
// @match       https://*/WebUI/item.aspx
// @grant       none
// @version     0.16
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
  if($display.getView().properties.addressBarInitialized === true){
    prepTheBreadcrumbs();
  }
  else{
      setTimeout(displayStart, 250);
  }
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

function prepTheBreadcrumbs() {
    jQuery.each(jQuery("#ItemAddressBar .addressbaritem"), function (i, v){
        var cmd = "javascript:window.GoToLocation.Commands.linkWasClicked(" + i + ");";
        var elementHtml = jQuery(v).html();
        jQuery(v).html('<a href="' + cmd + '" style="cursor: pointer;">'+ elementHtml +'</a>');
    });
}

unsafeWindow.gotoLocation.linkWasClicked = function(i){
  if(unsafeWindow.gotoLocation.organizationalItems.length === 0){
    loadOrganizationalItems($display.getItem().getOrganizationalItem());
    unsafeWindow.gotoLocation.organizationalItems.reverse();	
  }
  s = new Tridion.Web.UI.Editors.Base.Selection();
  s.addItem(unsafeWindow.gotoLocation.organizationalItems[i]);
  $cme.getCommand('Goto')._execute(s);
}