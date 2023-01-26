const createTeam = require('./src/templateHTML.js')

// require all of your classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// require your page template
// require inquirer, path if needed, fs
const inquirer = require('inquirer');
const fs = require('fs');

// empty id array
const teamArray = [];

// empty team members array
const employeeInput = [

  {
    type: 'input',
    message: 'Enter Name: ',
    name: 'name',

  },

  {
    type: 'input',
    message: 'Enter ID number: ',
    name: 'id',

  },

  {
    type: 'input',
    message: 'Enter email address: ',
    name: 'email',

  },
];

// Wrap function.

const promptEmployee = () => {
  return managerEmployee()
}

// Create manager.
const managerEmployee = () => {
  var managerQuestions = [

    {
      type: 'input',
      message: 'Enter Name: ',
      name: 'name',

    },

    {
      type: 'input',
      message: 'Enter ID number: ',
      name: 'id',

    },

    {
      type: 'input',
      message: 'Enter email address: ',
      name: 'email',

    },

    {
      type: 'input',
      message: 'Enter office number: ',
      name: 'office',
    }
  ]

  return inquirer.prompt(managerQuestions)

    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      // push that variable to your team members array, push the id to the id array
      teamArray.push(manager);
      newEmployee()
    })
}
// Add separate input for each category, push into array and call next employee.
const newEmployee = () => {
  return inquirer.prompt([

    {
      type: 'list',
      message: 'Enter current role: ',
      name: 'role',
      choices: ['Engineer', 'Intern', 'Build Team']

    },

  ])
    .then((employeeType) => {
      switch (employeeType.role) {
        case 'Engineer':
          engineerEmployee();
          break;
        case 'Intern':
          internEmployee();
          break;
        default:
          buildTeam()
      }
    })
}

const engineerEmployee = () => {
  var engineerQuestions = employeeInput
  employeeInput.push(
    
      {
        type: 'input',
        message: 'Enter GitHub link: ',
        name: 'github',
      }
    )

  return inquirer.prompt(engineerQuestions)

    .then((engineerAnswers) => {
      console.log('engineerAnswers', engineerAnswers)
      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );

      employeeInput.pop()
      // push that variable to your team members array, push the id to the id array
      teamArray.push(engineer);
      newEmployee()

    })
}

const internEmployee = () => {

  var internQuestions = employeeInput
  employeeInput.push(
    
      {
        type: 'input',
        message: 'Enter School name: ',
        name: 'school',
      }
    )

  return inquirer.prompt(internQuestions)

    .then((internAnswers) => {
      console.log(internAnswers)
      const intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      
      employeeInput.pop()
      // push that variable to your team members array, push the id to the id array
      teamArray.push(intern);
      newEmployee()

    })
}
// fs.writeFileSync(yourPathToDistFolder, functionFromPageTemplate(teamMembers), 'utf-8');
function buildTeam() {

  console.log('Team member(s) added:', teamArray);
  fs.writeFileSync(
    './dist/team.html',
    createTeam(teamArray),
    'utf-8'
  );

}
//init function
promptEmployee()
  









