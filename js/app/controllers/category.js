/*All category related functionalities goes here*/

var setCategoryController = function($scope , calservice){
	
	calservice.getCalDataByYear("2013").then(function(data){
		
		calservice.setCalendarData(data);
		
		$scope.categories = calservice.getEventsTypeList();
		
		angular.forEach($scope.categories , function(etypes){
			
			calservice.eventGuids.push(etypes.Guid);
			
		});
	
	});
	

	
};



CL.controller("CategoryController" , setCategoryController);