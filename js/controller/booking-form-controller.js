Spoon.controller( 'bookingFormController', 
[
	'$scope',
	'chosenPackageFactory',
	function bookingFormController( $scope, chosenPackageFactory ){
		$scope.tab = 1;
		$scope.isShownThird = false;
		$scope.selectedCuisine="";
		$scope.selectIsMade = false;

		$scope.formFields = {
					companyName: "",
					contactPerson: "",
					email: "",
					mobileNo: "",
					customerCard: "",
					discount: "",
					pax: "",
					servingDate: "",
					servingTime: "",
					address: "",
					certificate: "",

			};
		$scope.checkTab = function checkTab( num ){
			return tab === num;
		};

		$scope.packageAndPrice = chosenPackageFactory.getAcceptPackageAndPrice();
		$scope.showThird = function showThird(){
			$scope.isShownThird = !$scope.isShownThird;
		};
		
		$scope.setTab = function setTab( tab ){
			$scope.tab = tab;
			$scope.setEmail();
		};
		
		$scope.setSelectedCuisine = function setCuisine( index ){
			$scope.selectedCuisine = index;
			$scope.selectIsMade = !$scope.selectIsMade;
		};

		$scope.selectedItemClick = function selectedItemCLick( index, cuisine, cuisineName ){
			chosenPackageFactory.setMenu( index, cuisine );
			chosenPackageFactory.setChosenCuisine( index, cuisineName );
			$scope.chosenCuisine = chosenPackageFactory.getChosenCuisine();
			console.log( index );
		};

		$scope.setEmail = function setEmail(){
			chosenPackageFactory.setEmail( $scope.formFields );
		};

		$scope.bookOrder = function bookOrder(){
			chosenPackageFactory.setAcceptMenuAndCuisine();
			chosenPackageFactory.setAccepts();
			chosenPackageFactory.setacceptPackageAndMail();
			console.log( chosenPackageFactory.getacceptPackageAndMail() );



			
			var mockData = chosenPackageFactory.getacceptPackageAndMail();
			
			$scope.actualData = dataIteratorAndJSONConverter( mockData );
			sendEmail($scope.actualData , false);
			console.log( $scope.actualData );

			function dataIteratorAndJSONConverter( dataToConvert ){
				for( var index = 0; index<=dataToConvert.length; index++ ){

					var cuisines = dataToConvert[ index ][ 1 ][ 1 ].join( ", " );

					if( index===0 ){
						var actualData = {
							"email": dataToConvert[0][2].email,
							"fullname": dataToConvert[0][2].contacPerson,
							"data":{
								"message":  "Ordered Package: " + dataToConvert[0][0][0] + "\n" + 
											"Ordered Price: " + dataToConvert[0][0][1] + "\n" + 
											"Email Content: " + "\n\n\n\n" + 
											"Name: " + dataToConvert[0][2].companyName + "\n" + 
											"Contact Person: " + dataToConvert[0][2].contactPerson + "\n" + 
											"Address: " + dataToConvert[0][2].address + "\n" + 
											"Email: " + dataToConvert[0][2].email + "\n" + 
											"Mobile Number:" + dataToConvert[0][2].mobileNo + "\n" + 
											"PAX:" + dataToConvert[0][2].pax + "\n" + 
											"Certificate:" + dataToConvert[0][2].certificate + "\n" + 
											"Discount:" + dataToConvert[0][2].discount + "\n" + 
											"Serving Date:" + dataToConvert[0][2].servingDate + "\n" + 
											"Serving Time:" + dataToConvert[0][2].seringTime + "\n" +
											"Chosen Cuisines: " + cuisines
								}
						};
					}else{
						cuisines = dataToConvert[ index ][ 1 ][ 1 ].join( ", " );
						console.log( cuisines );
						actualData.message+= "\n\n" + "" + cuisines;
					}
					console.log( cuisines );
					return actualData;
						
				}
			}
			$scope.isShownThird = !$scope.isShownThird;
		};

		$scope.bookAnother = function bookAnother(){
			$scope.setTab(1);
			chosenPackageFactory.setAcceptMenuAndCuisine();
			chosenPackageFactory.setAccepts();
			chosenPackageFactory.setacceptPackageAndMail();
			chosenPackageFactory.orderAnother();
			$scope.chosenCuisine = "";
			$scope.isShownThird = !$scope.isShownThird;
			angular.element("#booking-form-one").scope().showFirst();
		};
	}
] );
/*
function iterateAll ( array ) {
	var message = "";
 	iterate array {
 		message += mes;
 	}
 	return message;
}
*/