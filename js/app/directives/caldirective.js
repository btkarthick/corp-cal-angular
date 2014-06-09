
var setPrevNextMonth = function(MONTHLIST){
	
	return {
		
			restrict: 'A',
		
			require: '^ngModel',
		
			scope: {
				ngModel: '=' ,  //Two-way data binding
				
				onButtonClick : '&'
			},
					
			link : function(scope , element , attrs){
				
				var prevnextmonth = "" , position;
				console.log(scope);
				var offset = $.inArray(scope.ngModel , MONTHLIST);
				
				if(attrs.customDirection === "prev")
				{
					position = offset - 1;
					prevnextmonth = (position < 0) ? "no" : MONTHLIST[position];
				}
				
				else
				{
					position = offset + 1;
					prevnextmonth = (position > 12) ? "no" : MONTHLIST[position];
				}
				
						
				$(element).find(".ui-btn-text").text(prevnextmonth);
			}
	}
	
};


CL.directive("prevNext" , setPrevNextMonth);