// require all of your classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// require your page template
// require inquirer, path if needed, fs
const inquirer = require('inquirer');
const fs = require('fs');
const createTeam = require('./src/page-template.js')

// empty team members array
const newTeamMember = [];

// empty team members array

// empty id array
const questions = async () => {
  const answers = await inquirer.prompt( [
    
    {
      type: 'input',
      message: 'Enter Name: ',
      name: 'name',

    },

    {
      type: 'input',
      message: 'Enter ID: ',
      name: 'id',

    },

    {
      type: 'input',
      message: 'Enter email: ',
      name: 'email',

    },

    {
      type: 'list',
      message: 'Enter current role: ',
      name: 'role',
      choices: ['Manager', 'Engineer', 'Intern']

    },

  
  ]

  )
}
//Answers
// function that wraps everything (like an init function)

  // function for creating a manager (call this at the bottom of your init function)
    // inquirer prompt with the manager questions
    // in your .then - set up a variable for manager that is equal to a new instance of your Manager class passing in the responses you recieved from the user's input
      .then((answers) => {
        const manager = new Manager (answers.name)
        teamMember.push(manager);
      })
    // push that variable to your team members array, push the id to the id array
      // call your next function

  // next function should be for creating the team
    // this should ask the user what type of employee they would like to create
    // in your .then, have a conditional or switch case that runs that employee types function based on what they choose
    // or if they select the option that says they are done adding team members, run the function that builds the team


    function buildTeam() {
      console.log('New team member added:', newTeamMember);
      fs.writeFileSync(
        './dist/team.html',
        createTeam(newTeamMember);
        
      )
        // fs.writeFileSync(yourPathToDistFolder, functionFromPageTemplate(teamMembers), 'utf-8');
      }
  
      questions()
  // make sure call your init function
  
  
  
  
  
  
  
  
  
  