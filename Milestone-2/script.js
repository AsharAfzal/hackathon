var toogleButton = document.getElementById("toogle-skill");
var skills = document.getElementById('skills');
toogleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
