// ...Existing JavaScript code...

const productListElement = document.getElementById('product-list');
const cartModal = document.getElementById('cart-modal');
const cartListElement = document.getElementById('cart-list');
const closeBtn = document.querySelector('.close');

let cartItems = [];

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

        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('add-to-cart-btn');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.addEventListener('click', () => addToCart(product));

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartBtn);

        productListElement.appendChild(productCard);
    });
}

function addToCart(product) {
    const existingCartItem = cartItems.find(item => item.id === product.id);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        };
        cartItems.push(cartItem);
    }

    showCartModal();
    displayCartItems();
}

function showCartModal() {
    cartModal.style.display = 'block';
}

function closeCartModal() {
    cartModal.style.display = 'none';
}

function displayCartItems() {
    cartListElement.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const productImage = document.createElement('img');
        productImage.src = item.image;

        const productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.textContent = item.title;

        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${item.price}`;

        const productQuantity = document.createElement('p');
        productQuantity.classList.add('product-quantity');
        productQuantity.textContent = `Quantity: ${item.quantity}`;

        cartItem.appendChild(productImage);
        cartItem.appendChild(productTitle);
        cartItem.appendChild(productPrice);
        cartItem.appendChild(productQuantity);

        cartListElement.appendChild(cartItem);
    });
}

closeBtn.addEventListener('click', closeCartModal);
