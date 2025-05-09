const questions = [
    {
      question: "What is computer programming?",
      options: [
        "A process of writing, testing, and maintaining source code.",
        "A set of instructions for the computer.",
        "Solving problems using algorithms.",
        "All of the above."
      ],
      answer: "All of the above."
    },
    {
      question: "What is a program?",
      options: [
        "A set of rules.",
        "Instructions that tell the computer what to do.",
        "A solution to a problem.",
        "A type of algorithm."
      ],
      answer: "Instructions that tell the computer what to do."
    },
    {
      question: "What is the primary purpose of computer programming?",
      options: [
        "To create complex software.",
        "To solve problems.",
        "To design computer hardware.",
        "To develop operating systems."
      ],
      answer: "To solve problems."
    },
    {
      question: "What is a problem in the context of programming?",
      options: [
        "A complex algorithm.",
        "A gap between the existing and desired situation.",
        "An error in the code.",
        "A difficult programming language."
      ],
      answer: "A gap between the existing and desired situation."
    },
    {
      question: "What does problem-solving involve?",
      options: [
        "Using specific tools.",
        "Applying problem-solving strategies.",
        "Transforming problem descriptions into solutions.",
        "All of the above."
      ],
      answer: "All of the above."
    },
     {
      question: "Which of the following is NOT a problem-solving technique?",
      options: [
        "Analyzing the problem.",
        "Outlining problem requirements.",
        "Ignoring user interaction.",
        "Designing an algorithm."
      ],
      answer: "Ignoring user interaction."
    },
    {
      question: "What is an algorithm?",
      options: [
        "A set of computer programs.",
        "An ordered set of unambiguous, executable steps.",
        "A programming language.",
        "A type of flowchart."
      ],
      answer: "An ordered set of unambiguous, executable steps."
    },
     {
      question: "Which is NOT a property of an algorithm?",
      options: [
        "Correctness",
        "Ambiguity",
        "Finiteness",
        "Efficiency"
      ],
      answer: "Ambiguity"
    },
    {
      question: "What does 'Correct' mean in the context of algorithms?",
      options: [
        "Returns the desired output for all legal instances.",
        "Has only one interpretation.",
        "Executes in a finite amount of time.",
        "Uses minimal space."
      ],
      answer: "Returns the desired output for all legal instances."
    },
    {
      question: "What does 'Unambiguous' mean for an algorithm?",
      options: [
        "Each step is clearly defined.",
        "The algorithm is easy to understand.",
        "The algorithm is fast.",
         "Uses minimal space."
      ],
      answer: "Each step is clearly defined."
    },
     {
      question: "Which of the following is a tool to document program logic?",
      options: [
        "Compiler",
        "Interpreter",
        "Flowchart",
        "Editor"
      ],
      answer: "Flowchart"
    },
    {
      question: "Which tool is best suited for larger problems?",
      options: [
        "Flowchart",
        "Pseudocode",
        "Structured chart",
        "All of the above"
      ],
      answer: "Pseudocode"
    },
    {
      question: "What is Pseudocode?",
      options: [
        "A visual representation of a program.",
        "A programming language.",
        "A combination of English and programming constructs.",
        "A type of chart."
      ],
      answer: "A combination of English and programming constructs."
    },
    {
      question: "What do Flowcharts use to represent different processes?",
      options: [
        "Text",
        "Symbols",
        "Code",
        "Numbers"
      ],
      answer: "Symbols"
    },
    {
      question: "What symbol is used for Input/Output operations in a flowchart?",
      options: [
        "Rectangle",
        "Diamond",
        "Parallelogram",
        "Oval"
      ],
      answer: "Parallelogram"
    },
     {
      question: "Which flowchart symbol indicates a decision?",
      options: [
        "Rectangle",
        "Diamond",
        "Parallelogram",
        "Oval"
      ],
      answer: "Diamond"
    },
    {
      question: "What does a 'Terminal' symbol in a flowchart indicate?",
      options: [
        "A process",
        "Input/Output",
        "Starting or ending of a program",
        "A subroutine"
      ],
      answer: "Starting or ending of a program"
    },
    {
      question: "What is a Programming Language?",
      options: [
        "A set of instructions",
        "A set of written symbols to instruct computer hardware",
        "A tool for problem-solving",
        "A type of algorithm"
      ],
      answer: "A set of written symbols to instruct computer hardware"
    },
    {
      question: "What is Syntax?",
      options: [
        "The meaning of the code",
        "The rules that govern the use of symbols",
        "The structure of the program",
        "The logic of the program"
      ],
      answer: "The rules that govern the use of symbols"
    },
    {
      question: "What does Semantics deal with?",
      options: [
        "The syntax of the language",
        "The structure of the program",
        "The meaning given to syntactically correct constructs",
        "The logic of the program"
      ],
      answer: "The meaning given to syntactically correct constructs"
    },
     {
      question: "Which is a category of programming language?",
      options: [
        "Middle-level languages",
        "Low-level languages",
        "User-level languages",
        "Design languages"
      ],
      answer: "Low-level languages"
    },
    {
      question: "What are Low-level languages?",
      options: [
        "Machine-independent",
        "Portable",
        "Designed to run on a particular computer",
        "Easy to understand"
      ],
      answer: "Designed to run on a particular computer"
    },
    {
      question: "Which is an example of a Low-level language?",
      options: [
        "C++",
        "Java",
        "Assembly Language",
        "Python"
      ],
      answer: "Assembly Language"
    },
    {
      question: "What are High-level languages?",
      options: [
        "Machine-dependent",
        "Not portable",
        "Can be run on a variety of computers",
        "Difficult to understand"
      ],
      answer: "Can be run on a variety of computers"
    },
    {
      question: "What is required before executing a High-level language program?",
      options: [
        "Compilation",
        "Translation to machine language",
        "Linking",
        "Loading"
      ],
      answer: "Translation to machine language"
    },
     {
      question: "What is a Compiler?",
      options: [
        "Translates code line by line",
        "Translates the entire source code before execution",
        "Executes the code directly",
        "Debugs the code"
      ],
      answer: "Translates the entire source code before execution"
    },
    {
      question: "What is an Interpreter?",
      options: [
        "Translates the entire source code before execution",
        "Translates source code one line at a time",
        "Optimizes the code",
        "Links the code"
      ],
      answer: "Translates source code one line at a time"
    },
     {
      question: "Which programming paradigm specifies a list of operations to reach the desired state?",
      options: [
        "Object-Oriented Programming",
        "Structured Programming",
        "Procedural Programming",
        "Functional Programming"
      ],
      answer: "Procedural Programming"
    },
    {
      question: "What is another name for Procedural Programming?",
      options: [
        "Declarative programming",
        "Imperative programming",
        "Logical programming",
        "Generic programming"
      ],
      answer: "Imperative programming"
    },
    {
      question: "What is a feature of Structured Programming?",
      options: [
        "Use of GOTO statement",
        "Breaking program into small, understandable pieces",
        "Focus on data structures",
        "Bottom-up approach"
      ],
      answer: "Breaking program into small, understandable pieces"
    },
     {
      question: "Which programming paradigm does NOT allow the use of the GOTO statement?",
      options: [
        "Procedural Programming",
        "Structured Programming",
        "Object-Oriented Programming",
        "All of the above"
      ],
      answer: "Structured Programming"
    },
    {
      question: "What approach is often associated with Structured Programming?",
      options: [
        "Bottom-up",
        "Top-down",
        "Middle-level",
        "Side-level"
      ],
      answer: "Top-down"
    },
    {
      question: "Which programming paradigm specifies both data structures and operations on those structures?",
      options: [
        "Procedural Programming",
        "Structured Programming",
        "Object-Oriented Programming",
        "Functional Programming"
      ],
      answer: "Object-Oriented Programming"
    },
    {
      question: "What is the first step in the compilation process of a C++ program?",
      options: [
        "Linking",
        "Compiling",
        "Editing source code",
        "Executing"
      ],
      answer: "Editing source code"
    },
     {
      question: "What is the second step in the compilation process?",
      options: [
        "Linking",
        "Compiling",
        "Editing source code",
        "Executing"
      ],
      answer: "Compiling"
    },
    {
      question: "What is the result of the compilation process?",
      options: [
        "Source code file",
        "Object code file",
        "Executable file",
        "Text file"
      ],
      answer: "Object code file"
    },
    {
      question: "What is the role of the Linker?",
      options: [
        "Translates source code",
        "Creates an executable file",
        "Loads the program into memory",
        "Executes the program"
      ],
      answer: "Creates an executable file"
    },
     {
      question: "What program copies the executable file into memory?",
      options: [
        "Compiler",
        "Linker",
        "Loader",
        "Editor"
      ],
      answer: "Loader"
    },
    {
      question: "What are Keywords?",
      options: [
        "User-defined names",
        "Reserved words with unique meaning",
        "Variables",
        "Operators"
      ],
      answer: "Reserved words with unique meaning"
    },
    {
      question: "Which is an example of a C++ Keyword?",
      options: [
        "myVar",
        "age",
        "if",
        "_name"
      ],
      answer: "if"
    },
    {
      question: "What are Identifiers?",
      options: [
        "Reserved words",
        "Names associated with functions or data objects",
        "Constant values",
        "Operators"
      ],
      answer: "Names associated with functions or data objects"
    },
     {
      question: "Which is NOT a rule for Identifiers?",
      options: [
        "Start with a letter or underscore",
        "Can start with a digit",
        "Consist of letters, digits, and underscore",
        "Cannot be a reserved word"
      ],
      answer: "Can start with a digit"
    },
    {
      question: "Which is a valid Identifier?",
      options: [
        "10age",
        "myVar",
        "int",
        "main"
      ],
      answer: "myVar"
    },
    {
      question: "What are Literals?",
      options: [
        "Variables",
        "Constant values",
        "Operators",
        "Functions"
      ],
      answer: "Constant values"
    },
     {
      question: "Which is an example of a Literal?",
      options: [
        "age",
        "10.5",
        "if",
        "main"
      ],
      answer: "10.5"
    },
    {
      question: "What are Comments?",
      options: [
        "Executable code",
        "Descriptive text for explanation",
        "Variables",
        "Operators"
      ],
      answer: "Descriptive text for explanation"
    },
    {
      question: "Are Comments ignored by the compiler?",
      options: [
        "Yes",
        "No",
        "Sometimes",
        "It depends on the comment type"
      ],
      answer: "Yes"
    },
    {
      question: "Which is a type of Comment?",
      options: [
        "Single-line comment",
        "Double-line comment",
        "Triple-line comment",
        "Block-line comment"
      ],
      answer: "Single-line comment"
    },
     {
      question: "What is a Variable?",
      options: [
        "A constant value",
        "A symbolic name for a memory location",
        "An operator",
        "A function"
      ],
      answer: "A symbolic name for a memory location"
    },
    {
      question: "Which is an Attribute of a Variable?",
      options: [
        "Scope",
        "Type",
        "Value",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What does 'Declaring a variable' mean?",
      options: [
        "Assigning a value",
        "Defining or creating a variable",
        "Changing the value",
        "Accessing the variable"
      ],
      answer: "Defining or creating a variable"
    },
    {
      question: "What is the Syntax for declaring a variable?",
      options: [
        "variable name data type;",
        "data type variable name;",
        "declare variable name : data type;",
        "variable name = data type;"
      ],
      answer: "data type variable name;"
    },
     {
      question: "What is the purpose of 'cout'?",
      options: [
        "To accept input from the user",
        "To display information to the user",
        "To perform calculations",
        "To declare variables"
      ],
      answer: "To display information to the user"
    },
    {
      question: "What type of stream is 'cout'?",
      options: [
        "Input stream",
        "Output stream",
        "Error stream",
        "File stream"
      ],
      answer: "Output stream"
    },
    {
      question: "What can 'cout' display?",
      options: [
        "Variables",
        "Literals",
        "Expressions",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of 'cin'?",
      options: [
        "To display information to the user",
        "To accept information from the user",
        "To perform calculations",
        "To declare variables"
      ],
      answer: "To accept information from the user"
    },
     {
      question: "What type of stream is 'cin'?",
      options: [
        "Input stream",
        "Output stream",
        "Error stream",
        "File stream"
      ],
      answer: "Input stream"
    },
    {
      question: "What does 'cin' require?",
      options: [
        "A variable name",
        "A literal",
        "An operator",
        "A function name"
      ],
      answer: "A variable name"
    },
    {
      question: "What is an Operator?",
      options: [
        "A variable",
        "A symbol that performs specific manipulations",
        "A data type",
        "A function"
      ],
      answer: "A symbol that performs specific manipulations"
    },
    {
      question: "Which is an Assignment Operator?",
      options: [
        "+",
        "-",
        "=",
        "*"
      ],
      answer: "="
    },
     {
      question: "Which is an Arithmetic Operator?",
      options: [
        "==",
        "!=",
        "+",
        "&&"
      ],
      answer: "+"
    },
  
        {
          question: "Which is a Relational Operator?",
          options: [
            "==",
            "!=",
            "+",
            "&&"
          ],
          answer: "=="
        },
        {
          question: "Which is a Logical Operator?",
          options: [
            "+",
            "*",
            "&&",
            "%"
          ],
          answer: "&&"
        },
        {
          question: "What is the purpose of Operators?",
          options: [
            "To declare variables",
            "To perform calculations",
            "To control program flow",
            "To define functions"
          ],
          answer: "To perform calculations"
        },
        {
          question: "What is Type Conversion?",
          options: [
            "Changing the value of a variable",
            "Converting one data type to another",
            "Declaring a variable",
            "Defining a function"
          ],
          answer: "Converting one data type to another"
        },
         {
          question: "What is Implicit Conversion?",
          options: [
            "Conversion done by the programmer",
            "Conversion done automatically by the compiler",
            "Conversion that requires a special function",
            "Conversion that is not allowed in C++"
          ],
          answer: "Conversion done automatically by the compiler"
        },
        {
          question: "What is Explicit Conversion?",
          options: [
            "Conversion done automatically by the compiler",
            "Conversion done by the programmer using a cast operator",
            "Conversion that happens implicitly",
            "Conversion that is not possible"
          ],
          answer: "Conversion done by the programmer using a cast operator"
        },
        {
          question: "What is the result of 10 / 3 (integer division)?",
          options: [
            "3.33",
            "3",
            "3.0",
            "3.00"
          ],
          answer: "3"
        },
        {
          question: "What is the result of static_cast<float>(10) / 3?",
          options: [
            "3",
            "3.33",
            "3.0",
            "3.00"
          ],
          answer: "3.33"
        },
         {
          question: "What is Control Flow?",
          options: [
            "The order in which statements are executed",
            "The data types used in a program",
            "The variables declared in a program",
            "The functions defined in a program"
          ],
          answer: "The order in which statements are executed"
        },
        {
          question: "Which statement is used for decision-making?",
          options: [
            "for",
            "while",
            "if",
            "do-while"
          ],
          answer: "if"
        },
        {
          question: "What is the purpose of the 'if' statement?",
          options: [
            "To execute a block of code repeatedly",
            "To execute a block of code only if a condition is true",
            "To define a function",
            "To declare a variable"
          ],
          answer: "To execute a block of code only if a condition is true"
        },
        {
          question: "What does the 'else' statement do?",
          options: [
            "Executes if the 'if' condition is true",
            "Executes if the 'if' condition is false",
            "Always executes",
            "Never executes"
          ],
          answer: "Executes if the 'if' condition is false"
        },
         {
          question: "What is the 'else if' statement used for?",
          options: [
            "To define a function",
            "To handle multiple conditions",
            "To loop through code",
            "To declare variables"
          ],
          answer: "To handle multiple conditions"
        },
        {
          question: "Which statement is used for multi-way selection?",
          options: [
            "if-else",
            "while",
            "switch",
            "for"
          ],
          answer: "switch"
        },
        {
          question: "What is the purpose of the 'switch' statement?",
          options: [
            "To loop through code",
            "To execute different blocks of code based on the value of a variable",
            "To define functions",
            "To declare variables"
          ],
          answer: "To execute different blocks of code based on the value of a variable"
        },
        {
          question: "What does the 'case' keyword do in a 'switch' statement?",
          options: [
            "Defines the default case",
            "Specifies a value to compare against",
            "Terminates the switch statement",
            "Declares a variable"
          ],
          answer: "Specifies a value to compare against"
        },
         {
          question: "What does the 'default' keyword do in a 'switch' statement?",
          options: [
            "Specifies a value to compare against",
            "Defines the code to execute if no 'case' matches",
            "Terminates the switch statement",
            "Declares a variable"
          ],
          answer: "Defines the code to execute if no 'case' matches"
        },
        {
          question: "What does the 'break' statement do in a 'switch' statement?",
          options: [
            "Continues to the next case",
            "Terminates the switch statement",
            "Defines the default case",
            "Declares a variable"
          ],
          answer: "Terminates the switch statement"
        },
        {
          question: "Which statement is used for looping?",
          options: [
            "if-else",
            "switch",
            "while",
            "if"
          ],
          answer: "while"
        },
        {
          question: "What is the purpose of a loop?",
          options: [
            "To make decisions",
            "To repeat a block of code",
            "To define functions",
            "To declare variables"
          ],
          answer: "To repeat a block of code"
        },
         {
          question: "Which loop checks the condition before executing the loop body?",
          options: [
            "do-while",
            "while",
            "for",
            "All of the above"
          ],
          answer: "while"
        },
        {
          question: "Which loop executes the loop body at least once?",
          options: [
            "while",
            "for",
            "do-while",
            "None of the above"
          ],
          answer: "do-while"
        },
        {
          question: "Which loop is best suited for a known number of iterations?",
          options: [
            "while",
            "do-while",
            "for",
            "if"
          ],
          answer: "for"
        },
        {
          question: "What are the three parts of a 'for' loop?",
          options: [
            "Initialization, condition, increment/decrement",
            "Condition, loop body, increment/decrement",
            "Initialization, loop body, condition",
            "Loop body, condition, initialization"
          ],
          answer: "Initialization, condition, increment/decrement"
        },
         {
          question: "What does the 'continue' statement do?",
          options: [
            "Terminates the loop",
            "Skips the rest of the current iteration",
            "Executes the loop body",
            "Declares a variable"
          ],
          answer: "Skips the rest of the current iteration"
        },
        {
          question: "What does the 'break' statement do in a loop?",
          options: [
            "Skips the rest of the current iteration",
            "Terminates the loop",
            "Executes the loop body",
            "Declares a variable"
          ],
          answer: "Terminates the loop"
        },
        {
          question: "What is a Function?",
          options: [
            "A variable",
            "A block of code that performs a specific task",
            "An operator",
            "A data type"
          ],
          answer: "A block of code that performs a specific task"
        },
        {
          question: "What is the advantage of using functions?",
          options: [
            "Code reusability",
            "Modularity",
            "Easier debugging",
            "All of the above"
          ],
          answer: "All of the above"
        },
         {
          question: "What is Function Definition?",
          options: [
            "Calling a function",
            "Writing the code for a function",
            "Declaring a function",
            "Using a function"
          ],
          answer: "Writing the code for a function"
        },
        {
          question: "What is Function Declaration?",
          options: [
            "Writing the code for a function",
            "Telling the compiler about the function's existence",
            "Calling a function",
            "Using a function"
          ],
          answer: "Telling the compiler about the function's existence"
        },
        {
          question: "What is Function Call?",
          options: [
            "Writing the code for a function",
            "Declaring a function",
            "Executing a function",
            "Defining a function"
          ],
          answer: "Executing a function"
        },
        {
          question: "What is the return type of a function?",
          options: [
            "The type of data the function returns",
            "The type of data the function takes as input",
            "The name of the function",
            "The number of arguments"
          ],
          answer: "The type of data the function returns"
        },
         {
          question: "What are Arguments?",
          options: [
            "Variables declared inside a function",
            "Values passed to a function when it is called",
            "The return type of a function",
            "The name of the function"
          ],
          answer: "Values passed to a function when it is called"
        },
        {
          question: "What are Parameters?",
          options: [
            "Values passed to a function when it is called",
            "Variables declared in the function definition",
            "The return type of a function",
            "The name of the function"
          ],
          answer: "Variables declared in the function definition"
        },
        {
          question: "What is the purpose of the 'return' statement?",
          options: [
            "To declare a variable",
            "To exit a loop",
            "To send a value back from a function",
            "To call a function"
          ],
          answer: "To send a value back from a function"
        },
        {
          question: "What is Recursion?",
          options: [
            "Calling a function from another function",
            "Calling a function from itself",
            "Defining a function",
            "Declaring a function"
          ],
          answer: "Calling a function from itself"
        },
         {
          question: "What is a Base Case in recursion?",
          options: [
            "The case that makes the recursive call",
            "The case that stops the recursion",
            "The first case in a recursive function",
            "The last case in a recursive function"
          ],
          answer: "The case that stops the recursion"
        },
        {
          question: "What is an Array?",
          options: [
            "A single value",
            "A collection of elements of the same data type",
            "A function",
            "An operator"
          ],
          answer: "A collection of elements of the same data type"
        },
        {
          question: "How are array elements accessed?",
          options: [
            "Using their values",
            "Using their index",
            "Using their names",
            "Using their data types"
          ],
          answer: "Using their index"
        },
        {
          question: "What is the index of the first element in an array?",
          options: [
            "1",
            "0",
            "-1",
            "The size of the array"
          ],
          answer: "0"
        },
         {
          question: "How do you declare an array?",
          options: [
            "data type array name;",
            "data type array name[size];",
            "array name data type[size];",
            "array name = data type;"
          ],
          answer: "data type array name[size];"
        },
        {
          question: "What is the purpose of the size in an array declaration?",
          options: [
            "To specify the data type of the array",
            "To specify the number of elements the array can hold",
            "To specify the index of the first element",
            "To specify the value of the last element"
          ],
          answer: "To specify the number of elements the array can hold"
        },
        {
          question: "What is a String?",
          options: [
            "A single character",
            "A sequence of characters",
            "A number",
            "A boolean value"
          ],
          answer: "A sequence of characters"
        },
        {
          question: "How are strings represented in C++?",
          options: [
            "Using single quotes",
            "Using double quotes",
            "Using backticks",
            "Using parentheses"
          ],
          answer: "Using double quotes"
        },
        {
          question: "What is a character array?",
          options: [
            "An array of integers",
            "An array of characters",
            "An array of strings",
            "An array of floats"
          ],
          answer: "An array of characters"
        },
         {
          question: "What is the null terminator in a C-style string?",
          options: [
            "'\\n'",
            "'\\0'",
            "' '",
            "'-1'"
          ],
          answer: "'\\0'"
        },
        {
          question: "What is the purpose of the null terminator?",
          options: [
            "To indicate the end of the string",
            "To indicate the beginning of the string",
            "To store the length of the string",
            "To store the data type of the string"
          ],
          answer: "To indicate the end of the string"
        },
        {
          question: "What is the 'string' class?",
          options: [
            "A built-in data type for strings",
            "A class for working with strings",
            "An operator for strings",
            "A function for strings"
          ],
          answer: "A class for working with strings"
        },
        {
          question: "What are String Literals?",
          options: [
            "Variables that store strings",
            "Constant strings enclosed in double quotes",
            "Functions that manipulate strings",
            "Operators that compare strings"
          ],
          answer: "Constant strings enclosed in double quotes"
        },
         {
          question: "What is the maximum size of a string literal?",
          options: [
            "No limit",
            "255 characters",
            "Depends on the compiler",
            "32767 characters"
          ],
          answer: "Depends on the compiler"
        },
        {
          question: "What is String Concatenation?",
          options: [
            "Comparing two strings",
            "Joining two strings together",
            "Reversing a string",
            "Finding the length of a string"
          ],
          answer: "Joining two strings together"
        },
        {
          question: "Which operator is used for string concatenation?",
          options: [
            "*",
            "+",
            "==",
            "%"
          ],
          answer: "+"
        },
        {
          question: "What are String Functions?",
          options: [
            "Operators that manipulate strings",
            "Built-in functions for string operations",
            "Variables that store strings",
            "Data types for strings"
          ],
          answer: "Built-in functions for string operations"
        },
         {
          question: "Which string function finds the length of a string?",
          options: [
            "length()",
            "size()",
            "strlen()",
            "All of the above (in different contexts)"
          ],
          answer: "All of the above (in different contexts)"
        },
        {
          question: "Which string function copies one string to another?",
          options: [
            "copy()",
            "strcpy()",
            "stringCopy()",
            "assign()"
          ],
          answer: "strcpy()"
        },
        {
          question: "Which string function compares two strings?",
          options: [
            "compare()",
            "strcmp()",
            "stringCmp()",
            "equals()"
          ],
          answer: "strcmp()"
        },
        {
          question: "What is the return value of strcmp() if the strings are equal?",
          options: [
            "1",
            "0",
            "-1",
            "true"
          ],
          answer: "0"
        }
      ];