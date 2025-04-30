const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Highly Texted Machine Language", "Home Tool Markup Language", "Hyperlink and Text Management Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which of the following is NOT a valid HTML tag?",
      options: ["<p>", "<div>", "<script>", "<headering>"],
      answer: "<headering>"
    },
    {
      question: "What is the purpose of CSS?",
      options: ["To define the structure of a web page", "To add interactivity to a web page", "To style the presentation of a web page", "To manage server-side operations"],
      answer: "To style the presentation of a web page"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-style", "color", "foreground-color"],
      answer: "color"
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Design Object Model", "Dynamic Object Manipulation"],
      answer: "Document Object Model"
    },
    {
      question: "Which JavaScript method is used to access an HTML element by its ID?",
      options: ["getElementByName()", "getElementByClass()", "getElementById()", "querySelector()"],
      answer: "getElementById()"
    },
    {
      question: "What is a JavaScript variable?",
      options: ["A fixed value", "A container for storing data", "A type of HTML tag", "A CSS selector"],
      answer: "A container for storing data"
    },
    {
      question: "Which of the following is a valid JavaScript data type?",
      options: ["Float", "Character", "Boolean", "Table"],
      answer: "Boolean"
    },
    {
      question: "What is a JavaScript function?",
      options: ["A way to style HTML elements", "A block of code designed to perform a specific task", "A type of loop", "A method for handling events"],
      answer: "A block of code designed to perform a specific task"
    },
    {
      question: "Which JavaScript keyword is used to declare a variable?",
      options: ["string", "variable", "var", "int"],
      answer: "var"
    },
    {
      question: "What is a JavaScript event?",
      options: ["A change in CSS style", "An action that occurs in the browser", "A way to define HTML structure", "A server-side operation"],
      answer: "An action that occurs in the browser"
    },
    {
      question: "Which JavaScript event occurs when a user clicks on an HTML element?",
      options: ["mouseover", "keydown", "click", "submit"],
      answer: "click"
    },
    {
      question: "What does BOM stand for in JavaScript?",
      options: ["Browser Object Model", "Basic Output Method", "Binary Operation Module", "Best of Mozilla"],
      answer: "Browser Object Model"
    },
    {
      question: "Which JavaScript object represents the current URL?",
      options: ["window", "document", "location", "history"],
      answer: "location"
    },
    {
      question: "What are JavaScript cookies used for?",
      options: ["Styling web pages", "Storing small amounts of data on the user's computer", "Defining HTML structure", "Handling server-side requests"],
      answer: "Storing small amounts of data on the user's computer"
    },
    {
      question: "What does PHP stand for?",
      options: ["Personal Home Page", "Hypertext Preprocessor", "Programming Hypertext Processor", "Pre Home Processor"],
      answer: "Hypertext Preprocessor"
    },
    {
      question: "Which of the following is a valid PHP comment?",
      options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "All of the above"],
      answer: "All of the above"
    },

    {
      question: "Which PHP statement is used to output text to the browser?",
      options: ["print()", "display()", "output()", "show()"],
      answer: "print()"
    },
    {
      question: "What is a PHP array?",
      options: ["A single value", "A collection of related data", "A type of function", "A way to style text"],
      answer: "A collection of related data"
    },
    {
      question: "Which PHP function is used to define a reusable block of code?",
      options: ["method()", "procedure()", "function()", "define()"],
      answer: "function()"
    },
    {
      question: "In PHP, $_POST is an example of a:",
      options: ["User-defined variable", "Predefined variable", "Constant", "Function"],
      answer: "Predefined variable"
    },
    {
      question: "What is the purpose of PHP sessions?",
      options: ["To store data on the client-side", "To maintain user state across multiple page requests", "To define the layout of a web page", "To handle database queries"],
      answer: "To maintain user state across multiple page requests"
    },
    {
      question: "Which PHP extension is commonly used for interacting with MySQL databases?",
      options: ["PDO", "MySQLi", "SQL", "Database"],
      answer: "MySQLi"
    },
    {
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
      answer: "SELECT"
    },
    {
      question: "What does AJAX stand for?",
      options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XHTML", "Application JavaScript and XML", "Automated JavaScript and XML"],
      answer: "Asynchronous JavaScript and XML"
    },
    {
      question: "Which JavaScript object is central to making AJAX requests?",
      options: ["XMLHttpRequest", "HTTPObject", "AJAXRequest", "ServerRequest"],
      answer: "XMLHttpRequest"
    },
    {
      question: "In AJAX, what is the purpose of sending a request to the server?",
      options: ["To style the web page", "To retrieve or send data without a full page reload", "To define the HTML structure", "To manage client-side events"],
      answer: "To retrieve or send data without a full page reload"
    },
    {
      question: "What is Bootstrap?",
      options: ["A server-side scripting language", "A JavaScript library for DOM manipulation", "A front-end framework for designing responsive websites", "A database management system"],
      answer: "A front-end framework for designing responsive websites"
    },
    {
      question: "What is jQuery primarily used for?",
      options: ["Server-side programming", "Database management", "Simplifying HTML DOM traversal and manipulation", "Creating animations in PHP"],
      answer: "Simplifying HTML DOM traversal and manipulation"
    },
    {
      question: "What is Node.js?",
      options: ["A JavaScript library for front-end development", "A JavaScript runtime environment for server-side development", "A CSS framework", "A database system"],
      answer: "A JavaScript runtime environment for server-side development"
    },
    {
      question: "Angular.js is a:",
      options: ["Server-side framework", "CSS preprocessor", "JavaScript framework for building web applications", "Database query language"],
      answer: "JavaScript framework for building web applications"
    },
    {
      question: "React.js is a:",
      options: ["Full-stack web framework", "JavaScript library for building user interfaces", "Server-side rendering engine", "Database management tool"],
      answer: "JavaScript library for building user interfaces"
    },
    {
      question: "What is information architecture primarily concerned with?",
      options: ["The visual design of a website", "The organization and structuring of website content", "The technical implementation of a website", "The marketing strategy of a website"],
      answer: "The organization and structuring of website content"
    },
    {
      question: "What is the purpose of web security?",
      options: ["To make websites visually appealing", "To protect websites and user data from threats", "To improve website performance", "To manage website content"],
      answer: "To protect websites and user data from threats"
    },
    {
      question: "What is cryptography theory related to in web development?",
      options: ["Styling web pages", "Securing communication and data", "Managing databases", "Improving website speed"],
      answer: "Securing communication and data"
    },
    {
      question: "What is a client-server architecture?",
      options: ["A type of database system", "A model where clients request services from servers", "A method of organizing HTML files", "A way to style web pages"],
      answer: "A model where clients request services from servers"
    },
    {
      question: "What is a static web page?",
      options: ["A page with dynamic content", "A page whose content is fixed and doesn't change with user interaction", "A page generated by server-side scripting", "A page built using only JavaScript"],
      answer: "A page whose content is fixed and doesn't change with user interaction"
    },
    {
      question: "What is a dynamic web page?",
      options: ["A page with fixed content", "A page whose content can change based on user interaction or other factors", "A page built only with HTML and CSS", "A page that doesn't use a server"],
      answer: "A page whose content can change based on user interaction or other factors"
    },
    {
      question: "What is session tracking used for?",
      options: ["Styling web pages", "Maintaining information about a user's activity across multiple requests", "Defining website structure", "Managing server hardware"],
      answer: "Maintaining information about a user's activity across multiple requests"
    },
  
    {
      question: "Which HTML tag is used to display an image?",
      options: ["<image>", "<pic>", "<img>", "<picture>"],
      answer: "<img>"
    },
    {
      question: "Which CSS property is used to set the background color of an element?",
      options: ["bg-color", "background-color", "color-background", "element-background"],
      answer: "background-color"
    },
    {
      question: "Which CSS property is used to control the spacing between lines of text?",
      options: ["text-space", "line-height", "spacing-text", "text-spacing"],
      answer: "line-height"
    },
    {
      question: "Which JavaScript method is used to write something to the console?",
      options: ["alert()", "document.write()", "console.log()", "print()"],
      answer: "console.log()"
    },
    {
      question: "What is the purpose of the JavaScript 'if...else' statement?",
      options: ["To define a function", "To repeat a block of code", "To execute different code blocks based on a condition", "To declare a variable"],
      answer: "To execute different code blocks based on a condition"
    },
    {
      question: "Which JavaScript loop is used to iterate over the elements of an array?",
      options: ["while loop", "do...while loop", "for loop", "switch statement"],
      answer: "for loop"
    },
    {
      question: "In JavaScript, what is an object?",
      options: ["A primitive data type", "A collection of key-value pairs", "A type of function", "A way to style HTML"],
      answer: "A collection of key-value pairs"
    },
    {
      question: "Which JavaScript method is used to add a new element to the end of an array?",
      options: ["add()", "push()", "append()", "insert()"],
      answer: "push()"
    },
      {
      question: "Which JavaScript method is used to remove the last element from an array?",
      options: ["pop()", "remove()", "deleteLast()", "slice()"],
      answer: "pop()"
    },
    {
      question: "Which JavaScript method is used to find the length of a string?",
      options: ["length()", "stringLength()", "size()", "count()"],
      answer: "length"
    },
    {
      question: "What is the purpose of JavaScript timing events?",
      options: ["To style web pages", "To handle user input", "To execute code at specific intervals or after a delay", "To perform mathematical calculations"],
      answer: "To execute code at specific intervals or after a delay"
    },
    {
      question: "Which JavaScript method is used to set a timer that executes a function once after a specified delay?",
      options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
      answer: "setTimeout()"
    },
    {
      question: "What is the JavaScript DOM (Document Object Model)?",
      options: ["A way to style HTML", "A programming interface for HTML and XML documents", "A database management system", "A server-side scripting language"],
      answer: "A programming interface for HTML and XML documents"
    },
    {
      question: "Which JavaScript property is used to get the inner HTML content of an element?",
      options: ["innerHTML", "textContent", "elementContent", "htmlValue"],
      answer: "innerHTML"
    },
    {
      question: "Which JavaScript method is used to add an event listener to an element?",
      options: ["attachEvent()", "listenEvent()", "addEventListener()", "onEvent()"],
      answer: "addEventListener()"
    },
    {
      question: "What is exception handling in JavaScript?",
      options: ["A way to style web pages", "A mechanism to deal with errors during program execution", "A method for defining functions", "A technique for optimizing code"],
      answer: "A mechanism to deal with errors during program execution"
    },
    {
      question: "Which JavaScript statement is used to handle exceptions?",
      options: ["if...else", "for loop", "try...catch", "switch"],
      answer: "try...catch"
    },
    {
      question: "What is the JavaScript BOM (Browser Object Model)?",
      options: ["A way to style web pages", "An interface for interacting with the browser window", "A method for defining HTML structure", "A server-side technology"],
      answer: "An interface for interacting with the browser window"
    },
    {
      question: "Which JavaScript object represents the browser's history?",
      options: ["window", "document", "location", "history"],
      answer: "history"
    },
    {
      question: "What is the purpose of JavaScript cookies?",
      options: ["Styling web pages", "Storing small amounts of data on the user's computer", "Defining HTML structure", "Handling server-side requests"],
      answer: "Storing small amounts of data on the user's computer"
    },
    {
      question: "What are PHP sessions used for?",
      options: ["Storing data on the client-side", "Maintaining user state across multiple page requests", "Defining the layout of a web page", "Handling database queries"],
      answer: "Maintaining user state across multiple page requests"
    },
    {
      question: "Which PHP superglobal variable is used to access session data?",
      options: ["$_COOKIE", "$_GET", "$_POST", "$_SESSION"],
      answer: "$_SESSION"
    },
    {
      question: "What is MySQL?",
      options: ["A server-side scripting language", "A front-end framework", "A relational database management system", "A JavaScript library"],
      answer: "A relational database management system"
    },
    {
      question: "Which SQL command is used to insert new data into a database table?",
      options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
      answer: "INSERT"
    },
    {
      question: "In PHP, which function is used to connect to a MySQL database?",
      options: ["connect_db()", "mysql_connect()", "mysqli_connect()", "db_connect()"],
      answer: "mysqli_connect()"
    },
    {
      question: "Which PHP function is used to execute a SQL query?",
      options: ["execute_query()", "run_sql()", "mysqli_query()", "query()"],
      answer: "mysqli_query()"
    },
    {
      question: "What is the purpose of PHP file handling functions?",
      options: ["To style web pages", "To read from and write to files on the server", "To define HTML structure", "To handle database connections"],
      answer: "To read from and write to files on the server"
    },
    {
      question: "Which PHP function is used to open a file?",
      options: ["file_open()", "open_file()", "fopen()", "open()"],
      answer: "fopen()"
    },
    {
      question: "What is OOP in PHP?",
      options: ["A way to style web pages", "Object-Oriented Programming", "A method for defining functions", "A technique for optimizing code"],
      answer: "Object-Oriented Programming"
    },
    {
      question: "In OOP, what is a class?",
      options: ["An instance of an object", "A blueprint for creating objects", "A type of variable", "A way to define functions"],
      answer: "A blueprint for creating objects"
    },
    {
      question: "What is an object in OOP?",
      options: ["A blueprint for creating classes", "An instance of a class", "A type of variable", "A way to define functions"],
      answer: "An instance of a class"
    },
    {
      question: "What is inheritance in OOP?",
      options: ["The ability of a class to inherit properties and methods from another class", "The process of creating objects", "A way to define functions", "A technique for optimizing code"],
      answer: "The ability of a class to inherit properties and methods from another class"
    },
    {
      question: "Which HTTP method is commonly used to retrieve data from a server?",
      options: ["POST", "PUT", "DELETE", "GET"],
      answer: "GET"
    },
    {
      question: "Which HTTP method is commonly used to submit data to a server?",
      options: ["GET", "PUT", "DELETE", "POST"],
      answer: "POST"
    },
  ];