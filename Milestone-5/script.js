// Get the form and display elements by their IDs
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById("Shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values with type assertions
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content
    var resumeHTML = "\n        <h2><b>Shareable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
    // Display the generated resume in the designated div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
    function generateShareableLink() {
        var resumeLink = "https://example.com/your-resume.pdf";
        shareableLinkElement.href = resumeLink;
        shareableLinkElement.textContent = resumeLink;
        shareableLinkContainer.style.display = "block";
    }
    function downloadPdf() {
        var link = document.createElement("a");
        link.download = "resume.pdf";
        link.click();
    }
    downloadPdfButton.addEventListener("click", downloadPdf);
    generateShareableLink();
});
