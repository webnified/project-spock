Spoon.directive( 'bookOnline', 
	[
		function directive(){
			return {
				
				"restrict": "A",
				"controller": "bookOnlineController",
				
				"template":  
						"<section class='col-md-12 position-logo'>" +
				          "<img src='img/header/s&amp;p-logo.png' alt='' class='comp-logo'>" +
				          "<a href='' ng-disabled='disabledNot'><span class='book-online' ng-click='showFirstStep()'>Book Online</span></a>" +
			         	"</section>",
				"link": function link( scope, element, attribute ){
					
					
				}
			}
		}
	] );