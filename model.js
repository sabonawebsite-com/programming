const questions = [
    {
      question: "How many times is the phrase 'In the loop' printed when the following code is executed?\nint i, j=8;\nfor(i=0; i<j; i++, j--)\n{\nif(i%21=0) continue;\ncout << 'In the loop ' << endl;\n}",
      options: ["20", "10", "3", "2"],
      answer: "3"
    },
    {
      question: "What is the output of the following code snippet?\nint main ()\n{\nint a= 5, x = 1, y = 0, z = 4;\na = (x && y) || ++z;\nstd::cout<<z<<endl<<a;\nreturn 0;\n}",
      options: ["5\n1", "5\n2", "4\n1", "4\n2"],
      answer: "4\n2"
    },
    {
      question: "______ is a function that invokes itself?",
      options: ["Recursive function", "Inline function", "Built in function", "User defined function"],
      answer: "Recursive function"
    },
    {
      question: "Which control flow statement is represented by the flowchart shown in the figure below?",
      options: ["while loop", "do...while loop", "if...else statement", "for loop"],
      answer: "if...else statement"
    },
    {
      question: "What is the output of the following code snippet?\ndouble ph=15.3;\nif(ph<0 || ph>15)\n{\ncout<< 'Invalid PH value. ';\n}\nif(ph<=6.5)\ncout<< 'Acidic';\nelse if(ph>6.5 && ph<7.5)\ncout<< 'Neutral';\nelse\ncout<< 'Alkaline';",
      options: ["Invalid PH Value", "Neutral", "Alkaline", "Invalid PH Value. Alkaline"],
      answer: "Alkaline"
    },
    {
      question: "What will be the result after executing the following program?\nint func (int a, int b) {\na *= 5;\nb +=5;\nreturn (a + b);\n}\nvoid main() {\nint x = 9, y = 3;\ncout << 'Result = ' <<func(x, y)<<', '<<x<<', '<<y<<endl;\n}",
      options: ["12, 9, 3", "50, 9, 3", "53, 9, 3", "53, 45, 8"],
      answer: "53, 9, 3"
    },
    {
      question: "What do arrays do?",
      options: ["Hold address of a single value", "Hold one value", "Hold values of the same type under a single name", "Hold addresses of values under a single name"],
      answer: "Hold values of the same type under a single name"
    },
    {
      question: "Which of the following statement best describe relational data model?",
      options: [
        "It is a database model that allows multiple records to be linked to the same owner file.",
        "It structures data in a tree like structure using parent to child relationship.",
        "It is a database model to manage data as tuples grouped into relations",
        "It is a model that use concepts such as entities, attributes, and relationships",
        "Describe how data is stored in the computer, representing information such as record structures, record ordering, and access paths."
      ],
      answer: "It is a database model to manage data as tuples grouped into relations"
    },
    {
      question: "Which of the following constraint will violate when a data base administrator try to execute the following SQL statement?\nINSERT INTO Department (Dept_Name, Manager) VALUES (null, 107);",
      options: ["Domain constraint", "Key constraint", "Entity Integrity constraint", "Referential Integrity constraint"],
      answer: "Entity Integrity constraint"
    },
    {
      question: "Consider a relation R (A,B,C,D) with set of functional dependencies F={CID,CIB,BIC}. Which of the following statement is true about R?",
      options: [
        "The relation R is in second normal form",
        "The relation R is in third normal form",
        "The candidate key for R is BC",
        "The relation R is in second normal form",
        "None"
      ],
      answer: "None"
    },
    {
      question: "Which schema of the three-schema Architecture describe the structure of the whole database?",
      options: ["Internal schema", "Conceptual schema", "External schema", "schema"],
      answer: "Conceptual schema"
    },
    {
      question: "Which of the following is the disadvantage of a database approach?",
      options: ["Data consistency", "Sharing of data", "Improved data integrity", "Increased concurrency"],
      answer: "Increased concurrency"
    },
    {
      question: "Which of the following is a correct statement about relation? (Choose all that applies)",
      options: [
        "Values of each columns is a repeating group/array",
        "Values in a column can be from different domain",
        "A relation is in the 1NF",
        "Two rows in a relational table can be identical",
        "The sequence of columns and rows is insignificant",
        "None"
      ],
      answer: "The sequence of columns and rows is insignificant"
    },
    {
      question: "Which of the following statement is correct about executing the following SQL query on the employee database given in question 2?\nSELECT Emp_ID, First_Name, Last_Name\nFROM Employee E, Department D\nWHERE Department <> 'Sales' and AVG (salary) > 35000 and E.Department=D.Dept_Name\nGROUP BY Department;",
      options: [
        "the query will execute successfully and will obtain all departments with an average salary higher than 35,000",
        "the query will not execute because Department attribute in Group by statement was not included in the select statement list",
        "the query will not execute because we can't include aggregate function in the where statement",
        "the query will execute successfully and will obtain employees of all departments with an average salary higher than 35,000"
      ],
      answer: "the query will not execute because we can't include aggregate function in the where statement"
    },
    {
      question: "In which database security measure is aggregate data are accessible to users by hiding details from users:",
      options: ["Inference control", "Access control", "Integrity control"],
      answer: "Inference control"
    },
    {
      question: "Which of the following query optimization technique used to modify the internal representation of query?",
      options: [
        "Systematically estimation",
        "Semantic query optimization",
        "Cost Estimation",
        "Heuristic rules",
        "A and C"
      ],
      answer: "Heuristic rules"
    },
    {
      question: "Which of the following is not true about locks?",
      options: [
        "Locks with large granularity are easier for the DBMS to administer.",
        "Locks with small granularity cause more conflicts.",
        "Locks with large granularity produce fewer details for the DBMS to track.",
        "Locks may have a table-level granularity.",
        "Locks may have a database-level granularity."
      ],
      answer: "Locks with small granularity cause more conflicts."
    },
    {
      question: "For every transaction T participating in the schedule, if all the operations of T are executed consecutively in the schedule. The schedule is",
      options: [
        "Cascaded schedule",
        "Serial schedule",
        "Cascadeless schedule",
        "Recoverable schedule",
        "None"
      ],
      answer: "Serial schedule"
    },
    {
      question: "A transaction property state about changes applied to the database by a committed transaction must persist in the database?",
      options: [
        "Isolation",
        "Durability or permanency",
        "Atomicity",
        "Consistency preservation",
        "None"
      ],
      answer: "Durability or permanency"
    },
    {
      question: "If a transaction does not modify the database until it has committed, it is said to use the ______ technique.",
      options: ["Undo", "Immediate-modification", "Late-modification", "Deferred-modification"],
      answer: "Deferred-modification"
    },
    {
      question: "Which one of the following is false?",
      options: [
        "In object-oriented database, data are stored as collections of rows and tables",
        "In relational database, data are perceived by users as tables",
        "Object oriented database allows object identification and communication",
        "Object oriented database allows reusability of objects",
        "None of the above"
      ],
      answer: "In object-oriented database, data are stored as collections of rows and tables"
    },
    {
      question: "Which of the following is correct about software product in the context of software engineering?",
      options: [
        "Software product refers any software created to meet the client's requirements.",
        "Software product includes design nd test documentation.",
        "Software product includes requirement specifications, and user manuals.",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "One of the followings is type of requirements associated with quality features of a software.",
      options: [
        "Business requirements",
        "Non-functional requirements",
        "Functional requirements",
        "User requirements"
      ],
      answer: "Non-functional requirements"
    },
    {
      question: "A type of requirement that describes why the software project is needed and used to define the objective of the software is ______.",
      options: [
        "Business requirements",
        "Non-functional requirements",
        "Functional requirements",
        "User requirements"
      ],
      answer: "Business requirements"
    },
    {
      question: "Which of the following is used to model the functionality of software?",
      options: ["Use case diagram", "Class diagram", "E-R diagram", "Deployment diagram"],
      answer: "Use case diagram"
    },
    {
      question: "Which of the following refers to the deployment platform?",
      options: ["Use case", "Layer", "Tier", "Component"],
      answer: "Tier"
    },
    {
      question: "Which of the following process model is not suitable to accommodate changes?",
      options: ["Waterfall", "Scrum", "RAD", "Agile"],
      answer: "Waterfall"
    },
    {
      question: "Which of the following aims to find errors?",
      options: ["Requirement Analysis", "Design", "Testing", "None of the above"],
      answer: "Testing"
    },
    {
      question: "Which of the following will work if you want to create a table which looks like the following?\n| 12 | -9 | 8 |\n| 7   | 14  |    |\n| -32 | -1 | 0 |",
      options: [
        "double[][] table = {12, -9, 8, 7, 14, -32, -1, 0};",
        "double[][] table = {{12,-9,8}, {7,14,0}, {-32,-1,0}};",
        "double[][] table = {{12,-9,8} {7,14} {-32,-1,0}};",
        "double[][] table = {{12,-9,8},{7,14},{-32,-1,0}};"
      ],
      answer: "double[][] table = {{12,-9,8},{7,14},{-32,-1,0}};"
    },
    {
      question: "Which of the following is a good candidate to be static?",
      options: [
        "The PI field of a circle class",
        "A method that displays the salary of an Employee class",
        "A method that calculates the hypotenuse of a right-angle triangle class",
        "A name field of a Student class",
        "All except B"
      ],
      answer: "The PI field of a circle class"
    },
    {
      question: "What is true for the accessModifier?",
      options: [
        "It must always be private or public.",
        "It can be omitted, but if not omitted it must be private or public.",
        "It can be omitted, but if not omitted there are several choices, including private and public",
        "The access modifier must agree with the type of the return value.",
        "All of the above"
      ],
      answer: "It can be omitted, but if not omitted there are several choices, including private and public"
    },
    {
      question: "What is the output of the following Java code?\nclass FinalExam{\nint num1;\npublic FinalExam() {\nnum1 = 4;\n}\nvoid display() {\nSystem.out.println(num1);\n}\n}\nclass Final1 extends FinalExam{\nint num=3;\npublic Final1() {\nthis(5);\nnum1 = num;\n}\npublic Final1(int num) {\nthis.num = num * num;\n}\n}\npublic class Main{\npublic static void main(String[] args){\nFinal1 f = new final1();\nf.display();\n}",
      options: ["4", "25", "12", "20"],
      answer: "4"
    },
    {
      question: "Which one of the following is important to implement dynamic Polymorphism?",
      options: ["Polymorphic variable", "Inheritance", "Method overriding", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What must a non-abstract child do about an abstract method in its parent class?",
      options: [
        "A child must override an abstract method inherited from its parent by defining a method with the same signature and same return type",
        "A child must define an additional method similar to the one inherited from its parent by defining a method with the same signature and different return type.",
        "A child must not define any method with the same signature as the parent's abstract method.",
        "A non-abstract child must define an abstract method with the same signature and same return type as the parent's abstract method.",
        "All of the above"
      ],
      answer: "A child must override an abstract method inherited from its parent by defining a method with the same signature and same return type"
    },
    {
      question: "Which of the following is true?",
      options: [
        "A child class can extend a parent or implement an interface, but not do both.",
        "A child class can extend just one parent and can implement just one interface.",
        "A child class can extend just one parent and can implement zero or more interfaces.",
        "A child class can extend zero or more parents, and can implement zero or more interfaces."
      ],
      answer: "A child class can extend just one parent and can implement zero or more interfaces."
    },
    {
      question: "In computers, subtraction is carried out generally by_____.",
      options: [
        "1's complement method",
        "2's complement method",
        "signed magnitude method",
        "BCD subtraction method"
      ],
      answer: "2's complement method"
    },
    {
      question: "Pick the different",
      options: ["Decoder", "Multiplexer", "Encoder", "Shift Register"],
      answer: "Shift Register"
    },
    {
      question: "An operation performed on the contents of a register is known as",
      options: ["Instruction code", "Micro-operation", "Accumulator", "Register"],
      answer: "Micro-operation"
    },
    {
      question: "Which one is true about RISC computers?",
      options: [
        "RISC are with few numbers of registers when compared to CISC",
        "RISC use complex and efficient machine instructions when compared to CISC",
        "RISC is with hardwired control unit with pipelining processing",
        "RISC uses extensive addressing capabilities for memory operations",
        "None"
      ],
      answer: "RISC is with hardwired control unit with pipelining processing"
    },
    {
      question: "Which of the following is not a basic element within the microprocessor?",
      options: [
        "Microcontroller",
        "Arithmetic logic unit (ALU)",
        "Register array",
        "Control unit"
      ],
      answer: "Microcontroller"
    },
    {
      question: "Which method bypasses the CPU for certain types of data transfer?",
      options: [
        "Software interrupts",
        "Interrupt-driven I/O",
        "Polled I/O",
        "Direct memory access (DMA)"
      ],
      answer: "Direct memory access (DMA)"
    },
    {
      question: "Which bus is bidirectional?",
      options: ["Address bus", "Data bus", "Control bus", "None of the above"],
      answer: "Data bus"
    },
    {
      question: "Error detection, Error Correction and Flow Control tasks are performed on which layers of the OSI reference model ______? (Choose all that applies)",
      options: [
        "Application",
        "Presentation",
        "Network",
        "Transport",
        "Session",
        "Data link",
        "Physical"
      ],
      answer: "Data link"
    },
    {
      question: "Which of the following statement(s) is/are WRONG? (Choose all that applies)",
      options: [
        "Internet/Network layer is responsible for routing",
        "Physical address can be assigned by the network administrator.",
        "Physical layer is concerned with specifying the characteristics of the transmission medium, the nature of the signals and the data rate.",
        "Transport layer provides only unreliable data transmission.",
        "Network layer is responsible for host to host communication.",
        "None of the above"
      ],
      answer: "Transport layer provides only unreliable data transmission."
    },
    {
      question: "Which one of the following Medium Access Control protocols is supported by WLAN (802.11)?",
      options: ["ALOHA", "CSMA/CA", "Token Passing", "FDMA", "CSMA"],
      answer: "CSMA/CA"
    },
    {
      question: "Which one of the following network devices operates on all the layers of the OSI reference model ______?",
      options: ["Hub", "Switch", "Router", "Gateway", "Bridge"],
      answer: "Gateway"
    },
    {
      question: "Which of the following is an IP address that can be assigned for a host in your LAN?",
      options: [
        "127.0.0.0",
        "9.0.0.1",
        "192.168.1.256",
        "172.16.1.27",
        "All of the above",
        "None of the above"
      ],
      answer: "172.16.1.27"
    },
    {
      question: "Which of the following statement(s) is/are correct? (Choose all that applies)",
      options: [
        "Circuit Switching and Virtual Packet Switching methods reserve the required resources for the duration of the session during communication between end systems",
        "Circuit switching technique uses store and forward method.",
        "In message switching technique, it is not required to create a dedicated path.",
        "In circuit switching techniques, resources are allocated on demand.",
        "Packet switching is used mainly for data transmission as the delay is not uniform."
      ],
      answer: "In message switching technique, it is not required to create a dedicated path."
    },
    {
      question: "Which information is not correct about the IP address 172.16.35.72/27?",
      options: [
        "172.16.35.64 is one of the subnet addresses.",
        "The default mask for the network is 255.255.0.0.",
        "It is Class B address.",
        "The number of bits used for the host address is 5.",
        "The broadcast address of the second subnet is 172.16.35.255"
      ],
      answer: "The broadcast address of the second subnet is 172.16.35.255"
    },
    {
      question: "Consider an implementation of unsorted singly linked list with a start pointer only. Given the representation, which of the following operation can be implemented in O(1) time?",
      options: [
        "Insertion at the front of the linked list",
        "Insertion at the end of the linked list",
        "Deletion of the front node of the linked list",
        "Deletion of the last node of the linked list",
        "A & C"
      ],
      answer: "A & C"
    },
    {
      question: "Given the following C++ function, what is the Big O of code?\nint function( int n )\n{\nint a,n;\ncout<<'Enter a positive integer \\n';\nfor ( int i = 1; i < n; i *= 2 )\na = i;\nreturn 0;\n}",
      options: ["nlogn", "n^", "logn", "n"],
      answer: "logn"
    },
    {
      question: "Which of the following data structure is more appropriate to represent a heap tree?",
      options: [
        "Two dimensional array",
        "Linear array",
        "Doubly linked list",
        "Single linked list"
      ],
      answer: "Linear array"
    },
    {
      question: "Linear search is highly inefficient compare to binary search when dealing with ______?",
      options: [
        "Small, unsorted arrays",
        "Large, sorted arrays",
        "Small, sorted arrays",
        "Large, unsorted arrays"
      ],
      answer: "Large, sorted arrays"
    },
    {
      question: "Implementing stack, the elements after pop(); push(9); are:",
      options: [
        "9, 11, 13, 15, 17, 19",
        "13, 15, 17, 19, 21, 9",
        "11, 13, 15, 17, 19, 9",
        "9, 13, 15, 17, 19, 21"
      ],
      answer: "11, 13, 15, 17, 19, 9"
    },
    {
      question: "Implementing queue, the elements after dequeue(); and enqueu(9); are:",
      options: [
        "9, 11, 13, 15, 17, 19",
        "13, 15, 17, 19, 21, 9",
        "11, 13, 15, 17, 19, 9",
        "Queue overflow"
      ],
      answer: "13, 15, 17, 19, 21, 9"
    },
    {
      question: "Implementing circular queue, the elements after dequeue(); and enqueue(9); are:",
      options: [
        "9, 11, 13, 15, 17, 19",
        "13, 15, 17, 19, 21, 9",
        "11, 13, 15, 17, 19, 9",
        "9, 13, 15, 17, 19, 21"
      ],
      answer: "13, 15, 17, 19, 21, 9"
    },
    {
      question: "Which one of the following is false?",
      options: [
        "A web browser is a software that runs on a server",
        "A user agent renders resources for a user to view",
        "A website is a collection of resources in various forms",
        "A web page is the basic unit of information storage on the www"
      ],
      answer: "A web browser is a software that runs on a server"
    },
    {
      question: "Which one of the following is false about HTTP protocol?",
      options: [
        "It is a stateless protocol",
        "An HTTP message body can be empty",
        "It is a protocol used for communication between a web browser and a web server",
        "None of the above"
      ],
      answer: "None of the above"
    },
    {
      question: "Which one of the following is the correct syntax for document type declaration in HTML5?",
      options: [
        "<doctype html>",
        "<!doctype html>",
        "</doctype html>",
        "All of the above"
      ],
      answer: "<!doctype html>"
    },
    {
      question: "In HTML, how do we create a link to another site?",
      options: [
        '<a href="http://www.somedomain.com">click here</a>',
        '<a url="http://www.somedomain.com">click here</a>',
        '<a link="http://www.somedomain.com">click here</a>',
        '<a "http://www.somedomain.com">click here</a>'
      ],
      answer: '<a href="http://www.somedomain.com">click here</a>'
    },
    {
      question: "Which one of the following form attribute is used to assign the server side script file that processes the form data?",
      options: ["method", "target", "action", "autocomplete"],
      answer: "action"
    },
    {
      question: "What would be the output of the following javascript code?\n<script type='text/javascript'>\nx=4+'4';\ndocument.write(x);\n</script>",
      options: ["44", "8", "4", "The code contains an error"],
      answer: "44"
    },
    {
      question: "What will be the output of the following PHP code?\n<?php\n$color = 'maroon';\n$var = $color[2];\necho '$var';\n?>",
      options: ["a", "Error", "var", "r"],
      answer: "r"
    },
    {
      question: "In PHP, which function initiates a session?",
      options: ["start()", "s_start()", "session_start()", "session_str()"],
      answer: "session_start()"
    },
    {
      question: "In php, which one of the following is a super global varible?",
      options: ["$_GET", "$_POST", "$_SERVER", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "One is not the goal of I/O software",
      options: [
        "Buffering",
        "Device independence",
        "Uniform naming",
        "Error handling",
        "None of the above"
      ],
      answer: "None of the above"
    },
    {
      question: "Hardware device that maps physical address to logical address is",
      options: ["MMU", "IRQ", "DMA", "Cache", "Relocation Register"],
      answer: "MMU"
    },
    {
      question: "In terms of speed and storage utilization,",
      options: [
        "First fit algorithm is better",
        "Best fit algorithm is better",
        "Worst fit algorithm is better",
        "All of the above"
      ],
      answer: "First fit algorithm is better"
    },
    {
      question: "Assuming process execution time is known in advance, for which of the following algorithm(s) can the maximum wait time for a given process be computed at the time the job is submitted?",
      options: [
        "Shortest job first",
        "Shortest remaining time",
        "Priority based",
        "Round Robin",
        "All of the above"
      ],
      answer: "Shortest job first"
    },
    {
      question: "One is not a problem caused by concurrency of processes",
      options: [
        "Race condition",
        "Starvation",
        "Deadlock",
        "Mutual exclusion",
        "None"
      ],
      answer: "None"
    },
    {
      question: "Which of the following methods can be used to recover deadlock",
      options: [
        "Kill the process",
        "Rollback",
        "Non-preempt the resource",
        "Lock the process"
      ],
      answer: "Kill the process"
    },
    {
      question: "One deadlock prevention method says, 'if a process must wait for a needed resource, it drops all of its previously held resources and tries to acquire all resources gain.' These attacks",
      options: [
        "Circular wait condition",
        "No preemption conditions",
        "Mutual exclusion condition",
        "Hold and wait condition",
        "None of the above"
      ],
      answer: "Hold and wait condition"
    },
    {
      question: "The data structure used in the standard implementation of Breadth First Search is______?",
      options: ["Stack", "Array", "Linked List", "Queue"],
      answer: "Queue"
    },
    {
      question: "The data structure used in the standard implementation of Depth First Search is ______?",
      options: ["Stack", "Array", "Linked List", "Queue"],
      answer: "Stack"
    },
    {
      question: "Recursion is a method in which the solution of a problem depends on ______.",
      options: [
        "Larger instances of different problems",
        "Larger instances of the same problem",
        "Smaller instances of the same problem",
        "Smaller instances of different problems"
      ],
      answer: "Smaller instances of the same problem"
    },
    {
      question: "In recursion, the condition for which the function will stop calling itself is ______.",
      options: [
        "Best case",
        "Worst case",
        "Base case",
        "There is no such condition"
      ],
      answer: "Base case"
    },
    {
      question: "If an optimal solution can be created for a problem by constructing optimal solutions for its subproblems, the problem possesses ______ property.",
      options: [
        "Overlapping subproblems",
        "Optimal substructure",
        "Memoization",
        "Greedy"
      ],
      answer: "Optimal substructure"
    },
    {
      question: "If a problem can be broken into subproblems that are reused several times, the problem possesses ______ property.",
      options: [
        "Overlapping subproblems",
        "Optimal substructure",
        "Memoization",
        "Greedy"
      ],
      answer: "Overlapping subproblems"
    },
    {
      question: "If a problem can be solved by combining optimal solutions to non-overlapping problems, the strategy is called ______.",
      options: [
        "Dynamic programming",
        "Greedy",
        "Divide and conquer",
        "Recursion"
      ],
      answer: "Divide and conquer"
    },
    {
      question: "Among the following which kind of algorithm is used in the Game tree to make decisions of win/Lose?",
      options: [
        "Depth First Search",
        "Breadth First Search Algorithm",
        "Heuristic Search Algorithm",
        "Min/Max Algorithm",
        "Greedy Search Algorithm"
      ],
      answer: "Min/Max Algorithm"
    },
    {
      question: "Agents' behavior can be best described by ______.",
      options: [
        "Perception sequence",
        "Agent function",
        "Sensors and Actuators",
        "Environment in which agent is performing"
      ],
      answer: "Agent function"
    },
    {
      question: "Which type of agent deals with happy and unhappy states?",
      options: [
        "Simple reflex agent",
        "Model based agent",
        "Utility based agent",
        "Learning agent"
      ],
      answer: "Utility based agent"
    },
    {
      question: "What is the purpose of 'Agent' in Artificial Intelligence?",
      options: [
        "Mapping of goal sequence to an action",
        "Work without the direct interference of the people",
        "Mapping of environment sequence to an action",
        "Mapping of precept sequence to an action"
      ],
      answer: "Mapping of precept sequence to an action"
    },
    {
      question: "Which of the following is also called as exploratory learning?",
      options: [
        "Supervised learning",
        "Active learning",
        "Unsupervised learning",
        "Reinforcement learning",
        "None of the Above"
      ],
      answer: "Reinforcement learning"
    },
    {
      question: "Suppose the predicate F(x, y, t) is used to represent the statement that person x can fool person y at time t, which one of the statements below expresses best the meaning of the formula ∀x∃y∃t(¬F(x, y, t))?",
      options: [
        "Everyone can fool some person at some time",
        "Everyone cannot fool some person all the time",
        "No one can fool some person at some time",
        "No one can fool everyone all the time"
      ],
      answer: "No one can fool everyone all the time"
    },
    {
      question: "What one is the main challenge/s of NLP?",
      options: [
        "Handling Tokenization",
        "Handling Ambiguity of Sentences",
        "Handling POS-Tagging",
        "Handling Semantics of Sentences",
        "All of the mentioned"
      ],
      answer: "All of the mentioned"
    },
    {
      question: "Based on the predefined policy of Network management, controlling access to the network is the task of",
      options: [
        "Fault Management",
        "Performance Management",
        "Security Management",
        "Configuration Management",
        "None"
      ],
      answer: "Security Management"
    },
    {
      question: "A Unix utility which used for checking and repairing file system inconsistencies.",
      options: ["init", "halt", "initial", "fsck"],
      answer: "fsck"
    },
    {
      question: "Which one of the following authentication procedures is bounded to user's body?",
      options: [
        "One-factor authentication",
        "Two-factor authentication",
        "Three-factor authentication",
        "Forth-factor authentication"
      ],
      answer: "Three-factor authentication"
    },
    {
      question: "A PC obtains its IP address from a DHCP server. If the PC is taken off the network for repair, what happens to the IP address configuration?",
      options: [
        "The configuration is permanent and nothing changes.",
        "The address lease is automatically renewed until the PC is returned.",
        "The address is returned to the pool for reuse when the lease expires",
        "The configuration is held by the server to be reissued when the PC is returned.",
        "None of the above"
      ],
      answer: "The address is returned to the pool for reuse when the lease expires"
    },
    {
      question: "Which command in Microsoft Windows will allow you to verify your IP address, subnet mask, default gateway, and MAC address?",
      options: [
        "C:>ipconfig",
        "C:>ipstatus",
        "C:>ipconfig /all",
        "C:>ping",
        "None of the above"
      ],
      answer: "C:>ipconfig /all"
    },
    {
      question: "A system that monitors traffic into and out of a network and automatically alerts personnel when suspicious traffic patterns occur, indicating a possible unauthorized intrusion attempt is called a (n) ______.",
      options: [
        "IDS",
        "Firewall",
        "Router",
        "Anti-Virus Software",
        "None of the above"
      ],
      answer: "IDS"
    },
    {
      question: "You are the administrator of an active directory domain. A user complains to you that he is unable to change his password. No other users have this issue. What is the most likely cause of the problem?",
      options: [
        "Insufficient login credentials",
        "He is a member of the Administrators group",
        "He is not a member of the domain",
        "The property 'User cannot change password' has been enabled when it was created"
      ],
      answer: "The property 'User cannot change password' has been enabled when it was created"
    },
    {
      question: "Which one of the following languages over alphabet {0, 1} is described by the regular expression (0+1)*0(0+1)*0(0+1)*",
      options: [
        "Strings with substring 00",
        "Strings with at least two 0's",
        "Strings with at most two 0's",
        "Strings with postfix 1."
      ],
      answer: "Strings with at least two 0's"
    },
    {
      question: "Transition function in FSA maps which pair?",
      options: [
        "Q and Σ to Σ",
        "Q and Q to Σ",
        "Σ and Σ to Q",
        "Q and Σ to Q"
      ],
      answer: "Q and Σ to Q"
    },
    {
      question: "A grammar has the following productions:\nA → aB | bA | bBa\nB → bB | cA | b\n\nWhich one of the following strings is in the language generated by the grammar?",
      options: [
        "abbcabbbcbbbcbaaa",
        "bcbbbcabbbcbaa",
        "acbcbbbbbcaa",
        "bbbbcbbbbbcab"
      ],
      answer: "bcbbbcabbbcbaa"
    },
    {
        question: "When we can say two grammars are equivalent?",
        options: [
          "When the languages represented by both grammars are the same",
          "When the language derived from one of the grammars become the subset of the other",
          "When the alphabets of the two grammars are the same",
          "When a single string is member of the language represented by both grammars"
        ],
        answer: "When the languages represented by both grammars are the same"
      },
      {
        question: "If L1 and L2 are two regular languages, which one of the following is true",
        options: [
          "L1U L2 is a regular language only if the empty string is not a member",
          "L1* is the same with L2* and are both regular languages",
          "L1L2 is also a regular language",
          "L1\r\nR is a regular language  and is equivalent to L1"
        ],
        answer: "L1L2 is also a regular language"
      },
      {
        question: "Let G = {N, T, P, S} be a grammar where:\n N={S, A}, T={ 0, 1}, S={S} and P = {S→ 11S | 0A | 1A, A→ 0 | 1 | 0S}.\nWhich one of the following is a sentential form?",
        options: ["111011110S", "11111101", "0000111001AS", "00001110A"],
        answer: "11111101"
      },
      {
        question: "Which one of the following properties of a graph represents the derivation steps performed  to generate a valid string?",
        options: ["Root of the graph", "Degree of the vertex", "Path of a vertex from the root", "Parent vertex"],
        answer: "Path of a vertex from the root"
      }
]