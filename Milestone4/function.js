var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
var editButton = document.getElementById('editButton');
var resumeData = {
    name: '',
    email: '',
    phone: '',
    picture: '',
    workExperience: '',
    education: '',
    skills: ''
};
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    resumeData.name = document.getElementById('name').value;
    resumeData.email = document.getElementById('email').value;
    resumeData.phone = document.getElementById('phone').value;
    resumeData.picture = document.getElementById('picture').value;
    resumeData.workExperience = document.getElementById('workExperience').value;
    resumeData.education = document.getElementById('education').value;
    resumeData.skills = document.getElementById('skills').value;
    // Generate resume HTML
    var resumeHTML = "\n    <div>\n      <h1>".concat(resumeData.name, "</h1>\n      ").concat(resumeData.picture ? "<img src=\"".concat(resumeData.picture, "\" alt=\"Profile Picture\">") : '', "\n      <p>Email: ").concat(resumeData.email, "</p>\n      <p>Phone: ").concat(resumeData.phone, "</p>\n    </div>\n    \n    <section>\n      <h2>Work Experience</h2>\n      <p>").concat(resumeData.workExperience.replace(/\n/g, '<br>'), "</p>\n    </section>\n    \n    <section>\n      <h2>Education</h2>\n      <p>").concat(resumeData.education.replace(/\n/g, '<br>'), "</p>\n    </section>\n    \n    <section>\n      <h2>Skills</h2>\n      <p>").concat(resumeData.skills.replace(/\n/g, '<br>'), "</p>\n    </section>\n  ");
    // Display the resume
    resumeContainer.innerHTML = resumeHTML;
    resumeContainer.style.display = 'block';
    editButton.style.display = 'block';
});
editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener('click', function () {
    // Populate form with existing resume data
    document.getElementById('name').value = resumeData.name;
    document.getElementById('email').value = resumeData.email;
    document.getElementById('phone').value = resumeData.phone;
    document.getElementById('picture').value = resumeData.picture;
    document.getElementById('workExperience').value = resumeData.workExperience;
    document.getElementById('education').value = resumeData.education;
    document.getElementById('skills').value = resumeData.skills;
    // Hide resume and Edit button
    resumeContainer.style.display = 'none';
    editButton.style.display = 'none';
});
