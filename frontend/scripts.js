document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', handleAddProduct);
    }
});

function handleAddProduct(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value; // Retrieve category from dropdown
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    const productData = {
        name,
        category,
        image,
        description,
        price
    };

    axios.post('http://localhost:3000/api/add', productData)
        .then(response => {
            alert('Product added successfully');
            document.getElementById('add-product-form').reset();
        })
        .catch(error => {
            console.error('There was an error adding the product!', error);
        });
}
