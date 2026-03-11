console.log("Connected");

const registrants = [];

function collectData() {
   
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const attendanceOption = document.querySelector('input[name="attendance"]:checked');
    
    
    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const typeErr = document.getElementById("typeErr");

    let isValid = true;

    
    if (fullName.length < 6 || fullName.length > 100) {
        nameErr.innerHTML = "Name must be between 6 and 100 characters.";
        isValid = false;
    } else {
        nameErr.innerHTML = "";
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailErr.innerHTML = "Please enter a valid professional email address.";
        isValid = false;
    } else {
        emailErr.innerHTML = "";
    }

  
    if (!attendanceOption) {
        typeErr.innerHTML = "Please select your attendance type.";
        isValid = false;
    } else {
        typeErr.innerHTML = "";
    }

    if (isValid) {
        const registrationData = {
            name: fullName,
            email: email,
            company: company,
            type: attendanceOption.value
        };

        registrants.push(registrationData);
        console.log("Registration Successful:", registrationData);

        alert("Thank you, " + fullName + "! Registration Complete.");
        
       
        document.getElementById("registrationForm").reset();
        
        updateAnalytics();
    }

    return false; 
}

function updateAnalytics() {
    const total = registrants.length;
    const virtual = registrants.filter(r => r.type === "Virtual").length;
    const inPerson = registrants.filter(r => r.type === "In-Person").length;

    document.getElementById("totalCount").innerHTML = total;
    document.getElementById("virtualCount").innerHTML = virtual;
    document.getElementById("inPersonCount").innerHTML = inPerson;
}

function toggleAnalytics() {
    const panel = document.getElementById("analyticsPanel");
    const btn = document.getElementById("toggleBtn");

    if (panel.style.display === "none") {
        panel.style.display = "block";
        btn.innerHTML = "Hide Event Analytics";
    } else {
        panel.style.display = "none";
        btn.innerHTML = "Show Event Analytics";
    }
}