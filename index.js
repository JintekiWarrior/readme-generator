const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const mockInput = {
	title: 'My Greate Project',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget odio metus. Pellentesque congue faucibus dapibus. Aenean dapibus, nulla et porttitor pellentesque, tortor neque condimentum justo, sit amet tempus nunc orci ac felis. Proin et arcu mi. Duis sollicitudin velit sed odio suscipit imperdiet. Proin eu neque pellentesque, consectetur sapien ac, tincidunt neque. Sed lectus nisi, fermentum at tristique id, facilisis id mauris. Donec rutrum rutrum orci ut cursus. In quis enim non nibh blandit bibendum. Duis vitae diam neque. Integer dapibus mauris tellus, vel vulputate eros fermentum non. Maecenas sit amet ultricies sem. Sed lacinia tincidunt cursus. Praesent luctus ante neque, nec rutrum erat pharetra at.',
	installation: `run npm install`,
	usage: `Donec dictum nulla at placerat congue. Aenean quis mollis sem, id maximus odio. Integer nec justo sit amet turpis ullamcorper imperdiet ut non nisi. Morbi ac euismod sem. Donec pulvinar facilisis enim ac blandit. Fusce sagittis egestas mauris, quis porta purus fringilla sit amet. Sed dignissim semper mauris ac volutpat. Phasellus vitae est venenatis, rhoncus odio eu, vulputate sem. Nulla quam enim, dapibus eget dignissim vel, rutrum vitae dolor.`,
	contribution: `Moe Yassine, John Doe, Jane Smith`,
	tests: `Use npm run tests`,
	questions: `moeyassine@gmail.com `
}

fs.writeFile('README.md', generateMarkdown(mockInput), err => {
	if (err) throw err

	console.log('Success! Readme file was created')
})
// // Function using the inquirer npm package to take input from the user, and return an object with the input. 
// const promptUser = () => {
//   return inquirer.prompt([
// 		// Title
// 		{
// 			type: 'input',
// 			name: 'title',
// 			message: 'What is the project title?',
// 			validate: nameInput => {
// 				if (nameInput) {
// 					return true
// 				} else {
// 					console.log('Please enter the project title')
// 					return false
// 				}
// 			}
// 		},
// 		// Description
// 		{
// 			type: 'input',
// 			name: 'description',
// 			message: 'What is the description?',
// 			validate: descriptionInput => {
// 				if (descriptionInput) {
// 					return true
// 				} else {
// 					console.log('Please enter a description for the project.')
// 					return false
// 				}
// 			}
// 		},
// 		// Installation
// 		{
// 			type: 'input',
// 			name: 'installation',
// 			message: 'What are the steps required to install your project?'
// 		}, 
// 		// Usage
// 		{
// 			type: 'input',
// 			name: 'usage',
// 			message: 'What are the instructions and examples for use?',
// 			validate: usageInput => {
// 				if (usageInput) {
// 					return true
// 				} else {
// 					console.log('Please enter the instructions and examples of use.')
// 					return false
// 				}
// 			}
// 		},
// 		// Contributing
// 		{
// 			type: 'input',
// 			name: 'contributions',
// 			message: 'What contributions do you need to list?'
// 		},
// 		// Tests
// 		{
// 			type: 'input',
// 			name: 'tests',
// 			message: 'What tests are included and how are they used?'
// 		},
// 		// FAQ
// 		{
// 			type: 'input',
// 			name: 'questions',
// 			message: 'What is your email so that users can ask you questions?',
// 			validate: questionsInput => {
// 				if (questionsInput) {
// 					return true
// 				} else {
// 					console.log('Please enter your email.')
// 					return false
// 				}
// 			}
// 		}
// 		// License 
//   ])
// 	.then(promptData => console.log(promptData))
// }

// promptUser()


