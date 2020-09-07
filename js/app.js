'use strict'

name=prompt('What is your name ?');
var count =0;

alert ('Welcome to my small game '+name+ ' ,Lets have fun !' );

var q1Ans=prompt('Question 1 : Is Obama currently the president of America?\nPlease Answer with (yes,no) or (y,n)');

if(q1Ans.toLowerCase() =='yes' ||q1Ans.toLowerCase()=='y')
{
    alert ('Your Anwer is not Correct ,Good luck in next one');
    
}
else if (q1Ans.toLowerCase()=='no' ||q1Ans.toLowerCase()=='n')
{
    alert ('Your Anwer is  Correct ,Welldone');
  //  console.log('Your Anwer in question (1) is  Correct ,Welldone');
    count++;
}
else {
    alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)')
}
//-----------------------------------------------------------
var q2Ans=prompt('Question 2 : Is Akali the one in the background image of the page? \n Please answer with (yes, no) or (y, n)');
if(q2Ans.toLowerCase() =='yes' ||q2Ans.toLowerCase()=='y')
{
 
    alert ('Your Anwer is  Correct ,Welldone');
   // console.log('Your Anwer in question (2) is  Correct ,Welldone');
    count++;
}
else if (q2Ans.toLowerCase()=='no' ||q2Ans.toLowerCase()=='n')
{
    alert ('Your Anwer is not Correct ,Good luck in next one');
}
else {
    alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)')
}
//-----------------------------------------------------------
var q3Ans=prompt('Question 3 :Is the current epidemic called Corona virus?\nPlease answer with (yes, no) or (y, n)');
if(q3Ans.toLowerCase() =='yes' ||q3Ans.toLowerCase()=='y')
{
 
    alert ('Your Anwer is  Correct ,Welldone');
  //  console.log('Your Anwer in question (3) is  Correct ,Welldone')
    count++;
}
else if (q3Ans.toLowerCase()=='no' ||q3Ans.toLowerCase()=='n')
{
    alert ('Your Anwer is not Correct ,Good luck in next one');
}
else {
    alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)')
}
//-----------------------------------------------------------
var q4Ans=prompt('Question 4 :Is there a presence of aliens in Jordan?\nPlease answer with (yes, no) or (y, n)');
if(q4Ans.toLowerCase() =='yes' ||q4Ans.toLowerCase()=='y')
{
 
    alert ('Hell yah there are alins ,Your Anwer is  Correct ,Welldone');
   // console.log('Your Anwer in question (4) is  Correct ,Welldone')
    count++;
}
else if (q4Ans.toLowerCase()=='no' ||q4Ans.toLowerCase()=='n')
{
    alert ('Your Anwer is not Correct ,Good luck in next one');
}
else {
    alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)')
}
//-----------------------------------------------------------
var q5Ans=prompt('Question 5 : Are there sea creatures in the sky?\nPlease answer with (yes, no) or (y, n)');
switch (true) {
    case (q5Ans.toLowerCase()=="yes"||q5Ans.toLowerCase()=='y'):
    alert ('Your Anwer is  Correct ,Welldone');
       //console.log('Your Anwer in question (5) is  Correct ,Welldone')
        count++;
        break;
    case (q5Ans.toLowerCase()=='no' ||q5Ans.toLowerCase()=='n'):
        alert ('Your Anwer is not Correct');
        break;
        default:
        {alert ('You Answer by false input or you not inserted ,you should answer with (yes/no) or (y/n)')
    console.log(q5Ans)}
      
    }
//--------------------------------------------------------
if(count<3)
alert ('Thank You '+name+' for play with us , You was a great Person and yeah you got \n'+count+'/5 .. good luck in next time')
else
alert ('Thank You '+name+' for play with us , You was a great Person and yeah you got \n'+count+'/5, You so smart ,keep it!')
