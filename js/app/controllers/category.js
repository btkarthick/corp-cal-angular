/*All category related functionalities goes here*/

var setCategoryController = function($scope , calservice){
	
	calservice.getCalDataByYear("2013").then(function(data){
		
		calservice.setCalendarData(data);
		
		$scope.categories = calservice.getEventsTypeList();
		
		
	});
	
};



CL.controller("CategoryController" , setCategoryController);