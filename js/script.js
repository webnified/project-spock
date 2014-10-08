

(function(){
var app = angular.module('modal',[]);

app.controller('tabController',
	[
		'$scope',
		'imageFactory',
		function( $scope, imageFactory ){
			this.css = {'background-color':'black',
						'color':'white',
						'border-radius':'5px'
						};		 
			this.packageTab = 1;
			this.package = 'Executive Buffet';
			this.price = 1;
			this.clicked = 1;
			this.orderFlag = 0;
			this.packagePrice = 180;

			this.beefShow 		= true;
			this.pancitShow 	= true;
			this.pastaShow 		= true;
			this.chickenShow 	= true;
			this.riceShow 		= true;
			this.cocktailShow 	= true;
			this.fishShow 		= true;
			this.seafoodShow 	= true;
			this.vegetablesShow = true;
			this.porkShow 		= true;

				/****   Cuisine  ***/

			this.Beef 		= imageFactory.getBeef();
			this.Chicken 	= imageFactory.getChicken();
			this.Cocktails	= imageFactory.getCocktails();
			this.Desserts 	= imageFactory.getDesserts();
			this.Fish 		= imageFactory.getFish();
			this.Pancit 	= imageFactory.getPancit();
			this.Pasta 		= imageFactory.getPasta();
			this.Rice 		= imageFactory.getRice();
			this.Seafood 	= imageFactory.getSeafood();
			this.Vegetables = imageFactory.getVegetables();
			this.Pork 		= imageFactory.getPork();
			this.Accepts 	= [];
			this.acceptPackageAndPrice = [];
			this.acceptMenuAndName = [];
			this.MainAccept = [];

			switch ( this.packagePrice ){
				case 180: 
					this.beefShow = false;
					break;
				case 200: 
					this.beefShow = true;
					break;
				case 220:
					this.beefShow = true;
					break;
				default:
					this.beefShow = true;
			}
				/****	Data	***/
				if( this.packageTab == 1 ){
					this.package = 'Executive Buffet';
					this.packagePrice = 180;
					this.acceptPackageAndPrice = [this.package,this.packagePrice]
					this.Accepts
					console.log(this.packagePrice);
				};
				if(this.packageTab == 2){
					this.package = 'Cocktail Buffet';
					this.packagePrice = 160;
					this.acceptPackageAndPrice = [this.package,this.packagePrice]
					console.log(this.packagePrice);
				};
				if(this.packageTab == 3){
					this.package = 'Wedding Buffet';
					this.packagePrice = 310;
					this.acceptPackageAndPrice = [this.package,this.packagePrice]
					console.log(this.packagePrice);
				}
				if(this.packageTab == 4){
					this.package = 'Per Tray';
					this.packagePrice = 0;
					this.acceptPackageAndPrice = [this.package,this.packagePrice]
					console.log(this.packagePrice);
				}
				if(this.packageTab == 5){
					this.package = 'Snacks and Meals';
					this.packagePrice = 85;
					this.acceptPackageAndPrice = [this.package,this.packagePrice]
					console.log(this.packagePrice);	
				}	

							
/****		---------------------------------------------		****/

			this.setMenu = function(num, Menu){
				this.menuTab = num;
				this.menuName = Menu;
				console.log(this.menuName);
			};
			this.setFoodName = function( foodName ){
				this.foodName = foodName;
				this.acceptMenuAndName = [ this.menuName, this.foodName ];
				console.log(this.acceptMenuAndName);

			};
			this.setPrice = function(num, packagePrice){
				this.price = num;
				this.packagePrice = packagePrice;
				this.acceptPackageAndPrice = [this.package, this.packagePrice];
				console.log(this.acceptPackageAndPrice);
			};
			this.setPackage= function(num, package){
				this.price = 1;
				this.packageTab = num;
				this.package = package;
				this.acceptPackageAndPrice = [this.package, this.packagePrice];
				console.log(this.acceptPackageAndPrice);
				
			};
			this.checkPackage = function(num){
				return this.packageTab === num;
			}
			this.checkMenu = function(num){
				return this.menuTab === num;
			}
			this.checkPrice = function(num){
				return this.price === num;
			};
			this.acceptOrder = function acceptOrder(){
				this.Accepts = [ this.acceptPackageAndPrice, this.acceptMenuAndName ];
				if( this.MainAccept.length<=this.orderFlag ){
					this.MainAccept.push(this.Accepts);
					console.log(this.MainAccept);
				}if( this.MainAccept.length>=this.orderFlag ){
					this.MainAccept.splice( this.orderFlag, 1, this.Accepts );
					console.log( this.MainAccept );
				}
			};
			this.orderAnother = function orderAnother(){
				this.orderFlag+=1;
				this.Accepts = [];
			};
		}
	] );
app.factory( 'imageFactory', 
	[
		function factory( ){
			var Beef = [{
					image:'images/Final for Website/Web Beef/Beef Caldereta 1.jpg',
					name: 'Beef Caldereta 1'
			},{
					image:'images/Final for Website/Web Beef/Beef Crisp 1.jpg',
					name: 'Beef Crisp 1'
			},{
					image: 'images/Final for Website/Web Beef/Beef Ham 1.jpg',
					name: 'Beef Ham 1'
			},{
					image: 'images/Final for Website/Web Beef/Beef Ham 1.jpg',
					name: 'Beef Ham 1'
			},{
					image: 'images/Final for Website/Web Beef/Beef Mushroom 1.jpg',
					name: 'Beef Mushroom 1'
			},{
					image: 'images/Final for Website/Web Beef/Beef Steak Tagalog 1.jpg',
					name: 'Beef Steak Tagalog 1'
			},{
					image: 'images/Final for Website/Web Beef/Beef Tapa 1.jpg',
					name: 'Beef Tapa 1'
			},{
					image: 'images/Final for Website/Web Beef/Braised Beef 1.jpg',
					name: 'Braised Beef 1',
			},{
					image: 'images/Final for Website/Web Beef/Corned Tenderloin Beef 1.jpg',
					name: 'Corned Tenderloin Beef 1'
			},{
					image: 'images/Final for Website/Web Beef/Romanian Beef Cream 1.jpg',
					name: 'Romanian Beef Cream 1'
			},{
					image: 'images/Final for Website/Web Beef/Singaporean Beef Curry 12.jpg',
					name: 'Singaporean Beef Curry 12'
			}];
			var Chicken = [{
					image: 'images/Final for Website/Web Chicken/Bavarian Chicken 11.jpg',
					name: 'Bavarian Chicken 11'
			},{
					image: 'images/Final for Website/Web Chicken/Breaded Chicken w Mayo 11.jpg',
					name: 'Breaded Chicken w Mayo 11'
			},{
					image: 'images/Final for Website/Web Chicken/Buffalo Chicken 1.jpg',
					name: 'Buffalo Chicken 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Adobo 11.jpg',
					name: 'Chicken Adobo 11'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Ala Pobre 11.jpg',
					name: 'Chicken Ala Pobre 11'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken BBQ 1.jpg',
					name: 'Chicken BBQ 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Cocktail 1.jpg',
					name: 'Chicken Cocktail 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Cordon Blue 1.jpg',
					name: 'Chicken Cordon Blue 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Curry 1.jpg',
					name: 'Chicken Curry 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Lollipop 1.jpg',
					name: 'Chicken Lollipop 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Lumpia 1.jpg',
					name: 'Chicken Lumpia 1'
			},{
					image: 'images/Final for Website/Web Chicken/Chicken Tocino 1.jpg',
					name: 'Chicken Tocino 1'
			},{
					image: 'images/Final for Website/Web Chicken/Garlic Chicken 1.jpg',
					name: 'Garlic Chicken 1'
			},{
					image: 'images/Final for Website/Web Chicken/Glazed Chicken 1.jpg',
					name: 'Glazed Chicken 1'
			},{
					image: 'images/Final for Website/Web Chicken/Grilled Chicken 1.jpg',
					name: 'Grilled Chicken 1'
			}];
			var Cocktails = [{
					image: 'images/Final for Website/Web Cocktails/Banana Cream 1.jpg',
					name: 'Banana Cream 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Beef Burger 1.jpg',
					name: 'Beef Burger 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Chicken Lollipop 1.jpg',
					name: 'Chicken Lollipop 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Chicken Lumpia 1.jpg',
					name: 'Chicken Lumpia 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Chicken Nuggets 1.jpg',
					name: 'Chicken Nuggets 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Chicken Sandwhich 1.jpg',
					name: 'Chicken Sandwhich 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Clubhouse Ham 1.jpg',
					name: 'Clubhouse Ham 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Fish w Mayo Dip 1.jpg',
					name: 'Fish w Mayo Dip 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Salami Burger 1.jpg',
					name: 'Salami Burger 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Spaghetti Angle Bread 1.jpg',
					name: 'Spaghetti Angle Bread 1'
			},{
					image: 'images/Final for Website/Web Cocktails/Tuna Sandwhich 1.jpg',
					name: 'Tuna Sandwhich 1'
			}];
			var Desserts = [{
					image: 'images/Final for Website/Web Desserts/Buko Pandan 1.jpg',
					name: 'Buko Pandan 1'
			},{
					image: 'images/Final for Website/Web Desserts/Coffee Jelly 2.jpg',
					name: 'Coffee Jelly 2'
			},{
					image: 'images/Final for Website/Web Desserts/Fruit Salad 1.jpg',
					name: 'Fruit Salad 1'
			},{
					image: 'images/Final for Website/Web Desserts/Mango Tapioca 2.jpg',
					name: 'Mango Tapioca 2'
			},{
					image: 'images/Final for Website/Web Desserts/Tropical Fresh Fruits1.jpg',
					name: 'Tropical Fresh Fruits1'
			}];
			var Fish = [{
					image: 'images/Final for Website/Web Fish/Fish BBQ Sauce 1.jpg',
					name: 'Fish BBQ Sauce 1'
			},{
					image: 'images/Final for Website/Web Fish/Fish Sweet & Sour 1.jpg',
					name: 'Fish Sweet & Sour 1'
			},{
					image: 'images/Final for Website/Web Fish/Fish w Cream Corn 1.jpg',
					name: 'Fish w Cream Corn 1'
			},{
					image: 'images/Final for Website/Web Fish/Fish w Lemon Sauce 1.jpg',
					name: 'Fish w Lemon Sauce 1'
			},{
					image: 'images/Final for Website/Web Fish/Fish w Mayo Dip 1.jpg',
					name: 'Fish w Mayo Dip 1'
			},{
					image: 'images/Final for Website/Web Fish/Fish w Sour Cream 1.jpg',
					name: 'Fish w Sour Cream 1'
			},{
					image: 'images/Final for Website/Web Fish/Fush Tausi 1.jpg',
					name: 'Fush Tausi 1'
			}];
			var Pancit = [{
					image: 'images/Final for Website/Web Pancit/Bam-i 1.jpg',
					name: 'Web Pancit/Bam-i 1'
			},{
					image: 'images/Final for Website/Web Pancit/Pancit Guisado 1.jpg',
					name: 'Pancit Guisado 1'
			},{
					image: 'images/Final for Website/Web Pancit/Royale Palabok 1.jpg',
					name: 'Royale Palabok 1'
			},{
					image: 'images/Final for Website/Web Pancit/Sotanghon 1.jpg',
					name: 'Sotanghon 1'
			}];
			var Pasta = [{
					image: 'images/Final for Website/Web Pasta/Beef Mushroom Pasta 1.jpg',
					name: 'Beef Mushroom Pasta 1'
			},{
					image: 'images/Final for Website/Web Pasta/Fettucini de Franca 1.jpg',
					name: 'Fettucini de Franca 1'
			},{
					image: 'images/Final for Website/Web Pasta/Pesto Pasta 1.jpg',
					name: 'Pesto Pasta 1'
			},{
					image: 'images/Final for Website/Web Pasta/Sgahetti Blognese 1.jpg',
					name: 'Sgahetti Blognese 1'
			},{
					image: 'images/Final for Website/Web Pasta/Spaghetti 1.jpg',
					name: 'Spaghetti 1'
			},{
					image: 'images/Final for Website/Web Pasta/Supremo Carbonara 1.jpg',
					name: 'Supremo Carbonara 1'
			}];
			var Rice = [{
					image: 'images/Final for Website/Web Rice/Gralic Rice 1.jpg',
					name: 'Gralic Rice 1'
			},{
					image: 'images/Final for Website/Web Rice/Oriental Java Rice 1.jpg',
					name: 'Oriental Java Rice 1'
			},{
					image: 'images/Final for Website/Web Rice/Platinum Rice 1.jpg',
					name: 'Platinum Rice 1'
			},{
					image: 'images/Final for Website/Web Rice/Shanghai Rice 1.jpg',
					name: 'Shanghai Rice 1'
			}];
			var Seafood = [{
					image: "images/Final for Website/Web Seafood/Boneless Bangus  1 .jpg",
					name: 'Boneless Bangus  1 '
			},{
					image: "images/Final for Website/Web Seafood/Calamares 1.jpg",
					name: 'Calamares 1'
			},{
					image: 'images/Final for Website/Web Seafood/Fried Boneless  1.jpg',
					name: 'Fried Boneless  1'
			},{
					image: 'images/Final for Website/Web Seafood/Fried Calamares 1.jpg',
					name: 'Fried Calamares 1'
			},{
					image: 'images/Final for Website/Web Seafood/Fried Garlic Prawns 1.jpg',
					name: 'Fried Garlic Prawns 1'
			},{
					image: "images/Final for Website/Web Seafood/Garlic Prawns 1.jpg",
					name: 'Garlic Prawns 1'
			},{
					image: 'images/Final for Website/Web Seafood/Grilled Tuna Belly 1.jpg',
					name: 'Grilled Tuna Belly 1'
			},{
					image: 'images/Final for Website/Web Seafood/Kinilaw 1.jpg',
					name: 'Kinilaw 1'
			},{
					image: "images/Final for Website/Web Seafood/Kinilaw Malasugue 1.jpg",
					name: 'Kinilaw Malasugue 1'
			},{
					image: 'images/Final for Website/Web Seafood/Seafood Kebab 1.jpg',
					name: 'Seafood Kebab 1'
			},{
					image: 'images/Final for Website/Web Seafood/Sweet & Sour Lapu lapu 1.jpg',
					name: 'Sweet & Sour Lapu lapu 1'
			}];
			var Vegetables = [{
					image: 'images/Final for Website/Web Vegetables/Four Season 1.jpg',
					name: 'Four Season 1'
			},{
					image: 'images/Final for Website/Web Vegetables/Lettuce Ceasar 1.jpg',
					name: 'Lettuce Ceasar 1'
			},{
					image: 'images/Final for Website/Web Vegetables/Mandarin Chopsuey 1.jpg',
					name: 'Mandarin Chopsuey 1'
			},{
					image: 'images/Final for Website/Web Vegetables/Thousalnd Island Supreme 1.jpg',
					name: 'Thousalnd Island Supreme 1'
			}];
			var Pork = [{
					image: 'images/Final for Website/Web Pork/BIcol Express 1.jpg',
					name: 'BIcol Express 1'
			},{
					image: 'images/Final for Website/Web Pork/Breaded Porkchop 1.jpg',
					name: 'Breaded Porkchop 1'
			},{
					image: 'images/Final for Website/Web Pork/Crispy Pork Binagoongan 1.jpg',
					name: 'Crispy Pork Binagoongan 1'
			},{
					image: 'images/Final for Website/Web Pork/Grilled Pork Belly 1.jpg',
					name: 'Grilled Pork Belly 1'
			},{
					image: 'images/Final for Website/Web Pork/Hamonada 1.jpg',
					name: 'Hamonada 1'
			},{
					image: 'images/Final for Website/Web Pork/Lechon Kawali 1.jpg',
					name: 'Lechon Kawali 1'
			},{
					image: 'images/Final for Website/Web Pork/Pork Adobo 1.jpg',
					name: 'Pork Adobo 1'
			},{
					image: 'images/Final for Website/Web Pork/Pork BBQ 1.jpg',
					name: 'Pork BBQ 1'
			}];	
			return {
					getBeef: function getBeef(){
						return Beef;
					},
					getChicken: function getChicken(){
						return Chicken;
					},
					getCocktails: function getCocktails(){
						return Cocktails;
					},
					getDesserts: function getDesserts(){
						return Desserts;
					},
					getFish: function getFish(){
						return Fish;
					},
					getPancit: function getPancit(){
						return Pancit;
					}, 
					getPasta: function getPasta(){
						return Pasta;
					},
					getRice: function getRice(){
						return Rice;
					},
					getSeafood: function getSeafood(){
						return Seafood;
					}, 
					getVegetables: function getVegetables(){
						return Vegetables;
					},
					getPork: function getPork(){
						return Pork;
					},
					getAccepts: function getAccepts(){
						var Accepts = [];
						Accepts.push(this.package);
						Accepts.push(this.packagePrice);
						console.log(Accepts);
						return Accepts;
					}
				}

		}
	]);

app.controller( 'emailController', 
	[
		function(){
			this.formFields = {
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
			this.tabEmail = 1
			this.setTabEmail = function setTab( tab ){
				this.tabEmail = tab;
			};
			this.isSelected = function isSelected( isTab ){
				return this.tab === isTtab;
			};
			this.submitEmail = function submitEmail( formName ){
				// Trigger validation flag.
				  this.submitted = true;

				  // If form is invalid, return and let AngularJS show validation errors.
				  if (formName.$invalid) {
				    return;
				  }

				  // Default values for the request.
				  var config = {
				    params : {
				      'callback' : 'JSON_CALLBACK',
				      'name' : this.name,
				      'email' : this.email,
				      'subjectList' : this.subjectList,
				      'url' : this.url,
				      'comments' : this.comments
				    },
				  };

				  // Perform JSONP request.
				  var $promise = $http.jsonp('response.json', config)
				    .success(function(data, status, headers, config) {
				      if (data.status == 'OK') {
				        this.name = null;
				        this.email = null;
				        this.subjectList = null;
				        this.url = null;
				        this.comments = null;
				        this.messages = 'Your form has been sent!';
				        this.submitted = false;
				      } else {
				        this.messages = 'Oops, we received your request, but there was an error processing it.';
				        $log.error(data);
				      }
				    })
				    .error(function(data, status, headers, config) {
				      this.progress = data;
				      this.messages = 'There was a network error. Try again later.';
				      $log.error(data);
				    })
				    .finally(function() {
				      // Hide status messages after three seconds.
				      $timeout(function() {
				        this.messages = null;
				      }, 3000);
				    });

				  // Track the request and show its progress to the user.
				  this.progress.addPromise($promise);
			};

		}
	] );

})();

/*<div data-content="1" class="content">Tab 1 Content</div>
          <div data-content="2" class="content">Tab 2 Content</div>
          <div data-content="3" class="content">Tab 3 Content</div>*/
