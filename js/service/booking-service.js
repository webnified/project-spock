Spoon.service( 'bookingEmailService', 
	[
		'chosenPackageFactory',
		function service( chosenPackageFactory ){
			
			var mockData = chosenPackageFactory.getacceptPackageAndMail();
			var emailContent = mockData[2].join( ", " );
			var cuisines = mock[1][1].join( ", " );
			var actualData = {
					"email": mockData[2].email,
					"fullname": mockData[2].contacPerson,
					"data":{
						"message": "Ordered Package: " + mockData[0][0] + "\n" + "Ordered Price: " + mockData[0][1] + "\n" + "Email Content: " + "\n\n\n\n" + "Name: " mockData[2].companyName + "\n" + "Contact Person: " mockData[2].contactPerson + "\n" + "Address: " mockData[2].address + "\n" + "Email: " mockData[2].email + "\n" + "Mobile Number:" mockData[2].mobileNo + "\n" + "PAX:" mockData[2].pax + "\n" + "Certificate:" mockData[2].certificate + "\n" + "Discount:" mockData[2].discount + "\n" + "Serving Date:" mockData[2].servingDate + "\n" + "Serving Time:" mockData[2].seringTime + "\n"
					} 
				};

			return {
				getActualData: function getActualData(){
					return actualData;
				}
			}
		}
	]);