/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  }
}

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the name variable. Invoke outer saving the return value into
another variable called 'inner'. */

// Code Here
var inner = outer();

//Once you do that, invoke inner.

//Code Here
inner();










/******************************************************************************\
	#PROBLEM-02
\******************************************************************************/


function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number
  }
  return dial
}

/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you're given a callFriend function that returns the dial function.
Create a callJake function that when invoked with '435-555-9248' returns 'Calling Jake at 435-555-9248'
in your console. */

  //Code Here
var callJake = callFriend('Jake');

callJake('435-555-9248');








/******************************************************************************\
	#PROBLEM-03
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Write a function called makeCounter that makes the following code work
properly. */

//Code Here
function makeCounter(){
  var counter = 0;
  return function(){
    return (++counter);
  }
}

  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4










/******************************************************************************\
	#PROBLEM-04
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this. 
Information on the module pattern available here: 
http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {
  count = value;
  // Code here.
  return {
    inc: function(){
      return ++ count;
    },
    dec: function(){
      return -- count;
    }
  }

}


counter = counterFactory(10);
// counter.inc() // 11
// counter.inc() // 12
// counter.inc() // 13
// counter.dec() // 12










/******************************************************************************\
	#PROBLEM-05
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname) {

  var welcomeText = "You're doing awesome, keep it up ";

  // code message function here.
  function message(){
    return welcomeText + firstname + " " + lastname + ".";
  }

  //Uncommment this to return the value of your invoked message function
  return message();

}

motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.










/******************************************************************************\
	#PROBLEM-06
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the module's return object create a publicMethod function that
invokes privateMethod. Invoke this by calling module.publicMethod(); outside
the module scope */

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {
    publicMethod: function(){
      return privateMethod();
    }
  };

})();

module.publicMethod();

/******************************************************************************\
 #PROBLEM-07
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */

//We are given three arrays. One has current friends, one has friends of friends, and one has 'all users',
//or everyone 
var friends = ["Tom", "Dick", "Harry"];
var secondLevelFriends = ["Anne", "Harry", "Quinton"];
var allUsers = ["Tom", "Dick", "Harry", "Anne", "Quinton", "Katie", "Mary"];

//We have a function that takes in an array, then returns a closure function
//When invoked, the closure function takes in a user. It checks if that user
//is included in the parent's array that was passed in as an argument. If so,
//it returns false since that person is already your friend. (The purpose of
//the function is to tell if they are a 'potential friend', meaning if they
//are already your friend, it should return false. If not, then it returns 
//true since they ARE a potential friend.)  
function findPotentialFriends(existingFriends) {

  return function(user){
    if (existingFriends.includes(user)){
      return false;
    }else{
      return true;
    }
  }

}

//Since the function checks if they are NOT a friend, that is what we name 
//the variable.  We invoke the outer functione, pass in an array of our
//current friends, and save the result to 'isNotAFriend'.
var isNotAFriend = findPotentialFriends( friends );

//Now we can invoke the inner function, pass in a user, and see if they are a 
//potential friend. We pass in users from the other arrays by selecting their
//index. allUsers[0] = 'Tom'.  It checks if Tom is inclulded in our array of
//friends, and since he is, it returns false (meaning that he isn't a potential
//friend, because he is ALREADY our friend).  secondLevelFriends[2] is Quinton,
//who is not yet a friend, so that returns true.
  isNotAFriend(allUsers[0]); // false
  isNotAFriend(secondLevelFriends[2]); // true


/******************************************************************************\
 #PROBLEM-07 -- BLACK DIAMOND
 \******************************************************************************/
/* Using your findPotentialFriends function from above and the Array.filter
method, find all potential second level friends as well as potential friends
from allUsers. */

// the .filter() method takes an original array, only keeps the values that return
// true, then saves it to a new variable.  The cool part, is that we can pick how 
// we want it to evaluate each option in the array. so we can create any function 
// that we want, that searches any criteria we want, and then say arr.filter(func).  
// It will pass each item from the array through the filter, pass it into the 'func'
// function, and only keep it around if that 'func' function returns true on that value.
// so we create any variable name we want (i.e. potentialSecondLevelFriends & 
// allPotentialFriends), then we use the filter. So to find potential second level
// friends, we can filter the second level users array to see who is already in our
// 'friends' array. If they are already there, we return false, since they are already
// a friend. If not, we return true, since they are a potential friend. Luckily, we already 
// created that function above (isNotAFriend).  So we select the array secondlevelfriends,
// use the filter on it, and use the function 'isnotafriend'.  that will pass each value
// from the array in individually for evaluation, and only keep the ones that AREN'T in our
// friends array yet.  Then we do the same thing for the 'allUsers' array. check which values
// in that array are NOT yet in our friends array, and return those as 'allPotentialFriends'.
 var potentialSecondLevelFriends = secondLevelFriends.filter(isNotAFriend);
 var allPotentialFriends = allUsers.filter(isNotAFriend);


/******************************************************************************\
	#PROBLEM-08
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 8 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.

 Fix the code below to log the desired output.
 */

//Here is what the original code looked like:
// function timeOutCounter() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function(){console.log(i)}, i * 1000)
//   }
// }
// timeOutCounter();

/*
The problem with that, is that the setTimeout is putting the function aside for a second or two,
and then running it. By the time the function runs, the for loop has already finished looping, and
'i' is the value 6.  so when the function goes to execute, it looks for 'i', sees 6, and logs that.
Since the function is called 6 times, there is a queue of 6 functions that are all going to log 'i'.
They all see that 'i' = 6, and they all log 6, so you get 6, 6 times, instead of 0, 1, 2, 3, 4, 5.
You could remove the function part from console.log, and just have setTimeout(console.log(i), i * 1000),
but then the setTimeout doesn't work, and i gets logged right away. Since it is logging it right away, it
logs correct, 0, 1, 2, 3, 4, 5, but doesn't wait like you want it to. Instead of this, you can use a 
closure. Instead of just have an anonymous function inside of setTimout, you can say closure(i), and 
then create a closure function on your own that returns an inner function that logs 'i'.  This means
that instead of looking back to the for loop for the value of 'i', each function will look back to its
own snapshot of what 'i' was at the time the snapshot was created, and use that for i instead. this
results in the timeout working properly, and 'i' loggin correctly: 0, 1, 2, 3, 4, 5
*/

var closure = function(i){
  return function(){
    console.log(i);
  }
}

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(closure(i), i * 1000)
  }
}
timeOutCounter();
