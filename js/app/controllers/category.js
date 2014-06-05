/*All category related functionalities goes here*/

var setCategoryController = function($scope , calservice){
	
	$scope.listext = "Sample List text";
	
	calservice.getCalendarData();
	
	var s = calservice.getEventsData();
	
	alert(JSON.stringify(s));
	
	
};



CL.controller("CategoryController" , setCategoryController);