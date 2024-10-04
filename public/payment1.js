document.getElementById('submit').addEventListener('click', function() {
    // Hide the form
    document.getElementById('payment-form').style.display = 'none';
    
    // Show the GIF
    document.getElementById('gif-container').style.display = 'block';
    alert("Table Booked Successfully");
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
});
