var mysql = require('mysql');
var inquirer = require("inquirer");



require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    console.log("Connection Successful");

    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        
        console.table(results);

        connection.end(function(err) {
           //console.log("Connection Terminated");
        	buyStuff(results);
        });
 
    });

});


function buyStuff(results) {

    inquirer
        .prompt([
        
        {
            name: "itemid",
            type: "input",
            message: "Please type in the Item ID of the product you'd like to buy."
        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        }

        ]).then(function(answer) {
            
            //quantityCheck();
            //updateDB();
            //displayOrder(answer);
            confirmOrder(answer);

        });
}




function confirmOrder(answer) {

	inquirer
		.prompt([
		{
			name: "order",
			type: "confirm",
			message: "Would you like to place your order?",
			default: true
		}
		]).then(function(response){

			if (response.order === true) {
			console.log("Your order has been placed!");
			} else {
			console.log("Your order has been canceled.");
			}

		});

}


// function quantityCheck() {

// }


// function updateDB() {

// }


// function displayOrder() {

// }





