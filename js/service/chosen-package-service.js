Spoon.service( 'chosenPackageService', 
	[
		function service( ){
			var Accepts 	= [];
			var acceptPackageAndPrice = [];
			var acceptMenuAndName = [];
			var MainAccept = [];

			var packageName = "";
			var priceTag = 0;
			var menu = "";
			var cuisine = "";

			var chosenPackage ="";
			
			var orderFlag = 0;

			return {
					setPackageName: function setPackageName( name ){
						packageName = name;
					},
					getPackageName: function getPackageName(  ){
						return packageName;
					},
					setPriceTag: function setPriceTag( price ){
						priceTag = priceTag;
					},
					getPriceTag: function getPriceTag(){
						return priceTag;
					},

					
					setChosenPackage: function setChosenPackage( chosenPackage ){
						chosenPackage = chosenPackage;
					},


					setAcceptPackageAndPrice: function setAcceptPackageAndPrice(){
						acceptPackageAndPrice = [ packageName, price ];
					},
					getAcceptPackageAndPrice: function getAcceptPackageAndPrice(){
						return acceptPackageAndPrice;
					},


					setAcceptMenuAndName : function setAcceptMenuAndName(){
						acceptMenuAndName = [ menu, cuisine ];
					},
					getAcceptMenuAndName: function getAcceptMenuAndName(){
						return acceptMenuAndName;
					},


					setAccepts: function setAccepts(){
						Accepts = [ acceptPackageAndPrice, acceptMenuAndName ];
					},
					getAccepts: function getAccepts(){
						return Accepts;
					},

					setMainAccept: function setMainAccept(){

						if( MainAccept.length<=orderFlag ){
						
							MainAccept.push( Accepts );
							console.log( MainAccept );
						
						}if( MainAccept.length>=orderFlag ){
						
							MainAccept.splice( orderFlag, 1, Accepts );
							console.log( MainAccept );
						
						}
					},
					
					orderAnother: function orderAnother(){
						orderFlag+=1;
						Accepts = [];
					}
				}

		}
	]);