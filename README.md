<a href="https://codeclimate.com/github/LennyCh/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/f6096f05764417e6f1b5/maintainability" /></a>
https://github.com/LennyCh/frontend-project-lvl1

This file contains a description of five games:
1) Determination of an even number - "brain-even";
2) Calculator. Arithmetic expressions to be evaluated - "brain-calc";
3) Determination of the greatest common divisor - "brain-gcd";
4) Progression. Search for missing numbers in a sequence of numbers - "brain-progression";
5) Definition of a prime number.

You need to answer correctly three questions in a row. If you do not answer one of the questions, the game will end. But you can run it again. 
Below you will see a more detailed description of each of these games, and how to run them.

1) Brain-even.

You are shown a random number. And you need to answer "yes" if the number is even, or "no" if it is odd.

To run this game enter "make brain-even" from root directory (~programms/frontend-project-lvl1).

A successful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
Answer "yes" if the number is even, otherwise answer "no"
Question: 7
Your answer: no
Correct!
Question: 68
Your answer: yes
Correct!
Question: 59
Your answer: no
Correct!
Congratulations, Sam!

An unsuccessful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
Answer "yes" if the number is even, otherwise answer "no"
Question: 99
Your answer: yes
"yes" is wrong answer ;(. Correct answer was "no"
Let's try again, Sam
 
2) Brain-calc.

You are shown a random mathematical expression (addition, subtraction or multiplication). You need to calculate it and write the correct answer. 

To run this game enter "make brain-calc" from root directory (~programms/frontend-project-lvl1).

A successful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
What is the result of the expression?
Question: 73 - 23
Your answer: 50
Correct!
Question: 64 * 45
Your answer: 2880
Correct!
Question: 60 + 29
Your answer: 89
Correct!
Congratulations, Sam!

An unsuccessful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
What is the result of the expression?
Question: 1 - 62
Your answer: 61
"61" is wrong answer ;(. Correct answer was "-61"
Let's try again, Sam!

3) Brain-gcd.

You are shown two random numbers. You must calculate and enter the largest common divisor of these numbers.

To run this game enter "make brain-gcd" from root directory (~programms/frontend-project-lvl1).

A successful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
Find the greatest common divisor of given numbers.
Question: 93, 55
Your answer: 1
Correct!
Question: 25, 50
Your answer: 25
Correct!
Question: 11, 77
Your answer: 11
Correct!
Congratulations, Sam!

An unsuccessful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
Find the greatest common divisor of given numbers.
Question: 15, 19
Your answer: 8
"8" is wrong answer ;(. Correct answer was "1"
Let's try again, Sam

4) Brain-progression.

You are shown 10 numbers forming an arithmetic progression. One of the numbers in this progression is missing. You must determine this number.

To run this game enter "make brain-progression" from root directory (~programms/frontend-project-lvl1).

A successful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
What number is missing in the progression?
Question: 24,78,132,186,240,294,348,402,..,510
Your answer: 456
Correct!
Question: 65,124,183,242,301,..,419,478,537,596
Your answer: 360
Correct!
Question: 20,65,110,155,200,245,290,335,..,425
Your answer: 380
Correct!
Congratulations, Sam!

An unsuccessful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
What number is missing in the progression?
Question: 79,111,143,..,207,239,271,303,335,367
Your answer: 333
"333" is wrong answer ;(. Correct answer was "175"
Let's try again, Sam

5) Brain-prime.

You are shown a random number. And you need to answer "yes" if the number is prime, otherwise answer "no".

To run this game enter "make brain-prime" from root directory (~programms/frontend-project-lvl1).

A successful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 61
Your answer: yes
Correct!
Question: 83
Your answer: yes
Correct!
Question: 25
Your answer: no
Correct!
Congratulations, Sam!

An unsuccessful game looks like this:
Welcome to the Brain Games!
May I have your name? Sam
Hello,  Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 10
Your answer: yes
"yes" is wrong answer ;(. Correct answer was "no"
Let's try again, Sam
