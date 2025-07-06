<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student List</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    #tableContainer {
      overflow-x: auto;
      margin-top: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    th, td {
      padding: 12px 16px;
      text-align: left;
    }
    th {
      background-color: #0d4484;
      color: white;
      font-family: 'Playfair Display', serif;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    .action-buttons button,
    .view-btn, .edit-btn, .performance-btn, .feedback-btn {
      background-color: #0d4484;
      color: white;
      border: 1px solid #0a509f;
      border-radius: 9px;
      font-size: 14px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-right: 5px;
      font-family: 'Playfair Display', serif;
    }
    .action-buttons button:hover,
    .view-btn:hover, .edit-btn:hover, .performance-btn:hover ,.feedback-btn:hover{
      background-color: #0056b3;
    }
    .search-container {
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
      
    }
    .search-container label {
      font-weight: bold;
     
    }
    .search-container input[type="text"] {
       padding:.6rem; 
      border: 1px solid #bbb;
      border-radius: 6px;
      font-size: 16px;
      flex-grow: 1;
      width:90%
     
    }
    @media (max-width: 600px) {
      th, td {
        padding: 10px;
        font-size: 14px;
      }
      .action-buttons button {
        font-size: 12px;
        padding: 6px 10px;
        margin-right: 3px;
      }
      .search-container {
        flex-direction: column;
        align-items: flex-start;
        
      }
      .search-container input[type="text"] {
        
        max-width: none;
      }
    }
    
   #generateCsvBtn {
  background-color: #0d4484;
  color: white;
  border: 1px solid #0a509f;
   top: 10px;
  right: 10px;
  border-radius: 9px;
  font-size: 14px;
  padding: 8px 6px;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
}
#generateCsvBtn:hover {
  background-color: #0056b3;
}


    
  #studentDetailsOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }    




    #studentDetailsView {
      position: fixed;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      z-index: 999;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      max-width: 95%;
      border-radius: 12px;
      display: flex;
       max-height: 90vh;
      overflow-y: auto;
      font-family:'Playfair Display', serif;
      font-size: 20px;
      width: 90vw;

    }


#studentDetailsView h2 {
      color: #0d4484;
      font-family: 'Playfair Display', serif;
      text-align: center;
      margin-bottom: 20px;
    }

    #studentDetailsView table {
      width: 100%;
      border-collapse: collapse;
    }

    #studentDetailsView td {
      padding: 12px;
      border: 1px solid #ddd;
      background: #fdfdfd;
    }

    #studentDetailsView td strong {
      color: #000000;
    }

    #studentDetailsView .close-btn {
      font-size: 22px;
      background: none;
      border: none;
      cursor: pointer;
      float: right;
      margin-bottom: 10px;
    }



  </style>
</head>
<body>
  <h1>Student List</h1>

  <div class="search-container">
    <label for="studentSearch"></label>
    <input type="text" id="studentSearch" placeholder="🔍 Search by ID, Student or Father's Name…">
  </div>

  <div style="text-align: right; margin-bottom: 10px;">
  <button id="generateCsvBtn">Generate CSV</button>
