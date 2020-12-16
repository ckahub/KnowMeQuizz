var readlineSync= require("readline-sync");

var userAnswer= readlineSync.question("Whats ur name??");

console.log("Welocme "+userAnswer + " to Do u know CK Quiz?? " )
var score=0;
function play(question,answer)
{
  var guestAnswer=readlineSync.question(question)
 // console.log(question.ques );
  //console.log(guestAnswer);
  
  if(guestAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("U are ri8!!");
      score=score+1;
      
    }
  else
  {
    console.log("U are wrong!!");
  }
}

var question=[
  {
    ques: "Where do I live??",
    answer: "Diu",
  },

  {
    ques: "Who is my favorite superhero??",
    answer: "Thor",
  },

  {
     ques: "Which is my favorite hangoutplace??",
     answer: "Beach",

  },
]

var highScore=[
  {
    name:"yash",
    score:"3"
  },
  {
    name:"kelvin",
    score:"2"
  }
]

for(var i=0; i<question.length;i=i+1)
{
  play(question[i].ques,question[i].answer);
  console.log("Current score is ", score);
  console.log("------------------------")   
}

console.log("YAY!! ur score is +", score);
console.log("-------------------------");

console.log("Checkout high score,if you should be there ping me,I will update it");
console.log( highScore[0].name ,"score is ", highScore[0].score);
console.log( highScore[1].name ,"score is ", highScore[1].score);

console.log("-------------------------");
