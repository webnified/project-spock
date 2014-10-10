Spoon.service('bookingPackageService', 
	[
		'imageFactory',
		function service( imageFactory ){
			var Beef 		= imageFactory.getBeef();
			var Chicken 	= imageFactory.getChicken();
			var Cocktails	= imageFactory.getCocktails();
			var Desserts 	= imageFactory.getDesserts();
			var Fish 		= imageFactory.getFish();
			var Pancit 		= imageFactory.getPancit();
			var Pasta 		= imageFactory.getPasta();
			var Rice 		= imageFactory.getRice();
			var Seafood 	= imageFactory.getSeafood();
			var Vegetables 	= imageFactory.getVegetables();
			var Pork 		= imageFactory.getPork();
			var Data = [
					{
						id: 1,
						name: "Executive Buffet",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						inclusions: [ 
							'Cuisine of your Choice',
							'Complete Set Utensils',
							'Cocktail Glasses',
							'Buffet Table Set-up w/ Skirting',
							'Buffet Steel Spotlights',
							'Food Name and Description Plates',
							'Chafing Dish w/ Serving Utinsels',
							'Uniformed Service Team',
							'Free Delivery (w/ in CDO)' 
						],
						packages: [{
								title: "P185/Person",
								id: 1,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 185,
								items:[{
									itemName:"Chicken Cuisine",
									cuisine: Chicken
								},{
									itemName: "Pork Cuisine", 
									cuisine: Pork
								},{
									itemName: "Fish Cuisine",
									cuisine: Fish
								},{
									itemName: "Vegetable Cuisine",
									cuisine: Vegetables
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine", 
									cuisine: Pancit
								},{
									itemName: "Rice Selection",
									cuisine: Rice
								}]
							
						},{
								title: "P200/Person",
								id: 2,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 200,
								items:[{
									itemName: "Beef Cuisine",
									cuisine: Beef
								},{
									itemName: "Seafood Cuisine",
									cuisine: Seafood
								},{
									itemName: "Chicken",
									cuisine: Chicken
								},{
									itemName: "Fish Cuisine",
									cuisine: Fish
								},{
									itemName: "Pork Cuisine",
									cuisine: Pork
								},{
									itemName: "Vegetable Cuisine",
									cuisine: Vegetables
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine",
									cuisine: Pancit
								},{
									itemName: "Rice Selection",
									cuisine: Rice
								}]

						},{
								title: "P220/Person",
								id: 3,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 220,
								items:[{
									itemName: "Beef Cuisine",
									cuisine:  Beef
								},{
									itemName: "Seafood Cuisine", 
									cuisine: Seafood
								},{
									itemName: "Chicken Cuisine",
									cuisine: Chicken
								},{
									itemName: "Pork Cuisine",
									cuisine: Pork
								},{
									itemName: "Fish Cuisine", 
									cuisine: Fish
								},{
									itemName: "Vegetable Cuisine", 
									cuisine: Vegetables
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine",
									cuisine: Pancit
								},{
									itemName: "Rice Selection",
									cuisine: Rice
								}]
						}]

				},{
						id: 2,
						name: "Cocktails Buffet",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						inclusions: [
							'Cuisine of your Choice',
							'Complete Set Utensils',
							'Cocktail Glasses',
							'Buffet Table Set-up w/ Skirting',
							'Buffet Steel Spotlights',
							'Food Name and Description Plates',
							'Chafing Dish w/ Serving Utinsels',
							'Uniformed Service Team',
							'Free Delivery (w/ in CDO)'
						],
						packages: [{
								title: "P160/Person",
								id: 1,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 160,
								items:[{
									itemName: "Cocktails", 
									cuisine: Cocktails
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine",
									cuisine: Pancit
								}]
						},{
								title: "P175/Person",
								id: 2,
								quantity: 0,
								price: 175,
								items:[{
									itemName: "Cocktails", 
									cuisine: Cocktails
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine",
									cuisine: Pancit
								}]
						}]			

				},{
						id: 3,	
						name: "Wedding Buffet",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						inclusions: [
							'Cuisine of your Choice',
							'Complete Wedding Utensils',
							'Wedding Cocktail Glasses',
							'Buffet Table Set-up w/ Skirting',
							'Buffet Steel Spotlights',
							'Food Name and Description Plates',
							'Chafing Dish w/ Serving Utinsels',
							'Uniformed Service Team',
							'Principal Sponsors & Couple Special Service',
							'Free Delivery (w/ in CDO)',
							'FREE Guest Tables & Chairs (w/ White Skirting)'
						],
						packages: [{
								title: "P310/Person",
								id: 1,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 310,
								items:[{
									itemName: "Beef Cuisine",
									cuisine: Beef
								},{
									itemName: "Seafood Cuisine", 
									cuisine: Seafood
								},{
									itemName: "Chicken Cuisine",
									cuisine: Chicken
								},{
									itemName: "Pork Cuisine",
									cuisine: Pork
								},{
									itemName: "Fish Cuisine",
									cuisine: Fish
								},{
									itemName: "Vegetable Cuisine", 
									cuisine: Vegetables
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine",
									cuisine: Pancit 
								},{
									itemName: "Rice Selection",
									cuisine: Rice
								}]
						},{
								title: "P340/Person",
								id: 2,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 340,
								items:[{
									itemName: "Beef Cuisine", 
									cuisine: Beef
								},{
									itemName: "Seafood Cuisine",
									cuisine: Seafood
								},{
									itemName: "Chicken Cuisine", 
									cuisine: Chicken
								},{
									itemName: "Fish",
									cuisine: Fish
								},{
									itemName: "Pork Cuisine",
									cuisine: Pork
								},{
									itemName: "Vegetable Cuisine", 
									cuisine: Vegetables
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine", 
									cuisine: Pancit
								},{
									itemName: "Rice Selection",
									cuisine: Rice
								}]
						}]
						
				},{
						id: 4,
						name: "Per Tray",
						description: "Long description of this package will go here",
						images:[],
						inclusions: [
							'Returnable P100 Deposit Per Tray',
							'Good for 20-25 Pax Food Serving',
							'Free Delivery (w/in CDO)'
						],
						packages: [{

						}]
				},{
						id: 5, 
						name: "Snacks and Meals",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						inclusions: [
							'Sealed Disposable Utensils',
							'Tissue',
							'Free Delivery (w/in CDO)'
						],
						packages: [{
								title: "P85/Person",
								id: 1,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 85,
								items:[{
									itemName: "Chicken",
									cuisine: Chicken
								},{
									itemName: "Fish Cuisine",
									cuisine: Fish
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit",
									cuisine: Pancit
								},{
									itemName: "Vegetables",
									cuisine: Vegetables
								}]
						},{
								title: "P95/Person",
								id: 2,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 95,
								items:[{
									itemName: "Beef Cuisine",
									cuisine: Beef
								},{
									itemName: "Seafood Cuisine",
									cuisine: Seafood
								},{
									itemName: "Pork Cuisine",
									cuisine: Pork
								},{
									itemName: "Pasta",
									cuisine: Pasta
								},{
									itemName: "Pancit Cuisine",
									cuisine: Pancit
								},{
									itemName: "Vegetable Cuisine",
									cuisine: Vegetables
								}]
						},{
								title: "P60/Person",
								id: 3,
								description: "Long description of this package will go here",
								quantity: 0,
								price: 60,
								items:[{
									itemName: "Cocktails",
									cuisine:Cocktails
								}
								]
						}]
				}];

				return {
					getData: function getData(){
						return Data;
					}
				}
			
		}
	]);
/*
"(  ( false ) ? 'nextTab.setMenu(1)' : 'disabled')" 
*/