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
		},
		// Description
		{
			type: 'input',
			name: 'description',
			message: 'What is the description?',
			validate: descriptionInput => {
				if (descriptionInput) {
					return true
				} else {
					console.log('Please enter a description for the project.')
					return false
				}
			}
		},
		// Installation
		{
			type: 'input',
			name: 'installation',
			message: 'What are the steps required to install your project?'
		}, 
		// Usage
		{
			type: 'input',
			name: 'usage',
			message: 'What are the instructions and examples for use?',
			validate: usageInput => {
				if (usageInput) {
					return true
				} else {
					console.log('Please enter the instructions and examples of use.')
					return false
				}
			}
		},
		// Contributing
		{
			type: 'input',
			name: 'contributions',
			message: 'What contributions do you need to list?'
		},
		// Tests
		{
			type: 'input',
			name: 'tests',
			message: 'What tests are included and how are they used?'
		},
		// FAQ
		{
			type: 'input',
			name: 'questions',
			message: 'What is your email so that users can ask you questions?',
			validate: questionsInput => {
				if (questionsInput) {
					return true
				} else {
					console.log('Please enter your email.')
					return false
				}
			}
		}
		// License 
  ])
	.then(promptData => console.log(promptData))
}

promptUser()