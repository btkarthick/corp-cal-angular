
var setCalendarServices = function($http , $q , currentYear , currentMonth , FETCHURL){
	
	this.calendardata = {}
	
		
	this.setCalendarData = function(paramData){
		
		this.calendardata = paramData;
	};
	
	
	
	this.getEventsTypeList = function(){
		
		return this.calendardata.Output.eventtypelist;
		
	};
	
	
	
	
	
	this.getCalDataByYear = function(cyear){
	
		var year = (angular.isDefined(cyear)) ? cyear : currentYear;
			
		return $http.get(FETCHURL + year.toString() + ".json").then(handleSuccess, handleError);
	
	};
	

	
	var handleError = function( response ){
		
	// The API response from the server should be returned in a
	// nomralized format. However, if the request was not handled by the
	// server (or what not handles properly - ex. server error), then we
	// may have to normalize it on our end, as best we can.
	
	if (!angular.isObject( response.data ) || ! response.data.Message) {
 
			return( $q.reject( "An unknown error occurred." ) );
 
		}
 
		// Otherwise, use expected error message.
		return( $q.reject( response.data.Message ) );
		
	};
	
	
	
	var handleSuccess = function( response ){
	
		 return( response.data );
		
	};
	
};



CL.service("calservice" , setCalendarServices);


/*CL.factory("calfactory" , function($http  , currentYear , currentMonth , FETCHURL){

	var calservice = {}
	var caldata = {}
	
	calservice.getCalDataByYear = function(cyear){
	
		var year = (angular.isDefined(cyear)) ? cyear : currentYear;
		
		year = year.toString();
		
		$http.get(FETCHURL +  year + ".json")
		
		.success(function(data, status, headers, config){
					caldata = data;
		}).
		
		error(function(data, status, headers, config){
			
			console.log(status);
			
		});
		
		
	};
	

	return calservice;
	
	
});*/