Spoon.directive( 'bookingForm', 
	[
		function directive(){
			return {
				
				"restrict": "A",
				"controller": "bookingFormController",
				
				"templateUrl": 'booking-form.html', 
				"link": function link( scope, element, attribute ){
					
					
				}
			}
		}
	] );