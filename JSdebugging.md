# Debugging
The JavaScript interpreter uses the concept of execution contexts. 
There is one global execution context; plus, each function creates a new new execution context. They correspond to variable scope.

## EXECUTION CONTEXT
Every statement in a script lives in one of three execution contexts:

**GLOBAL CONTEXT** Code that is in the script, but not in a function. There is only one global context in any page.
**FUNCTION CONTEXT** Code that is being run within a function.Each function has its own function context.
**EVAL CONTEXT (NOT SHOWN)** Text is executed like code in an internal function called eval()

## VARIABLE SCOPE
The first two execution contexts correspond with the notion of scope (which you met on p98):

**GLOBAL SCOPE** If a variable is declared outside a function, it can be used anywhere because it has global scope. 
If you do not use the var keyword when creating a variable, it is placed in global scope.
**FUNCTION-LEVEL** SCOPE When a variable is declared within a function,it can only be used within that function. This is because it has function-level scope.

## HOW TO DEAL WITH ERRORS
**DEBUG THE SCRIPT TO FIX ERRORS** : track down the source of the error, and fix it.
**HANDLE ERRORS GRACEFULLY** :You can handle errors gracefully using try, catch, throw, and finally statements.

## DEBUGGING TIPS
**ANOTHER BROWSER**
**ADD NUMBERS**
**STRIP IT BACK**
**SEARCH**
**CODE PLAYGROUNDS**
**VALIDATION TOOLS**
