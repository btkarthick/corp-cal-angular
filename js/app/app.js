var CL = angular.module("CropCalendarApp" , ["ngRoute"]);
var date = new Date();

CL.config(function($routeProvider , $locationProvider){
	
	$routeProvider.when("/" , {templateUrl : "views/calendar-list.html" , controller : "EventsController"});
	$routeProvider.when("/month/:monthIndex" , {templateUrl : "views/calendar-list.html" , controller : "EventsController"});
	$routeProvider.otherwise({ redirectTo: "/" });
	
	//$locationProvider.html5Mode(true);
});

CL.value("currentYear" , date.getFullYear())
  .value("currentMonth" , date.getMonth())
  .constant("FETCHURL" , "JSON/")
  .constant("MONTHLIST" , ["january" , "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" , "december"])
  .constant("YEARLIST" , ["2013", "2014", "2015", "2016"]);