</div>
  
  
  <div id="tableContainer">Select Class and Section...</div>

 <style>
  #studentDetailsView {
    display: flex;
    flex-direction: row;
    width: 90vw;
    max-height: 90vh;
    background: white;
    border-radius: 8px;
    padding: 20px;
    overflow: hidden;
    font-family:'Playfair Display', serif;
     font-size: 20px;
  }
  
  .detail-section {
    flex: 1;
    display: none;
  }
  .detail-section.active {
    display: block;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }



    #studentDetailsView {
    display: flex;
    flex-direction: row;
    width: 90vw;
    max-height: 90vh;
    background: white;
    border-radius: 8px;
    padding: 20px;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
  }
  .tab-menu {
     width: 30%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  .tab-menu button {
    padding: 15px;
    border: 1px solid #0d4484;
    background-color: transparent;
    color: #0d4484;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 10px;
    text-align: left;
    font-family: inherit;
    font-size: inherit;
  }
  .tab-menu button.active {
    background-color: #0d4484;
    color: white;
  }

   .details-container {
    width: 70%;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-right: 10px;
  }
  .detail-section {
    display: none;
    flex-wrap: wrap;
    gap: 20px;
    animation: fadeIn 0.3s ease-in-out;
  }
  .detail-section.active {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

 .detail-item strong {
    display: inline-block;
    min-width: 140px;
    font-weight: 600;
  }

 .detail-item {
    flex: 1 1 calc(50% - 20px);
    padding: 6px 0;
    display: flex;
    align-items: center;
    border: none;
  }
  .detail-item span {
    flex: 1;
    word-break: break-word;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
 .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 40px;
    cursor: pointer;
    color: #999;
  }
  .close-btn:hover {
    color: #333;
  }


</style>

<div id="studentDetailsOverlay">
  <div id="studentDetailsView">
    <button class="close-btn" onclick="closeDetails()">&times;</button>
    <div class="tab-menu">
      <button onclick="showSection('student')" id="tab-student" class="active">Student Details</button>
      <button onclick="showSection('parent')" id="tab-parent">Parent Details</button>
      <button onclick="showSection('fee')" id="tab-fee">Fee Details</button>
    </div>
    <div class="details-container">
      <div id="student" class="detail-section active"></div>
      <div id="parent" class="detail-section"></div>
      <div id="fee" class="detail-section"></div>
    </div>
  </div>
</div>
</div>


<script>
function viewStudentDetails(record) {
  const overlay = document.getElementById("studentDetailsOverlay");
  overlay.style.display = "flex";
  showSection('student');

  const studentDetails = [
    ["Student_ID", record.cr726_studentid],
    ["Student Name", record.cr726_studentname],
    ["Class", record.cr726_class],
    ["Section", record.cr726_section],
    ["Admission no", record.cr726_admissionno],
    ["Aadhar card no", record.crfec_aadharcardno],
    ["DOB", record.cr726_dateofbirth?.split("T")[0] || ""],
    ["Gender", record.crfec_gender],
    ["DOJ", record.cr726_datejoining?.split("T")[0] || ""],
    ["Academic year", record.crfec_academicyear],
    ["Board type", record.crfec_boardtype],
    ["City", record.cr726_city],
    ["Address", record.cr726_address],
    ["Email address", record.cr726_emailaddress],
    ["Mobile no", record.cr726_mobileno],
    ["Secondary contact", record.crfec_secondarycontact]
  ];

  const parentDetails = [
    ["Father Name", record.cr726_sodoname],
    ["Mother name", record.crfec_mothername],
    ["Apaar card", record.crfec_apaarcard],
    ["Pen no", record.crfec_penno]
  ];

  const feeDetails = [
    ["Tuition fee", record.cr726_tuitionfee],
    ["Tuition fee_term2", record.crfec_tutionfeeterm2],
    ["Tuition fee_term3", record.crfec_tutionfeeterm3],
    ["Annual fee", record.crfec_annualfee],
    ["Annual fee discount", record.crfec_annualfeediscount],
    ["Discount", record.crfec_discount],
    ["Discount narration", record.crfec_discountnarration],
    ["Admission fee", record.crfec_admissionfee],
    ["Registration fee", record.crfec_registrationfee],
    ["Bus fee term1", record.crfec_busfeeterm1],
    ["Busfee term2", record.crfec_busfeeterm2],
    ["Busfee term3", record.crfec_busfeeterm3],
    ["Bus stop", record.crfec_busstop],
    ["Bus no", record.cr726_busno],
    ["Food fee", record.crfec_foodfee],
    ["Miscellaneous fee", record.cr726_miscellaneousfee],
    ["Caution deposit", record.crfec_cautiondeposit]
  ];

  document.getElementById("student").innerHTML = buildDetails(studentDetails);
  document.getElementById("parent").innerHTML = buildDetails(parentDetails);
  document.getElementById("fee").innerHTML = buildDetails(feeDetails);
}

function closeDetails() {
  document.getElementById("studentDetailsOverlay").style.display = "none";
}

function buildDetails(items) {
  return items.map(([label, value]) => `<div class='detail-item'><strong>${label}:</strong> <span>${value || "-"}</span></div>`).join('');
}


function showSection(sectionId) {
  ['student', 'parent', 'fee'].forEach(id => {
    document.getElementById(id).classList.remove('active');
    document.getElementById('tab-' + id).classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
  document.getElementById('tab-' + sectionId).classList.add('active');
}
</script>

<script>

  let allRecords = [];

    window.addEventListener("message", (event) => {
      if (event.data && event.data.action === "updateTable" && event.data.records) {
        allRecords = event.data.records;
        renderTable(allRecords);
      }
    });

    document.getElementById('studentSearch').addEventListener('keyup', function () {
      const searchTerm = this.value.toLowerCase();
      const filteredRecords = allRecords.filter(record =>
        record.cr726_studentid.toLowerCase().includes(searchTerm) ||
        record.cr726_studentname.toLowerCase().includes(searchTerm)
      );
      renderTable(filteredRecords);
    });

    function renderTable(recordsToRender) {
      const container = document.getElementById("tableContainer");
      container.innerHTML = "";

      if (recordsToRender.length === 0) {
        container.innerHTML = "<p>No students found matching your criteria.</p>";
        return;
      }

      const table = document.createElement("table");
      const headerRow = document.createElement("tr");
      headerRow.innerHTML = "<th>Student ID</th><th>Student Name</th><th>Class</th><th>Section</th><th>View</th><th>Edit</th><th>Performance</th><th>Feedback</th>";
      table.appendChild(headerRow);

      const uniqueStudents = new Map();
      recordsToRender.forEach(record => { 
        if (!uniqueStudents.has(record.cr726_studentid)) {
          uniqueStudents.set(record.cr726_studentid, record);
        }
      });

      const filteredRecords = Array.from(uniqueStudents.values());

      filteredRecords.forEach(record => {
        const row = document.createElement("tr");
        row.title = "Student ID: " + record.cr726_studentid;

        row.innerHTML =
          "<td>" + record.cr726_studentid + "</td>" +
          "<td>" + record.cr726_studentname + "</td>" +
          "<td>" + record.cr726_class + "</td>" +
          "<td>" + record.cr726_section + "</td>";

        const viewTd = document.createElement("td");
        const viewBtn = document.createElement("button");
        viewBtn.innerText = "View";
        viewBtn.classList.add("view-btn");
        viewBtn.addEventListener("click", () => {
          console.log("View button clicked for student ID:", record.cr726_studentid);
          window.parent.postMessage({ action: "viewStudent", studentId: record.cr726_studentid }, "*");
          console.log(record);
          viewStudentDetails(record);
        });
        viewTd.appendChild(viewBtn);
        row.appendChild(viewTd);

        const editTd = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => {

            window.parent.postMessage({
                action: "navigate",
                student: record
            }, "*");
          
        });
        editTd.appendChild(editBtn);
        row.appendChild(editTd);

        const performanceTd = document.createElement("td");
        const performanceBtn = document.createElement("button");
        performanceBtn.innerText = "Performance";
        performanceBtn.classList.add("performance-btn");
        performanceBtn.addEventListener("click", () => {
          window.parent.postMessage({ action: "updatePerformance", student: record }, "*");
        });
        performanceTd.appendChild(performanceBtn);
        row.appendChild(performanceTd);


     const feedback = document.createElement("td");
     const feedbackBtn = document.createElement("button");
        feedbackBtn.innerText = "Send Feedback";
       feedbackBtn.classList.add("feedback-btn");
        feedbackBtn.addEventListener("click", () => {
          // Send the selected student data back to the Wix page.
          window.parent.postMessage({ action: "updateStudent", student: record }, "*");
        });
        const actionTd = document.createElement("td");
        actionTd.appendChild(feedbackBtn);
        row.appendChild(actionTd);





        table.appendChild(row);
      });

      container.appendChild(table);
    }

  

    
  
  
  
document.getElementById("generateCsvBtn").addEventListener("click", function () {
  if (allRecords.length === 0) {
    alert("No student data available to export.");
    return;
  }

  const headers = [
    "Student ID", "Student Name", "Class", "Section", "Mobile No", "Tuition Fee", "Annual Fee",
    "Tuition Fee Term 2", "Bus Fee Term 2", "Bus Fee Term 3", "Miscellaneous Fee",
    "Admission Fee", "Registration Fee", "Aadhar Card No", "Admission No", "APAAR Card",
    "Bus No", "City", "Food Fee", "Address", "Caution Deposit", "Mother Name",
    "Gender", "Date of Joining", "Discount Narration", "Annual Fee Discount", "Father Name",
    "Date of Birth", "Email", "PEN No", "Bus Stop", "Bus Fee Term 1", "Tuition Fee Term 3",
    "Discount", "Academic Year", "Board Type", "Secondary Contact"
  ];

  const rows = allRecords.map(record => [
    record.cr726_studentid || "",
    record.cr726_studentname || "",
    record.cr726_class || "",
    record.cr726_section || "",
    record.cr726_mobileno || "",
    record.cr726_tuitionfee || "",
    record.crfec_annualfee || "",
    record.crfec_tuitionfeeterm2 || "",
    record.crfec_busfeeterm2 || "",
    record.crfec_busfeeterm3 || "",
    record.crfec_miscellaneousfee || "",
    record.crfec_admissionfee || "",
    record.crfec_registrationfee || "",
    record.crfec_aadharcardno || "",
    record.crfec_admissionno || "",
    record.crfec_apaarcard || "",
    record.crfec_busno || "",
    record.crfec_city || "",
    record.crfec_foodfee || "",
    record.crfec_address || "",
    record.crfec_cautiondeposit || "",
    record.crfec_mothername || "",
    record.crfec_gender || "",
    record.crfec_doj || "",
    record.crfec_discountnarration || "",
    record.crfec_annualfeediscount || "",
    record.crfec_fathername || "",
    record.crfec_dob || "",
    record.crfec_email || "",
    record.crfec_penno || "",
    record.crfec_busstop || "",
    record.crfec_busfeeterm1 || "",
    record.crfec_tuitionfeeterm3 || "",
    record.crfec_discount || "",
    record.crfec_academicyear || "",
    record.crfec_boardtype || "",
    record.crfec_secondarycontact || ""
  ]);

  let csvContent = headers.join(",") + "\n"
      + rows.map(e => e.map(value => `"${value}"`).join(",")).join("\n");

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "student_list.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});



</script>
</body>
</html>
