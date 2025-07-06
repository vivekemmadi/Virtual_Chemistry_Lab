<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fee Management Interface</title>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    :root {
      --primary-color: #28a745;
      --secondary-color: #007BFF;
      --background-color: #ffffff;
      --text-primary: #333333;
      --text-secondary: #666666;
      --border-color: #e0e0e0;
      --shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      --year-bg: #f8f9fa;
      --year-hover: #f1f2f3;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f6f8;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .container {
      max-width: 900px;
      width: 100%;
      background: var(--background-color);
      padding: 40px;
      border-radius: 15px;
      box-shadow: var(--shadow);
      position: relative;
      overflow: hidden;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 15px;
      border-bottom: 2px solid var(--border-color);
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    h2 {
      color: var(--text-primary);
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }



    .submit-section {
      margin-top: 30px;
      text-align: center;
      padding-top: 20px;
      border-top: 2px solid var(--border-color);
    }

    .submit-btn {
      background: linear-gradient(135deg, #4CAF50, #45a049);
      color: white;
      padding: 15px 40px;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(76, 175, 80, 0.3);
    }

    .submit-btn i {
      font-size: 18px;
      transition: transform 0.3s ease;
    }

    .submit-btn:hover i {
      transform: translateX(3px);
    }

    .custom-fee-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 14px;
      background: white;
      transition: border-color 0.3s ease;
    }

    .custom-fee-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .filter-row {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      box-shadow: var(--shadow);
    }

    .add-fee-section {
      text-align: center;
      margin: 30px 0;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 12px;
      box-shadow: var(--shadow);
    }

    .add-btn {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 12px 32px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.2s ease;
      font-size: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .add-btn:hover {
      background: #218838;
      transform: translateY(-1px);
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .add-btn i {
      font-size: 16px;
    }

    .form-group {
      flex: 1;
      min-width: 150px;
      position: relative;
    }

    .fee-type-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
    }

    label {
      font-weight: 600;
      color: var(--text-secondary);
      font-size: 14px;
      margin-bottom: 8px;
      transition: color 0.3s ease;
    }

    .filter-select, .filter-input {
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      border: 2px solid var(--border-color);
      background: white;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .filter-select:focus, .filter-input:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
      outline: none;
    }

    .add-btn {
      background: var(--primary-color);
      color: white;
      padding: 12px 30px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
    }

    .add-btn:hover {
      background: #218838;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
    }

    .add-btn i {
      font-size: 16px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 30px;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    th, td {
      padding: 16px 20px;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }

    th {
      background: #f8f9fa;
      color: var(--text-primary);
      font-weight: 600;
      border-bottom: 2px solid var(--border-color);
    }

    tr:hover {
      background-color: #f8f9fa;
    }

    .total {
      text-align: right;
      font-size: 18px;
      margin-top: 25px;
      font-weight: 600;
      color: var(--text-primary);
      padding-top: 15px;
      border-top: 2px solid var(--border-color);
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      align-items: center;
    }

    .total i {
      color: var(--primary-color);
      font-size: 24px;
    }

    @media (max-width: 1024px) {
      .container {
        padding: 30px;
      }

      .header h2 {
        font-size: 20px;
      }

      .filter-row {
        flex-direction: column;
        gap: 15px;
      }

      .form-group {
        width: 100%;
      }

      .add-btn {
        padding: 10px 20px;
        font-size: 14px;
      }

      table th, table td {
        font-size: 14px;
        padding: 12px 15px;
      }

      .total {
        font-size: 16px;
      }

      .submit-btn, .print-btn {
        padding: 12px 30px;
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 20px;
      }

      .header h2 {
        font-size: 18px;
      }

      .filter-row {
        gap: 10px;
      }

      .add-btn {
        padding: 8px 16px;
        font-size: 12px;
      }

      table th, table td {
        font-size: 12px;
        padding: 10px 12px;
      }

      .total {
        font-size: 14px;
      }

      .submit-btn, .print-btn {
        padding: 10px 20px;
        font-size: 12px;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 15px;
      }

      .header h2 {
        font-size: 16px;
      }

      .filter-row {
        gap: 8px;
      }

      .add-btn {
        padding: 6px 12px;
        font-size: 10px;
      }

      table th, table td {
        font-size: 10px;
        padding: 8px 10px;
      }

      .total {
        font-size: 12px;
      }

      .submit-btn, .print-btn {
        padding: 8px 16px;
        font-size: 10px;
      }
    }

    .print-btn {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      color: #fff;
      padding: 14px 38px;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 12px rgba(231, 76, 60, 0.15);
      margin-top: 10px;
    }

    .print-btn:hover {
      background: linear-gradient(135deg, #c0392b, #e74c3c);
      transform: translateY(-2px) scale(1.04);
      box-shadow: 0 6px 16px rgba(231, 76, 60, 0.22);
    }

    .print-btn i {
      font-size: 20px;
      color: #fff;
      transition: color 0.2s;
    }

    .fee-type-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
    }

    .custom-fee-input-wrapper {
      display: none;
      animation: slideDown 0.3s ease;
      margin-top: 8px;
      width: 100%;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    #customFeeType {
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      border: 2px solid var(--border-color);
      background: white;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    #customFeeType:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
      outline: none;
    }

    .custom-multiselect {
      position: relative;
      cursor: pointer;
      user-select: none;
    }

    .custom-multiselect input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .custom-multiselect .filter-select {
      display: flex;
      align-items: center;
      padding: 12px;
      border: 2px solid var(--border-color);
      border-radius: 8px;
      background: white;
      transition: border-color 0.3s ease, box-shadow 0.3s;
      min-height: 44px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07); /* Subtle shadow */
    }

    .custom-multiselect .filter-select.selected {
      /* Remove green border and shadow, keep default border */
      background: #fff;
      border-color: var(--border-color);
      box-shadow: none;
      color: var(--text-primary); /* Change text color to black */
      font-weight: 600;
    }

    .custom-multiselect .filter-select:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
    }

    .custom-multiselect .options {
      display: none;
      position: absolute;
      z-index: 10;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-height: 220px;
      overflow-y: auto;
      margin-top: 2px;
    }

    .custom-multiselect.open .options {
      display: block;
    }

    .custom-multiselect .option {
      padding: 12px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .custom-multiselect .option:hover {
      background: #f1f1f1;
    }

    .custom-multiselect .placeholder {
      color: var(--text-secondary);
      font-size: 14px;
      margin-bottom: 8px;
    }

    .custom-multiselect .clear-selection {
      display: inline-block;
      margin-left: auto;
      cursor: pointer;
      font-size: 14px;
      color: var(--primary-color);
      transition: color 0.2s;
    }

    .custom-multiselect .clear-selection:hover {
      color: #218838;
    }

    .custom-multiselect .apply-btn {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
      font-weight: 600;
      margin-top: 10px;
      display: block;
      width: 100%;
    }

    .custom-multiselect .apply-btn:hover {
      background: #218838;
    }

    @media (max-width: 768px) {
      .custom-multiselect .filter-select {
        padding: 10px;
        font-size: 14px;
      }

      .custom-multiselect .options {
        max-height: 180px;
      }

      .custom-multiselect .option {
        padding: 10px;
        font-size: 14px;
      }

      .custom-multiselect .apply-btn {
        padding: 12px 24px;
        font-size: 14px;
      }
    }
  </style>
</head>
<body>

<div class="container">
  <div class="header">
    <h2>Fee Management Interface</h2>
  </div>
  <div class="filter-row">
    <div class="form-group">
      <label for="classSelectDropdown">Class</label>
      <div id="classSelectDropdown" class="custom-multiselect" tabindex="0" style="position:relative;">
        <div id="classSelectDisplay" class="filter-select" style="cursor:pointer; min-height:44px; display:flex;align-items:center;">
          <span id="classSelectPlaceholder">Select Classes</span>
        </div>
        <div id="classOptions" style="display:none; position:absolute; z-index:10; background:#fff; border:1px solid #e0e0e0; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08); width:100%; max-height:220px; overflow-y:auto; margin-top:2px;">
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="LKG"> LKG</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="UKG"> UKG</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="1"> 1</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="2"> 2</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="3"> 3</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="4"> 4</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="5"> 5</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="6"> 6</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="7"> 7</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="8"> 8</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="9"> 9</label>
          <label style="display:block; padding:8px 12px;"><input type="checkbox" value="10"> 10</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="academicYear">Academic Year</label>
      <select id="academicYear" class="filter-select">
        <option value="">Select Academic Year</option>
        <option value="2023-24">2023-24</option>
        <option value="2024-25">2024-25</option>               
        <option value="2025-26">2025-26</option>
        <option value="2026-27">2026-27</option>
        <option value="2027-28">2027-28</option>
        <option value="2028-29">2028-29</option>
        <option value="2029-30">2029-30</option>
        <option value="2030-31">2030-31</option>
        <option value="2031-32">2031-32</option>
        <option value="2032-33">2032-33</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="feeType">Fee Type</label>
      <div class="fee-type-container">
        <select id="feeType" class="filter-select" onchange="checkOtherOption()">
          <option value="">Select Fee Type</option>
          <option value="Admission Fee">Admission Fee</option>
          <option value="Annual Fee">Annual Fee</option>
          <option value="Registration Fee">Registration Fee</option>
          <option value="Caution Deposit">Caution Deposit</option>
          <option value="Tution Fee">Tution Fee</option>
          <option value="Transport Fee">Transport Fee</option>
          <option value="Food Fee">Food Fee</option>
          <option value="Uniform Fee">Uniform Fee</option>
          <option value="Exam Fee">Exam Fee</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Others">Others</option>
         
        </select>
        <div id="customFeeTypeContainer" class="custom-fee-input-wrapper">
          <input type="text" 
                 id="customFeeType" 
                 class="filter-input"
                 placeholder="Enter custom fee type...">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" id="amount" class="filter-input" placeholder="Enter amount" min="0">
    </div>
  </div>

  <div class="add-fee-section">
    <button class="add-btn" id="addFeeBtn">
      <i class="fas fa-plus"></i>
      Add Fee
    </button>
  </div>

  <table id="feeTable" class="fee-table">
    <thead>
      <tr>
        <th>Fee Type</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <div class="total" id="totalAmount">Total Amount: ₹0</div>

  <div class="submit-section">
    <button class="submit-btn">
      <i class="fas fa-paper-plane"></i>
      Submit Fee Details
    </button>
  </div>
  <div class="print-section" style="margin-top: 20px; text-align: center;">
    <button class="print-btn" id="printPdfBtn">
      <i class="fas fa-file-pdf"></i>
      Print PDF
    </button>
  </div>
</div>

<script>
  let total = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Get references to elements
  const classSelect = document.getElementById('classSelect');
  const academicYear = document.getElementById('academicYear');
  const feeType = document.getElementById('feeType');
  const amount = document.getElementById('amount');

  // Academic Year Selector
  const yearSelector = document.querySelector('.academic-year-selector');
  const yearOptions = document.querySelector('.year-options');
  const currentYear = document.getElementById('currentYear');

  if (yearSelector && yearOptions && currentYear) {
    yearSelector.addEventListener('click', () => {
      yearOptions.style.display = yearOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!yearSelector.contains(e.target)) {
        yearOptions.style.display = 'none';
      }
    });

    document.querySelectorAll('.year-option').forEach(option => {
      option.addEventListener('click', () => {
        const year = option.getAttribute('data-year');
        currentYear.textContent = year;
        yearOptions.style.display = 'none';
      });
    });
  }

  // Initialize variables
  let customFeeInput = null;
  const addFeeBtn = document.getElementById('addFeeBtn');

  // Disable fee type and amount initially
  feeType.disabled = true;
  amount.disabled = true;

  // Function to check selections and enable/disable fields
  function checkSelections() {
    const classSelected = classSelect.value !== '';
    const yearSelected = academicYear.value !== '';
    const feeTypeSelected = feeType.value !== '';
    
    // Enable/disable fee type based on class and year
    feeType.disabled = !(classSelected && yearSelected);
    
    // Enable amount only when fee type is selected
    amount.disabled = !(classSelected && yearSelected && feeTypeSelected);
    
    // Clear custom fee input if any
    if (!classSelected || !yearSelected || !feeTypeSelected) {
      if (customFeeInput) {
        customFeeInput.value = '';
      }
      amount.value = '';
    }
  }

  // Add event listeners for all changes
  classSelect.addEventListener('change', checkSelections);
  academicYear.addEventListener('change', checkSelections);
  feeType.addEventListener('change', checkSelections);

  if (addFeeBtn) {
    // Add event listener for add fee button
    addFeeBtn.addEventListener('click', addFee);
  }
});

