'use strict';

var userName=prompt('What is your name ?');
var count =0;

alert ('Welcome to my small game '+userName+ ' ,Lets have fun !' );

//-----------------------------------------------------------question 1
var q1Ans=prompt('Question 1 :are i am 23 years old?\nPlease Answer with (yes,no) or (y,n)');

if(q1Ans.toLowerCase()=== 'yes' || q1Ans.toLowerCase() ==='y')
{
  alert ('Your Anwer is not Correct ,Good luck in next one');
}
else if (q1Ans.toLowerCase()==='no' ||q1Ans.toLowerCase()==='n')
{
  alert ('Your Anwer is  Correct ,Welldone');
  //  console.log('Your Anwer in question (1) is  Correct ,Welldone');
  count++;
}
else {
  alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)');
}
//-----------------------------------------------------------question 2
var q2Ans=prompt('Question 2 : Am i studing Computer Science? \n Please answer with (yes, no) or (y, n)');
if(q2Ans.toLowerCase() ==='yes' ||q2Ans.toLowerCase()==='y')
{
  alert ('Your Anwer is  Correct ,Welldone');
  // console.log('Your Anwer in question (2) is  Correct ,Welldone');
  count++;
}
else if (q2Ans.toLowerCase()==='no' ||q2Ans.toLowerCase()==='n')
{
  alert ('Your Anwer is not Correct ,Good luck in next one');
}
else {
  alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)');
}
//-----------------------------------------------------------question 3
var q3Ans=prompt('Question 3 :Are i study in JUST university?\nPlease answer with (yes, no) or (y, n)');
if(q3Ans.toLowerCase() ==='yes' ||q3Ans.toLowerCase()==='y')
{
  alert ('Your Anwer is  Correct ,Welldone');
  //  console.log('Your Anwer in question (3) is  Correct ,Welldone')
  count++;
}
else if (q3Ans.toLowerCase()==='no' ||q3Ans.toLowerCase()==='n')
{
  alert ('Your Anwer is not Correct ,Good luck in next one');
}
else {
  alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)');
}
//-----------------------------------------------------------question 4
var q4Ans=prompt('Question 4 :are my goal its to be bad programmer \nPlease answer with (yes, no) or (y, n)');
if(q4Ans.toLowerCase() ==='yes' ||q4Ans.toLowerCase()==='y')
{
  alert ('Your Anwer is not Correct ,Good luck in next one');
}
else if (q4Ans.toLowerCase()==='no' ||q4Ans.toLowerCase()==='n')
{

  alert ('Your Anwer is  Correct ,Welldone');
  // console.log('Your Anwer in question (4) is  Correct ,Welldone')
  count++;
}
else {
  alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)');
}
//-----------------------------------------------------------question 5
var q5Ans=prompt('Question 5 :i do not have alot of experience,Right?\nPlease answer with (yes, no) or (y, n)');
switch (true) {
case (q5Ans.toLowerCase()==='yes'||q5Ans.toLowerCase()==='y'):
  alert ('Your Anwer is  Correct ,Welldone');
  //console.log('Your Anwer in question (5) is  Correct ,Welldone')
  count++;
  break;
case (q5Ans.toLowerCase()==='no' ||q5Ans.toLowerCase()==='n'):
  alert ('Your Anwer is not Correct');
  break;
default:
{
  alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)');
}
}
//--------------------------------------------------------question 6
var myNumber;
var randomNumber=Math.floor(Math.random()*16);
var notPass=true;
for (var i=0;i<4;i++)
{
  //console.log(randomNumber);
  myNumber=Number(prompt('Question 6 :Lets play a Number guessing game , you have 4 opportunities to get the correct answer\n Hint: The number between (0-15)  '));
  if (myNumber===randomNumber)
  {
    alert('Well done,Correct Answer');
    count++;
    notPass=false;
    break;
  }
  else if (myNumber<randomNumber)
  {
    alert('too low');
    alert(3-i+' Attempt remain');
  }
  else if (myNumber>randomNumber)
  {
    alert('too high');
    alert(3-i+' Attempt remain');
  }
  else
  {
    alert('Wrong Input or Outrange number');
    alert(3-i+' Attempt remain');
  }

}
if (notPass)
  alert('The correct answer is '+randomNumber+' ,good luck in next time');
//--------------------------------------------------------question 7
var q7Ans;
var meanings =['people','nation','horde','asset'];
var correct=false;
var k=0;
while (k<6)
{
  q7Ans=prompt('Question 7 : What the meaning of folk,you have 6 attempts to guess the correct answer');
  for(var j=0;j<meanings.length;j++)
  {
    console.log(j);
    if(q7Ans.toLowerCase()===meanings[j])
    {
      alert('Well done, Correct Answer,I will let u know All possible correct answer\n ('+meanings+') .');
      correct=true;
      count++;
      break;
    }
  }
  if(correct)
    break;
  alert('Wrong Answer or bad input, '+(5-k)+' Attempt remain');
  k++;
}
if (!correct)
  alert('Sorry, you didn\'t guess,the correct answer its any one word of this list\n ('+meanings+') ,Good luck in next time ');
//--------------------------------------------------------
if(count<4)
  alert ('Thank You '+userName+' for play with us , You was a great Person and yeah you got \n'+count+'/7 .. good luck in next time');
else
  alert ('Thank You '+userName+' for play with us , You was a great Person and yeah you got \n'+count+'/7, You so smart ,keep it!');


