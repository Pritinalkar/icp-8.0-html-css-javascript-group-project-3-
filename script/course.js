document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart');
    const cartItemsContainer = document.querySelector('.items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartIcon.addEventListener('click', function () {
        cartItemsContainer.style.display = cartItemsContainer.style.display === 'none' ? 'block' : 'none';
    });

    function isLoggedIn() {
        
        return JSON.parse(localStorage.getItem('logedInUser')) || false;
    }

    window.addToCart = function (course) {
        if (!isLoggedIn()) {
            alert('You must be logged in to buy a course.');
            return;
        }

        const dateAdded = new Date().toLocaleDateString();
        cartItems.push({ ...course, dateAdded });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${course.name} has been added to the cart on ${dateAdded}`);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<span>No items in the cart</span>';
        } else {
            cartItemsContainer.innerHTML = '<ul>' + cartItems.map(item => `<li>You have bought the course ${item.name} - Price ${item.price} /-</li>`).join('') + '</ul>';
        }
    }

    window.loginUser = function () {
        
        localStorage.setItem('isLoggedIn', true);
        alert('Logged in successfully!');
        updateLoginStatus();
    }

    window.logoutUser = function () {
        localStorage.removeItem('isLoggedIn');
        alert('Logged out successfully!');
        updateLoginStatus();
    }

    function updateLoginStatus() {
        const isLoggedInStatus = isLoggedIn();
        const loginForm = document.getElementById('login-form');
        const logoutSection = document.getElementById('logout-section');

        if (loginForm) {
            loginForm.style.display = isLoggedInStatus ? 'none' : 'block';
        }

        if (logoutSection) {
            logoutSection.style.display = isLoggedInStatus ? 'block' : 'none';
        }
    }

    updateLoginStatus();
    updateCartDisplay();
});
