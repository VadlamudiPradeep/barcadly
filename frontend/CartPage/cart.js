document.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:3000/getCart/cartItems')
        .then(response => {
            const cartItems = response.data;
            const cartItemsDiv = document.getElementById('cart-items');
            cartItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <h3>${item.name}</h3>
                    <img src="${item.image}" alt="${item.name}" class="product-image">
                    <p>Price: ${item.price}</p>
                    <h2>Description : ${item.description}</h2>
                    <button class="delete-btn" data-id="${item.id}">Delete</button>
                `;
                cartItemsDiv.appendChild(itemDiv);
            });

            // Add event listener for delete buttons
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const itemId = button.dataset.id;
                    deleteCartItem(itemId);
                    // Remove the item from the DOM immediately
                    button.parentNode.remove();
                });
            });
        })
        .catch(error => {
            console.error('Error fetching cart items:', error);
        });
});

function deleteCartItem(itemId) {
    axios.delete(`http://localhost:3000/postCart/delete/${itemId}`)
        .then(response => {
            console.log('Item deleted:', response.data);
        })
        .catch(error => {
            console.error('Error deleting item:', error);
        });
}
