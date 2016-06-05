// ==UserScript==
// @name         Employee Portal Enhancements
// @namespace    http://kunalshetye.github.io/
// @version      0.2
// @description  improve employee-portal one javascript at a time
// @author       Kunal Shetye
// @match        https://employeeportal.sdl.com/Timesheet.aspx
// @grant        none
// @noframes     1
// ==/UserScript==

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
});