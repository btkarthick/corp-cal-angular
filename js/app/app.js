var CL = angular.module("CropCalendarApp" , ["ngRoute"]);

CL.config(function($routeProvider){
	
	$routeProvider.when("/" , {templateUrl : "views/test.html" , controller : "CategoryController"});
	
});