// Move functions outside of event listener block
  function showCustomFeeType() {
    const feeTypeSelect = document.getElementById('feeType');
    const selectedValue = feeTypeSelect.value;
    const container = document.querySelector('.custom-fee-input-container');
    
    if (selectedValue === 'custom') {
      if (!customFeeInput) {
        customFeeInput = document.createElement('input');
        customFeeInput.type = 'text';
        customFeeInput.placeholder = 'Enter custom fee type...';
        customFeeInput.className = 'custom-fee-input';
        container.innerHTML = '';
        container.appendChild(customFeeInput);
      }
      customFeeInput.focus();
    } else if (customFeeInput) {
      container.innerHTML = '';
      customFeeInput = null;
    }
  }

  // Add event listener for fee type selection
  document.getElementById('feeType').addEventListener('change', showCustomFeeType);

function addFee() {
  const feeTypeSelect = document.getElementById('feeType');
  const amount = document.getElementById('amount');
  const customFeeType = document.getElementById('customFeeType');
  let feeTypeName;

  if (feeTypeSelect.value === 'Other') {
    feeTypeName = customFeeType.value.trim();
    if (!feeTypeName) {
      alert('Please enter a custom fee type');
      return;
    }
  } else {
    feeTypeName = feeTypeSelect.value;
    if (!feeTypeName) {
      alert('Please select a fee type');
      return;
    }
  }

  const amountValue = amount.value;
  if (!amountValue) {
    alert('Please enter an amount');
    return;
  }

  const tbody = document.querySelector('#feeTable tbody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${feeTypeName}</td>
    <td>₹${amountValue}</td>
    <td>
      <button class="delete-btn" title="Delete this fee"
        style="
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 50%;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        onmouseover="this.style.background='#ffeaea'; this.querySelector('i').style.color='#e74c3c';"
        onmouseout="this.style.background='transparent'; this.querySelector('i').style.color='#888';"
      >
        <i class="fas fa-trash" style="color:#888; font-size:18px; transition: color 0.2s;"></i>
      </button>
    </td>
  `;
  row.style.transition = 'background-color 0.2s';
  tbody.appendChild(row);

  // Add delete event listener
  const deleteBtn = row.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => deleteFee(deleteBtn));

  // Update total
  total += parseFloat(amountValue);
  document.getElementById('totalAmount').textContent = `Total Amount: ₹${total.toFixed(2)}`;

  // Reset form
  feeTypeSelect.value = '';
  customFeeType.value = '';
  document.getElementById('customFeeTypeContainer').style.display = 'none';
  amount.value = '';
  amount.disabled = true;

  // Reset the "Select Classes" field to its placeholder
  const classOptions = document.querySelectorAll('#classOptions input[type=checkbox]');
  classOptions.forEach(option => option.checked = false);
  document.getElementById('classSelectPlaceholder').textContent = 'Select Classes';
  document.getElementById('classSelectDisplay').classList.remove('selected');
}

// Function to delete a fee entry
function deleteFee(button) {
  const row = button.closest('tr');
  const amountCell = row.cells[1];
  const amountValue = parseFloat(amountCell.textContent.replace('₹', '').trim());
  
  // Update total
  total -= amountValue;
  document.getElementById('totalAmount').textContent = `Total Amount: ₹${total.toFixed(2)}`;
  
  // Remove the row
  row.remove();
}
</script>
<script>
  // Get references to the select elements
  const classSelect = document.getElementById('classSelect');
  const academicYear = document.getElementById('academicYear');

  // Function to populate academic year options
  function populateAcademicYears() {
    // Clear existing options
    academicYear.innerHTML = '<option value="">Select Academic Year</option>';
    
    // Get current year
    const currentYear = new Date().getFullYear();
    
    // Add next 10 academic years
    for (let i = 0; i < 10; i++) {
      const year = currentYear + i;
      const option = document.createElement('option');
      option.value = `${year}-${year + 1}`;
      option.textContent = `${year}-${year + 1}`;
      academicYear.appendChild(option);
    }
  }

  // Populate academic years when the page loads
  populateAcademicYears();

  // Update academic years when the year changes
  setInterval(populateAcademicYears, 24 * 60 * 60 * 1000); // Update once a day

  // Get references to the select elements (continued)
  const feeType = document.getElementById('feeType');
  const amount = document.getElementById('amount');

  // Initially disable Academic Year
  academicYear.disabled = true;

  // Enable Academic Year when a class is selected
  classSelect.addEventListener('change', function () {
    academicYear.disabled = classSelect.value === "";
  });
</script>

<script>
// Custom Fee Type Button/Input Logic
document.addEventListener('DOMContentLoaded', () => {
  // ...existing code...

  const feeTypeSelect = document.getElementById('feeType');
  const addCustomFeeBtn = document.getElementById('addCustomFeeBtn');
  const customFeeInput = document.getElementById('customFeeInput');
  let usingCustomFee = false;

  addCustomFeeBtn.addEventListener('click', () => {
    feeTypeSelect.style.display = 'none';
    addCustomFeeBtn.style.display = 'none';
    customFeeInput.style.display = 'block';
    customFeeInput.value = '';
    customFeeInput.focus();
    usingCustomFee = true;
    // Enable amount field if class and year are selected
    const classSelected = document.getElementById('classSelect').value !== '';
    const yearSelected = document.getElementById('academicYear').value !== '';
    document.getElementById('amount').disabled = !(classSelected && yearSelected);
  });

  // Only allow alphabets and spaces in custom fee input (removed to allow dropdown values)
  // customFeeInput.addEventListener('input', function(e) {
  //   this.value = this.value.replace(/[^A-Za-z ]+/g, '');
  // });

  // When user presses Enter or blurs the input, revert to dropdown
  customFeeInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      customFeeInput.blur();
    }
  });
  customFeeInput.addEventListener('blur', function() {
    if (!customFeeInput.value.trim()) {
      // If nothing entered, revert to dropdown
      feeTypeSelect.style.display = '';
      addCustomFeeBtn.style.display = '';
      customFeeInput.style.display = 'none';
      usingCustomFee = false;
      // Reset amount field enable/disable
      const classSelected = document.getElementById('classSelect').value !== '';
      const yearSelected = document.getElementById('academicYear').value !== '';
      document.getElementById('amount').disabled = !(classSelected && yearSelected && feeTypeSelect.value !== '');
    }
  });

  // Modify addFee to use custom input if active
  const origAddFee = window.addFee;
  window.addFee = function() {
    const feeType = document.getElementById('feeType');
    const amount = document.getElementById('amount');
    const customFeeInput = document.getElementById('customFeeInput');
    let feeTypeName;
    if (usingCustomFee && customFeeInput.value.trim()) {
      feeTypeName = customFeeInput.value.trim();
    } else {
      feeTypeName = feeType.value;
    }
    const amountValue = amount.value;

    if (!feeTypeName || !amountValue) {
      alert('Please select a fee type and enter an amount');
      return;
    }

    const tbody = document.querySelector('#feeTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${feeTypeName}</td>
      <td>₹${amountValue}</td>
      <td>
        <button class="delete-btn" title="Delete this fee"
          style="
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 6px 10px;
            border-radius: 50%;
            transition: background 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
          "
          onmouseover="this.style.background='#ffeaea'; this.querySelector('i').style.color='#e74c3c';"
          onmouseout="this.style.background='transparent'; this.querySelector('i').style.color='#888';"
        >
          <i class="fas fa-trash" style="color:#888; font-size:18px; transition: color 0.2s;"></i>
        </button>
      </td>
    `;
    row.style.transition = 'background-color 0.2s';
    tbody.appendChild(row);

    // Add delete event listener
    const deleteBtn = row.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteFee(deleteBtn));

    // Update total
    total += parseFloat(amountValue);
    document.getElementById('totalAmount').textContent = `Total Amount: ₹${total.toFixed(2)}`;

    // Reset form
    if (usingCustomFee) {
      customFeeInput.value = '';
      feeTypeSelect.style.display = '';
      addCustomFeeBtn.style.display = '';
      customFeeInput.style.display = 'none';
      usingCustomFee = false;
    }
    feeType.value = '';
    amount.value = '';
    // Disable amount until next selection
    amount.disabled = true;
  };

  // Update enable/disable logic for amount field
  function checkSelections() {
    const classSelected = document.getElementById('classSelect').value !== '';
    const yearSelected = document.getElementById('academicYear').value !== '';
    const feeTypeSelected = feeTypeSelect.value !== '';
    if (usingCustomFee) {
      feeTypeSelect.disabled = true;
      addCustomFeeBtn.disabled = true;
      customFeeInput.disabled = !(classSelected && yearSelected);
      document.getElementById('amount').disabled = !(classSelected && yearSelected);
    } else {
      feeTypeSelect.disabled = !(classSelected && yearSelected);
      addCustomFeeBtn.disabled = !(classSelected && yearSelected);
      document.getElementById('amount').disabled = !(classSelected && yearSelected && feeTypeSelected);
    }
    // ...existing code...
  }

  document.getElementById('classSelect').addEventListener('change', checkSelections);
  document.getElementById('academicYear').addEventListener('change', checkSelections);
  feeTypeSelect.addEventListener('change', checkSelections);

  // Initial state
  checkSelections();
});
</script>

