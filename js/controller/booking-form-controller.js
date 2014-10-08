Spoon.controller( 'bookingFormController', 
[
	'$scope',
	function bookingFormController( $scope ){
		$scope.tab = 1;

		$scope.setTab = function setTab( tab ){
			$scope.tab = tab;
		};
		$scope.formFields = {
					companyName: "",
					contactPerson: "",
					mobileNo: "",
					customerCard: "",
					discount: "",
					pax: "",
					servingData: "",
					servingTime: "",
					address: "",
					certificate: "",
					data : []

			};
	}
] )