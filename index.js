function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    
    if (!birthdate) {
        document.getElementById('result').innerHTML = "Please enter a valid date!";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = `Your age is ${age} years`;
}
