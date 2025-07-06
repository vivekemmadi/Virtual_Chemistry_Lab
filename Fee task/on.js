document.addEventListener('DOMContentLoaded', () => {
  const feeTable = document.querySelector('#feeTable tbody');
  const totalAmountEl = document.getElementById('totalAmount');

  function updateTotalAmount() {
    const rows = feeTable.querySelectorAll('tr');
    let totalAmount = 0;

    rows.forEach(row => {
      const amount = parseFloat(row.cells[1].textContent.trim().replace('₹', ''));
      totalAmount += isNaN(amount) ? 0 : amount;
    });

    totalAmountEl.textContent = `Total Amount: ₹${totalAmount}`;
  }

  document.querySelector('.add-row-btn').addEventListener('click', () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td contenteditable="true">Fee Type</td>
      <td contenteditable="true">Amount</td>
      <td><button class="remove-row-btn">Remove</button></td>
    `;
    feeTable.appendChild(newRow);
    updateTotalAmount();
  });

  feeTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-row-btn')) {
      event.target.closest('tr').remove();
      updateTotalAmount();
    }
  });

  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', submitFeeDetails);

  function submitFeeDetails() {
    const rows = feeTable.querySelectorAll('tr');

    if (rows.length === 0) {
      alert('No fee details to submit.');
      return;
    }

    const feeTypes = [];
    const amounts = [];

    rows.forEach(row => {
      const feeType = row.cells[0].textContent.trim();
      const amount = row.cells[1].textContent.trim().replace('₹', '');

      feeTypes.push(feeType);
      amounts.push(amount);
    });

    const feeDetailsObject = {
      feeTypes: feeTypes,
      amounts: amounts
    };

    console.log('Fee Details Object:', feeDetailsObject);

    // Send fee details to the backend
    fetch('https://your-backend-endpoint.com/submit-fee-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feeDetailsObject)
    })
      .then(response => {
        if (response.ok) {
          alert('Fee details submitted successfully!');
          feeTable.innerHTML = ''; // Clear the table after submission
          totalAmountEl.textContent = 'Total Amount: ₹0';
        } else {
          alert('Failed to submit fee details.');
        }
      })
      .catch(error => {
        console.error('Error submitting fee details:', error);
        alert('An error occurred while submitting fee details.');
      });
  }
});