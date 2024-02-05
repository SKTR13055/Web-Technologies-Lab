// read-html.js

const fs = require('fs');

// Function to read HTML file and return its content
function readHtmlFile(filePath) {
  try {
    // Read the HTML file synchronously
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Error reading the HTML file:', error.message);
    return null;
  }
}

// Define the path to the HTML file
const htmlFilePath = 'Online_Bookstore.html';

// Read the HTML file and log its content
const htmlContent = readHtmlFile(htmlFilePath);

if (htmlContent) {
  console.log('HTML Content:\n', htmlContent);
}
