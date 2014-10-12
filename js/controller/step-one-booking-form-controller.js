Spoon.controller( 'stepOneBookingFormController',
	[
		'$scope',
		'tabFactory',
		'chosenPackageService',
		function stepOneBookingFormCOntroller( $scope, tabFactory, chosenPackageService ){

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

			$scope.setPackages = function setPackages( package ){				
				$scope.firstFlag = false;
				$scope.setPackage = package;
				tabFactory.setBookFormSteps();
				chosenPackageService.setPackageName( package.name );

				console.log(chosenPackageService.getPackageName( package.name ));
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