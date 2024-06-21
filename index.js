// script.js
document.getElementById('age-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const result = document.getElementById('result');

    if (!isNaN(dob.getTime())) {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        result.textContent = `You are ${age} years old.`;
    } else {
        result.textContent = 'Please enter a valid date of birth.';
    }
});
