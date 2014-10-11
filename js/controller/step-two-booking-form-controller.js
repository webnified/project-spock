Spoon.controller( 'stepTwoBookingFormController',
	[
		'$scope',
		'chosenPackageFactory',
		function stepTwoBookingFormCOntroller( $scope, chosenPackageFactory ){

			$scope.secondFlag = true;
			$scope.isShownSecond = false;
			$scope.menus = [];
			$scope.items = [];

			$scope.showSecond = function showSecond(){
				$scope.isShownSecond = !$scope.isShownSecond;
			}
			$scope.setTabPackage = function setTabPackage( item, menu, id, title, price ){
				$scope.secondFlag = false;
				$scope.menu = menu;
				$scope.items = item;
				chosenPackageFactory.setPriceTag( price );

			};
			$scope.setbookingSecondStep = function setbookingSecondStep(  ){
				$scope.isShownSecond = !$scope.isShownSecond;

				chosenPackageFactory.setAcceptPackageAndPrice();

				angular.element("#booking-form-three").scope().showThird();

			};
			$scope.tabStepTwoInclusionsShow = function tabStepTwoInclusionsShow( num ){
				$scope.tabStepTwoInclusions = num;
				console.log(num);
			};
		}
	] );