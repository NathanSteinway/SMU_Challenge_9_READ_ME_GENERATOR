
function renderLicenseBadge(license) {

    if(license !== choices[2]){
      return `![badge](https://img.shields.io/badge/license-${license}-green)`;
    } else {
      return '';
    }
}


function renderLicenseLink(license) {

  if(license !== choices[2]){
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.descripton}

  ##Table of Contents
  
    [Installation](#installation)
    [Usage](#usage)
    [Credits](#credits)
    [License](#license)

  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## Contribute
    ${data.contribution}
  ## Tests
    ${data.tests}
  ## License
    ${renderLicenseBadge(data.license)}
  ## Username
    [${data.username}](https://www.github.com/${data.username})
  ## Questions
    [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
