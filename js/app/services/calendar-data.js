CL.service("calservice" , function($http){
	
	this.calData = {}
	
	this.eventData = {}
	
	this.getCalendarData = function(){
		
		var sdata = {}
		var responsePromise = $http.get("JSON/2014.json");

                responsePromise.success(function(data, status, headers, config) {
            					
					sdata = data;
			
                });
		
		
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!");
                });
		
		return sdata;
	};
	
	
	this.getEventsData = function(caldata){
	
		alert(JSON.stringify(caldata));
	};
	
});