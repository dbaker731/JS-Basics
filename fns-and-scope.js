//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler( name ) {
    if ( name === "Tyler") {
      console.log("True");
      return true;
    }
    else {
      console.log( "False" );
      return false;
    }
  }

  isTyler( name );

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName() {
    var name = prompt("What is your name?");
    return name;
  }




//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome () {
    alert( "Welcome " + getName() );
  }

  //welcome();


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Arguments are passed into a function when it is called. Parameters are what the function takes in.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // 0, NaN, flase, "", undefined. Use the ! operator to check if something is falsy.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name
  var danielsName = "Daniel";
  function myName ( studentsName ) {
    console.log( studentsName );
    return studentsName;
  }



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName( danielsName );

//Now alert the result of invoking newMyName

  //alert( newMyName );

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn( name ) {
    function anonymous() {
      return name;
    }
    return anonymous();
  }




//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn( "Olivia" );

//Now invoke innerFn.

console.log( innerFn );
