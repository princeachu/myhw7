function generateMarkdown(data) {
  return `
# ${data.title}
[![Dependencies](https://img.shields.io/badge/npm%20-inquirer-blue)]

## Project Description 
${data.description}

## Table of Contents 
1. *[Installation](#installation)
2. *[Usage](#usage)
3. *[Contributions](#contributions)
4. *[Tests](#tests)
5. *[License](#license)
6. *[Questions](#questions)

## Installation
To install the neccassary dependencies run the following commands in the terminal:
${data.install}

## Usage
${data.usage}

## Contributions 
${data.contribution}

## Tests
${data.tests}

## License
${data.license}

## Questions 
If you have any questions please reach out to:

${data.username}

${data.email}

`;
}

module.exports = generateMarkdown;
