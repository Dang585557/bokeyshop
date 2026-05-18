// Heritage Gold App JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase();
            document.querySelectorAll('.product-card').forEach((card) => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? '' : 'none';
            });
        });
    }
});
