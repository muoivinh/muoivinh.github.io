// script.js

let page = 0;
let loading = false;

const productContainer = document.getElementById('product-container');
const loadingElement = document.getElementById('loading');

// Function to simulate fetching data (images)
const fetchProducts = () => {
    if (loading) return;
    loading = true;
    loadingElement.style.display = 'block';

    // Simulate an API call to get images/products
    setTimeout(() => {
        const products = [];
        for (let i = 0; i < 5; i++) {
            products.push(`https://github.com/muoivinh/mv/blob/main/${page * 5 + i + 1}.jpg?raw=true`);
        }

        // Append new products to the container
        products.forEach(url => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `<img src="${url}" alt="Product">`;
            productContainer.appendChild(productElement);
        });

        page++;
        loading = false;
        loadingElement.style.display = 'none';
    }, 1000);  // Simulate a 1 second delay for fetching data
};

// Check if the user has scrolled to the bottom of the page
const checkScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200) {
        fetchProducts();
    }
};

// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// Initial fetch of products when the page loads
fetchProducts();
