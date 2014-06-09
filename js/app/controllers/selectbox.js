
var setSelectBoxControls = function($scope , MONTHLIST ,YEARLIST , currentMonth , currentYear){
	
	var  yearmonth = {}
	
	$scope.months = MONTHLIST;
	
	$scope.years = YEARLIST;
	
	yearmonth.month = MONTHLIST[currentMonth];
	yearmonth.year = currentYear.toString();
	
	$scope.ym = yearmonth;
	
	
	
	// User Defined functions here
	
	$scope.onMonthChange = function(){
		
		console.log($scope.ym.month);
		
	}
	
	$scope.superb = function(){
		
		console.log($scope.ym.month);
	}
	
	
}



CL.controller("SelectBoxController" , setSelectBoxControls);