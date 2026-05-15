const products = [
    { id: 23, name: "LV New Collection", brand: "LOUIS VUITTON", price: 635, image: "assets/images/products/1778807998099.jpg", colors: ["brown", "gold"], category: "latest" },
    { id: 24, name: "LV New Collection", brand: "GOARD", price: 595, image: "assets/images/products/1778807998099jpg", colors: ["brown", "gold"], category: "latest" },
 
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
                <div class="product-price">฿${product.price.toLocaleString()}</div>
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
