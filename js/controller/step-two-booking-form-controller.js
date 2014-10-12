Spoon.controller( 'stepTwoBookingFormController',
	[
		'$scope',
		'chosenPackageService',
		function stepTwoBookingFormCOntroller( $scope, chosenPackageService ){

			$scope.secondFlag = true;
			$scope.isShownSecond = false;
			$scope.menus = [];
			$scope.items = [];

			$scope.showSecond = function showSecond(){
				$scope.isShownSecond = !$scope.isShownSecond;
			}
			$scope.setTabPackage = function setTabPackage( item, menu, price ){
				$scope.secondFlag = false;
				$scope.menu = menu;
				$scope.items = item;
				chosenPackageService.setPriceTag( price );
				console.log(chosenPackageService.getPriceTag( ));

			};
			$scope.setbookingSecondStep = function setbookingSecondStep(  ){
				$scope.isShownSecond = !$scope.isShownSecond;

				angular.element("#booking-form-three").scope().showThird();

			};
			$scope.tabStepTwoInclusionsShow = function tabStepTwoInclusionsShow( num ){
				$scope.tabStepTwoInclusions = num;
				console.log(num);
			};
		}
	] );