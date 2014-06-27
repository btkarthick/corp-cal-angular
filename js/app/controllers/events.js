
var setEventsController = function($scope , $routeParams , calservice){
	
	var tempArr = "" , objCal = [] , events;
	var monthindex = parseInt($routeParams.monthIndex) - 1;

	tempArr = calservice.getCalendarForMonth(monthindex);
	
	tempArr = tempArr.Days.split(",");
	
	angular.forEach(tempArr , function(day){
		
		day = day.split("_");
		
		objCal.push({status : day[0] , dayindex : day[1]});
		
	});
	
	events = calservice.getEventsForMonth(monthindex);
	
	
	
	//Assign values to scope variable
	
	
	$scope.days = objCal;
	$scope.events = events.Days;
	
	
	
	//console.log(events.Days);
	
}


CL.controller("EventsController" , setEventsController);