//Renders a license badge depending on the choice made within questions.choices[].
//Returns an empty string is No License is chosen.
function renderLicenseBadge(license) {

    if(license !== 'No License'){
      return `![badge](https://img.shields.io/badge/license-${license}-green)`;
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
    return '##[License](#license)';
  } else {
    return '';
  }
}

//This function generates markdown to be written to README.md

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.description}

  ##Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Username](#githubusername)
  * [My Contact Information](#email)

  ## [Installation](#Table of Contents)
    ${data.installation}
  ## [Usage](#Table of Contents)
    ${data.usage}
  ## [Contribute](#Table of Contents)
    ${data.contribution}
  ## [Tests](#Table of Contents)
    ${data.tests}
  ## [License](#Table of Contents)
    ${renderLicenseBadge(data.license)}
  ## [Username](#Table of Contents)
    [${data.githubusername}](https://www.github.com/${data.username})
  ## [My Contact Information](#Table of Contents)
    [${data.email}]
`;
}

module.exports = generateMarkdown;

