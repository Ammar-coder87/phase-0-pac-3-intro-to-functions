// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();

  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  //sayHelloToGuadalupe();

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  //sayHelloToLiz();
/*--------------------------------------------------------------------------------*/
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  //sayHelloToSamip();
  sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();
/*---------------------------------------------------------------------------------*/
  function doSomething(thing, otherThing) {
    console.log(thing, otherThing);
  }
  
  doSomething(100, "years");

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
sayHelloTo("Ammar");
sayHelloTo("Walaa");
sayHelloTo("Bashir");
sayHelloTo(50);

/*In the example above, you may have noticed that there's also something inside the parentheses
 in the function declaration: function sayHelloTo(firstName). This is called the parameter,
 in this case firstName. A parameter is a placeholder that stores whatever value gets passed
 in as an argument. For example, when we run the function call sayHelloTo('Guadalupe'),
 the value of the argument, 'Guadalupe', gets stored in the parameter firstName. 
 Then, inside the function body, we access that valueby using the parameter name,
 interpolate it into the string, and log the string to the terminal.*/

 /*Essentially, the arguments are the actual values that we pass to the function, 
 and the parameters are the named references where we store those passed-in values.*/

 /*An argument can be any JavaScript expression — any piece of JavaScript code that evaluates to a value
  — from something as simple as 5 or 'Avi' to something as complex as an entire function.*/

 /*Defining a parameter in our function declaration ensures that the argument gets stored as a local, function-level variable
   that's available anywhere in the function body. We access the value simply by using the name of the parameter that it's stored in.*/

 /*Note that we can only access parameters within the body of the function. Try adding console.log(firstName) to the end of the index.js and running the code.
   You should see a ReferenceError telling you that firstName is not defined. This relates to a very important concept in JavaScript, variable scope.*/
   
   /*-----------------------------------------------------------------------------------------------------------------*/

   //Order of Arguments:
   function say(greeting, firstName) {
    console.log("First Name: ", firstName);
    console.log("Greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "Hello");

  /* You've just illustrated an important point: ### the parameter names only have meaning to us,
  the programmer; JavaScript assigns values to parameters based solely on the order of the arguments that are passed.### */
/*--------------------------------------------------------------------------------------------------------------------*/

function add(x, y) {
    return x + y;
    //### /When we return inside a function, we're giving that value back to the world outside the function./
  }
  /*add(1, 2);*/ /*nothing happened! What's going on here? Well, our function is returning the value of the sum x + y
   but we can't see that because we aren't doing anything with it.*/
//>>>
console.log(add(1, 2));
console.log(add(9000, 80));

/*--------------------------------------------------------------------------------------------------------------------*/

//1)
function say(greeting, firstName) {

    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));

//2)
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`); //>>>  this version of our function does not have a return value! 

}
console.log(say("Hello", "Liz"));

//>>>  In JavaScript, in order to have our function return a value, we need to use the return keyword.
//>>> Setting up your function to return a value means that value is available to be used elsewhere in your program.
/*------------------------------------------------------------------------------------------------------------------*/

//>>> One Last Point About return
/*There's one additional thing it's important to know about return. 
If we wanted to both return and log a string in our say() function, we might try writing:>>>*/

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
 //>>> Let's call the function and log the result:
 console.log(say("Howdy", "partner"));

 /*### When you run that code, the return value is logged,
 but the console.log() inside the function body does not execute!*/
 /*>>> This is because return ends the execution inside the function.
 Nothing after the line with the return will be executed.*/

 /*Top Tip: you may see that the line with the console.log() is "grayed out."
 This is the text editor giving you a hint that that line of code is unreachable.*/

 //>>> Now, To both log and return like we want to, we can switch the order around:

 function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));

  /*------------------------------------------------------------------------------------------------------------------*/

  