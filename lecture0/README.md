Primitive types means no methods are attached and they are immutable.

What problems we run into when we use "==" in place of "==="?


link:- https://dorey.github.io/JavaScript-Equality-Table/unified/

== (loose equals)
=== (strict equals)
!= (loose not-equals)
!== (strict not-equals)

loose rule always use (==)

undefined, null, boolean, number, string and symbol are all primitives in JavaScript. These are the base types in JavaScript ans so these primitives don't have any methods associated with themwhereas everything other than these things are objects like arrays, objects, functions are all objects that have methods associated with them. Every single time you declare a function you get a function prototype which happens to have a bunch of methods attached to it and same from them the function prototype also inherits from the method or the object prototype because everything is an object and objects also have a bunch of properties and methods associated with them and because of this prototype chain every single method and prototype object it's still accessible
from array and is still accessible from every instance of an array and so that's called a prototype chain. 


Why might we store references to the prototypes rather than just storing all the methods and properties with each instance?

What's the danger of using reference to the prototypes?

Variable Lifetime -> In JavaScript, a variable lifetime begins when it is declared and ends at the end of the function that's it in and if it's not in a function it's at the end of the global
execution.


Function Definitions are hoisted but not variable initilizations. Hoisting means when a function is declared it's usable from anywhere in your code. Hoisting is the effect where if you declarea function in JavaScript it's valid from within the entire program.

undefined is between declaration and initialization. It means the variable was declared but not initialized.

console.assert(boolean expression, object)


Prototypical Inheritance -> Non-Primitive types have a few properties(values) and methods(functions) associated with them. 
e.g. -> 1. Array.prototype.push()
2. String.prototype.toUpperCase()
Each object you create stores a reference to its prototype and then maybe its prototype also has a prototype. Object is the end of the prototype chain.

There are certain properties and methods that you cannot overwrite because they have a certain property on it called writable that might be set to false.
length is a property on an array that is not writable. It is just a metadata for that array.

Most Primitive types have object wrappers. JS will automatically "box" (wrap) primitive values so you have access to methods.

Hoisting -> Function definitions are hoisted but not variable initializations. Hoisting means when a function is declared it's usable from anywhere within your code.

################################
# Working of JavaScript Engine #
################################

The JavaScript Engine works in 2 phases:-

1. The Creation Phase
2. The Execution Phase

Before the code is executed the engine will read through all your code and just look for any syntactic errors and it will throw an error if one is found. Any Function definitions will be savedin memory. Any variable initializations will not be run, but variable names will be declared which means it will allocate space for the variable, it will declare them but it will not
initialize them until the line where they are actually set.


##########################
# Execution Context:-    #
##########################

- Equivalent to a "stack frame" in C.
- Wrapper of variables and functions local to function's execution.
- Collection of execution contexts is known as the execution stack.


############################
# Lexical Environment:-    #
############################

It determines how variable names are reolved, especially with nested functions. This means Child function contains the scope of the parent function, even if the parent has returned.
