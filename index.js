var readLineSync = require("readline-sync");
const chalk = require('chalk');


var score = 0;
var userName = readLineSync.question("Whats your name?");

console.log("Welcome " + userName + ". Lets see do you know me");
console.log(chalk.bgBlue('--------Level 1-----------'));

//play function
function play(que, ans) {
  var userAns = readLineSync.question(que);

  if (userAns.toLowerCase() === ans.toLowerCase()) {
    console.log(chalk.green("Whoaa!!! Thats Correct!"));
    score++;
  } else {
    console.log(chalk.red("Oops , sorry wrong answer!"));
  }
  console.log("Your current score is : ", score);
  console.log('------------------------------')
}

var highScorer = [
  {
    name: "Gaurish",
    score: "3"
  },
  {
    name: "Shef",
    score: "2"
  }
];

var questions = [
  {
    que: "What is my surname ",
    ans: "naik"
  },
  {
    que: "what degree i pursued? ",
    ans: "mca"
  },
   {
    que: "Which brand phone i have",
    ans: "mi"
  },
   {
    que: "what did i do as freelancer initially ",
    ans: "graphics designing"
  },
  {
    que: "where do i live",
    ans: "goa"
  }
];




questions.map(i => {
  play(i.que, i.ans);
});

if (score === 5) {
  console.log(chalk.bold("YAY!! " + score + " is your final score!"));
  console.log("--------------------------------");
} else if (score === 0) {
  console.log("Sorry, read more and come");
  console.log("--------------------------------");
}

//check for highest scorer
for (let j = 0; j < highScorer.length; j++) {
  if (score > highScorer[j].score) {
    console.log("Congrates, you just went past ", highScorer[j].name);
    break;
  }
}
