$kj(function(){
	$kj("#ButtonContainer").prepend('<input type="checkbox" id="autorefresh" name="autorefresh"><label for="autorefresh">Auto Refresh</label>');
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