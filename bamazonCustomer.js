var mysql = require('mysql');
var inquirer = require("inquirer");
var myObject = "";



require('console.table');


function myConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'bamazon'
    });
    return connection;
}

function showProducts() {
    var connection = myConnection();
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected as ID " + connection.threadId);
        console.log("Connection Successful");

        connection.query("SELECT * FROM products", function(err, products) {
            if (err) throw err;

            console.table(products);


            connection.end(function(err) {
                //console.log("Connection Terminated");
            });
                buyStuff(products);

        });

    });
}

function buyStuff(products) {

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

        ]).then(function(order) {

            for (i = 0; i < products.length; i++) {
                var myObject = products;
            }

            
            //quantityCheck(myObject);
            //updateDB(myObject);
            displayOrder(order, myObject);

        });
}


function displayOrder(order, myObject) {

    var connection = myConnection();
    var itemID = order.itemid;
    var qty = order.quantity;
    var totalCost = "";
    

    connection.connect(function(err) {
        if (err) throw err;
       
        connection.query("SELECT item_id, product_name, price FROM products WHERE item_id = ?", itemID, function(err, results) {
            if (err) throw err;

            for (i = 0; i < results.length; i++) {
            
                var totalCost = (results[i].price * qty);
                    
            console.log(results[i].product_name, totalCost);
            }

            connection.end(function(err) {
                //console.log("Connection Terminated");    
            });


            confirmOrder(order);

        });

    });
}


function confirmOrder(order) {

    inquirer
        .prompt([{
            name: "order",
            type: "confirm",
            message: "Would you like to place your order?",
            default: true
        }]).then(function(response) {

            if (response.order === true) {
                console.log("Your order has been placed!");
            } else {
                console.log("Your order has been canceled.");
            }

        });

}


showProducts();

// function quantityCheck() {

// }


// function updateDB() {

// }
