// Set up the React environment:

// Create a new React project by running npx create-react-app product-display.
// Change to the project directory: cd product-display.
// Start the development server: npm start.
// Create a new component called ProductList:

// In the src folder, create a new file called ProductList.js.

// Add the following code to ProductList.js:



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products.');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;




// Update the App component:

// Open src/App.js.

// Replace the existing code with the following:



import React from 'react';
import ProductList from './ProductList';

const App = () => {
  return (
    <div className="app">
      <h1>Product Display</h1>
      <ProductList />
    </div>
  );
};

export default App;



// Create a CSS file for styling:

// In the src folder, create a new file called App.css.

// Add the following CSS code to App.css:



.app {
    text-align: center;
    padding: 20px;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .product-card img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  



// Update the index.js file:

// Open src/index.js.

// Replace the existing code with the following:

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// Run the application:

// Save all the changes.
// In the terminal, run npm start if it's not already running.
// Open your browser and navigate to http://localhost:3000.
// You should see the Product Display website with the products fetched from the API.
// The above code sets up a ProductList component that fetches product data from the API and displays the products in a user-friendly UI. The products are displayed in a responsive layout with three products in a single row. If there is an error while fetching the products, it displays an error message.