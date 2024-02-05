// mydate.js

// Function to get the current date in a specific format
function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  }
  
  // Export the function to make it accessible from other modules
  module.exports = getCurrentDate;
  