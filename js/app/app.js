var CL = angular.module("CropCalendarApp" , ["ngRoute"]);
var date = new Date();

CL.config(function($routeProvider){
	
	//$routeProvider.when("/" , {templateUrl : "views/test.html" , controller : "CategoryController"});
	
});

CL.value("currentYear" , date.getFullYear())
  .value("currentMonth" , date.getMonth())
  .constant("FETCHURL" , "JSON/")
  .constant("MONTHLIST" , ["january" , "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" , "december"])
  .constant("YEARLIST" , ["2013", "2014", "2015", "2016"]);

