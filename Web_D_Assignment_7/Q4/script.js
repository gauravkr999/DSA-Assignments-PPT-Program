const productListElement = document.getElementById('product-list');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => displayProductList(data))
    .catch(error => displayErrorMessage());

function displayProductList(products) {
    productListElement.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.classList.add('product-image');
        productImage.src = product.image;

        const productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.textContent = product.title;

        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);

        productListElement.appendChild(productCard);
    });
}

function displayErrorMessage() {
    productListElement.innerHTML = '<p class="error-message">Failed to fetch product data.</p>';
}
