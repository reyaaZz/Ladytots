// Handle cart and buy actions
let cart = [];

document.getElementById('addToCart').addEventListener('click', () => {
    cart.push('Salong Resin Kalan');
    updateCartStatus();
});

document.getElementById('buyNow').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartStatus();
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Proceeding to checkout...');
        cart = [];
        updateCartStatus();
    } else {
        alert('Your cart is empty.');
    }
});

function updateCartStatus() {
    const cartStatus = document.getElementById('cartStatus');
    const cartItems = document.getElementById('cartItems');

    if (cart.length > 0) {
        cartStatus.textContent = `${cart.length} item(s) in cart.`;
        cartItems.innerHTML = '<ul>' + cart.map(item => `<li>${item}</li>`).join('') + '</ul>';
    } else {
        cartStatus.textContent = 'Your cart is empty.';
        cartItems.innerHTML = '';
    }
}
