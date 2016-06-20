// ==UserScript==
// @name         Publish Queue Enhancements
// @namespace    http://kunalshetye.github.io/
// @version      0.11
// @description  Make the Publishing Queue nice
// @author       Kunal Shetye
// @match        http://*/WebUI/Editors/CME/Views/Popups/PublishQueue/PublishQueue.aspx
// @match        http://*/WebUI/Editors/CME/Views/Popups/PublishQueue/PublishQueue.aspx
// @grant        none
// @require      http://kunalshetye.github.io/js/jquery.js
// @noframes     1
// ==/UserScript==

$kj(function(){
	$kj("#ButtonContainer").prepend('<input type="checkbox" id="autorefresh" name="autorefresh" checked><label for="autorefresh">Auto Refresh</label>');
	setInterval(AutoRefresh,5000);
});

function AutoRefresh(){
	var v = $display.getView();
	var btn = v.properties.controls.btnShowTasks;
	if(btn != null && btn != undefined && $kj("#autorefresh").is(':checked'))
	{
		console.log("auto refreshing: " + new Date());
		btn.fireEvent("click");
	}
}