<script>
  // Print PDF functionality (download as PDF)
  document.addEventListener('DOMContentLoaded', () => {
    const printBtn = document.getElementById('printPdfBtn');
    if (printBtn) {
      printBtn.addEventListener('click', function () {
        // Check if printJS is loaded
        if (typeof printJS !== 'undefined') {
          printJS({
            printable: 'feeTable',
            type: 'html',
            header: 'Fee Details',
            style: `
              table { width: 100%; border-collapse: collapse; font-size: 16px; }
              th, td { border: 1px solid #ccc; padding: 10px; }
              th { background: #f8f9fa; }
              .total { font-weight: bold; }
            `
          });
        } else {
          // Fallback to browser's print functionality
          const printContent = document.getElementById('feeTable').outerHTML;
          const printWindow = window.open('', '_blank');
          printWindow.document.write(`
            <html>
              <head>
                <title>Fee Details</title>
                <style>
                  table { width: 100%; border-collapse: collapse; font-size: 16px; }
                  th, td { border: 1px solid #ccc; padding: 10px; }
                  th { background: #f8f9fa; }
                  .total { font-weight: bold; }
                </style>
              </head>
              <body>
                ${printContent}
              </body>
            </html>
          `);
          printWindow.document.close();
          printWindow.print();
        }
      });
    }
  });
