function calculateGrade(marks) {
    if (marks >= 0 && marks <= 100) {
      if (marks > 79) {
        return "A"; // Return "A" if marks are greater than 79
      } else if (marks >= 60 && marks <= 79) {
        return "B"; // Return "B" if marks are between 60 and 79 
      } else if (marks >= 50 && marks <= 59) {
        return "C"; // Return "C" if marks are between 50 and 59
      } else if (marks >= 40 && marks <= 49) {
        return "D"; // Return "D" if marks are between 40 and 49 
      } else {
        return "E"; // Return "E" if marks are less than 40
      }
    } else {
      return "Invalid marks."; // Return "Invalid marks." if marks are not between 0>100
    }
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Prompt the user to enter student marks
  rl.question('Enter student marks (between 0 and 100): ', (answer) => {
    const studentMarks = parseFloat(answer);
    const grade = calculateGrade(studentMarks); 
    console.log(`The grade for the student is: ${grade}`); 
  });
