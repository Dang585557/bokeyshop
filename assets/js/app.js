const products = [
    { id: 22, name: "LV Black Messenger", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-black-messenger.png", colors: ["black"], category: "latest" },
    { id: 21, name: "LV Monogram Messenger", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-monogram-messenger.png", colors: ["brown"], category: "latest" },
    { id: 20, name: "Gucci Embossed Bag", brand: "GUCCI", price: 595, image: "assets/images/products/gucci-embossed-bag.png", colors: ["black"], category: "latest" },
    { id: 19, name: "LV Voyage Embossed", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-embossed.png", colors: ["black"], category: "latest" },
    { id: 18, name: "LV Voyage Leather", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-leather.png", colors: ["black"], category: "latest" },
    { id: 17, name: "LV Voyage Eclipse", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-eclipse.png", colors: ["black"], category: "latest" },
    { id: 16, name: "LV Voyage Monogram", brand: "LOUIS VUITTON", price: 595, image: "assets/images/products/lv-voyage-monogram.png", colors: ["brown"], category: "latest" },
    { id: 15, name: "LV Trio Messenger", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-trio-messenger.png", colors: ["black"], category: "latest" },
    { id: 14, name: "LV Messenger Bag", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-messenger-bag.png", colors: ["black"], category: "latest" },
    { id: 13, name: "YSL Envelope Bag", brand: "Saint Laurent", price: 635, image: "assets/images/products/ysl-envelope-bag.png", colors: ["black", "gold"], category: "latest" },
    { id: 12, name: "Monogram Hobo Bag", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-hobo-bag.png", colors: ["black", "gold"], category: "latest" },
    { id: 11, name: "Petite Malle Monogram", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-petite-malle-black.png", colors: ["black", "gold"], category: "latest" },
    { id: 10, name: "Lady Dior Bag", brand: "DIOR", price: 735, image: "assets/images/products/dior-lady-bag.png", colors: ["black", "white"], category: "latest" },
    { id: 9, name: "Petite Malle", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/lv-petite-malle.png", colors: ["black", "gold", "multi"], category: "latest" },
    { id: 1, name: "Classic Flap Bag", brand: "CHANEL", price: 5500, image: "https://via.placeholder.com/250x250?text=Classic+Flap", colors: ["black", "gold", "beige"], category: "latest" },
    { id: 2, name: "Marmont Matelassé", brand: "GUCCI", price: 2800, image: "https://via.placeholder.com/250x250?text=Marmont", colors: ["black", "white", "red"], category: "latest" },
    { id: 3, name: "Speedy Bandoulière", brand: "LOUIS VUITTON", price: 1850, image: "https://via.placeholder.com/250x250?text=Speedy", colors: ["brown", "tan"], category: "latest" },
    { id: 4, name: "Book Tote", brand: "DIOR", price: 2200, image: "https://via.placeholder.com/250x250?text=Book+Tote", colors: ["blue", "grey", "multi"], category: "latest" },
    { id: 5, name: "Vintage Heritage Bag", brand: "HERMÈS", price: 8500, image: "https://via.placeholder.com/250x250?text=Heritage", colors: ["orange", "gold", "tan"], category: "latest" },
    { id: 6, name: "Soho Disco Bag", brand: "GUCCI", price: 1950, image: "https://via.placeholder.com/250x250?text=Soho+Disco", colors: ["black", "red", "beige"], category: "latest" },
    { id: 7, name: "Coussin PM", brand: "CHANEL", price: 4200, image: "https://via.placeholder.com/250x250?text=Coussin", colors: ["black", "silver", "green"], category: "latest" },
    { id: 8, name: "Neverfull MM", brand: "LOUIS VUITTON", price: 1620, image: "https://via.placeholder.com/250x250?text=Neverfull", colors: ["brown", "beige"], category: "latest" }
];
function loadProducts(filterBrand = 'all', filterPrice = 'all', sortBy = 'newest') {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    let filtered = [...products];

    if (filterBrand !== 'all') {
        filtered = filtered.filter(p => p.brand === filterBrand);
    }

    if (filterPrice !== 'all') {
        filtered = filtered.filter(p => {
            if (filterPrice === '0-1000') return p.price < 1000;
            if (filterPrice === '1000-3000') return p.price >= 1000 && p.price <= 3000;
            if (filterPrice === '3000-5000') return p.price >= 3000 && p.price <= 5000;
            if (filterPrice === '5000+') return p.price > 5000;
            return true;
        });
    }

    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === 'newest') filtered.sort((a, b) => b.id - a.id);

    productGrid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="brand-badge">${product.brand}</div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">฿${product.price}</div>
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-dot" style="background: ${color}"></span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function loadHomeProducts() {
    const latestGrid = document.getElementById('latestProducts');
    const curatedGrid = document.getElementById('curatedProducts');

    if (latestGrid) {
        const latest = products.slice(0, 4);
        latestGrid.innerHTML = latest.map(product => `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="brand-badge">${product.brand}</div>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">฿${product.price}</div>
                </div>
            </div>
        `).join('');
    }

    if (curatedGrid) {
        const curated = products.filter(p => p.id <= 8).slice(0, 4);
        curatedGrid.innerHTML = curated.map(product => `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="brand-badge">${product.brand}</div>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">฿${product.price}</div>
                </div>
            </div>
        `).join('');
    }
}

function viewProduct(id) {
    console.log('Viewing product:', id);
}

function toggleCart() {
    const cart = document.getElementById('cartOverlay');
    if (cart) cart.classList.toggle('active');
}

function toggleSearch() {
    const search = document.getElementById('searchOverlay');
    if (search) search.style.display = search.style.display === 'flex' ? 'none' : 'flex';
}

function toggleAccount() {
    alert('Account feature coming soon!');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productGrid')) {
        loadProducts();
    }
    if (document.getElementById('latestProducts')) {
        loadHomeProducts();
    }
});
