const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters ", 
                "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
                "What is the minimum crew size for the ISS? "];
let correctAnswers = [" Sally Ride", " true", " 40", " Trajectory"," 3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (i = 0; i < questions.length; i++) {
    //console.log(questions[i]input.question);
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your Answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]}`); 
    }
   
  } 

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let trueAnswer = 0;

  for (i = 0; i < questions.length; i++) {
    //console.log(`${candidateAnswers[i].toUpperCase()} == ${correctAnswers[i].toUpperCase().trim()}???`);
    //console.log(`${typeof candidateAnswers[i].toUpperCase()} == ${typeof correctAnswers[i].toUpperCase().trim()}???`);
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase().trim()) {
      trueAnswer += 1;
     
    }
   
  }
    let grade;
    grade = (trueAnswer/5)*100;
 

  if (grade >= 80) {
    console.log(`>>> Overall Grade: ${grade}% (${trueAnswer} of 5 responses correct) <<< \n >>> Status: PASSED <<<`)
  } else {
    console.log(`>>> Overall Grade: ${grade}% (${trueAnswer} of 5 responses correct) <<< \n >>> Status: FAILED <<<`)
  }
  }

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};