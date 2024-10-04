document.addEventListener("DOMContentLoaded", function() {
    // Fetch the total price from the server and update the display
    fetch('/api/latest-order')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalPriceInput').innerText = data.totalPriceInput;
            document.getElementById('payAmount').innerText = data.totalPriceInput;
        })
        .catch(error => console.error('Error fetching order summary:', error));


    // Mock data: Simulate the current status of the order
    let currentStatus = 1;  // 0 = Order Placed, 1 = Preparing, 2 = Ready for Pickup, 3 = Delivered

    updateProgressBar(currentStatus);

    function updateProgressBar(status) {
        const steps = document.querySelectorAll('.step');

        steps.forEach((step, index) => {
            if (index <= status) {
                step.classList.add('completed');
            }
        });

        // Simulate time for each status
        const estimatedTime = document.getElementById('estimated-time');
        if (status === 0) {
            estimatedTime.textContent = "Estimated Time: 20-30 minutes";
        } else if (status === 1) {
            estimatedTime.textContent = "Estimated Time: 15-20 minutes";
        } else if (status === 2) {
            estimatedTime.textContent = "Ready for Pickup: 5 minutes";
        } else if (status === 3) {
            estimatedTime.textContent = "Order Delivered";
        }
    }

    // Example action when buttons are clicked
    document.getElementById('call-restaurant').addEventListener('click', function() {
        alert('Calling the restaurant...');
    });

    document.getElementById('track-on-map').addEventListener('click', function() {
        alert('Opening map to track delivery...');
    });
});
let listCart = [];

let listCartHTML = document.querySelector('.returnCart .list');
listCartHTML.innerHTML = '';

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
                let newCart = document.createElement('ul');
                newCart.classList.add('item');
                newCart.innerHTML =`<li style="padding: 10px 0; border-bottom: 1px solid #ddd;list-style-type:none;">${product.quantity}x ${product.name}</li>`;
                listCartHTML.appendChild(newCart);
            }
        });
    }

}

checkCart();
addCartToHTML();



document.addEventListener("DOMContentLoaded", function () {
    const step1 = document.querySelector('.step:nth-child(1)');
    const step2 = document.querySelector('.step:nth-child(2)');
    const step3 = document.querySelector('.step:nth-child(3)');
    const step4 = document.querySelector('.step:nth-child(4)');
    const lineFill = document.createElement('div');
    lineFill.classList.add('line-fill', 'step-1');
    document.querySelector('.progress-bar').appendChild(lineFill);

    // Simulate completion of each step with delays
    setTimeout(() => {
        step1.classList.add('completed');
        lineFill.classList.replace('step-1', 'step-2'); // Progress to Step 2
    }, 3000);

    setTimeout(() => {
        step2.classList.add('completed');
        lineFill.classList.replace('step-2', 'step-3'); // Progress to Step 3
    }, 8000);

    setTimeout(() => {
        step3.classList.add('completed');
        lineFill.classList.replace('step-3', 'step-4'); // Progress to Step 4
    }, 12000);

    setTimeout(() => {
        step4.classList.add('completed');
    }, 16000);
});



setTimeout(() => {
    // Show GIF or animate final delivery state
    const deliveryMessage = document.createElement('p');
    deliveryMessage.textContent = "🎉 Order Delivered Successfully! 🎉";
    deliveryMessage.style.fontSize = "30px";
    deliveryMessage.style.color = "#ff6347";
    deliveryMessage.style.fontWeight = "bold";
    deliveryMessage.style.animation = "fadeIn 2s ease-in-out";
    
    document.querySelector('.tracking-card').appendChild(deliveryMessage);

}, 17000);
