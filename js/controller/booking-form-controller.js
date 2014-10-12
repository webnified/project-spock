Spoon.controller( 'bookingFormController', 
[
	'$scope',
	'chosenPackageService',
	function bookingFormController( $scope, chosenPackageService ){
		$scope.tab = 1;
		$scope.isShownThird = false;
		$scope.selectedCuisine="";
		$scope.selectIsMade = false;
		$scope.count = 0;

		$scope.mockData=[];

		$scope.formFields = {
					companyName: "Company",
					contactPerson: "Jules Mercado",
					email: "counterera@yahoo.com",
					mobileNo: "09264502876",
					customerCard: "123",
					discount: "123",
					pax: "123",
					servingDate: "",
					servingTime: "12:49",
					address: "Macabalan",
					certificate: "123",

			};
		$scope.checkTab = function checkTab( num ){
			return tab === num;
		};

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
			chosenPackageService.setMenu( index, cuisine );
			chosenPackageService.setChosenCuisine( index, cuisineName );
			$scope.chosenCuisine = chosenPackageService.getChosenCuisine();
			console.log( $scope.chosenCuisine );
		};

		$scope.setEmail = function setEmail(){
			chosenPackageService.setEmail( $scope.formFields );
		};

		$scope.bookAnother = function bookAnother(){
			chosenPackageService.setAccepts();
			$scope.mockData[ $scope.count ] = chosenPackageService.getTempAccept();

			console.log( $scope.mockData );
			$scope.chosenCuisine = "";

			$scope.isShownThird = !$scope.isShownThird;

			angular.element("#booking-form-one").scope().showFirst();
			$scope.setTab(1);			
			$scope.count++;
			console.log($scope.count);

		};

		$scope.bookOrder = function bookOrder(){
			
			chosenPackageService.setAccepts();			
			$scope.mockData.push( chosenPackageService.getTempAccept() );

			$scope.actualData = dataIteratorAndJSONConverter( $scope.mockData );
			sendEmail($scope.actualData , false);
			console.log( $scope.mockData );

			function dataIteratorAndJSONConverter( dataToConvert ){
				for( var index = 0, count=1; index<=dataToConvert.length; index++ ){

					

					if( index===0 ){
						var countTotalPrice = 0;
							countTotalPrice += dataToConvert[ index ].price;
						var actualData = {
							"email": dataToConvert[ index ].mail,
							"fullname": dataToConvert[ index ].mail.contactPerson,
							"data":{
								"message":  "Ordered Package: " + dataToConvert[ index ].packageNamed + "\n" + 
											"Ordered Price: " + dataToConvert[ index ].price + "\n" + 
											"Email Content: " + "\n\n" + 
											"Name: " + dataToConvert[ index ].mail.companyName + "\n" + 
											"Contact Person: " + dataToConvert[ index ].mail.contactPerson + "\n" + 
											"Address: " + dataToConvert[ index ].mail.address + "\n" + 
											"Email: " + dataToConvert[ index ].mail.email + "\n" + 
											"Mobile Number:" + dataToConvert[ index ].mail.mobileNo + "\n" + 
											"PAX:" + dataToConvert[ index ].mail.pax + "\n" + 
											"Certificate:" + dataToConvert[ index ].mail.certificate + "\n" + 
											"Discount:" + dataToConvert[ index ].mail.discount + "\n" + 
											"Serving Date:" + dataToConvert[ index ].mail.servingDate + "\n" + 
											"Serving Time:" + dataToConvert[ index ].mail.servingTime + "\n" +
											"Package 1 Chosen Cuisines: " + "\n" + dataToConvert[ index ].cuisine.join( ", " ) + " "
							}
						};
						count+=1;
						console.log( "1" );
					}else if( index>0 ){
						countTotalPrice += dataToConvert[ index ].price;
						cuisines = dataToConvert[ index ].cuisine.join( ", " );
						actualData.data.message+= "\n\n" + 
												"Package "+ count + "\n"
												"Ordered Package: " + dataToConvert[ index ].packageNamed + "\n" + 
												"Ordered Price: " + dataToConvert[ index ].price + "\n" + 
												"Chosen Cuisines:" + cuisines;
						count+=1;
						console.log( "Index is: " + index );
					}
					actualData.data.message += "Total Package Price: " + countTotalPrice;
					return actualData
						
				}
			}
			$scope.isShownThird = !$scope.isShownThird;
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