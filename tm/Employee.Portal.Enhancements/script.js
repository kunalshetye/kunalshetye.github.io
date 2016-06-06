$(function(){
    var originalFunction = SaveNewImageButton_Click;
    var originalFunctionString = SaveNewImageButton_Click.toString();
    var patchedFunctionString = originalFunctionString.replace("if (workEnd > new Date())", "if (workEnd != workEnd)").replace("function SaveNewImageButton_Click()", "function()");
    SaveNewImageButton_Click = eval("(" + patchedFunctionString + ")");
    var saveNewTSRecordOriginalFunction = saveNewTSRecord;
    var saveNewTSRecordFunctionString = saveNewTSRecord.toString();
    var patchedSaveNewTSRecordFunctionString = saveNewTSRecordFunctionString.replace("var sComment = tbComment.text();", "var sComment = tbComment.val();");
    saveNewTSRecord = eval("(" + patchedSaveNewTSRecordFunctionString + ")");
    var CreatePendingRecordOriginalFunction = CreatePendingRecord;
    var CreatePendingRecordFunctionString = CreatePendingRecord.toString();
    var patchedCreatePendingRecordFunctionString = CreatePendingRecordFunctionString.replace("$('#MasterPage_ContentPlaceHolder1_CommentTextBoxNew').text();", "$('#MasterPage_ContentPlaceHolder1_CommentTextBoxNew').val();");
    CreatePendingRecord = eval("(" + patchedCreatePendingRecordFunctionString + ")");
    //showThickbox("ThickBox1", "You can now log work against time in the future, with descriptions on Chrome! ;)");
    $("div#HomeContent span#MasterPage_PageTitleSuffix").html($("div#HomeContent span#MasterPage_PageTitleSuffix").text() + " (God Mode)");

    var lbBackToSummary_ClickOriginalFunction = lbBackToSummary_Click;
    var lbBackToSummary_ClickFunctionString = lbBackToSummary_Click.toString();
    var patchedlbBackToSummary_ClickFunctionString = lbBackToSummary_ClickFunctionString.replace("iDays: 5","iDays: window.$iDays");
    lbBackToSummary_Click = eval("(" + patchedlbBackToSummary_ClickFunctionString + ")");

    window.$iDays = 5;
    $("#Menu").append('<li><label for="duration">Fetch data for days:</label><input type="text" id="duration" name="duration" value="5"><a id="getrecords" href="#">Fetch</a></li>');
    $("#getrecords").click(function(e){
        window.$iDays = $("#duration").val();
        lbBackToSummary_Click();
        console.log("Fetching data for days: "+window.$iDays);
        $(document).ajaxComplete(function() {
            expandRecords();
        }); 
    });
    expandRecords();
});


function expandRecords(){
    $("#MasterPage_ContentPlaceHolder1_pnlSummary span").html(window.$iDays + " Day Summary");
    var items = $("#TimesheetList a");
    for(var i=0;i<items.length;i++){
        if(i%2==0) {
            $(items[i])[0].click();
        }
    }
}