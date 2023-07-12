const productId = getProductIdFromUrl();

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(data => displayProductDetails(data))
    .catch(error => displayErrorMessage());

function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function displayProductDetails(product) {
    const productDetailsElement = document.getElementById('product-details');

    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = product.image;
    productDetailsElement.appendChild(productImage);

    const productTitle = document.createElement('h3');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;
    productDetailsElement.appendChild(productTitle);

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;
    productDetailsElement.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${product.price}`;
    productDetailsElement.appendChild(productPrice);

    const backBtn = document.createElement('button');
    backBtn.classList.add('back-btn');
    backBtn.textContent = 'Back';
    backBtn.addEventListener('click', () => {
        window.history.back();
    });
    productDetailsElement.appendChild(backBtn);
}

function displayErrorMessage() {
    const productDetailsElement = document.getElementById('product-details');
    productDetailsElement.innerHTML = '<p class="error-message">Failed to fetch product data.</p>';
}
