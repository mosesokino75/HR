// Create the template
const template = document.createElement('template');
template.innerHTML = `

 
`;

// Append the template to the body
document.body.appendChild(template.content);

// Update the copyright year
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
    document.getElementById('copyright-year-2').textContent = currentYear;
});
