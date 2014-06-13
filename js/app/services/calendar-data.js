
/* Calendar service function
 *
 * Responsible for getting data via ajax
 * Manipulate data
 * 
 */
var setCalendarServices = function($http , $q , currentYear , currentMonth , FETCHURL){
	
	this.calendardata = null;
	
		
	this.setCalendarData = function(paramData){
		
		this.calendardata = paramData;
	};
	
	
	
	this.getEventsTypeList = function(){
		
		if(angular.isObject(this.calendardata))
		{
			return this.calendardata.Output.eventtypelist;	
		}
		
		
	};
	
	
	this.getCalendarForMonth = function(monthindex){
		
		if(angular.isObject(this.calendardata))
		{
			return this.calendardata.Output.monthlist[monthindex];
		}	
		
	};
	
	
	this.getEventsForMonth = function(monthindex){
	
		if(angular.isObject(this.calendardata))
		{
			return this.calendardata.Output.events["year"].Months[monthindex];
		}
		
	
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

/*End of Calendar service */


/*Start of Helper functions*/

var setHelpers = function(MONTHLIST){

	var helpers = {}
	
	helpers.getNextPrevMonth = function(month , pnflag){
		
		
		var prevnextmonth = "" , position;
		
		var offset = $.inArray(month , MONTHLIST);
		
		
		if(pnflag === "prevmonth")
		{
				position = offset - 1;
			    prevnextmonth = (position >= -1) ? MONTHLIST[position] : "true";
		}
		
		else
		{
				position = offset + 1;
				prevnextmonth = (position <= 12) ? MONTHLIST[position] : "true";
		}
		
		return {"month" : prevnextmonth , "offset" : offset}
		
	};
	
	
	helpers.capitalize = function(word){
		
		
		return word.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			
			return letter.toUpperCase();
		
		});
		
	};
	

	return helpers;
};

/*End of Helper functions*/

CL.service("calservice" , setCalendarServices);
CL.factory("calhelper" , setHelpers);