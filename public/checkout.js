let listCart = [];

let listCartHTML = document.querySelector('.returnCart .list');
listCartHTML.innerHTML = '';

let totalQuantityHTML = document.querySelector('.totalQuantity');
let totalPriceHTML = document.querySelector('.totalPrice');
let totalQuantity = 0;
let totalPrice = 0;

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

function addCartToHTML() {
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}" style=w>
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">₹${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">₹${(product.price * product.quantity).toFixed(2)}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity += product.quantity;
                totalPrice += (product.price * product.quantity);
                document.getElementById('totalPriceInput').value = totalPrice.toFixed(1);
                document.getElementById('totalQuantityInput').value = totalQuantity;
            }
        });
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '₹' + totalPrice.toFixed(1);
}





checkCart();
addCartToHTML();
