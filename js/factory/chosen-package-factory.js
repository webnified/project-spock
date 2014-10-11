Spoon.factory( 'chosenPackageFactory', 
	[
		function factory( ){
			var Accepts 	= [];
			var acceptPackageAndPrice = [];
			var acceptMenuAndCuisine = [];
			var acceptPackageAndMail = [];

			var packageName = "";
			var packagePrice = 0;
			var menu = "";
			var chosenCuisine = [];

			var emailContent = "";

			var chosenPackage ="";
			
			var orderFlag = 0;



			/*********Email********/

			
			
			return {
					setPackageName: function setPackageName( name ){
						packageName = name;
					},
					getPackageName: function getPackageName(  ){
						return packageName;
					},
					setPriceTag: function setPriceTag( price ){
						packagePrice = price;
					},
					getPriceTag: function getPriceTag(){
						return packagePrice;
					},
					setMenu: function setMenu( index, menuName ){
						menu[ index ] = menuName;
					},
					getMenu: function getMenu(  ){
						return menu;
					},
					setCuisine: function setCuisine( cuisineName ){
						cuisine = cuisineName;
					},
					getCuisine: function getCuisine(){
						return cuisine;
					},
					setChosenCuisine: function setChosenCuisine( menuIndex, cuisineName ){
						chosenCuisine[ menuIndex ] = cuisineName;
					},
					getChosenCuisine: function getChosenCuisine( ){
						return chosenCuisine;
					},



					setChosenPackage: function setChosenPackage( chosenPackage ){
						chosenPackage = chosenPackage;
					},


					setAcceptPackageAndPrice: function setAcceptPackageAndPrice(){
						acceptPackageAndPrice = [ packageName, packagePrice ];
					},
					getAcceptPackageAndPrice: function getAcceptPackageAndPrice(){
						return acceptPackageAndPrice;
					},


					setAcceptMenuAndCuisine : function setAcceptMenuAndCuisine(){
						acceptMenuAndCuisine = [ menu, chosenCuisine ];
					},
					getAcceptManuAndCuisine: function setAcceptManuAndCuisine(){
						return acceptMenuAndCuisine;
					},


					setAccepts: function setAccepts(){
						Accepts = [ acceptPackageAndPrice, acceptMenuAndCuisine, emailContent ];
					},
					getAccepts: function getAccepts(){
						return Accepts;
					},


					setEmail: function setEmail( formContent ){
						emailContent = formContent;
					},
					getEmail: function getEmail(){
						return emailContent;
					},

					setacceptPackageAndMail: function setacceptPackageAndMail(){

						if( acceptPackageAndMail.length<=orderFlag ){
						
							acceptPackageAndMail.push( Accepts );
						
						}if( acceptPackageAndMail.length>=orderFlag ){
						
							acceptPackageAndMail.splice( orderFlag, 1, Accepts );
						
						}
					},
					getacceptPackageAndMail: function getacceptPackageAndMail(){
						return acceptPackageAndMail;
					},
					
					orderAnother: function orderAnother(){
						orderFlag+=1;
						Accepts = [];
						packageName = "";
						packagePrice = 0;
						menu = "";
						chosenCuisine = [];

						acceptPackageAndPrice=[];
						acceptMenuAndCuisine = [];
					}
				}

		}
	]);