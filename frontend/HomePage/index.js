document.getElementById('checkout-button').addEventListener('click', () => {
    // Redirect to the sign-in page
    window.location.href = '../SignUpPage/signup.html';
});



document.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:3000/GetProducts/products')
        .then(response => {
            const productList = document.getElementById('product-list');
            let categories = {}; // Object to store products by category
            response.data.forEach(product => {
                // Create a new array for each category if it doesn't exist
                if (!categories[product.category]) {
                    categories[product.category] = [];
                }
                // Push the product to the corresponding category array
                categories[product.category].push(product);
            });
            // Iterate over categories and create sections for each category
            for (const category in categories) {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');
                categoryDiv.innerHTML = `<h2>${category}</h2>`;
                categories[category].forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
             
                        <h3>${product.name}</h3>
                     
                        <p>${product.description}</p>
                        <p>${product.price}</p>
                        
                        <button onclick="addToCart(${product.id}, '${product.image}','${product.name}',  '${product.description}', ${product.price})">Add to Cart</button>

                        
                    `;
                    categoryDiv.appendChild(productDiv);
                });
                productList.appendChild(categoryDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});

function addToCart(productId,productImage,productName,   productDescription,productPrice,) {
    const cartItem = {
        id: productId,
       
        image:productImage,
        name: productName,
        description:productDescription,
        price: productPrice,
        // Include image data in the cart item
    };
    console.log("cartItem" , cartItem.description)
    axios.post('http://localhost:3000/postCart/addToCart', cartItem)
        .then(response => {
            alert('Item added to cart');
            // Redirect to the cart page
            window.location.href = '../CartPage/cart.html';
        })
        .catch(error => {
            console.error('Error adding item to cart:', error);
        });
}
