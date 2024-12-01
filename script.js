// script.js
document.querySelectorAll('.order-summary ul li button').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const price = parseInt(item.querySelector('span').textContent.replace(/[^\d]/g, ''), 10);
        const totalElement = document.querySelector('.order-summary p:last-of-type span');

        let total = parseInt(totalElement.textContent.replace(/[^\d]/g, ''), 10);
        total -= price;

        totalElement.textContent = `Rp. ${total.toLocaleString('id-ID')}`;
        item.remove();
    });
});

// Add event listener to proof of payment upload field
document.getElementById('proof-of-payment').addEventListener('change', () => {
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod && document.getElementById('proof-of-payment').files.length > 0) {
      document.getElementById('pay-now').disabled = false;
    } else {
      document.getElementById('pay-now').disabled = true;
    }
  });
  
  // Add event listener to payment method radio buttons
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const paymentMethod = document.querySelector('input[name="payment"]:checked');
      if (paymentMethod && document.getElementById('proof-of-payment').files.length > 0) {
        document.getElementById('pay-now').disabled = false;
      } else {
        document.getElementById('pay-now').disabled = true;
      }
    });
  });
  
  // Update pay-now button event listener
  document.getElementById('pay-now').addEventListener('click', () => {
    if (document.getElementById('proof-of-payment').files.length > 0) {
      alert('Pembayaran berhasil diproses!');
    } else {
      alert('Please upload proof of payment first!');
    }
  });