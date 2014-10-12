Spoon.service( 'chosenPackageService', 
	[
		function service( ){
			var Accepts 	= [];
			var packageName = "";
			var packagePrice = 0;
			var menu = [];
			var chosenCuisine = [];

			var emailContent = "";

			var chosenPackage ="";
			
			var orderFlag = 0;

			var tempAccept = {
					packageNamed: "",
					price: 0,
					menu: [],
					cuisine: [],
					mail: {} 
				};

			



			/*********Email********/

			
			
			return {
					setPackageName: function setPackageName( name ){
						tempAccept.packageNamed = name;

					},
					getPackageName: function getPackageName(  ){
						return tempAccept.packageNamed;
					},
					setPriceTag: function setPriceTag( pricetag ){
						tempAccept.price = pricetag;
					},
					getPriceTag: function getPriceTag(){
						return tempAccept.price;
					},
					setMenu: function setMenu( index, menuName ){
						
						tempAccept.menu[ index ] = menuName;
					},
					getMenu: function getMenu(  ){
						return tempAccept.menu;
					},
					
					setChosenCuisine: function setChosenCuisine( menuIndex, cuisineName ){
						tempAccept.cuisine[ menuIndex ] = cuisineName;
					},
					getChosenCuisine: function getChosenCuisine( ){
						return tempAccept.cuisine;
					},




					setAcceptPackageAndPrice: function setAcceptPackageAndPrice(){
						acceptPackageAndPrice = [ packageName, packagePrice ];
					},
					getAcceptPackageAndPrice: function getAcceptPackageAndPrice(){
						return acceptPackageAndPrice;
					},

					/*
					setAcceptMenuAndCuisine : function setAcceptMenuAndCuisine(){
						acceptMenuAndCuisine = [ menu, chosenCuisine ];
					},
					getAcceptManuAndCuisine: function setAcceptManuAndCuisine(){
						return acceptMenuAndCuisine;
					},*/


					setAccepts: function setAccepts( num ){
						if( Accepts.length <=0 ){
							Accepts.push( tempAccept );
						}else{
							Accepts.splice( 0, 1, tempAccept );
						}
						
					},
					getAccepts: function getAccepts(){
						return Accepts;
					},

					getTempAccept: function getTempAccept(){
						return tempAccept;
					},


					setEmail: function setEmail( formContent ){
						emailContent = formContent;
						tempAccept.mail = emailContent;
					},
					getEmail: function getEmail(){
						return emailContent;
					},

					
					orderAnother: function orderAnother(){
						orderFlag+=1;
						chosenCuisine = [];
						
					}
				}

		}
	]);