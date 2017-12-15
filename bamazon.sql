DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
	department_name VARCHAR(45) NULL,
    price DECIMAL(7,2) NOT NULL,
    stock INT(11) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock) 
VALUES ("Macbook Air", "Apple", 500.00, 100), 
("iPod", "Apple", 250.00, 100), 
("Apple TV", "Apple", 150.00, 100), 
("iPad", "Apple", 300.00, 100), 
("iMac", "Apple", 1000.00, 100), 
("Mac Pro", "Apple", 2000.00, 100), 
("XBOX One X", "Gaming", 350.00, 100), 
("PS4 Pro", "Gaming", 350.00, 100), 
("Nintendo Switch", "Gaming", 250.00, 100), 
("Alienware Gaming PC", "Gaming", 800.00, 100);


SELECT * FROM products;
