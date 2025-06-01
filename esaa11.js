const questions = [
    {
        question: "What is an operating system?",
        options: [
            "interface between the hardware and application programs",
            "collection of programs that manages hardware resources",
            "system service provider to the application programs",
            "all of the mentioned"
        ],
        answer: "all of the mentioned"
    },
    {
        question: "What is the main function of the command interpreter?",
        options: [
            "to provide the interface between the API and application program",
            "to handle the files in the operating system",
            "to get and execute the next user-specified command",
            "none of the mentioned"
        ],
        answer: "to get and execute the next user-specified command"
    },
    {
        question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        options: [
            "Priority",
            "Round Robin",
            "Shortest Job First",
            "All of the mentioned"
        ],
        answer: "All of the mentioned"
    },
    {
        question: "To access the services of the operating system, the interface is provided by the ______",
        options: [
            "Library",
            "System calls",
            "Assembly instructions",
            "API"
        ],
        answer: "System calls"
    },
    {
        question: "CPU scheduling is the basis of ______",
        options: [
            "multiprogramming operating systems",
            "larger memory sized systems",
            "multiprocessor systems",
            "none of the mentioned"
        ],
        answer: "multiprogramming operating systems"
    },
    {
        question: "Which one of the following errors will be handle by the operating system?",
        options: [
            "lack of paper in printer",
            "connection failure in the network",
            "power failure",
            "all of the mentioned"
        ],
        answer: "all of the mentioned"
    },
    {
        question: "Who is credited with developing the first widely used operating system?",
        options: [
            "Charles Babbage",
            "Alan Turing",
            "Tim Berners-Lee",
            "Dennis Ritchie"
        ],
        answer: "Dennis Ritchie"
    },
    {
        question: "Which operating system was developed by Microsoft as a successor to MS-DOS?",
        options: [
            "macOS",
            "Windows",
            "Linux",
            "Solaris"
        ],
        answer: "Windows"
    },
    {
        question: "Which operating system was the first to introduce multitasking, allowing multiple programs to run simultaneously?",
        options: [
            "MS-DOS",
            "macOS",
            "Windows",
            "UNIX"
        ],
        answer: "UNIX"
    },
    {
        question: "Which operating system was developed by Linus Torvalds and is based on the UNIX operating system?",
        options: [
            "Linux",
            "Windows",
            "macOS",
            "Solaris"
        ],
        answer: "Linux"
    },
    {
        question: "Which operating system was developed by Sun Microsystems and is known for its scalability and reliability?",
        options: [
            "Linux",
            "Windows",
            "macOS",
            "Solaris"
        ],
        answer: "Solaris"
    },
    {
        question: "Which operating system is the foundation for most mobile devices, including smartphones and tablets?",
        options: [
            "iOS",
            "Android",
            "Windows Phone",
            "BlackBerry OS"
        ],
        answer: "Android"
    },
    {
        question: "Which generation of computers used vacuum tubes as their primary electronic component?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "First Generation"
    },
    {
        question: "Which generation of computers utilized transistors for electronic circuitry?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Second Generation"
    },
    {
        question: "Which generation of computers introduced high-level programming languages?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Third Generation"
    },
    {
        question: "Which generation of computers introduced the concept of stored program architecture?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "First Generation"
    },
    {
        question: "Which generation of computers saw the development of integrated circuits?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Third Generation"
    },
    {
        question: "Which generation of computers witnessed the use of magnetic core memory?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Second Generation"
    },
    {
        question: "Which generation of computers introduced the use of operating systems?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Third Generation"
    },
    {
        question: "Which generation of computers featured improved speed and performance compared to previous generations?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Fourth Generation"
    },
    {
        question: "Which generation of computers introduced the use of microprocessors?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Fourth Generation"
    },
    {
        question: "Which generation of computers is characterized by the development of personal computers?",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
        ],
        answer: "Fourth Generation"
    },
    {
        question: "What is the primary function of a kernel in an operating system?",
        options: [
            "Provide a user-friendly interface",
            "Manage system resources and provide core services",
            "Run user applications",
            "Facilitate communication with external devices"
        ],
        answer: "Manage system resources and provide core services"
    },
    {
        question: "Which component of an operating system is responsible for memory management and process scheduling?",
        options: [
            "Kernel",
            "User program",
            "Compiler",
            "File system"
        ],
        answer: "Kernel"
    },
    {
        question: "Which of the following is typically executed in kernel mode?",
        options: [
            "User programs",
            "Device drivers",
            "Text editors",
            "Web browsers"
        ],
        answer: "Device drivers"
    },
    {
        question: "User programs run in which mode of operation?",
        options: [
            "Kernel mode",
            "Supervisor mode",
            "User mode",
            "Protected mode"
        ],
        answer: "User mode"
    },
    {
        question: "Which part of the operating system is responsible for handling file system operations?",
        options: [
            "Kernel",
            "User program",
            "Device driver",
            "Compiler"
        ],
        answer: "Kernel"
    },
    {
        question: "The kernel is loaded into which part of the computer's memory?",
        options: [
            "RAM",
            "Hard disk",
            "CPU cache",
            "ROM"
        ],
        answer: "RAM"
    },
    {
        question: "Which of the following is an example of a user program?",
        options: [
            "Device driver",
            "Antivirus software",
            "Disk partition manager",
            "Interrupt handler"
        ],
        answer: "Antivirus software"
    },
    {
        question: "Which component of an operating system interacts directly with hardware devices?",
        options: [
            "Kernel",
            "User program",
            "Compiler",
            "File system"
        ],
        answer: "Kernel"
    },
    {
        question: "Which mode provides higher privileges and access to system resources in an operating system?",
        options: [
            "Kernel mode",
            "User mode",
            "Supervisor mode",
            "Protected mode"
        ],
        answer: "Kernel mode"
    },
    {
        question: "Which of the following is responsible for handling system calls made by user programs?",
        options: [
            "Kernel",
            "User program",
            "Compiler",
            "File system"
        ],
        answer: "Kernel"
    },
    {
        question: "Which of the following is not JavaScript Data Types?",
        options: [
            "Undefined",
            "Number",
            "Boolean",
            "Float"
        ],
        answer: "Float"
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Netscape",
            "Bell Labs",
            "Sun Microsystems",
            "IBM"
        ],
        answer: "Netscape"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "<script>",
            "<head>",
            "<meta>",
            "<style>"
        ],
        answer: "<script>"
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        options: [
            "It can not Handling dates and time.",
            "JavaScript is a object-based scripting language.",
            "JavaScript is not interpreter based scripting language.",
            "All of the above"
        ],
        answer: "JavaScript is a object-based scripting language."
    },
    {
        question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        options: [
            'document.getElementById("letsfindcourse").innerHTML = "I am a letsfindcourse";',
            'document.getElementById("letsfindcourse").innerHTML = "I am a letsfindcourse";',
            'document.getElementById("letsfindcourse") = "I am a letsfindcourse";',
            'document.getElementById("letsfindcourse").innerHTML = I am a letsfindcourse;'
        ],
        answer: 'document.getElementById("letsfindcourse").innerHTML = "I am a letsfindcourse";'
    },
    {
        question: "Which of the following are advantages of JavaScript?",
        options: [
            "Less server interaction",
            "Increased interactivity",
            "Richer interfaces",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which of the following true about JavaScript?",
        options: [
            "Client-side JavaScript does not allow the reading or writing of files",
            "JavaScript cannot be used for networking applications",
            "JavaScript doesn't have any multi-threading or multiprocessor capabilities",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Microsoft has developed a popular HTML editor called?",
        options: [
            "Dreamweaver",
            "FrontPage",
            "HomeSite",
            "Macromedia"
        ],
        answer: "FrontPage"
    },
    {
        question: "HomeSite 5 is a well-liked HTML and JavaScript editor from Macromedia.",
        options: [
            "True",
            "False",
            "Can be true or false",
            "Cannot say"
        ],
        answer: "True"
    },
    {
        question: "JavaScript ignores?",
        options: [
            "spaces",
            "tabs",
            "newlines",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "JavaScript is designed for following purpose -",
        options: [
            "to style HTML pages",
            "to execute Queries related to databases on a server",
            "to add interactivity to html pages",
            "All of the above"
        ],
        answer: "to add interactivity to html pages"
    },
    {
        question: "What will be the output of the following JavaScript code? var string1 = 'Letsfindcourse'; var intvalue = 30; alert (string1 + intvalue );",
        options: [
            "Letsfindcourse 30",
            "30",
            "Letsfindcourse30",
            "Exception"
        ],
        answer: "Letsfindcourse30"
    },
    {
        question: "Among the following, which one is a ternary operator in JavaScript?",
        options: [
            "#",
            "::",
            "&:",
            "?:"
        ],
        answer: "?:"
    },
    {
        question: "What are the three important manipulations done in a for loop on a loop variable in JavaScript?",
        options: [
            "the initialization, the Incrementation, and update",
            "the initialization, the test, and the update",
            "the initialization, the test, and Incrementation",
            "All of the above"
        ],
        answer: "the initialization, the test, and the update"
    },
    {
        question: "What does JavaScript use instead of == and !=?",
        options: [
            "It uses bitwise checking",
            "It uses === and !== instead",
            "It uses equals() and notequals() instead",
            "It uses equalto()"
        ],
        answer: "It uses === and !== instead"
    },
    {
        question: "What should appear at the very end of your JavaScript? The <script language='javascript'> tag",
        options: [
            "<script>",
            "</script>",
            "</script language='javascript'>",
            "All of the above"
        ],
        answer: "</script>"
    },
    {
        question: "Among the keywords below, which one is not a statement?",
        options: [
            "if",
            "with",
            "debugger",
            "use strict"
        ],
        answer: "use strict"
    },
    {
        question: "How do we define the term Thread?",
        options: [
            "Device that controls input",
            "Variable that controls movement",
            "Controlled execution of applications",
            "None of the above"
        ],
        answer: "Controlled execution of applications"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "\\|",
            "//",
            "\\* *\\",
            "\\* */"
        ],
        answer: "//"
    },
    {
        question: "Which of them is not the looping structures in JavaScript?",
        options: [
            "for",
            "while",
            "forwhich",
            "downlie"
        ],
        answer: "forwhich"
    },
    {
        question: "What is definition of an undefined value in JavaScript?",
        options: [
            "Variable used in the code doesn't exist",
            "Variable is not assigned to any value",
            "Property doesn't exist",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What are the types of Pop up boxes available in JavaScript?",
        options: [
            "Alert",
            "Prompt",
            "Confirm",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "what is the disadvantage of using innerHTML in JavaScript?",
        options: [
            "Content cannot be replaced everywhere",
            "We can use like 'appending to innerHTML'",
            "Even if you use +=like 'innerHTML = innerHTML + 'html'' still the old content is replaced by html",
            "The entire innerHTML content is not re-parsed and build into elements, therefore its not slower"
        ],
        answer: "Even if you use +=like 'innerHTML = innerHTML + 'html'' still the old content is replaced by html"
    },
    {
        question: "What are the two basic groups of datatypes in JavaScript?",
        options: [
            "Primitive",
            "Reference types.",
            "All of the above",
            "None of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which of the following are the errors in JavaScript?",
        options: [
            "Load time errors",
            "Run time errors:",
            "Logical Errors:",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which of the following are the functional components in JavaScript?",
        options: [
            "First-class functions",
            "Encapsulated-class functions",
            "Fixed-class functions",
            "All of the above"
        ],
        answer: "First-class functions"
    },
    {
        question: "Which of the following is not the properties of screen objects in JavaScript?",
        options: [
            "AvailHeight",
            "ColorsDepth",
            "AvailWidth",
            "ColorDepth"
        ],
        answer: "ColorsDepth"
    },
    {
        question: "JavaScript string using double quotes is exactly the same as a string using single quotes?",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        question: "Find output of below code var a = '20'; var b = a = 30; document.write(a+b);",
        options: [
            "Error in Script",
            "20'30",
            "2030",
            "50"
        ],
        answer: "50"
    },
    {
        question: "What is divide by 0 in JavaScript? var a = 10; var b = 0; document.write(a/b);",
        options: [
            "Nothing is printed",
            "0 is printed",
            "Infinity is printed",
            "Some Garbage Value"
        ],
        answer: "Infinity is printed"
    },
    {
        question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
        options: [
            "pop()",
            "reduce()",
            "push()",
            "reduceRight()"
        ],
        answer: "reduceRight()"
    },
    {
        question: "What is the output of following Javascript? var a = 'letsfind'; var b = 'course'; var c = a/b; document.write(c);",
        options: [
            "letsfindcourse",
            "letsfind/course",
            "NaN",
            "None of the above"
        ],
        answer: "NaN"
    },
    {
        question: "How ++ works in JavaScript? Find output of below JavaScript code. var a = 1; document.write(a--); document.write(a);",
        options: [
            "00",
            "01",
            "11",
            "10"
        ],
        answer: "10"
    },
    {
        question: "Find output of below JavaScript addition code document.write('1 plus 1 is ' + 1 + 1);",
        options: [
            "2",
            "1 plus 1 is 2",
            "1 plus 1 is 11",
            "1 plus 1 is 1 + 1"
        ],
        answer: "1 plus 1 is 11"
    },
    {
        question: "In JavaScript, Arrays are data type. State True or False",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        question: "Does JavaScript allow exception handling?",
        options: [
            "Yes, it provides try, catch as well as throw key word for exception handling",
            "Yes, but it provides only try block",
            "Yes, but it provides only Try catch block, but does not allow throw exception",
            "No"
        ],
        answer: "Yes, it provides try, catch as well as throw key word for exception handling"
    },
    {
        question: "Which of the following method checks if its argument is not a number?",
        options: [
            "isNaN()",
            "nonNaN()",
            "NaN()",
            "None of the above"
        ],
        answer: "isNaN()"
    },
    {
        question: "What if you use parseInt() to convert a string containing decimal value?",
        options: [
            "Throws Error",
            "It returns the decimal values in string form",
            "If returns only the integer portion of the number",
            "None of the listed option"
        ],
        answer: "If returns only the integer portion of the number"
    },
    {
        question: "What is the output of below JavaScript code? alert (type of new Date() );",
        options: [
            "Throws Error",
            "object",
            "Displays Nothing",
            "Current Date"
        ],
        answer: "object"
    },
    {
        question: "What if we put ++ operator inside if condition? find the output of below code <script> var a = 10; if(a == a++) document.write(a); </script>",
        options: [
            "Error",
            "Nothing is printed",
            "10",
            "11"
        ],
        answer: "10"
    },
    {
        question: "Which of the following is true?",
        options: [
            "If onKeyDown returns false, the key-press event is cancelled.",
            "If onKeyPress returns false, the key-down event is cancelled.",
            "If onKeyDown returns false, the key-up event is cancelled.",
            "If onKeyPress returns false, the key-up event is canceled."
        ],
        answer: "If onKeyDown returns false, the key-press event is cancelled."
    },
    {
        question: "The ______ method of an Array object adds and/or removes elements from an array.",
        options: [
            "Reverse",
            "Shift",
            "Slice",
            "Splice"
        ],
        answer: "Splice"
    },
    {
        question: "The term PHP is an acronym for PHP:______.",
        options: [
            "Hypertext Preprocessor",
            "Hypertext multiprocessor",
            "Hypertext markup Preprocessor",
            "Hypertune Preprocessor"
        ],
        answer: "Hypertext Preprocessor"
    },
    {
        question: "PHP is a ______ language?",
        options: [
            "user-side scripting",
            "client-side scripting",
            "server-side scripting",
            "Both B and C"
        ],
        answer: "server-side scripting"
    },
    {
        question: "PHP files have a default file extension of ______.",
        options: [
            ".html",
            ".xml",
            ".php",
            ".hphp"
        ],
        answer: ".php"
    },
    {
        question: "Which of the following is the correct syntax of php?",
        options: [
            "<?php>",
            "<php >",
            "?php ?",
            "<?php ?>"
        ],
        answer: "<?php ?>"
    },
    {
        question: "Which of the below statements is equivalent to $sub -= $sub?",
        options: [
            "$sub = $sub",
            "$sub = $sub -$sub",
            "$sub = $sub - 1",
            "$sub = $sub - $sub – 1"
        ],
        answer: "$sub = $sub -$sub"
    },
    {
        question: "Which statement will output $lfc on the screen?",
        options: [
            'echo "$lfc";',
            'echo "$$lfc";',
            'echo "/$lfc";',
            'echo "$lfc";'
        ],
        answer: 'echo "$lfc";'
    },
    {
        question: "Which of the below symbol is a newline character?",
        options: [
            "\\r",
            "\\n",
            "/r",
            "/n"
        ],
        answer: "\\n"
    },
    {
        question: "PHP files can contain ______ code.",
        options: [
            "text",
            "HTML",
            "python",
            "Both A and B"
        ],
        answer: "Both A and B"
    },
    {
        question: "What will be the output of the following PHP code? <?php $x = 8; $y = 8.0; echo ($x === $y); ?>",
        options: [
            "8 === 8",
            "No Output",
            "1",
            "0"
        ],
        answer: "0"
    },
    {
        question: "The script that executes at the browser side is called ______",
        options: [
            "Client-side scripting",
            "Server-side scripting",
            "Both A and B",
            "None of the above"
        ],
        answer: "Client-side scripting"
    },
    {
        question: "How many ways user can print output in PHP?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "4"
    },
    {
        question: "How many return value does echo statement has?",
        options: [
            "1",
            "2",
            "3",
            "0"
        ],
        answer: "0"
    },
    {
        question: "What will be the output of the following PHP code? <?php echo 'Hello world </br> I am learning PHP at letsfindcourse'; ?>",
        options: [
            "Hello world",
            "Hello world I am learning PHP at letsfindcourse",
            "Hello world I am learning PHP at letsfindcourse",
            "Error"
        ],
        answer: "Hello world I am learning PHP at letsfindcourse"
    },
    {
        question: "What will be the output of the following PHP code? <?php $five = 5; print($five); print $five; ?>",
        options: [
            "05",
            "55",
            "50",
            "Error"
        ],
        answer: "55"
    },
    {
        question: "What will be the output of the following PHP code? <?php print('I','am','learning','php'); ?>",
        options: [
            "Iamlearningphp",
            "I am learning php",
            "Nothing",
            "error"
        ],
        answer: "error"
    },
    {
        question: "which of the following is correct echo statement?",
        options: [
            'echo "<h2>PHP is Fun!</h2>";',
            'echo "PHP is Fun!<br>";',
            'echo "PHP ", "is ", "Fun!";',
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What will be the output of the following PHP code? <?php echo 'This is <i>Letsfindcourse</i>'; ?>",
        options: [
            "This is Letsfindcourse",
            "This is Letsfindcourse(Letsfindcourse in italic)",
            "This is",
            "Error"
        ],
        answer: "This is Letsfindcourse(Letsfindcourse in italic)"
    },
    {
        question: "Any variables declared in PHP must begin with a ______?",
        options: [
            ".",
            "#",
            "&",
            "$"
        ],
        answer: "$"
    },
    {
        question: "A variable can have ______?",
        options: [
            "long descriptive names",
            "short names",
            "Both A and B",
            "None of the above"
        ],
        answer: "Both A and B"
    },
    {
        question: "A variable name can only contain ______?",
        options: [
            "alphanumeric characters",
            "underscores",
            "Both A and B",
            "None of the above"
        ],
        answer: "Both A and B"
    },
    {
        question: "Variable names in PHP must start with?",
        options: [
            "letter",
            "underscore",
            "no numbers",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "PHP variables are case-sensitive?",
        options: [
            "True",
            "False",
            "For 'sum' variable it is case-sensitive",
            "None of the above"
        ],
        answer: "True"
    },
    {
        question: "How many variable scope are there in php?",
        options: [
            "2",
            "3",
            "1",
            "4"
        ],
        answer: "3"
    },
    {
        question: "choose the incorrect variable name in php?",
        options: [
            "$_AGE",
            "$18AGE",
            "$AGE18",
            "$_AGE18"
        ],
        answer: "$18AGE"
    },
    {
        question: "A variable declared ____ has a GLOBAL SCOPE?",
        options: [
            "outside program",
            "inside function",
            "outside function",
            "None of the Above"
        ],
        answer: "outside function"
    },
    {
        question: "A variable declared ____ has a LOCAL SCOPE?",
        options: [
            "outside program",
            "inside function",
            "outside function",
            "None of the Above"
        ],
        answer: "inside function"
    },
    {
        question: "Which of the following will be output of the following code? <?php function myTest() { static $x; echo $x; } myTest(); ?>",
        options: [
            "0",
            "1",
            "No Output",
            "Error"
        ],
        answer: "No Output"
    },
    {
        question: "Which of the following is NOT a super global variable ?",
        options: [
            "$_SERVER",
            "$_GLOBAL",
            "$_GET",
            "$_POST"
        ],
        answer: "$_GLOBAL"
    },
    {
        question: "Predict the output of the following code snippet : <?php $i=10; function sample($i) { $i++; echo $i.','; } echo $i.','; GLOBAL $i; sample($i); echo $i; ?>",
        options: [
            "11,11,11",
            "10,11,11",
            "10,11,10",
            "10,10,10"
        ],
        answer: "10,11,10"
    },
    {
        question: "Can we change the value of constant during the execution of the script.",
        options: [
            "can",
            "can not",
            "depends on data type",
            "depends on variable"
        ],
        answer: "can not"
    }
];

