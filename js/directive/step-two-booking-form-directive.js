Spoon.directive( 'stepTwoBookingForm', 
	[
		function directive(){
			return {
				
				"restrict": "A",
				"controller": "stepTwoBookingFormController",
				
				"templateUrl": 'step-2-booking-form.html', 
				"link": function link( scope, element, attribute ){
					console.log(attribute);
				
				}
			}
		}
	])