const customers = {};

    function registerCustomer() {
      const ssn = document.getElementById("ssn").value;
      const name = document.getElementById("name").value;
      const account = document.getElementById("account").value;
      const ifsc = document.getElementById("ifsc").value;
      const balance = parseFloat(document.getElementById("balance").value);
      const aadhaar = document.getElementById("aadhaar").value;
      const pan = document.getElementById("pan").value;
      const dob = document.getElementById("dob").value;
      const gender = document.getElementById("gender").value;
      const marital = document.getElementById("marital").value;

      if (!ssn || !name || !account || isNaN(balance)) {
        return showMsg("registerMsg", "All required fields must be filled!", true);
      }

      customers[account] = { ssn, name, ifsc, balance, aadhaar, pan, dob, gender, marital };
      showMsg("registerMsg", "Customer Registration Successful", false);
    }

    function withdrawMoney() {
      const acc = document.getElementById("withdrawAcc").value;
      const amt = parseFloat(document.getElementById("withdrawAmt").value);

      if (!customers[acc]) return showMsg("withdrawMsg", "Account not found!", true);
      if (amt < 1000) return showMsg("withdrawMsg", "Minimum amount that can be withdrawn is 1000", true);
      if (customers[acc].balance - amt < 500) return showMsg("withdrawMsg", "Minimum balance should be 500", true);

      customers[acc].balance -= amt;
      showMsg("withdrawMsg", `Withdrawal successful. Balance: ₹${customers[acc].balance}`, false);
    }

    function depositMoney() {
      const acc = document.getElementById("depositAcc").value;
      const amt = parseFloat(document.getElementById("depositAmt").value);

      if (!customers[acc]) return showMsg("depositMsg", "Account not found!", true);
      customers[acc].balance += amt;
      showMsg("depositMsg", `Deposit successful. Balance: ₹${customers[acc].balance}`, false);
    }

    function showMsg(id, msg, isError) {
      const el = document.getElementById(id);
      el.textContent = msg;
      el.className = isError ? "message error" : "message success";
    }