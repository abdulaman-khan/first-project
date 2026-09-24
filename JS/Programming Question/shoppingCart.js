let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        id: 2,
        name: "Mouse",
        price: 800,
        quantity: 2
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1500,
        quantity: 1
    }
];

function showCart() {

    console.log("----- Shopping Cart -----");

    for (let product of products) {
        console.log(
            product.id + " - " +
            product.name +
            " - Price: " + product.price +
            " - Quantity: " + product.quantity
        );
    }
}


function calculateTotal() {

    let total = 0;

    for (let product of products) {
        total = total + (product.price * product.quantity);
    }

    console.log("Total Amount:", total);
}


function addProduct(id, name, price, quantity) {

    let product = {
        id: id,
        name: name,
        price: price,
        quantity: quantity
    };

    products.push(product);

    console.log("Product added successfully");
}


function removeProduct(id) {

    let index = products.findIndex(function(product) {
        return product.id === id;
    });

    if (index !== -1) {
        products.splice(index, 1);
        console.log("Product removed successfully");
    }
    else {
        console.log("Product not found");
    }
}


function updateQuantity(id, quantity) {

    let product = products.find(function(product) {
        return product.id === id;
    });

    if (product) {
        product.quantity = quantity;
        console.log("Quantity updated successfully");
    }
    else {
        console.log("Product not found");
    }
}


// Show existing cart
showCart();

// Add product
addProduct(4, "Headphones", 2000, 1);

// Update quantity
updateQuantity(2, 5);

// Remove product
removeProduct(3);

// Show updated cart
showCart();

// Calculate final amount
calculateTotal();