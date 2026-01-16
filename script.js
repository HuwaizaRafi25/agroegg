// Dummy Add to Cart Function
function addToCart(productName) {
    alert(`Terima kasih! Produk "${productName}" telah ditambahkan ke keranjang.\n\n(Ini adalah fitur simulasi untuk Business Plan)`);
}

// Navbar Scroll Effect (Opsional, biar makin elegan)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});

// Smooth Scroll untuk Anchor Links (Penting untuk UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});