/*document.getElementById('submit').addEventListener('click', function() {
    // Hide the form
    document.getElementById('payment-form').style.display = 'none';
    
    // Show the GIF
    document.getElementById('gif-container').style.display = 'block';
    alert("payment sucessful");
    // Hide the GIF after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        
        document.getElementById('gif-container').style.display = 'none';
    }, 4000); // 3000 milliseconds = 3 seconds
})
// Existing code for handling payment method changes remains the same
document.getElementById('qr-code').addEventListener('change', function() {
    document.getElementById('qr-code-img').classList.remove('hidden');
    document.getElementById('upi-id-input').classList.add('hidden');
    document.getElementById('card-details').classList.add('hidden');
});

document.getElementById('upi-id').addEventListener('change', function() {
    document.getElementById('upi-id-input').classList.remove('hidden');
    document.getElementById('qr-code-img').classList.add('hidden');
    document.getElementById('card-details').classList.add('hidden');
});

document.getElementById('card').addEventListener('change', function() {
    document.getElementById('card-details').classList.remove('hidden');
    document.getElementById('qr-code-img').classList.add('hidden');
    document.getElementById('upi-id-input').classList.add('hidden');
});

document.getElementById('net-banking').addEventListener('change', function() {
    document.getElementById('card-details').classList.add('hidden');
    document.getElementById('qr-code-img').classList.add('hidden');
    document.getElementById('upi-id-input').classList.add('hidden');
});

document.querySelectorAll('input[name="payment-method"]').forEach(function(paymentOption) {
    paymentOption.addEventListener('change', function() {
        document.getElementById('img_1').classList.add('hidden');
        document.getElementById('img_2').classList.add('hidden');
        document.getElementById('img_3').classList.add('hidden');
    });
});*/
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the total price from the server and update the display
    fetch('/api/latest-order')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalPriceInput').innerText = data.totalPriceInput;
            document.getElementById('payAmount').innerText = data.totalPriceInput;
        })
        .catch(error => console.error('Error fetching order summary:', error));

    // Simulate the current status of the order
    let currentStatus = 2;  // 0 = Order Placed, 1 = Preparing, 2 = Ready for Pickup, 3 = Delivered

    // Function to update the progress bar based on the order status
    function updateProgressBar(status) {
        const steps = document.querySelectorAll('.step');
        steps.forEach((step, index) => {
            if (index <= status) {
                step.classList.add('completed');
            }
        });

        // Simulate the final step being completed (order delivered)
        if (status === 3) {
            setTimeout(() => {
                // Show "Call Restaurant" and "Track on Map" buttons
                document.getElementById('post-animation-actions').classList.remove('hidden');
            }, 1000);  // Show the buttons 1 second after the final step is completed
        }
    }

    // Call the function to update the progress bar based on the current status
    updateProgressBar(currentStatus);

    // Example action when "Call Restaurant" button is clicked
    document.getElementById('call-restaurant').addEventListener('click', function() {
        alert('Calling the restaurant...');
    });

    // Example action when "Track on Map" button is clicked
    document.getElementById('track-on-map').addEventListener('click', function() {
    });

    // Show QR code when corresponding payment option is selected
    document.getElementById('qr-code').addEventListener('change', function() {
        document.getElementById('qr-code-img').classList.toggle('hidden', !this.checked);
    });

    // Show UPI ID input when corresponding payment option is selected
    document.getElementById('upi-id').addEventListener('change', function() {
        document.getElementById('upi-id-input').classList.toggle('hidden', !this.checked);
    });

    // Handle card details display when "Card" option is selected
    document.getElementById('card').addEventListener('change', function() {
        const cardDetails = document.getElementById('card-details');
        if (this.checked) {
            cardDetails.style.display = 'block';
        } else {
            cardDetails.style.display = 'none';
        }
    });

    // Handle the payment button click event
    document.getElementById('submit').addEventListener('click', function() {
        // Trigger the payment logic here (e.g., validate inputs and process payment)
        alert('Processing payment...');

        // Hide the payment form after clicking the Pay button
        document.getElementById('payment-form').style.display = 'none';

        // Display the success animation (GIF)
        document.getElementById('gif-container').style.display = 'block';

        // After showing the success GIF, you can trigger the post-animation actions
        setTimeout(() => {
            updateProgressBar(3);  // Simulate the order status as "Delivered"
        }, 2000);  // 2-second delay before updating the order status to Delivered
    });
});
