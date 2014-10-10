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
					data : []

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
			chosenPackageFactory.setMenu( cuisine );
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
			var cuisines = mockData[0][1][1].join( ", " );
			$scope.actualData = {
					"email": mockData[0][2].email,
					"fullname": mockData[0][2].contacPerson,
					"data":{
						"message": "Ordered Package: " + mockData[0][0][0] + "\n" + 
									"Ordered Price: " + mockData[0][0][1] + "\n" + 
									"Email Content: " + "\n\n\n\n" + 
									"Name: " + mockData[0][2].companyName + "\n" + 
									"Contact Person: " + mockData[0][2].contactPerson + "\n" + 
									"Address: " + mockData[0][2].address + "\n" + 
									"Email: " + mockData[0][2].email + "\n" + 
									"Mobile Number:" + mockData[0][2].mobileNo + "\n" + 
									"PAX:" + mockData[0][2].pax + "\n" + 
									"Certificate:" + mockData[0][2].certificate + "\n" + 
									"Discount:" + mockData[0][2].discount + "\n" + 
									"Serving Date:" + mockData[0][2].servingDate + "\n" + 
									"Serving Time:" + mockData[0][2].seringTime + "\n"
					} 
				};				
			sendEmail($scope.actualData , false);
		}
	}
] )