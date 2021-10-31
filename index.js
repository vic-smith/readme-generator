const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// function to create inquirer prompts
const createRm = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Your GitHub username is required.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message:
        "What is the your email address associated with GitHub? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Your email address is required.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your application? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("The title of your application is required.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your application. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("A description of your application is required.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Please explain how to install your application.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Installation instructions are required.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Does the user need to know anything about using this application?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please enter any information related to using the application."
          );
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your application? (Required)",
      choices: [
        "MIT",
        "Apache 2.0 License",
        "Mozilla Public License 2.0",
        "GNU GPL v3",
        "N/A",
      ],
    },
    {
      type: "input",
      name: "contribution",
      message: "How can a user contribute to the application?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please enter any information related to contributing to the application."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "How can a user test the application?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please enter any information related to testing the application."
          );
          return false;
        }
      },
    },
  ]);
};

// function to write README file

const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// Function call to initialize app
createRm()
  .then((answers) => {
    return writeFile(answers);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
