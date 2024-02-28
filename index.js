document.addEventListener("DOMContentLoaded", function () {
    // Select the add to cart button
    var addToCartBtn = document.querySelector(".btn button");

    // Add event listener for the add to cart button
    addToCartBtn.addEventListener("click", function () {
        // Get the selected size and color
        var selectedSize = document.getElementById("size").value;
        var selectedColor = document.getElementById("colour").value;
        var selectedQuantity = 1; // For simplicity, assuming the quantity is always 1

        // Calculate the price based on the selected radio button
        var selectedPrice = calculatePrice();

        // Construct the item object
        var item = {
            size: selectedSize,
            color: selectedColor,
            quantity: selectedQuantity,
            price: selectedPrice
        };

        // Call a function to add the item to the cart and update the total expense
        addToCartAndUpdateTotal(item);
    });

    // Function to calculate the price based on the selected radio button
    function calculatePrice() {
        var radioButtons = document.querySelectorAll('input[type="radio"]');
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                // Price logic based on the selected radio button
                if (i === 0) {
                    return 10.00; // Price for 1Unit
                } else if (i === 1) {
                    return 18.00; // Price for 2Unit
                } else if (i === 2) {
                    return 24.00; // Price for 3Unit
                }
            }
        }
        return 0; // Default price if no radio button is selected
    }

    // Function to add item to cart and update total expense
    function addToCartAndUpdateTotal(item) {
        // Add the item to the cart (similar to previous code)
        var cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        cart.push(item);

        // Calculate total expense
        var totalExpense = calculateTotalExpense(cart);

        // Display total expense on the screen
        var totalExpenseElement = document.querySelector(".total-expense");
        totalExpenseElement.textContent = "Total Expense: $" + totalExpense.toFixed(2);

        // Show an alert indicating the item has been added to the cart
        alert("Item added to cart!");
    }

    // Function to calculate total expense based on items in the cart
    function calculateTotalExpense(cart) {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
        }
        return total;
    }
});

