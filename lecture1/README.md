- Primitives are immutable that means their value cannot be changed after they have been set. You can off course reset a variable pointing to a primitive to a new primitive but it doesn't 
  actually change the primitive that was declared at the beginning.
- Objects are mutable and are stored by reference. Everything other than primitives are objects that includes arrays, objects, functions, any other classes.
- lexical scoping determines exactly what variables bound to where.
- The reason where we use callbacks when we make database query which may not return instantaneously.
- with network requests when you are not guaranteed to get a response immediately, then where we use Asynchronous calls.
- JSON.stringify() converts the object into string.

###################
# 'this' keyword  #
###################

- refers to an object that's set at the creation of a new execution context.
- in the global execution context, it refers to the global object.
- If the function is called as a method of an object, `this` is bound to the object the method is called on.


node creates each script as a modular script, so each script runs within its own execution context and creates its global context to what is eventually going to export. Every node script has
its own properties and methods that's going to export.

The prototype of Object is null.

##############################
# setting `this` manually    #
##############################

bind() -> returns a new function with `this` bound.
call() -> calls the function with `this` bound in any argument.
apply() -> it does the same thing as call() but this takes 2 arguments.
1st argument - what this should be bind to.
2nd argument - an array of arguments.


The reason to use apply() over call() is when we don't know in advance that how many parameters are we going to pass.


ES6 Arrow Function ==> Shorthand for anonymous function. It binds `this` to where it is lexically scoped rather than where it is invoked.

Lexical Scoping determines exactly what variables are bound to where.

##############################
# First Class Functions:-    #
##############################

It means that functions that are first class citizens meaning they can be treated in every single way that a normal variable would be treated.
- they can be assigned to variables, array values, object values.
- they can be passed as arguments to other functions. Additionally they can be returned from functions just like an object would be returned.

It allows the creation of Higher-Order Functions which is a function that allows us to take any number of inputs or returns a function.
- map(), filter() and reduce()


JavaScript is a single threaded synchronous language.




##########################################################
# Asynchronous JavaScript:-				 #
##########################################################

* Execution Stack
* Browser APIs
* Function Queue
* Event Loop


Global Execution is whatever JavaScript is running. So things that are running they will get popped onto the stack and they will run synchronously until you are done. But if we call one of thebrowser APIs then it will run separately from here. [for e.g. we want to grab a page and display it]. If we were to do that synchronously then the user stuck while the page is loading.


Callbacks allow you to control flow within asynchronous calls because you don't know what exact order asynchronous calls are going to return.


###########################
# Promises:-		  #
###########################

- alleviate 'callback hell'
- allows you to write code that assumes a value is returned within a success function.
- only needs a single error handler.
