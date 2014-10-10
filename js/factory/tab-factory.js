Spoon.factory( 'tabFactory', 
	[
		function factory( ){
			var bookFormSteps = 0;
			return {
					setBookFormSteps: function setBookFormSteps( num ){
						bookFormSteps = num;
						return bookFormSteps;
					},
					getBookFormSteps: function getBookFormSteps(){
						return bookFormSteps;
					},
					
				}

		}
	]);