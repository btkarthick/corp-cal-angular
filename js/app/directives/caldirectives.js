/*All custom directives related to this page will go here*/

var setPreveNextDirective = function( $location , calhelper){
	
	var objDirectives = {}
	
	objDirectives.restrict = 'EA';
	
		
	/*objDirectives.scope = {ym : "=ngMonth"}
	
	objDirectives.scope = true;*/
	
	objDirectives.link = function($scope, element , attrs){
		

		$scope.$watch("ym.month" , function(changedMonth){
			
			var prevnext = (element.hasClass("left_btn")) ? "prevmonth" : "nextmonth";
			
			var cmonth = calhelper.getNextPrevMonth(changedMonth , prevnext);
			
			$scope.ym[prevnext] = cmonth.month;
			
			if(angular.isDefined(cmonth.month))
				{$(element).show().find(".ui-btn-text").text(calhelper.capitalize(cmonth.month).substring(0,3));}
			
				$("#sel_month").val(changedMonth);
			
			$location.path("/month/" + (parseInt(cmonth.offset) + 1));
	
		});
		
		
		
		element.bind("click" , function(event){
			
			var str = (element.hasClass("left_btn")) ? "prevmonth" : "nextmonth";
			
			$scope.ym.month = $scope.ym[str];
		
			
		/*	Since the above month change(Scope change) happens inside a 
			non-angular event callback(not in ng-click, ng-change etc..) This will not 
			change the DOM as expected. We need to explictly call the $apply method.
		*/
			
			$scope.$apply();
			event.preventDefault();
	});

	};
	
	
	
	
	return objDirectives;
	
	
};

/*End of the prevnext buttons directive*/

/*Directive to populate months selectbox
and also for related functionalities*/

var setMonthSelectBox = function($location , calhelper , MONTHLIST){
	
	var directives = {}
	
	directives.restrict = "EA";

	
	directives.link = function($scope , element , attrs){
		
		$(element).empty();
		
		
		$.each($scope.months,function(i, v){
			$(element).append($("<option>", { value: v , html: calhelper.capitalize(v) }));
		});
		
				
		//Bind an change event to this selectbox
		
		$(element).on("change" , function(){
			
			$scope.ym.month = $(this).val();
					
			$scope.$apply();
			
		});
		
	};
	
	
	
	return directives;
	
};

/*End of months selectbox directive*/


/*Events listing directive Starts*/

var setEventsListing = function(){
	
	var eventslist = {}
	
		eventslist.restrict = "E";
	
		eventslist.replace = true;
	
		eventslist.scope = {
			
			eventSource : "=",
			dayIndex : "@"
		}
	
		eventslist.template = "<div class=\"pointer\"></div>";
	
		eventslist.link = function(scope , element , attrs){
			
			if(angular.isDefined(scope.dayEvents))
			{
				var html = "";
				angular.forEach(scope.dayEvents , function(value){
					
					html+= "<div class=\"event_list_text\" style=\"border-color:" + value.Color + "\">";
					html+="<span class=\"e_l_text\">" + value.Title + "</span>";
					html+="</div>";
					
				});
				
				$(element).empty().append(html);
			}	
			
		};
	
	
		eventslist.controller = function($scope){
			
			angular.forEach($scope.eventSource , function(value , key){
				
				if(value.EventDay === $scope.dayIndex)
				{
					if(angular.isDefined(value.Events))
					{
						$scope.dayEvents = value.Events;
						return false;
					}
					
				}
				
			});
			
		};
	
	return eventslist;
};


/*End of events listing directive*/

CL.directive("prevNextMonth" , setPreveNextDirective);
CL.directive("monthSelectbox" , setMonthSelectBox);
CL.directive("customEventList" , setEventsListing)