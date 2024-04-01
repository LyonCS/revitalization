const cartElement = document.getElementById('cart');
const cartIcon = document.getElementById('cart-icon');

function toggleCart() {
    cartElement.classList.toggle('show');
}

function addToCart(productName) {
    const cartItemsElement = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = productName;
    cartItemsElement.appendChild(li);
}

function checkout() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartItems = cartItemsElement.children;
    if (cartItems.length > 0) {
        alert('结算成功！感谢您的购买！');
        // 清空购物车
        while (cartItemsElement.firstChild) {
            cartItemsElement.removeChild(cartItemsElement.firstChild);
        }
    } else {
        alert('购物车为空，请先添加商品！');
    }
}


