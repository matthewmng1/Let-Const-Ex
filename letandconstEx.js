var PI = 3.14;
PI = 42;

const PI = 3.14;
PI = 42; // gives an error, cannot be reassigned

// var can be reassigned and redefined. Is also hoisted to the top of code
// Let can be reassigned but not redefined. Is not hoisted
// Const cannot be reassigned or redefined, it is constant. Cannot be hoisted.
// Hoisting is when a defined value is run first in code even if it is not at the top of the code