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
			console.log( chosenPackageFactory.getAccepts() );
			console.log( chosenPackageFactory.getacceptPackageAndMail() );
		}
	}
] )