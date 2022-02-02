//Renders a license badge depending on the choice made within questions.choices[].
//Returns an empty string is No License is chosen.
function renderLicenseBadge(license) {

    if(license !== 'No License'){
      return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
      return '';
    }
}

//Returns a license link from choices.
//Returns an empty string if No License is chosen.
function renderLicenseLink(license) {

  if(license !== 'No License'){
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
}

//Returns the license section of the README.md file
//returns an empty string if no license is chosen
function renderLicenseSection(license) {

  if (license !== 'No License'){
    return '## [License]';
  } else {
    return '';
  }
}

//This function generates markdown to be written to README.md

function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Licenses](#Licenses)
  * [Username](#Username)
  * [My Contact Information](#My-Contact-Information)

  ## Installation
${data.installation}
  ## Usage
${data.usage}
  ## Contribution
${data.contribution}
  ## Tests
${data.tests}
  ## Licenses
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
  ## Username
[${data.githubusername}](https://www.github.com/${data.githubusername})
  ## My Contact Information
[${data.email}]
`;
}

module.exports = generateMarkdown;

