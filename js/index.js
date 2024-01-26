const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Abdullah Lanval ${thisYear}`;
footer.appendChild(copyright);
//console.log(copyright.innerHTML);

let skills = ["HTML", "CSS", "Quick Learner", "JavaScript", "Python"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
};

const messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a> 
    <span>${usersMessage}</span>
    `;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function () {
    const entry = this.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

fetch("https://api.github.com/users/Abdul18712/repos")
  .then(response => response.json())
  .then(repositories => {
    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      const link = document.createElement("a");
      link.innerText = repositories[i].name;
      link.href = repositories[i].html_url;
      link.target = "_blank";
      project.appendChild(link);
      projectList.appendChild(project);
      const description = document.createElement("p");
      description.innerText = repositories[i].description;
      project.appendChild(description);
    }
  })
  .catch(error => {
    console.error(error);
  });
