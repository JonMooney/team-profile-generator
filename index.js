inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: pnInput => {
        if (pnInput) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    }
])
