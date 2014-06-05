var CL = angular.module("CropCalendarApp" , ["ngRoute"]);

CL.config(function($routeProvider){
	
	//$routeProvider.when("/" , {templateUrl : "views/test.html" , controller : "TestController"});
	
});

CL.controller("TestController" , function($scope){
	
	$scope.testApp = "Hello Angular!!";
	
});