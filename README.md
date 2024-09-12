# Bookstore API Test Automation

Introduction
This project is an API automation framework using JavaScript, WebdriverIO, and Axios, designed to test the APIs provided by FakeRestAPI. The framework is structured to be modular, maintainable, and scalable, making it easier to test various API endpoints related to authors and books.

## Folder Structure
![image](https://github.com/user-attachments/assets/2a351ef3-c235-4238-9285-65983d8a5f1e)

APIAutomationByRajesh/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD configuration

├── allure-report/              # Directory for generated Allure reports

├── allure-results/             # Directory for storing Allure results

├── node_modules/               # Installed dependencies

├── reports/                    # Additional test reports (if any)

├── test/                       # Test scripts organized by API resources

│   ├── authors/
│   │   ├── deleteAuthor.spec.js
│   │   ├── getAuthors.spec.js
│   │   ├── postAuthor.spec.js
│   │   ├── putAuthor.spec.js
│   │   └── utils.js            # Utility functions for authors tests

│   ├── books/
│   │   ├── deleteBook.spec.js
│   │   ├── getBook.spec.js
│   │   ├── postBook.spec.js
│   │   ├── putBook.spec.js
│   │   └── utils.js            # Utility functions for books tests

│   ├── config/
│   │   └── config.js           # Configuration file for the test setup

│   └── utils/
│       └── axios-instance.js   # Axios instance with predefined settings

├── .gitignore                   # Files and directories ignored by Git

├── generate-pdf.js              # Script to generate PDF reports

├── package-lock.json            # Ensures consistent dependency installs

├── package.json                 # Project metadata and dependencies

├── README.md                    # Project documentation

└── wdio.conf.js                 # WebdriverIO configuration file

## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (version 16.x or higher)

npm (comes with Node.js)

Git (for version control)
## Setup Instructions

   1. Clone the repository:
   
   git clone [https://github.com/RajeshChouhan14/ApiAutomationByRajesh.git]
   
   cd ApiAutomationByRajesh

   3. Install Dependencies
   
   cmd:   npm install

   4.Running Tests
    
    To execute all the test cases together, use the following command:(you can refer package.json(scripts) & wdio.confg.json(suites) for more modification)
    
    cmd:  npm run book
    
   5.Generating Reports
    
     After running the tests, you can generate an Allure report using the following commands:(report attached in email)
     
     Create allure report: npm run report
     
     Open report cmd: allure open
     
   6.Continuous Integration
   
     The project includes a CI/CD pipeline configured using GitHub Actions, which automatically runs the test suite on every push or pull request. The workflow configuration is located at 
     
     .github/workflows/ci.yml.
  
   7.Contributing
      
      Contributions are welcome! To contribute:
      
      Fork the repository.
      Create a new branch .
      Make your changes and commit them (git commit -m 'Add some feature').
      Push to the branch .
      Open a pull request
