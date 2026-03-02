// ===== MAHSULOTLAR BAZASI (50+ Mahsulot) =====
const products = [
    // KIYIMLAR (1-10)
    { id: 1, name: "Erkaklar futbolka Classic", price: 25, category: "kiyim", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", badge: "Yangi", rating: 4.8, reviews: 120 },
    { id: 2, name: "Jinsi shim Slim Fit", price: 45, category: "kiyim", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=300", badge: "", rating: 4.5, reviews: 85 },
    { id: 3, name: "Sport krossovka Nike", price: 80, category: "kiyim", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", badge: "Hit", rating: 4.9, reviews: 200 },
    { id: 4, name: "Xotin-qizlar ko'ylagi", price: 55, category: "kiyim", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300", badge: "", rating: 4.6, reviews: 95 },
    { id: 5, name: "Qishki kurtka", price: 120, category: "kiyim", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300", badge: "Chegirma", rating: 4.7, reviews: 150 },
    { id: 6, name: "Polo ko'ylak", price: 35, category: "kiyim", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=300", badge: "", rating: 4.4, reviews: 70 },
    { id: 7, name: "Sport sharovari", price: 40, category: "kiyim", image: "https://images.unsplash.com/photo-1552975084-6e027cd345c9?w=300", badge: "Yangi", rating: 4.5, reviews: 60 },
    { id: 8, name: "Yengil palto", price: 150, category: "kiyim", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300", badge: "", rating: 4.8, reviews: 110 },
    { id: 9, name: "Klassik kostyum", price: 200, category: "kiyim", image: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?w=300", badge: "Premium", rating: 4.9, reviews: 45 },
    { id: 10, name: "Yozgi shlyapa", price: 20, category: "kiyim", image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=300", badge: "", rating: 4.3, reviews: 55 },
    
    // OZIQ-OVQAT (11-20)
    { id: 11, name: "Organik olma (1kg)", price: 3, category: "ovqat", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300", badge: "", rating: 4.7, reviews: 300 },
    { id: 12, name: "Yangi non", price: 1, category: "ovqat", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300", badge: "Yangi", rating: 4.8, reviews: 500 },
    { id: 13, name: "Tabiiy asal (500g)", price: 15, category: "ovqat", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300", badge: "", rating: 4.9, reviews: 250 },
    { id: 14, name: "Qatiq (1L)", price: 4, category: "ovqat", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300", badge: "", rating: 4.6, reviews: 180 },
    { id: 15, name: "Meva aralashmasi", price: 8, category: "ovqat", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300", badge: "Hit", rating: 4.8, reviews: 220 },
    { id: 16, name: "Kofe danesi (250g)", price: 12, category: "ovqat", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300", badge: "", rating: 4.7, reviews: 160 },
    { id: 17, name: "Zaytun moyi (1L)", price: 18, category: "ovqat", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", badge: "Premium", rating: 4.9, reviews: 140 },
    { id: 18, name: "Shokolad to'plami", price: 10, category: "ovqat", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", badge: "", rating: 4.8, reviews: 280 },
    { id: 19, name: "Choy assortisi", price: 14, category: "ovqat", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300", badge: "Yangi", rating: 4.6, reviews: 190 },
    { id: 20, name: "Yong'oq aralashmasi", price: 16, category: "ovqat", image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=300", badge: "", rating: 4.7, reviews: 170 },
    
    // TEXNIKA (21-30)
    { id: 21, name: "Simli quloqchin", price: 20, category: "texnika", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300", badge: "", rating: 4.5, reviews: 350 },
    { id: 22, name: "Power bank 10000mAh", price: 35, category: "texnika", image: "https://images.unsplash.com/photo-1609592424308-6469717f5b45?w=300", badge: "Yangi", rating: 4.7, reviews: 280 },
    { id: 23, name: "Telefon g'ilofi", price: 12, category: "texnika", image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=300", badge: "", rating: 4.4, reviews: 420 },
    { id: 24, name: "Bluetooth speaker", price: 45, category: "texnika", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300", badge: "Hit", rating: 4.8, reviews: 310 },
    { id: 25, name: "Smart soat", price: 85, category: "texnika", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300", badge: "Premium", rating: 4.9, reviews: 190 },
    { id: 26, name: "USB kabel 3m", price: 8, category: "texnika", image: "https://images.unsplash.com/photo-1609592424308-6469717f5b45?w=300", badge: "", rating: 4.3, reviews: 500 },
    { id: 27, name: "Simsiz sichqoncha", price: 25, category: "texnika", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300", badge: "", rating: 4.6, reviews: 240 },
    { id: 28, name: "Klaviatura mekanik", price: 65, category: "texnika", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300", badge: "Yangi", rating: 4.8, reviews: 160 },
    { id: 29, name: "Web kamera HD", price: 40, category: "texnika", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300", badge: "", rating: 4.5, reviews: 200 },
    { id: 30, name: "Monitor 24 inch", price: 180, category: "texnika", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300", badge: "Premium", rating: 4.9, reviews: 120 },
    
    // UY-RO'ZG'OR (31-40)
    { id: 31, name: "Zamonaviy lampa", price: 35, category: "uy", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300", badge: "", rating: 4.6, reviews: 180 },
    { id: 32, name: "Yostiq jildi", price: 12, category: "uy", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=300", badge: "", rating: 4.4, reviews: 220 },
    { id: 33, name: "Stakanlar to'plami", price: 18, category: "uy", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300", badge: "Chegirma", rating: 4.7, reviews: 150 },
    { id: 34, name: "Sochiq to'plami", price: 15, category: "uy", image: "https://images.unsplash.com/photo-1616627547582-5f5b8a5e3c73?w=300", badge: "", rating: 4.5, reviews: 190 },
    { id: 35, name: "Devor soati", price: 28, category: "uy", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300", badge: "Yangi", rating: 4.6, reviews: 130 },
    { id: 36, name: "Guldon keramik", price: 22, category: "uy", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300", badge: "", rating: 4.7, reviews: 160 },
    { id: 37, name: "Oshxona to'plami", price: 55, category: "uy", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300", badge: "Hit", rating: 4.8, reviews: 210 },
    { id: 38, name: "Farsh yuvish mashinasi", price: 250, category: "uy", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300", badge: "Premium", rating: 4.9, reviews: 85 },
    { id: 39, name: "Havo tozalagich", price: 120, category: "uy", image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=300", badge: "", rating: 4.7, reviews: 140 },
    { id: 40, name: "Kitob javoni", price: 95, category: "uy", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=300", badge: "Yangi", rating: 4.6, reviews: 95 },
    
    // SPORT (41-45)
    { id: 41, name: "Yoga mati", price: 25, category: "sport", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300", badge: "", rating: 4.7, reviews: 280 },
    { id: 42, name: "Dumbbell 5kg", price: 30, category: "sport", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300", badge: "Yangi", rating: 4.8, reviews: 190 },
    { id: 43, name: "Sport sumkasi", price: 40, category: "sport", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", badge: "", rating: 4.5, reviews: 160 },
    { id: 44, name: "Fitnes tracker", price: 55, category: "sport", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300", badge: "Hit", rating: 4.9, reviews: 240 },
    { id: 45, name: "Tennis raketkasi", price: 75, category: "sport", image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=300", badge: "", rating: 4.6, reviews: 110 },
    
    // BOLALAR (46-50)
    { id: 46, name: "Bolalar futbolka", price: 15, category: "bolalar", image: "https://images.unsplash.com/photo-1519238263496-6360270c64f6?w=300", badge: "", rating: 4.7, reviews: 320 },
    { id: 47, name: "O'yinchoq mashina", price: 20, category: "bolalar", image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300", badge: "Yangi", rating: 4.8, reviews: 280 },
    { id: 48, name: "Bolalar kitobi", price: 10, category: "bolalar", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300", badge: "", rating: 4.9, reviews: 190 },
    { id: 49, name: "Maktab sumkasi", price: 35, category: "bolalar", image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=300", badge: "Hit", rating: 4.6, reviews: 250 },
    { id: 50, name: "Bolalar poyabzali", price: 30, category: "bolalar", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=300", badge: "", rating: 4.7, reviews: 210 }
];

// ===== HOLATLAR =====
let cart = [];
let wishlist = [];
let currentUser = null; // Foydalanuvchi ma'lumoti
let displayedProducts = [...products];

// ===== TELEGRAM SOZLAMALARI =====
const BOT_TOKEN = "8242174403:AAEfqiBcjHmvPaVG39p07SN4UoFeRMwqlRQ";
const CHAT_ID = "7535813647";

// ===== DOM ELEMENTLAR =====
const productsGrid = document.getElementById('products-grid');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const wishlistItems = document.getElementById('wishlist-items');
const wishlistCount = document.getElementById('wishlist-count');
const filterTabs = document.querySelectorAll('.filter-tab');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const loader = document.getElementById('loader');
const toastContainer = document.getElementById('toastContainer');
const themeToggle = document.getElementById('themeToggle');

// ===== SAHIFA YUKLANGANDA =====
document.addEventListener('DOMContentLoaded', () => {
    // Loader yashirish
    setTimeout(() => {
        if(loader) loader.classList.add('hidden');
    }, 1000);
    
    checkAuth(); // Kirgan foydalanuvchini tekshirish
    loadTheme(); // Tungi rejimni yuklash
    renderProducts(products);
    setupFilters();
    loadCart();
    loadWishlist();
    setupScrollEffects();
    setupMobileMenu();
});

// ===== DARK MODE =====
if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if(themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// ===== AUTH TIZIMI =====
function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
        updateUIForUser();
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPass').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
        showToast('Bu email allaqachon ro\'yxatdan o\'tgan!', 'error');
        return;
    }

    const newUser = { name, email, pass };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    currentUser = newUser;
    
    closeRegisterModal();
    updateUIForUser();
    showToast(`Xush kelibsiz, ${name}!`, 'success');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        closeLoginModal();
        updateUIForUser();
        showToast(`Xush kelibsiz, ${user.name}!`, 'success');
    } else {
        showToast('Email yoki parol xato!', 'error');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    const userMenu = document.getElementById('userMenu');
    if(userMenu) userMenu.classList.remove('active');
    
    const guestMenu = document.getElementById('guestMenu');
    const userMenuContent = document.getElementById('userMenuContent');
    if(guestMenu) guestMenu.style.display = 'block';
    if(userMenuContent) userMenuContent.style.display = 'none';
    
    showToast('Chiqish amalga oshirildi', 'warning');
}

function updateUIForUser() {
    const guestMenu = document.getElementById('guestMenu');
    const userMenuContent = document.getElementById('userMenuContent');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if(guestMenu) guestMenu.style.display = 'none';
    if(userMenuContent) userMenuContent.style.display = 'block';
    if(userNameDisplay && currentUser) userNameDisplay.textContent = currentUser.name;
}

function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if(userMenu) userMenu.classList.toggle('active');
}

function switchAuth(type) {
    if (type === 'register') {
        closeLoginModal();
        showRegisterModal();
    } else {
        closeRegisterModal();
        showLoginModal();
    }
}

// ===== MAHSULOTLARNI CHIQARISH =====
function renderProducts(items) {
    if(!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (items.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <h3 style="font-size: 1.5rem; color: var(--gray);">Mahsulot topilmadi</h3>
                <p style="color: var(--gray-light);">Boshqa kategoriyalarni ko'rib chiqing</p>
            </div>
        `;
        return;
    }
    
    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
        const isInWishlist = wishlist.some(item => item.id === product.id);
        
        let catIcon = '';
        let catName = '';
        switch(product.category) {
            case 'kiyim': catIcon = '👕'; catName = 'Kiyimlar'; break;
            case 'ovqat': catIcon = '🍎'; catName = 'Oziq-ovqat'; break;
            case 'texnika': catIcon = '💻'; catName = 'Texnika'; break;
            case 'uy': catIcon = '🏠'; catName = 'Uy-ro\'zg\'or'; break;
            case 'sport': catIcon = '⚽'; catName = 'Sport'; break;
            case 'bolalar': catIcon = '🧸'; catName = 'Bolalar'; break;
        }
        
        card.innerHTML = `
            <div class="product-image">
                ${badgeHTML}
                <div class="product-actions">
                    <button class="action-btn" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn wishlist ${isInWishlist ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${catIcon} ${catName}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${getRatingStars(product.rating)}
                    <span style="color: var(--gray); font-size: 0.85rem;">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
}

// ===== YULDUZCHALAR =====
function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star" style="color: #f59e0b;"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt" style="color: #f59e0b;"></i>';
        } else {
            stars += '<i class="far fa-star" style="color: #f59e0b;"></i>';
        }
    }
    return `<div style="display: flex; gap: 2px; margin-bottom: 0.5rem;">${stars}</div>`;
}

// ===== FILTRLASH =====
function setupFilters() {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-filter');
            
            if (category === 'all') {
                displayedProducts = [...products];
            } else {
                displayedProducts = products.filter(p => p.category === category);
            }
            
            renderProducts(displayedProducts);
            showToast('Filter o\'zgartirildi', 'success');
        });
    });
}

window.filterProducts = function(category) {
    const tab = document.querySelector(`[data-filter="${category}"]`);
    if (tab) {
        tab.click();
    }
    const productsSection = document.getElementById('products');
    if(productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
};

// ===== QIDIRUV =====
window.searchProducts = function() {
    const searchInput = document.getElementById('searchInput');
    if(!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        displayedProducts = [...products];
    } else {
        displayedProducts = products.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }
    
    renderProducts(displayedProducts);
    
    if (displayedProducts.length === 0) {
        showToast('Mahsulot topilmadi', 'warning');
    } else {
        showToast(`${displayedProducts.length} ta mahsulot topildi`, 'success');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});

// ===== SARALASH =====
window.sortProducts = function() {
    const sortSelect = document.getElementById('sortSelect');
    if(!sortSelect) return;
    
    const sortValue = sortSelect.value;
    
    switch(sortValue) {
        case 'price-asc':
            displayedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            displayedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            displayedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            displayedProducts = [...products];
    }
    
    renderProducts(displayedProducts);
};

// ===== SAVAT FUNKSIYALARI =====
window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCart();
    saveCart();
    showToast(`${product.name} savatga qo'shildi!`, 'success');
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    saveCart();
    showToast('Mahsulot savatdan o\'chirildi', 'warning');
};

window.updateQty = function(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
            saveCart();
        }
    }
};

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    if(cartCount) cartCount.textContent = totalItems;
    if(cartTotal) cartTotal.textContent = `$${totalPrice}`;
    
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Savat hozircha bo'sh</p>
                <button onclick="toggleCart()" class="btn btn-primary">Xarid qilish</button>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                    <span class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> O'chirish
                    </span>
                </div>
            </div>
        `).join('');
    }
}

function saveCart() {
    localStorage.setItem('savdoMarkazCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('savdoMarkazCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCart();
    }
}

window.toggleCart = function() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if(sidebar) sidebar.classList.toggle('active');
    if(overlay) overlay.classList.toggle('active');
    
    if(sidebar && sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

// ===== SEVIMLILAR (WISHLIST) =====
window.toggleWishlist = function() {
    const sidebar = document.getElementById('wishlist-sidebar');
    const overlay = document.getElementById('wishlist-overlay');
    if(sidebar) sidebar.classList.toggle('active');
    if(overlay) overlay.classList.toggle('active');
    
    if(sidebar && sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

window.toggleWishlistItem = function(id) {
    const product = products.find(p => p.id === id);
    const index = wishlist.findIndex(item => item.id === id);
    
    if (index === -1) {
        wishlist.push(product);
        showToast(`${product.name} sevimlilarga qo'shildi!`, 'success');
    } else {
        wishlist.splice(index, 1);
        showToast('Sevimlilardan o\'chirildi', 'warning');
    }
    
    saveWishlist();
    updateWishlist();
    renderProducts(displayedProducts);
};

function updateWishlist() {
    if(wishlistCount) wishlistCount.textContent = wishlist.length;
    
    if (!wishlistItems) return;

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-wishlist">
                <i class="fas fa-heart-broken"></i>
                <p>Hozircha sevimlilar yo'q</p>
            </div>
        `;
    } else {
        wishlistItems.innerHTML = wishlist.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem; margin-top: 0.5rem;" onclick="addToCart(${item.id}); toggleWishlistItem(${item.id});">
                        Savatga qo'shish
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function saveWishlist() {
    localStorage.setItem('savdoMarkazWishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
    const saved = localStorage.getItem('savdoMarkazWishlist');
    if (saved) {
        wishlist = JSON.parse(saved);
        updateWishlist();
    }
}

// ===== MAHSULOT MODAL =====
window.viewProduct = function(id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if(!modal || !modalBody) return;
    
    let catIcon = '';
    switch(product.category) {
        case 'kiyim': catIcon = '👕'; break;
        case 'ovqat': catIcon = '🍎'; break;
        case 'texnika': catIcon = '💻'; break;
        case 'uy': catIcon = '🏠'; break;
        case 'sport': catIcon = '⚽'; break;
        case 'bolalar': catIcon = '🧸'; break;
    }
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 15px;">
            </div>
            <div>
                <span style="color: var(--primary); font-weight: 600; text-transform: uppercase;">${catIcon} ${product.category}</span>
                <h2 style="font-size: 2rem; margin: 1rem 0;">${product.name}</h2>
                ${getRatingStars(product.rating)}
                <p style="color: var(--gray); margin: 1rem 0;">${product.reviews} ta mijoz fikri</p>
                <p style="color: var(--gray); line-height: 1.8; margin: 1.5rem 0;">
                    Yuqori sifatli mahsulot. Kafolat va qaytarish kafolati bilan. 
                    Tezkor yetkazib berish xizmati mavjud.
                </p>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--secondary); margin: 1.5rem 0;">$${product.price}</div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();" style="flex: 1;">
                        <i class="fas fa-shopping-cart"></i> Savatga qo'shish
                    </button>
                    <button class="btn btn-secondary" onclick="toggleWishlistItem(${product.id}); closeProductModal();" style="flex: 1;">
                        <i class="fas fa-heart"></i> Sevimlilar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
};

window.closeProductModal = function() {
    const modal = document.getElementById('productModal');
    if(modal) modal.classList.remove('active');
};

// ===== LOGIN/REGISTER MODALS =====
window.showLoginModal = function() {
    const modal = document.getElementById('loginModal');
    const userMenu = document.getElementById('userMenu');
    if(modal) modal.classList.add('active');
    if(userMenu) userMenu.classList.remove('active');
};

window.closeLoginModal = function() {
    const modal = document.getElementById('loginModal');
    if(modal) modal.classList.remove('active');
};

window.showRegisterModal = function() {
    const modal = document.getElementById('registerModal');
    if(modal) modal.classList.add('active');
};

window.closeRegisterModal = function() {
    const modal = document.getElementById('registerModal');
    if(modal) modal.classList.remove('active');
};

window.showOrders = function() {
    showToast('Buyurtmalar tarixi tez orada qo\'shiladi!', 'warning');
};

window.showProfile = function() {
    showToast('Profil tez orada qo\'shiladi!', 'warning');
};

// ===== BUYURTMA BERISH (TELEGRAM) =====
window.checkout = async function() {
    if (cart.length === 0) {
        showToast('Savat bo\'sh! Iltimos, avval mahsulot tanlang.', 'error');
        return;
    }
    
    if (!CHAT_ID) {
        showToast('Chat ID topilmadi!', 'error');
        return;
    }
    
    // Agar foydalanuvchi kirmagan bo'lsa, kirishni so'rash
    if (!currentUser) {
        showToast('Iltimos, avval tizimga kiring!', 'warning');
        showLoginModal();
        return;
    }
    
    let message = `🛍 <b>YANGI BUYURTMA - SAVDO MARKAZ</b>\n`;
    message += `👤 <b>Mijoz:</b> ${currentUser.name}\n\n`;
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const sum = item.price * item.qty;
        total += sum;
        
        let catIcon = '';
        switch(item.category) {
            case 'kiyim': catIcon = '👕'; break;
            case 'ovqat': catIcon = '🍎'; break;
            case 'texnika': catIcon = '💻'; break;
            case 'uy': catIcon = '🏠'; break;
            case 'sport': catIcon = '⚽'; break;
            case 'bolalar': catIcon = '🧸'; break;
        }
        
        message += `${index + 1}. ${catIcon} <b>${item.name}</b>\n`;
        message += `   Miqdor: ${item.qty} x $${item.price} = <b>$${sum}</b>\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 <b>JAMI SUMMA: $${total}</b>\n`;
    message += `📅 ${new Date().toLocaleString('uz-UZ')}\n`;
    message += `\n✅ Mijoz tez orada aloqaga chiqadi.`;
    
    try {
        // Token va URL ni to'g'rilash (bo'sh joylarsiz)
        const url = `https://api.telegram.org/bot${BOT_TOKEN.trim()}/sendMessage`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            showToast('✅ Buyurtmangiz muvaffaqiyatli yuborildi!', 'success');
            cart = [];
            updateCart();
            saveCart();
            toggleCart();
        } else {
            showToast('❌ Xatolik: ' + data.description, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('❌ Internetda xatolik yuz berdi.', 'error');
    }
};

// ===== SCROLL EFFECTS =====
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        if(!navbar || !scrollTopBtn) return;

        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            scrollTopBtn.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            scrollTopBtn.classList.remove('active');
        }
        
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if(navLink) navLink.classList.add('active');
            } else {
                if(navLink) navLink.classList.remove('active');
            }
        });
    });
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    if(!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== SCROLL TO TOP =====
window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== CONTACT FORM =====
window.submitContactForm = function(e) {
    e.preventDefault();
    showToast('Xabaringiz yuborildi! Tez orada javob beramiz.', 'success');
    e.target.reset();
};

// ===== NEWSLETTER =====
window.subscribeNewsletter = function(e) {
    e.preventDefault();
    showToast('Obuna muvaffaqiyatli amalga oshirildi!', 'success');
    e.target.reset();
};

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
    if(!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    switch(type) {
        case 'success': icon = '✓'; break;
        case 'error': icon = '✕'; break;
        case 'warning': icon = '⚠'; break;
    }
    
    toast.innerHTML = `
        <span style="font-size: 1.5rem;">${icon}</span>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== YUKLASH (Load More) =====
window.loadMoreProducts = function() {
    showToast('Yana mahsulotlar tez orada qo\'shiladi!', 'warning');
};

// ===== CLICK OUTSIDE =====
document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('userMenu');
    const userBtn = document.querySelector('.user-btn');
    
    if (userMenu && !userMenu.contains(e.target) && !userBtn?.contains(e.target)) {
        userMenu.classList.remove('active');
    }
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.querySelectorAll('.cart-sidebar.active, .wishlist-sidebar.active').forEach(sidebar => {
            sidebar.classList.remove('active');
        });
        document.querySelectorAll('.cart-overlay.active, .wishlist-overlay.active').forEach(overlay => {
            overlay.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

console.log('🛍 Savdo Markaz sayti ishga tushdi!');