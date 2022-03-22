const inquirer = require('inquirer')

// Function using the inquirer npm package to take input from the user, and return an object with the input. 
const promptUser = () => {
  return inquirer.prompt([
		// Title
		{
			type: 'input',
			name: 'title',
			message: 'What is the project title?',
			validate: nameInput => {
				if (nameInput) {
					return true
				} else {
					console.log('Please enter the project title')
					return false
				}
			}
		}
		// Description
		// Table of Contents
		// Installation 
		// Usage
		// License 
		// Contributing
		// Tests
		// FAQ
  ])
	.then(promptData => console.log(promptData))
}

promptUser()