
var setSelectBoxes = function($scope , $location ,  MONTHLIST , YEARLIST , currentMonth , currentYear){
	
	var yearmonth = {}
	
	$scope.months = MONTHLIST;
	$scope.years = YEARLIST;
	
	yearmonth.month = $scope.months[currentMonth];
	
	yearmonth.prevmonth = "false";
	yearmonth.nextmonth = "false";
	
	yearmonth.year = currentYear.toString();
	
	$scope.ym = yearmonth;
	
	
	

};


CL.controller("SelectBoxController" , setSelectBoxes);