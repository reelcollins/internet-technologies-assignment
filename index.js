document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const skillsCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
    
    // Get selected skills
    const skills = Array.from(skillsCheckboxes).map(checkbox => checkbox.value);

    // Build the output message
    let message = `My name is ${name} and I am ${age} years old`;

    if (skills.length > 0) {
        const skillsText = skills.join(' or ');
        message += ` and can code in ${skillsText}`;
    }

    message += '.';

    // Display the output
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = message;
    outputDiv.classList.add('active');

    // Clear form
    document.getElementById('userForm').reset();
});