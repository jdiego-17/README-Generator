// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const lincensesBadge = {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,
  apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if (lincensesBadge.mit){
    return lincensesBadge.mit;
  } else {
  return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const lincenseLinks = {
    mit: 'https://opensource.org/licenses/MIT',
    apache: 'https://opensource.org/licenses/Apache-2.0'
  }
  if(lincenseLinks.mit){
    return lincenseLinks.mit;
  } else {
  return "";
  }
}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `License under ${renderLicenseLink(license)} license`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table Of Contents
  -[Description](#Description)
  -[Installation](#installation)
  -[Technology Used](#languages)
  -[License](#license)
  -[Questions](#questions)


  ## Description 
  ${data.Description}

  ## Installation
  ${data.installation}

  ## Technology Used
  ${data.languages}

  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseBadge(data.license)}

  ## Questions
  [${data.GitHub}](https://github.com/${data.GitHub})
  
  ${data.email}

`;
}

module.exports = generateMarkdown;
