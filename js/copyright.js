// JS Information ======================================================
// Site URL:http://machiaruki.com/bunkasozosha/
// File name:copyright.js
// Summary:西暦自動繰上
// Created:2020-9-15
// Last update:2020-9-15 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

myD = new Date();
myYear = myD.getYear();
myYears = (myYear < 2000) ? myYear+1900 : myYear;
document.write("Copyright &copy; 2011-",myYears," BUNKASOZOSHA Co.,Ltd.<br class='sp_mode'> All Rights Reserved.");
