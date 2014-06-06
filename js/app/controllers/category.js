/*All category related functionalities goes here*/

var setCategoryController = function($scope , calservice){
	
	$scope.listext = "Sample List text";
	
	calservice.getCalDataByYear().then(function(data){
		
		calservice.setCalendarData(data);
		
		$scope.categories = calservice.getEventsTypeList();
		
		
	});
	
};



CL.controller("CategoryController" , setCategoryController);