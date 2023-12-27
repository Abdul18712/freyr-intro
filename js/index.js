const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
document.querySelector("#copyright").innerHTML = `Abdullah Lanval ${thisYear}`;
footer.appendChild(copyright);

let skills = ["HTML", "CSS", "Quick Learner"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skillsSection = array[i];
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill)
}