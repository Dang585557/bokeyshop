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
            <div class="brand-badge">${product.brand}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">฿${product.price.toLocaleString()}</div>
                <div class="color-dots">
                    ${product.colors.map(color => `<div class="color-dot" style="background-color: ${color}"></div>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function loadHomeProducts() {
    const latestGrid = document.getElementById('latestProducts');
    const curatedGrid = document.getElementById('curatedProducts');

    if (latestGrid) {
        const latest = [...products].sort((a, b) => b.id - a.id).slice(0, 4);
        latestGrid.innerHTML = latest.map(product => `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="brand-badge">${product.brand}</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">฿${product.price.toLocaleString()}</div>
                    <div class="color-dots">
                        ${product.colors.map(color => `<div class="color-dot" style="background-color: ${color}"></div>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    if (curatedGrid) {
        const curated = products.slice(0, 4);
        curatedGrid.innerHTML = curated.map(product => `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="brand-badge">${product.brand}</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">฿${product.price.toLocaleString()}</div>
                    <div class="color-dots">
                        ${product.colors.map(color => `<div class="color-dot" style="background-color: ${color}"></div>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function viewProduct(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) return;

    document.getElementById('productImage').src = product.image;
    document.getElementById('productBrand').innerText = product.brand;
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productPrice').innerText = `฿${product.price.toLocaleString()}`;
    
    const colorOptions = document.getElementById('colorOptions');
    if (colorOptions) {
        colorOptions.innerHTML = product.colors.map(color => `
            <div class="color-dot" style="background-color: ${color}"></div>
        `).join('');
    }

    const relatedGrid = document.getElementById('relatedProducts');
    if (relatedGrid) {
        const related = products.filter(p => p.brand === product.brand && p.id !== product.id).slice(0, 4);
        relatedGrid.innerHTML = related.map(p => `
            <div class="product-card" onclick="viewProduct(${p.id})">
                <div class="brand-badge">${p.brand}</div>
                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${p.brand}</div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-price">฿${p.price.toLocaleString()}</div>
                </div>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productGrid')) loadProducts();
    if (document.getElementById('latestProducts')) loadHomeProducts();
    if (document.getElementById('productName')) loadProductDetail();
});
