document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const checkoutButton = document.querySelector(".checkout-btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productElement = this.parentElement;
            const productName = productElement.querySelector("h3").innerText;
            const productPrice = parseFloat(productElement.querySelector("p").innerText.replace("$", ""));
            
            const existingItem = cart.find(item => item.name === productName);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            
            const removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            removeButton.classList.add("remove-item");
            removeButton.addEventListener("click", () => removeFromCart(item.name));
            
            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);
            
            total += item.price * item.quantity;
        });

        totalPriceElement.innerText = `$${total.toFixed(2)}`;
    }

    function removeFromCart(productName) {
        const index = cart.findIndex(item => item.name === productName);
        if (index !== -1) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
        }
        updateCart();
    }

    checkoutButton.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Thank you for your purchase! Your order has been placed.");
            cart.length = 0; 
            updateCart();
        }
    });
});
