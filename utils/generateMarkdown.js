

// function to generate markdown for README
function generateMarkdown(data) { 
  if (data.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    licenseStr = "This application is covered under the MIT license. Please click the badge for more information. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache 2.0 License") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    licenseStr = "This application is covered under Mozilla Public License 2.0. Please click the badge for more information. [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "Mozilla Public License 2.0") {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    licenseStr = "This application is covered under the GNU GPL v3 License. Please click the badge for more information. [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (data.license === "GNU GPL v3") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseStr = "This application is covered under the Apache 2.0 License. Please click the badge for more information. [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    badge = "";
    licenseStr ="";
  }
 
  return `# ${data.title} ${badge}
  
## Application Description
${data.description}

## Table of Contents
* [Description](#application-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Testing](#testing)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseStr}

## Contributions
${data.contribution}

## Testing
${data.test}

## Questions
Please feel free to reach out with any questions or concerns. I can be reached at ${data.email} or on GitHub at github.com/${data.username}.
`;
}

//renderLicenseBadge();
module.exports = generateMarkdown;
