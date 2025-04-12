function showForm(id) {
  const forms = [
    "registerForm",
    "editForm",
    "deleteForm",
    "transactionForm",
    "loanForm",
  ];
  forms.forEach(
    (form) => (document.getElementById(form).style.display = "none")
  );
  document.getElementById(id + "Form").style.display = "block";
}

function handleRegister(e) {
  e.preventDefault();

  const formElements = e.target.elements;
  const ssn = formElements[0].value;

  customerDB[ssn] = {
    name: formElements[1].value,
    account: formElements[2].value,
    ifsc: formElements[3].value,
    balance: formElements[4].value,
    aadhaar: formElements[5].value,
    pan: formElements[6].value,
    dob: formElements[7].value,
    gender: formElements[8].value,
    marital: formElements[9].value,
    email: formElements[10].value,
    address: formElements[11].value,
    contact: formElements[12].value,
  };

  document.getElementById("registerMsg").textContent =
    "Customer Registration Successful";
  document.getElementById("registerMsg").className = "message success";
  document.getElementById("registerMsg").style.display = "block";

  e.target.reset(); // Optional: clear form

  return false;
}

function handleEdit(e) {
  e.preventDefault();
  document.getElementById("editMsg").textContent =
    "Customer Updated Successfully";
  document.getElementById("editMsg").className = "message success";
  document.getElementById("editMsg").style.display = "block";
  return false;
}

function handleDelete(e) {
  e.preventDefault();
  document.getElementById("deleteMsg").textContent =
    "Customer Deleted Successfully";
  document.getElementById("deleteMsg").className = "message success";
  document.getElementById("deleteMsg").style.display = "block";
  return false;
}

function handleTransaction(e) {
  e.preventDefault();
  document.getElementById("transactionMsg").textContent =
    "Transaction Submitted Successfully";
  document.getElementById("transactionMsg").className = "message success";
  document.getElementById("transactionMsg").style.display = "block";
  return false;
}

function handleLoan(e) {
  e.preventDefault();
  document.getElementById("loanMsg").textContent =
    "Loan Request Submitted Successfully";
  document.getElementById("loanMsg").className = "message success";
  document.getElementById("loanMsg").style.display = "block";
  return false;
}

// Mock database
const customerDB = {
  123456: {
    name: "Ravi Kumar",
    account: "ACC001",
    ifsc: "IFSC1234",
    balance: 10000,
    aadhaar: "1234-5678-9012",
    pan: "ABCDE1234F",
    dob: "1990-01-01",
    gender: "Male",
    marital: "Single",
    email: "ravi@example.com",
    address: "Delhi, India",
    contact: "9876543210",
  },
  123: {
    name: "vrishank",
    account: "ACC001",
    ifsc: "IFSC1234",
    balance: 10000,
    aadhaar: "1234-5678-9012",
    pan: "ABCDE1234F",
    dob: "1990-01-01",
    gender: "Male",
    marital: "Single",
    email: "ravi@example.com",
    address: "Delhi, India",
    contact: "9876543210",
  },
};

function searchCustomer() {
  const ssn = document.getElementById("editSsn").value;
  const data = customerDB[ssn];

  if (data) {
    document.getElementById("editName").value = data.name;
    document.getElementById("editAccount").value = data.account;
    document.getElementById("editIFSC").value = data.ifsc;
    document.getElementById("editBalance").value = data.balance;
    document.getElementById("editAadhaar").value = data.aadhaar;
    document.getElementById("editPAN").value = data.pan;
    document.getElementById("editDOB").value = data.dob;
    document.getElementById("editGender").value = data.gender;
    document.getElementById("editMarital").value = data.marital;
    document.getElementById("editEmail").value = data.email;
    document.getElementById("editAddress").value = data.address;
    document.getElementById("editContact").value = data.contact;

    document.getElementById("editMsg").textContent =
      "Customer Found. You can now update the details.";
    document.getElementById("editMsg").className = "message success";
    document.getElementById("editMsg").style.display = "block";
  } else {
    document.getElementById("editMsg").textContent =
      "Customer with SSN not found!";
    document.getElementById("editMsg").className = "message error";
    document.getElementById("editMsg").style.display = "block";
  }
}

function handleEdit(e) {
  e.preventDefault();

  const ssn = document.getElementById("editSsn").value;

  if (!customerDB[ssn]) {
    document.getElementById("editMsg").textContent =
      "Please search a valid SSN before updating.";
    document.getElementById("editMsg").className = "message error";
    document.getElementById("editMsg").style.display = "block";
    return false;
  }

  customerDB[ssn] = {
    name: document.getElementById("editName").value,
    account: document.getElementById("editAccount").value,
    ifsc: document.getElementById("editIFSC").value,
    balance: document.getElementById("editBalance").value,
    aadhaar: document.getElementById("editAadhaar").value,
    pan: document.getElementById("editPAN").value,
    dob: document.getElementById("editDOB").value,
    gender: document.getElementById("editGender").value,
    marital: document.getElementById("editMarital").value,
    email: document.getElementById("editEmail").value,
    address: document.getElementById("editAddress").value,
    contact: document.getElementById("editContact").value,
  };

  document.getElementById("editMsg").textContent =
    "Customer Updated Successfully";
  document.getElementById("editMsg").className = "message success";
  document.getElementById("editMsg").style.display = "block";

  return false;
}

function searchCustomerToDelete() {
  const ssn = document.getElementById("deleteSsn").value;
  const data = customerDB[ssn];

  const detailsContainer = document.getElementById("customerDetails");
  const info = document.getElementById("customerInfo");
  const msg = document.getElementById("deleteMsg");

  if (data) {
    info.innerHTML = `
  <strong>Name:</strong> ${data.name}<br>
  <strong>Account:</strong> ${data.account}<br>
  <strong>IFSC:</strong> ${data.ifsc}<br>
  <strong>Balance:</strong> ${data.balance}<br>
  <strong>Aadhaar:</strong> ${data.aadhaar}<br>
  <strong>PAN:</strong> ${data.pan}<br>
  <strong>Email:</strong> ${data.email}<br>
  <strong>Contact:</strong> ${data.contact}
`;
    detailsContainer.style.display = "block";
    msg.style.display = "none";
  } else {
    detailsContainer.style.display = "none";
    msg.textContent = "Customer with SSN not found!";
    msg.className = "message error";
    msg.style.display = "block";
  }
}

function confirmDelete() {
  const ssn = document.getElementById("deleteSsn").value;

  if (customerDB[ssn]) {
    delete customerDB[ssn];

    document.getElementById("customerDetails").style.display = "none";
    document.getElementById("deleteMsg").textContent =
      "Customer Deleted Successfully";
    document.getElementById("deleteMsg").className = "message success";
    document.getElementById("deleteMsg").style.display = "block";
  } else {
    document.getElementById("deleteMsg").textContent =
      "Customer already deleted or not found.";
    document.getElementById("deleteMsg").className = "message error";
    document.getElementById("deleteMsg").style.display = "block";
  }
}
