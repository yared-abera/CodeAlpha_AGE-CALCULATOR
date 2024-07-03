// script.js
document.getElementById('age-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const result = document.getElementById('result');

    // Check if the date is valid
    if (isNaN(dob.getTime())) {
        result.textContent = 'Please enter a valid date of birth.';
        return;
    }

    const today = new Date();

    // Check if the date is in the future
    if (dob > today) {
        result.textContent = 'Date of birth cannot be in the future.';
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
});
