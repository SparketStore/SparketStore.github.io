let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sun-prices");
const products = document.querySelectorAll('.product-under');


const updateShoppingCartHTML = function () {
    if (productsInCart.length > 0) {
        let result = productsIntCart.map(product => {
            return `
            <li class="buyItem">
            <img src="${product.image}">
            <div>
                <h5>${product.name}</h5>
                <h6>${product.price}</h6>
                <div>
                    <button class="button-minus" data-id='${product.id}'>-</button>
                    <span class="countOfProduct">${product.count}</span>
                    <button class="button-plus" data-id='${product.id}'>+</button>
                </div>
            </div>
        </li>`
        });
        parentElement.innerHTML = result.join('');
    }
    else {
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty>Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = "";
    }
}

function updateProductsInCart(product) {
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}


products.forEach(product => {
    product.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('.productValue').innerHTML;
            const productImage = product.querySelector('img').src;
            let productToCart = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: parseFloat(productPrice),
                basePrice: parseFloat(productPrice)
            }
            updateProductsInCart(productToCart);
            updateShoppingCartHTML();
        }
    });
});