</script>
<!-- Add this CDN before closing </body> tag if not already present -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/print-js/1.6.0/print.min.js"></script>
<script>
// --- MULTI-SELECT CHECKBOX DROPDOWN LOGIC FOR CLASS ---
document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...

  const classSelectDropdown = document.getElementById('classSelectDropdown');
  const classSelectDisplay = document.getElementById('classSelectDisplay');
  const classOptions = document.getElementById('classOptions');
  const classSelectPlaceholder = document.getElementById('classSelectPlaceholder');
  const academicYear = document.getElementById('academicYear');
  const feeType = document.getElementById('feeType');
  const amount = document.getElementById('amount');
  const addFeeBtn = document.getElementById('addFeeBtn');
  let total = 0;

  // Show/hide dropdown
  classSelectDisplay.addEventListener('click', function (e) {
    // Hide all other dropdowns if any
    document.querySelectorAll('.custom-multiselect .options').forEach(opt => {
      if (opt !== classOptions) opt.style.display = 'none';
    });
    // Toggle current dropdown
    classOptions.style.display = classOptions.style.display === 'block' ? 'none' : 'block';
    e.stopPropagation();
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', function () {
    classOptions.style.display = 'none';
  });

  // Prevent closing when clicking inside the dropdown
  classOptions.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Update display and trigger selection logic
  function updateClassDisplay() {
    const checked = Array.from(classOptions.querySelectorAll('input[type=checkbox]:checked'));
    if (checked.length === 0) {
      classSelectPlaceholder.textContent = 'Select Classes';
      classSelectDisplay.classList.remove('selected');
    } else {
      classSelectPlaceholder.textContent = checked.map(cb => cb.value).join(', ');
      classSelectDisplay.classList.add('selected');
    }
    // Enable/disable academic year based on class selection
    academicYear.disabled = checked.length === 0;
    checkSelections();
  }

  classOptions.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', updateClassDisplay);
  });

  function getSelectedClasses() {
    return Array.from(classOptions.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
  }

  function checkSelections() {
    const classSelected = getSelectedClasses().length > 0;
    const yearSelected = academicYear.value !== '';
    const feeTypeSelected = feeType.value !== '';
    feeType.disabled = !(classSelected && yearSelected);
    amount.disabled = !(classSelected && yearSelected && feeTypeSelected);
  }

  academicYear.addEventListener('change', checkSelections);
  feeType.addEventListener('change', checkSelections);

  // Initial state
  updateClassDisplay();

  // --- ADD FEE FUNCTIONALITY ---
  addFeeBtn.addEventListener('click', function () {
    const selectedClasses = getSelectedClasses();
    const year = academicYear.value;
    const feeTypeValue = feeType.value;
    const amountValue = amount.value;
    const customFeeType = document.getElementById('customFeeType');
    let feeTypeName = feeTypeValue;

    // Handle custom fee type if visible
    if (feeTypeValue === 'Others' && customFeeType && customFeeType.value.trim()) {
      feeTypeName = customFeeType.value.trim();
    }

    // Validation
    if (selectedClasses.length === 0) {
      alert('Please select at least one class.');
      return;
    }
    if (!year) {
      alert('Please select an academic year.');
      return;
    }
    if (!feeTypeName) {
      alert('Please select a fee type.');
      return;
    }
    if (!amountValue || isNaN(amountValue) || Number(amountValue) <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    // Add a row for each selected class
    const tbody = document.querySelector('#feeTable tbody');
    selectedClasses.forEach(cls => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${cls} - ${feeTypeName}</td>
        <td>₹${parseFloat(amountValue).toFixed(2)}</td>
        <td>
          <button class="delete-btn" title="Delete this fee"
            style="
              background: transparent;
              border: none;
              outline: none;
              cursor: pointer;
              padding: 6px 10px;
              border-radius: 50%;
              transition: background 0.2s;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            onmouseover="this.style.background='#ffeaea'; this.querySelector('i').style.color='#e74c3c';"
            onmouseout="this.style.background='transparent'; this.querySelector('i').style.color='#888';"
          >
            <i class="fas fa-trash" style="color:#888; font-size:18px; transition: color 0.2s;"></i>
          </button>
        </td>
      `;
      row.style.transition = 'background-color 0.2s';
      tbody.appendChild(row);

      // Add delete event listener
      const deleteBtn = row.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function () {
        const amt = parseFloat(row.cells[1].textContent.replace('₹', '').trim());
        total -= amt;
        document.getElementById('totalAmount').textContent = `Total Amount: ₹${total.toFixed(2)}`;
        row.remove();
      });

      // Update total
      total += parseFloat(amountValue);
    });

    document.getElementById('totalAmount').textContent = `Total Amount: ₹${total.toFixed(2)}`;

    // Reset form fields (except class selection)
    feeType.value = '';
    if (customFeeType) customFeeType.value = '';
    document.getElementById('customFeeTypeContainer').style.display = 'none';
    amount.value = '';
    amount.disabled = true;
  });
});
</script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('.submit-btn');
  const feeTableBody = document.querySelector('#feeTable tbody');
  const totalDisplay = document.getElementById('totalAmount');
  let submittedFees = []; // Global array to store submitted objects

  submitBtn.addEventListener('click', () => {
    const rows = feeTableBody.querySelectorAll('tr');
    const feeObjects = [];

    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const feeType = cells[0].textContent.trim();
      const amount = parseFloat(cells[1].textContent.replace('₹', '').trim());

      feeObjects.push({ feeType, amount });
    });

    if (feeObjects.length === 0) {
      alert("No fee details to submit.");
      return;
    }

    submittedFees.push(...feeObjects); // Add to master array
    console.log("Submitted Fee Details:", submittedFees); // Optional: View in console

    // Clear the table
    feeTableBody.innerHTML = '';
    
    // Reset total amount
    total = 0;
    totalDisplay.textContent = `Total Amount: ₹0`;

    alert("Fee details submitted successfully.");
  });
});
</script>
</body>
</html>
