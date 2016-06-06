// ==UserScript==
// @name         Employee Portal Enhancements
// @namespace    http://kunalshetye.github.io/
// @version      0.3
// @description  improve employee-portal one javascript at a time
// @author       Kunal Shetye
// @match        https://employeeportal.sdl.com/Timesheet.aspx
// @require      https://kunalshetye.github.io/tm/Employee.Portal.Enhancements/script.js
// @noframes     1
// @resource     CSS https://kunalshetye.github.io/tm/Employee.Portal.Enhancements/style.css
// @grant        GM_addStyle
// @grant        GM_getResourceText

// ==/UserScript==

var newCSS = GM_getResourceText ("CSS");
GM_addStyle (newCSS);