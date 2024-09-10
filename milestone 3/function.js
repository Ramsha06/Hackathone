var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var picture = document.getElementById('picture').value;
    var workExperience = document.getElementById('workExperience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Generate resume HTML
    var resumeHTML = "\n    <div>\n      <h1>".concat(name, "</h1>\n      ").concat(picture ? "<img src=\"".concat(picture, "\" alt=\"Profile Picture\">") : '', "\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n    </div>\n    \n    <section>\n      <h2>Work Experience</h2>\n      <p>").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n    </section>\n    \n    <section>\n      <h2>Education</h2>\n      <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n    </section>\n    \n    <section>\n      <h2>Skills</h2>\n      <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n    </section>\n  ");
    // Display the resume
    resumeContainer.innerHTML = resumeHTML;
    resumeContainer.style.display = 'block';
});
