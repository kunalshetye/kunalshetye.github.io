// ==UserScript==
// @name         Fujitsu Highlight Tasks
// @namespace    kunalshetye.github.io
// @version      0.11
// @description  Highlight Pending/In Progress tasks for Partners
// @author       Kunal Shetye
// @match        https://partners.ts.fujitsu.com/teams/p/is/oic4/Lists/workitems/all.aspx
// @grant        none
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(function() {
    color = "powderblue";
    partner = "(Partner)";
    console.log("page loaded!");
    $("img[src='/sitecollectionimages/icons/progress-0.gif']").each(function(){
        highlightRow(this);
    });
    $("img[src='/sitecollectionimages/icons/progress-25.gif']").each(function(){
        highlightRow(this);
    });
    $("img[src='/sitecollectionimages/icons/progress-50.gif']").each(function(){
        highlightRow(this);
    });
    $("img[src='/sitecollectionimages/icons/progress-75.gif']").each(function(){
        highlightRow(this);
    });
    function highlightRow(item){
        var tr = $(item).closest("tr");
        var person = $(tr).children("td.ms-vb-user").find("a").text();//);//.text();
        //console.log(person);
        if(person.indexOf(partner)!=-1){
            console.log(person);
            $(tr).css("background-color",color);
        }
    }
})();