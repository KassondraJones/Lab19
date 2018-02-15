var totalCost = 0;
var cart = [];
var items = ["Shampoo", "Conditioner", "Body wash", "Toothpaste", "Mouthwash", "Floss"];
var itemCosts = [3.00, 3.00, 2.50, 3.50, 2.75, 1.25];

function addItem(itemID) {
	cart.push(items[itemID] + " ($" + parseFloat(itemCosts[itemID]).toFixed(2) + ")");
	totalCost += itemCosts[itemID];
	refreshCart();
}

function refreshCart() {
	$("#shoppingCart").empty();

	if (cart.length === 0) {
		$("#shoppingCart").append("<li>No items currently in cart!</li>");
		console.log("No items currently in cart!");
	} else {
		for(var i = 0; i < cart.length; i++) {
			$("#shoppingCart").append("<li>" + cart[i] + "</li>");
			console.log(cart[i]);
		}
	}
	$("#total").html("Total: $" + parseFloat(totalCost).toFixed(2));
	console.log("Total cost: $" + parseFloat(totalCost).toFixed(2));
}

function clearCart() {
	cart = [];
	totalCost = 0;
	refreshCart();
}