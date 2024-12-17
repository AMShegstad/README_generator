// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Let's declare the important variables here so I can access them anywhere
let licenseBadge = "";
let licenseLink = "";

function renderLicenseBadge(license) {

  // If there is indeed a license selected...
  if (license) {
    // we can use the input to choose the cooresponding license.
    switch(license){
      case 'Apache license 2.0':
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'Boost Software License 1.0':
        licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        break;
      case 'BSD 2-clause "Simplified" license':
        licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        break;
      case 'BSD 3-clause Clear license':
        licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;
      case 'Creative Commons Zero v1.0 Universal':
        licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        break;
      case 'Creative Commons Attribution 4.0':
        licenseBadge = '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
        break;
      case 'Creative Commons Attribution ShareAlike 4.0':
        licenseBadge = '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)';
        break;
      case 'Eclipse Public License 1.0':
        licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        break;
      case 'GNU General Public License v2.0':
        licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        break;
      case 'GNU General Public License v3.0':
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      case 'GNU Lesser General Public License v3.0':
        licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        break;
      case 'ISC':
        licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        break;
      case 'MIT': 
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'Mozilla Public License 2.0':
        licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;
      case 'SIL Open Font License 1.1':
        licenseBadge = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
        break;
      case 'The Unlicense':
        licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        break;
      case 'zLib License':
        licenseBadge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
        break;
      default:
        // Assign the blame if I do pass a license but my code fails.
        licenseBadge = "Error: No Badge Found. Alex must have messed up...";
    }
  } else {
    // Return an empty string if no license is passed.
    licenseBadge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // If there is indeed a license selected...
  if (license) {
    // we can use the input to choose the cooresponding link. The user can click here to visit a page with more details. They can also click the badge itself.
    switch(license){
      case 'Apache license 2.0':
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'Boost Software License 1.0':
        licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
        break;
      case 'BSD 2-clause "Simplified" license':
        licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
        break;
      case 'BSD 3-clause Clear license':
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
      case 'Creative Commons Zero v1.0 Universal':
        licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
        break;
      case 'Creative Commons Attribution 4.0':
        licenseLink = 'https://creativecommons.org/licenses/by/4.0/';
        break;
      case 'Creative Commons Attribution ShareAlike 4.0':
        licenseLink = 'https://creativecommons.org/licenses/by-sa/4.0/';
        break;
      case 'Eclipse Public License 1.0':
        licenseLink = 'https://opensource.org/licenses/EPL-1.0';
        break;
      case 'GNU General Public License v2.0':
        licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
        break;
      case 'GNU General Public License v3.0':
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      case 'GNU Lesser General Public License v3.0':
        licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0'
        break;
      case 'ISC':
        licenseLink = 'https://opensource.org/licenses/ISC'
        break;
      case 'MIT': 
        licenseLink = 'https://opensource.org/licenses/MIT'
        break;
      case 'Mozilla Public License 2.0':
        licenseLink = 'https://opensource.org/licenses/MPL-2.0';
        break;
      case 'SIL Open Font License 1.1':
        licenseLink = 'https://opensource.org/licenses/OFL-1.1'
        break;
      case 'The Unlicense':
        licenseLink = 'http://unlicense.org/'
        break;
      case 'zLib License':
        licenseLink = 'https://opensource.org/licenses/Zlib'
        break;
      default:
        // Assign blame when my code doesn't work despite a license being passed.
        licenseLink = "Error: No Link Found. Alex must have messed up...";
    }
  } else {
    // return an empty string to meet assignment expectations.
    licenseLink = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // I've got to run the code that assigns the license link.
  renderLicenseLink(license)
  // Using a template literal to create this section.
  const licenseSection = `
## License
***What about Licensing***
This software is available for user under the ${license} license. If you'd like more information about the ${license} license, you can click the following link for more information:
[${license}](${licenseLink})
`

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Run the code that selects the correct license badge.
  renderLicenseBadge(data.license);
  // Template literal for writing to the file.
  const readMeContent = `
${licenseBadge}
# ${data.title} 

## Description
***Q: What is ${data.title}, you ask?*** <br>
A: ${data.description} <br>

## Installation Instructions 
***Q: How do you install ${data.title}?*** <br>
A: ${data.installationInstructions}<br>

## Usage
***Q: What is the intended use of this ${data.title}?*** <br>
A: ${data.usage}<br>

## Contributions
***Q: How can developers contribute to ${data.title}?*** <br>
A: ${data.contributing}<br>

## Testing 
***Q: Test Instructions:<br>***
A: ${data.tests}<br>

${`${renderLicenseSection(data.license)}`}
(This README created using README Generator! I know, cool, right?!)
` 
return readMeContent;
}

export default generateMarkdown;
