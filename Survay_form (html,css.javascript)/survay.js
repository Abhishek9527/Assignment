function submitForm() {
    // Perform validation here
    // You can check for valid email, phone number, etc.

    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const gender = [];
    if (document.getElementById("male").checked) {
        gender.push("Male");
    }
    if (document.getElementById("female").checked) {
        gender.push("Female");
    }
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Display a popup with the form values
    const popupText = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender.join(", ")}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
    `;

    alert(popupText);

    // Reset the form
    document.getElementById("survey-form").reset();

    return false; // Prevent form submission
}

function resetForm() {
    document.getElementById("survey-form").reset();
}