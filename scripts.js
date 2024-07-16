document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productImage = document.getElementById('productImage').value;

    if (productName && productPrice > 0 && isValidURL(productImage)) {
        addProduct(productName, productPrice, productImage);
        document.getElementById('productForm').reset();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});

function addProduct(name, price, imageUrl) {
    let productContainer = document.getElementById('productContainer');
    let productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <p>${name}</p>
        <p>$${price}</p>
        <button class="deleteBtn">Eliminar</button>
    `;

    productCard.querySelector('.deleteBtn').addEventListener('click', function() {
        productContainer.removeChild(productCard);
    });

    productContainer.appendChild(productCard);
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;  
    }
}
