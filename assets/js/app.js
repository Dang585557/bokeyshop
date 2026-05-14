const products = [
    { id: 9, name: "Petite Malle", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-petite-malle.png", colors: ["black", "gold", "multi"], category: "latest" },
    { id: 1, name: "Classic Flap Bag", brand: "CHANEL", price: 5500, image: "https://via.placeholder.com/250x250?text=Classic+Flap", colors: ["black", "gold", "beige"], category: "latest" },
    { id: 2, name: "Marmont Matelassé", brand: "GUCCI", price: 2800, image: "https://via.placeholder.com/250x250?text=Marmont", colors: ["black", "white", "red"], category: "latest" },
    { id: 3, name: "Speedy Bandoulière", brand: "LOUIS VUITTON", price: 1850, image: "https://via.placeholder.com/250x250?text=Speedy", colors: ["brown", "black"], category: "latest" },
    { id: 4, name: "Book Tote", brand: "DIOR", price: 2200, image: "https://via.placeholder.com/250x250?text=Book+Tote", colors: ["black", "blue", "beige"], category: "latest" },
    { id: 5, name: "Vintage Heritage Bag", brand: "HERMÈS", price: 8500, image: "https://via.placeholder.com/250x250?text=Heritage", colors: ["black", "tan"], category: "curated" },
    { id: 6, name: "Soho Disco Bag", brand: "GUCCI", price: 1950, image: "https://via.placeholder.com/250x250?text=Soho+Disco", colors: ["black", "red", "gold"], category: "curated" },
    { id: 7, name: "Coussin PM", brand: "CHANEL", price: 4200, image: "https://via.placeholder.com/250x250?text=Coussin", colors: ["black", "white", "pink"], category: "curated" },
    { id: 8, name: "Neverfull MM", brand: "LOUIS VUITTON", price: 1620, image: "https://via.placeholder.com/250x250?text=Neverfull", colors: ["brown", "black", "damier"], category: "curated" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function createProductCard(product) {
    const colorsHtml = product.colors.map(color => `<div class="color-dot" style="background-color: ${color};" title="${color}"></div>`).join('');
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="brand-badge">${product.brand}</span>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <div class="product-colors">${colorsHtml}</div>
            </div>
        </div>
    `;
}

function loadProducts() {
    const latestContainer = document.getElementById('latestProducts');
    const curatedContainer = document.getElementById('curatedProducts');
    const shopGridContainer = document.getElementById('shopProductsGrid');

    if (latestContainer) {
        const latestProducts = products.filter(p => p.category === 'latest');
        latestContainer.innerHTML = latestProducts.map(product => createProductCard(product)).join('');
    }

    if (curatedContainer) {
        const curatedProducts = products.filter(p => p.category === 'curated');
        curatedContainer.innerHTML = curatedProducts.map(product => createProductCard(product)).join('');
    }

    if (shopGridContainer) {
        shopGridContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}

function viewProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product.html';
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification('Added to cart!');
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const cartCountElement = document.getElementById('cartCount');

    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty</p>';
            if (cartTotalElement) cartTotalElement.textContent = '$0';
            if (cartCountElement) cartCountElement.textContent = '0';
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.brand}</p>
                    <p>$${item.price.toLocaleString()}</p>
                </div>
                <div class="item-quantity">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="item-total">$${(item.price * item.quantity).toLocaleString()}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotalElement) cartTotalElement.textContent = '$' + total.toLocaleString();
        if (cartCountElement) cartCountElement.textContent = cart.length.toString();
    }
}

function loadCheckout() {
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');

    if (orderItems) {
        if (cart.length === 0) {
            orderItems.innerHTML = '<p>No items in cart</p>';
            return;
        }

        orderItems.innerHTML = cart.map(item => `
            <div class="order-item">
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-brand">${item.brand}</div>
                    <div class="order-item-qty">Qty: ${item.quantity}</div>
                </div>
                <div class="order-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 50; // Example shipping cost
        const tax = Math.round(subtotal * 0.1); // Example 10% tax
        const total = subtotal + shipping + tax;

        if (orderTotal) {
            orderTotal.innerHTML = `
                <div class="total-row"><span>Subtotal:</span><span>$${subtotal.toLocaleString()}</span></div>
                <div class="total-row"><span>Shipping:</span><span>$${shipping}</span></div>
                <div class="total-row"><span>Tax:</span><span>$${tax}</span></div>
                <div class="total-row final"><span>TOTAL:</span><span>$${total.toLocaleString()}</span></div>
            `;
        }
    }
}

function loadProductDetail() {
    const productId = parseInt(localStorage.getItem('selectedProduct'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'shop.html'; // Redirect if product not found
        return;
    }

    const container = document.getElementById('productDetail');
    if (container) {
        const colorsHtml = product.colors.map(color => `<div class="color-dot" style="background-color: ${color};" title="${color}"></div>`).join('');
        container.innerHTML = `
            <div class="product-image-large"><img src="${product.image}" alt="${product.name}"></div>
            <div class="product-details">
                <div class="product-brand-large">${product.brand}</div>
                <h1>${product.name}</h1>
                <div class="product-price-large">$${product.price.toLocaleString()}</div>
                <div class="product-colors-large"><label>Color:</label>${colorsHtml}</div>
                <div class="product-quantity"><label>Quantity:</label><input type="number" id="quantity" value="1" min="1"></div>
                <button class="btn-primary" onclick="addToCartFromDetail(${product.id})">BUY NOW</button>
                <button class="btn-secondary" onclick="addToCartFromDetail(${product.id})">ADD TO CART</button>
                <div class="product-description"><h3>DESCRIPTION</h3><p>This exquisite ${product.name} from ${product.brand} represents the pinnacle of luxury craftsmanship.</p></div>
            </div>
        `;
    }
}

function addToCartFromDetail(productId) {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    addToCart(productId, quantity);
    // Optionally redirect to checkout or show cart
    // setTimeout(() => { window.location.href = 'checkout.html'; }, 500);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => { notification.remove(); }, 3000);
}

// Sidebar and Cart Overlay functionality
let isCartOpen = false;
let isSearchOpen = false;
let isAccountOpen = false;

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        isCartOpen = !isCartOpen;
        cartOverlay.style.right = isCartOpen ? '0' : '-400px';
        if (isCartOpen) {
            updateCartDisplay();
        }
    }
}

function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    if (searchOverlay) {
        isSearchOpen = !isSearchOpen;
        searchOverlay.style.top = isSearchOpen ? '0' : '-100%';
    }
}

function toggleAccount() {
    const accountOverlay = document.getElementById('accountOverlay');
    if (accountOverlay) {
        isAccountOpen = !isAccountOpen;
        accountOverlay.style.right = isAccountOpen ? '0' : '-400px';
    }
}

// Initial load based on page
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/') {
        loadProducts();
    } else if (path.includes('shop.html')) {
        loadProducts(); // Load all products for the shop page
    } else if (path.includes('product.html')) {
        loadProductDetail();
    } else if (path.includes('checkout.html')) {
        loadCheckout();
    }
    // No specific load function for admin-dashboard.html needed on DOMContentLoaded

    updateCartDisplay(); // Ensure cart count is updated on all pages
});
