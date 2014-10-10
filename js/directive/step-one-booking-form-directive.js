Spoon.directive( 'stepOneBookingForm',
	[
		function directive(){
			return {
				
				"restrict": "A",
				"controller": "stepOneBookingFormController",
				
				"templateUrl": 'step-1-booking-form.html', 
				"link": function link( scope, element, attribute ){
					
					
				}
			}
		}
	] );