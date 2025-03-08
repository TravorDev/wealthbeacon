# Contributing to WealthBeacon

Thank you for considering contributing to WealthBeacon! This document outlines the process for contributing to the project and the standards we expect from contributors.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**

* Check the [issues](https://github.com/TravorDev/wealthbeacon/issues) to see if the bug has already been reported.
* Perform a quick search to see if the problem has been reported already.

**How Do I Submit A Good Bug Report?**

Bugs are tracked as [GitHub issues](https://github.com/TravorDev/wealthbeacon/issues). Create an issue and provide the following information:

* Use a clear and descriptive title.
* Describe the exact steps to reproduce the problem.
* Provide specific examples to demonstrate the steps.
* Describe the behavior you observed after following the steps.
* Explain which behavior you expected to see instead and why.
* Include screenshots or animated GIFs if possible.
* Include details about your configuration and environment.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion:**

* Check if the enhancement has already been suggested.
* Determine which repository the enhancement should be suggested in.

**How Do I Submit A Good Enhancement Suggestion?**

Enhancement suggestions are tracked as [GitHub issues](https://github.com/TravorDev/wealthbeacon/issues). Create an issue and provide the following information:

* Use a clear and descriptive title.
* Provide a detailed description of the suggested enhancement.
* Explain why this enhancement would be useful to most WealthBeacon users.
* Include mockups or examples if applicable.

### Pull Requests

The process described here has several goals:

* Maintain WealthBeacon's quality
* Fix problems that are important to users
* Engage the community in working toward the best possible WealthBeacon
* Enable a sustainable system for WealthBeacon's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in the [pull request template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 🚱 `:non-potable_water:` when plugging memory leaks
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 💚 `:green_heart:` when fixing the CI build
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies
    * 👕 `:shirt:` when removing linter warnings

### JavaScript/TypeScript Styleguide

* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* Prefer arrow functions over function expressions
* Use template literals instead of string concatenation
* Use destructuring assignment
* Use the spread operator
* Use async/await over Promises
* Use meaningful variable names
* Add JSDoc comments for functions and classes

### CSS/SCSS Styleguide

* Use 2 spaces for indentation
* Use kebab-case for class names
* Use meaningful class names
* Use Tailwind CSS utility classes when possible
* Avoid using !important
* Use CSS variables for theming

### Testing Styleguide

* Write tests for all new features and bug fixes
* Use descriptive test names
* Follow the AAA (Arrange, Act, Assert) pattern
* Mock external dependencies
* Keep tests simple and focused

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues that are bugs
* `documentation` - Issues or PRs related to documentation
* `duplicate` - Issues that are duplicates of other issues
* `enhancement` - Issues that are feature requests
* `good first issue` - Issues that are good for newcomers
* `help wanted` - Issues that need assistance
* `invalid` - Issues that are invalid or not relevant
* `question` - Issues that are questions
* `wontfix` - Issues that won't be fixed

## Thank You!

Your contributions to open source, large or small, make projects like this possible. Thank you for taking the time to contribute.