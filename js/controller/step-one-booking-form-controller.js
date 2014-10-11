Spoon.controller( 'stepOneBookingFormController',
	[
		'$scope',
		'tabFactory',
		'chosenPackageFactory',
		function stepOneBookingFormCOntroller( $scope, tabFactory, chosenPackageFactory ){

			$scope.firstFlag = true;
			$scope.isShownFirst = false;
			$scope.showFirst = function showFirst( ){	
				if($scope.isShownFirst===true){
					$scope.isShownFirst = false;
				}else{
					$scope.isShownFirst = true;
				}			
				
			};
			$scope.setPackage = "";

			$scope.setPackages = function setPackages( package, name ){
				$scope.firstFlag = false;
				$scope.setPackage = package;
				tabFactory.setBookFormSteps();
				chosenPackageFactory.setPackageName( name );

				chosenPackageFactory.getPackageName( name );
			};


			$scope.sendToNextForm = function sendToNextForm( ){
				console.log("as");
			};

			$scope.setbookingFirstStep = function setbookingFirstStep( ){
				
				$scope.isShownFirst = !$scope.isShownFirst;
				angular.element("#booking-form-two").scope().showSecond();

			};

			$scope.tabInclusionsShow = function tabInclusionsShow( num ){
				tabInclusions = num;
			};
		}
	] );