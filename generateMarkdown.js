function generateMarkdown(answers) {
    return `# ${answers.title}

## Description
${answers.description}

## Github
${answers.github}

## Year Created
${answers.yearcreated}

# Full Name
${answers.fullname}

## Installation
${answers.install}

## Usage
${answers.usage}

## Credits
${answers.credits}

## Provide instructions and examples for use. Include screenshots as needed.
${answers.instructions}

## Sources/links
${answers.sources}

## Badges
${answers.badges}

## License 
${answers.license}

## Email
${answers.email}

---
© 2022 James Justis developer readme, a Justis Inc. brand. All Rights Reserved.
`;
}

module.exports = generateMarkdown;
