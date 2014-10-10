Spoon.controller( 'bookingFormParentController',
	[
		'$scope',
		'bookingPackageService',
		function stepOneBookingFormCOntroller( $scope, bookingPackageService ){
			$scope.Data = bookingPackageService.getData();
			$scope.flag = 0;
			
			if( $scope.flag===1 ){
				$scope.$on( 'parent', function( even, data ){
					$scope.chosenPackage = data;
				} );
			}
		}
	] );