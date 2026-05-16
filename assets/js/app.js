const products = [
    { id: 1, name: "LV Trio Messenger", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-trio-messenger.png", colors: ["black"], category: "latest", description: "A versatile and stylish messenger bag from Louis Vuitton, perfect for everyday use." },
    { id: 2, name: "LV Messenger Bag", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-messenger-bag.png", colors: ["black"], category: "latest", description: "Classic Louis Vuitton messenger bag, combining elegance with practicality." },
    { id: 3, name: "YSL Envelope Bag", brand: "SAINT LAURENT", price: 635, image: "assets/images/products/ysl-envelope-bag.png", colors: ["black", "gold"], category: "latest", description: "An iconic Saint Laurent envelope bag, a timeless piece for any collection." },
    { id: 4, name: "Monogram Hobo Bag", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-hobo-bag.png", colors: ["black", "gold"], category: "latest", description: "The elegant Monogram Hobo Bag from Louis Vuitton, a perfect blend of style and comfort." },
    { id: 5, name: "Petite Malle Monogram", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-petite-malle-black.png", colors: ["black", "gold"], category: "latest", description: "A miniature trunk-inspired bag, the Petite Malle Monogram is a statement piece." },
    { id: 6, name: "Lady Dior Bag", brand: "DIOR", price: 735, image: "assets/images/products/dior-lady-bag.png", colors: ["black", "white"], category: "latest", description: "The legendary Lady Dior bag, a symbol of elegance and refinement." },
    { id: 7, name: "Petite Malle", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-petite-malle.png", colors: ["black", "gold", "multi"], category: "latest", description: "A classic Louis Vuitton Petite Malle, showcasing exquisite craftsmanship." },
    { id: 8, name: "Classic Flap Bag", brand: "CHANEL", price: 5500, image: "assets/images/products/chanel-classic-flap.png", colors: ["black", "gold", "beige"], category: "curated", description: "The timeless Chanel Classic Flap Bag, an icon of luxury and style." },
    { id: 9, name: "Marmont Matelassé", brand: "GUCCI", price: 2800, image: "assets/images/products/gucci-marmont.png", colors: ["black", "white", "red"], category: "curated", description: "Gucci's Marmont Matelassé, a chic and recognizable design." },
    { id: 10, name: "Speedy Bandoulière", brand: "LOUIS VUITTON", price: 1850, image: "assets/images/products/lv-speedy-bandouliere.png", colors: ["brown", "tan"], category: "curated", description: "The versatile Louis Vuitton Speedy Bandoulière, perfect for daily elegance." },
    { id: 11, name: "Book Tote", brand: "DIOR", price: 2200, image: "assets/images/products/dior-book-tote.png", colors: ["blue", "grey", "multi"], category: "curated", description: "Dior's iconic Book Tote, a spacious and stylish accessory." },
    { id: 12, name: "Vintage Heritage Bag", brand: "HERMÈS", price: 8500, image: "assets/images/products/hermes-heritage.png", colors: ["orange", "gold", "tan"], category: "curated", description: "A rare Hermès Vintage Heritage Bag, a true collector's item." },
    { id: 13, name: "Soho Disco Bag", brand: "GUCCI", price: 1950, image: "assets/images/products/gucci-soho-disco.png", colors: ["black", "red", "beige"], category: "curated", description: "The popular Gucci Soho Disco Bag, a compact and fashionable choice." },
    { id: 14, name: "Coussin PM", brand: "CHANEL", price: 4200, image: "assets/images/products/chanel-coussin.png", colors: ["black", "silver", "green"], category: "curated", description: "Chanel Coussin PM, a luxurious and modern design." },
    { id: 15, name: "Neverfull MM", brand: "LOUIS VUITTON", price: 1620, image: "assets/images/products/lv-neverfull.png", colors: ["brown", "beige"], category: "curated", description: "The practical and stylish Louis Vuitton Neverfull MM." },
    { id: 16, name: "LV Black Messenger", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-black-messenger.png", colors: ["black"], category: "latest", description: "A sleek and modern Louis Vuitton messenger bag in black." },
    { id: 17, name: "LV Monogram Messenger", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-monogram-messenger.png", colors: ["brown"], category: "latest", description: "Classic Louis Vuitton Monogram Messenger, a timeless design." },
    { id: 18, name: "Gucci Embossed Bag", brand: "GUCCI", price: 595, image: "assets/images/products/gucci-embossed-bag.png", colors: ["black"], category: "latest", description: "An elegant Gucci embossed bag, perfect for any occasion." },
    { id: 19, name: "LV Voyage Embossed", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-embossed.png", colors: ["black"], category: "latest", description: "Louis Vuitton Voyage Embossed, a sophisticated travel companion." },
    { id: 20, name: "LV Voyage Leather", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-leather.png", colors: ["black"], category: "latest", description: "A luxurious Louis Vuitton Voyage Leather bag, crafted for durability and style." },
    { id: 21, name: "LV Voyage Eclipse", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-eclipse.png", colors: ["black"], category: "latest", description: "The stylish Louis Vuitton Voyage Eclipse, a modern classic." },
    { id: 22, name: "LV Voyage Monogram", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-monogram.png", colors: ["brown"], category: "latest", description: "Louis Vuitton Voyage Monogram, a perfect blend of tradition and contemporary design." }
];

const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalBrand = document.getElementById("modalBrand");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");

function openModal() {
    productModal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    productModal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == productModal) {
        closeModal();
    }
}

function viewProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    modalImage.src = product.image;
    modalBrand.innerText = product.brand;
    modalTitle.innerText = product.name;
    modalPrice.innerText = "฿" + product.price.toLocaleString();
    modalDesc.innerText = product.description;
    openModal();
}

// Cart functionality
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalSpan = document.getElementById("cartTotal");
let cart = JSON.parse(localStorage.getItem('heritage_cart')) || [];

function toggleCart() {
    cartOverlay.classList.toggle("active");
    renderCart();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('heritage_cart', JSON.stringify(cart));
        renderCart();
        toggleCart();
    }
}

function addToCartFromModal() {
    const title = modalTitle.innerText;
    const product = products.find(p => p.name === title);
    if (product) {
        addToCart(product.id);
        closeModal();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('heritage_cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p style='text-align: center; margin-top: 5rem;'>Your cart is currently empty.</p>";
        cartTotalSpan.innerText = "฿0";
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => {
        return '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">' +
            '<div style="display: flex; align-items: center;">' +
                '<img src="' + item.image + '" alt="' + item.name + '" style="width: 70px; height: 70px; object-fit: cover; margin-right: 1.5rem; border: 1px solid var(--border-color);">' +
                '<div>' +
                    '<div style="font-weight: 600; color: var(--text-light);">' + item.name + '</div>' +
                    '<div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">Qty: ' + item.quantity + '</div>' +
                    '<button onclick="removeFromCart(' + item.id + ')" style="background: none; border: none; color: var(--accent-red); font-size: 0.75rem; cursor: pointer; padding: 0; margin-top: 0.5rem; text-decoration: underline;">Remove</button>' +
                '</div>' +
            '</div>' +
            '<div style="color: var(--primary-gold); font-weight: 600;">฿' + (item.price * item.quantity).toLocaleString() + '</div>' +
        '</div>';
    }).join("");

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalSpan.innerText = "฿" + total.toLocaleString();
}

// Search functionality
const searchOverlay = document.getElementById("searchOverlay");
function toggleSearch() {
    searchOverlay.classList.toggle("active");
}

// Load products for Home and Shop pages
function loadProductsGrid(gridId, productList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    if (productList.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; padding: 5rem; color: var(--text-muted);'>No products found matching your criteria.</p>";
        return;
    }

    grid.innerHTML = productList.map(product => {
        let colorsHtml = product.colors.map(color => '<div class="color-dot" style="background-color: ' + color + '"></div>').join("");
        return '<div class="product-card" onclick="viewProduct(' + product.id + ')">' +
            '<div class="brand-badge">' + product.brand + '</div>' +
            '<div class="product-image">' +
                '<img src="' + product.image + '" alt="' + product.name + '">' +
            '</div>' +
            '<div class="product-info">' +
                '<div class="product-brand">' + product.brand + '</div>' +
                '<div class="product-name">' + product.name + '</div>' +
                '<div class="product-price">฿' + product.price.toLocaleString() + '</div>' +
                '<div class="color-dots">' + colorsHtml + '</div>' +
            '</div>' +
        '</div>';
    }).join("");
}

function loadHomeProducts() {
    const latestProducts = products.filter(p => p.category === "latest").slice(0, 4);
    loadProductsGrid("latestProducts", latestProducts);

    const curatedProducts = products.filter(p => p.category === "curated").slice(0, 4);
    loadProductsGrid("curatedProducts", curatedProducts);
}

function loadShopProducts() {
    loadProductsGrid("shopProducts", products);
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("latestProducts")) {
        loadHomeProducts();
    }
    if (document.getElementById("shopProducts")) {
        loadShopProducts();
    }
});
