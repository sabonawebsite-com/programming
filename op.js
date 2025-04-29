const questions = [
    {
        question: "Which of the following is not a valid process state?",
        options: ["Ready", "Running", "Executing", "Waiting"],
        answer: "Executing"
      },
      {
        question: "Which scheduling algorithm may lead to starvation?",
        options: ["Round Robin", "FCFS", "SJF", "Multilevel Queue"],
        answer: "SJF"
      },
      {
        question: "Which condition is not required for deadlock to occur?",
        options: ["Mutual Exclusion", "Hold and Wait", "Circular Wait", "Preemption"],
        answer: "Preemption"
      },
      {
        question: "Which memory management technique suffers from internal fragmentation?",
        options: ["Paging", "Segmentation", "Contiguous allocation", "None"],
        answer: "Paging"
      },
      {
        question: "The time taken to switch from one process to another is called:",
        options: ["Scheduling time", "Switch time", "Context switch time", "Latency"],
        answer: "Context switch time"
      },
      {
        question: "Which of the following uses FIFO queue?",
        options: ["SJF", "FCFS", "Round Robin", "Priority"],
        answer: "FCFS"
      },
      {
        question: "Which of the following causes thrashing?",
        options: ["Large jobs", "High degree of multiprogramming", "Insufficient memory", "Both B and C"],
        answer: "Both B and C"
      },
      {
        question: "Which disk scheduling algorithm is the fastest?",
        options: ["FCFS", "SSTF", "SCAN", "LOOK"],
        answer: "SSTF"
      },
      {
        question: "Which of these is not a page replacement algorithm?",
        options: ["FIFO", "LRU", "Optimal", "Round Robin"],
        answer: "Round Robin"
      },
      {
        question: "Which allocation method does not suffer from external fragmentation?",
        options: ["Contiguous", "Linked", "Indexed", "None"],
        answer: "Linked"
      },
      {
        question: "Which system call is used to create a new process in Unix?",
        options: ["exec()", "create()", "fork()", "new()"],
        answer: "fork()"
      },
      {
        question: "What is the main goal of the OS in multiprogramming?",
        options: ["Reduce power consumption", "Maximize CPU utilization", "Minimize I/O usage", "Increase latency"],
        answer: "Maximize CPU utilization"
      },
      {
        question: "Which scheduling algorithm is preemptive?",
        options: ["FCFS", "SJF", "Priority", "Round Robin"],
        answer: "Round Robin"
      },
      {
        question: "The number of processes completed per unit time is called:",
        options: ["Latency", "Turnaround Time", "Throughput", "Waiting Time"],
        answer: "Throughput"
      },
      {
        question: "Which deadlock handling technique allows preemption of resources?",
        options: ["Prevention", "Avoidance", "Detection", "Recovery"],
        answer: "Recovery"
      },
      {
        question: "Which technique ensures that no two processes enter the critical section simultaneously?",
        options: ["Paging", "Semaphores", "Swapping", "Multiplexing"],
        answer: "Semaphores"
      },
      {
        question: "Which file allocation strategy is the most flexible?",
        options: ["Contiguous", "Linked", "Indexed", "All are equal"],
        answer: "Indexed"
      },
      {
        question: "What does a time-sharing OS allow?",
        options: ["One user at a time", "Multiple tasks for one user", "Multiple users simultaneously", "Only batch jobs"],
        answer: "Multiple users simultaneously"
      },
      {
        question: "Which of the following is a non-preemptive scheduling algorithm?",
        options: ["Round Robin", "SJF", "Priority", "Multilevel Queue"],
        answer: "SJF"
      },
      {
        question: "Which memory allocation method divides memory into fixed-size partitions?",
        options: ["Paging", "Segmentation", "Swapping", "Contiguous Allocation"],
        answer: "Paging"
      },
      {
        question: "Which of these is used to handle synchronization in OS?",
        options: ["Fork", "Exec", "Semaphore", "Loader"],
        answer: "Semaphore"
      },
     
        {
          question: "Depth first search always expands the ______ node in the problem representation of a search tree.",
          answer: "Deepest",
          options: ["Minimum cost", "Shallowest", "Child node", "Deepest"],
        },
        {
          question: "What kind of transmission medium is most appropriate to carry data in a computer network that is exposed to electrical interferences?",
          answer: "Coaxial cable",
          options: ["Microwave", "Optical fiber", "Unshielded twisted pair", "Coaxial cable"],
        },
        {
          question: "Which of the following is a correct syntax to create an object of interface named Animal",
          answer: "It is not supported to create an object of Animal",
          options: [
            "Animal animal = new Animal ();",
            "new Animal ();",
            "It is not supported to create an object of Animal",
            "Interface Animal animal = new Animal (0);",
          ],
        },
        {
          question: "Identify one which is preemption based algorithm when scheduling CPU:",
          answer: "RR",
          options: ["RR", "SJF", "Priority", "FCFS"],
        },
        {
          question: "What is the output of the following java program? class Flower { public Flower () { this (\"Rose \"); System.out.print(\"Flower. \"); public Flower (String name) { System.out.print(\"I am \"+name); } } public class RoseTest extends Flower { public RoseTest (){ super (); System.out.print(\"Hi there! \"); public static void main(String[] args) { Flower flower = new RoseTest(); } }",
          answer: "I am Rose Flower. Hi there!",
          options: [
            "Hi there! Rose flower I am.",
            "I am Rose Flower. Hi there!",
            "I am Flower. Rose! Hi there!",
            "Hi there! I am Rose Flower.",
          ],
        },
        {
          question: "Which of the following is true about MAC address?",
          answer: "It is commonly assigned by the manufacturer of the NIC",
          options: [
            "It is also known as logical address",
            "It is used for subnetting purpose",
            "It is represented by 128 bits",
            "It is commonly assigned by the manufacturer of the NIC",
          ],
        },
        {
          question: "One of the following is true about lexical and syntax analyzers",
          answer: "Scanner is a co-routine of parser",
          options: [
            "Scanner is a co-routine of parser",
            "Lexical analyzer works on simple recursive constructs a language",
            "Syntax analyzer works on simple none recursive constructs a language",
            "Syntax analyzer is a co-routine of lexical analyzer",
          ],
        },
        {
          question: "Which of the following is the least strong security encryption standard?",
          answer: "WEP",
          options: ["WPA", "WEP", "WPA3", "WPA2"],
        },
        {
          question: "Which component of Active Directory provides a searchable catalog of objects across multiple domains in a forest?",
          answer: "Global Catalog",
          options: ["Domain", "Domain controller", "Global Catalog", "Sites"],
        },
        {
          question: "Consider a banking application that needs to store customer information such as name, address, and account balance. A Customer class that contains private fields for these attributes is created, as well as getter and setter methods to access and modify those fields. This allows us to keep the data private and enforce business logic within the class, while still allowing other parts of the program to interact with the object through well-defined interfaces. Which one of the following object-oriented concepts well fit with this application?",
          answer: "Encapsulation",
          options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        },
        {
          question: "Type checking is one of the tasks performed by a compiler during",
          answer: "Semantic analysis",
          options: [
            "Semantic analysis",
            "Intermediate code generation",
            "Lexical analysis",
            "Syntax analysis",
          ],
        },
        {
          question: "Precedence of regular expression in decreasing order is",
          answer: "...*, +, .",
          options: ["+, a, *", "..., *, +", "*, +, .", "..., +, *"],
        },
        {
          question: "The first step of machine learning is",
          answer: "Data acquisition",
          options: ["Testing", "Modeling", "Data acquisition", "Data representation"],
        },
        {
          question: "Assume that production T -> A T*F, provided that T, *, and F are grammar symbols, is a final item of a given LR(0) item. How many grammar symbols will be popped from the parser stack?",
          answer: "6 grammar symbols",
          options: ["6 grammar symbols", "2 grammar symbols", "1 grammar symbols", "3 grammar symbols"],
        },
        {
          question: "All of the following are examples of integral data types EXCEPT",
          answer: "double",
          options: ["int", "short", "char", "double"],
        },
        {
          question: "A process stack does not contain one of the following, which one?",
          answer: "PID of child process",
          options: ["PID of child process", "Local variables", "Return addresses", "Function parameters"],
        },
        {
          question: "A web based application model that used to add, modify and access objects hieratically.",
          answer: "DOM",
          options: ["RMI", "DOM", "MVC", "RPC"],
        },
        {
          question: "One of the operating system securities that identify each user of the system and associate the executing programs with those users. Which one?",
          answer: "Authentication",
          options: ["Separation", "Confidentiality", "Authentication", "Integrity"],
        },
        {
          question: "Which one of the following applications of network is used to assign IP address to hosts automatically?",
          answer: "DHCP",
          options: ["Mailing system", "DHCP", "File transfer protocol", "DNS"],
        },
        {
          question: 'A Javascript popup box used to alert dialog displaying the text "Welcome JS" is created by calling',
          answer: 'window.alert("Welcome JS");',
          options: [
            'alert.window("Welcome JS");',
            'window("<alert> Welcome JS </alert>");',
            'window("alert = \\"Welcome JS\\"");',
            'window.alert("Welcome JS");',
          ],
        },
        {
          question: "The amortized time complexity of the dynamic array problem is?",
          answer: "O(1)",
          options: ["O(logn)", "O(nlogn)", "O(1)", "O(n)"],
        },
        {
          question: "Which of the following is not a cybercrime?",
          answer: "AES",
          options: ["Malware", "Denial of Service", "AES", "Man in the Middle"],
        },
        {
          question: "Which of the following is not essential component of a data communications system?",
          answer: "Administrator",
          options: ["Administrator", "Transmission media", "Sender", "Protocol"],
        },
        {
          question: "The relation book (title, price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list? SELECT title FROM book as B WHERE (SELECT count(*) FROM book as T WHERE T.price>B.price) < 5",
          answer: "Titles of the five most expensive books",
          options: [
            "Titles of the five most expensive books",
            "Title of the fifth most inexpensive book",
            "Titles of the four most expensive books",
            "Title of the fifth most expensive book",
          ],
        },
        {
          question: "______ allow you to specify the style of your page elements (spacing, margins, etc.) separately from the structure of your document.",
          answer: "Cascading Style Sheets",
          options: ["Session", "Style declarations", "Text Editors", "Cascading Style Sheets"],
        },
        {
          question: "What are the advantages of arrays?",
          answer: "Easier to store elements of same data type",
          options: [
            "Elements in an array cannot be sorted",
            "Index of first element of an array is 1",
            "Objects of mixed data types can be stored",
            "Easier to store elements of same data type",
          ],
        },
        {
          question: "$(a+b)^{*}$ is equivalent to",
          answer: "b*a*",
          options: ["b*a*", "$(a^{*}b^{*})^{*}$", "a*b+", "a*b*"],
        },
      
          {
            question: "Which one of the following is not an 1/0 command?",
            options: ["Status command", "Output data command", "Control command", "Issue command"],
            answer: "Issue command"
          },
          {
            question: "Which one of the following form attribute is used to assign the server side script file that processes the form data?",
            options: ["Action", "Autocomplete", "Method", "Target"],
            answer: "Action"
          },
          {
            question: "When to use the Spiral Model?",
            options: [
              "Where business modeling is clearly understood and in use.",
              "When it is too risky to develop the overall system as one block.",
              "When requirements are understood in the early stages but can change during the project's life cycle.",
              "When requirements are unstable and constantly changing."
            ],
            answer: "When requirements are unstable and constantly changing."
          },
          {
            question: "In C++, what does the cout object typically represent?",
            options: ["Standard input stream", "Keyboard input buffer", "Error output stream", "Standard output stream"],
            answer: "Standard output stream"
          },
          {
            question: "In a columnar database, data is stored:",
            options: ["Row-wise", "In a hierarchical structure", "Column-wise", "In a network model"],
            answer: "Column-wise"
          },
          {
            question: "$a\\rightarrow b$ L state transition in a Turing Machine means,",
            options: ["read a, write  and move left", "delete a, read  and move left", "write a, read b and move left", "replace b by a and move left"],
            answer: "read a, write  and move left"
          },
          {
            question: "What is a characteristic feature of round-robin scheduling in both preemptive and non- preemptive forms?",
            options: [
              "It assigns priorities to tasks based on their relative importance.",
              "It always selects the task with the shortest remaining time.",
              "It favors short tasks over long tasks.",
              "It guarantees fairness by providing each task with an equal time slice."
            ],
            answer: "It guarantees fairness by providing each task with an equal time slice."
          },
          {
            question: "Indexes in database tables speed up the",
            options: ["Read operations", "Delete operations", "Update operations", "Write operations"],
            answer: "Read operations"
          },
          {
            question: "What is the term for a named block of code that performs a specific task?",
            options: ["Condition", "Variable", "Function", "Loop"],
            answer: "Function"
          },
          {
            question: "What would be the asymptotic time complexity to add a node at the end of singly linked list, if the pointer is initially pointing to the head of the list?",
            options: ["$O(n)$", "$\\theta(1)$", "$\\theta(n)$", "$O(1)$"],
            answer: "$O(n)$"
          },
          {
            question: "Which learning technique in Al involves the use of labeled examples to train a model to make predictions or decisions?",
            options: ["Semi-supervised learning", "Unsupervised learning", "Supervised learning", "Reinforcement learning"],
            answer: "Supervised learning"
          },
          {
            question: "A PC obtains its IP address from a DHCP server. If the PC is taken off the network for repair, what happens to the IP address configuration?",
            options: [
              "The address is returned to the pool for reuse when the lease expires.",
              "The address lease is automatically renewed until the PC is returned.",
              "The configuration is held by the server to be reissued when the PC is returned",
              "The configuration is permanent and nothing changes."
            ],
            answer: "The address is returned to the pool for reuse when the lease expires."
          },
          {
            question: "The elements must be in sorted order in case of,",
            options: ["Quick search", "Selection search", "Binary search", "Linear search"],
            answer: "Binary search"
          },
          {
            question: "Which analysis case calculates the upper bound on running time of an algorithm?",
            options: ["Optimal case", "Best case", "Average case", "Worst case"],
            answer: "Worst case"
          },
          {
            question: "How are the objects organized in the HTML DOM?",
            options: ["Hierarchy", "Queue", "Stack", "Class-wise"],
            answer: "Hierarchy"
          },
          {
            question: "Which one of the following is the output of syntax analysis phase?",
            options: ["Syntax tree", "Annotated parse tree", "Abstract syntax tree", "Pattern"],
            answer: "Syntax tree"
          },
          {
            question: "What does the if-else statement allow you to do in C++?",
            options: [
              "Declare and define functions",
              "Allocate memory dynamically",
              "Execute a block of code only if a condition is true, otherwise execute another block of code",
              "Repeat a block of code multiple times"
            ],
            answer: "Execute a block of code only if a condition is true, otherwise execute another block of code"
          },
          {
            question: "One of the following is not true about the Inheritance?",
            options: [
              "The subclass can add variables, but cannot redefine them.",
              "The derived class (subclass) is allowed to add methods or redefine them.",
              "A feature that allow us to drive class from another class.",
              "Allows programmers to customize with actually modifying the original class (the superclass)."
            ],
            answer: "The subclass can add variables, but cannot redefine them."
          },
          {
            question: "Which one of the following is an efficient top-down parser?",
            options: ["Recursive-descent parser", "Shift-reduce parser", "Non-recursive predictive parser", "LR parser"],
            answer: "Non-recursive predictive parser"
          },
          {
            question: "Which objective of modern operating systems involves providing a consistent and convenient environment for running applications?",
            options: [
              "Maximizing hardware utilization",
              "Ensuring fault tolerance",
              "Providing security and protection",
              "Providing a user-friendly interface"
            ],
            answer: "Providing a user-friendly interface"
          },
          {
            question: "Which one of the following is not the concern of availability?",
            options: ["Fault tolerance", "Alteration of resources", "Usefulness of resources", "Fair allocation of resources"],
            answer: "Alteration of resources"
          },
          {
            question: "The simple strategy in which the root node is expanded first, then all the successors of the root node are expanded next, then their successors, and so on which is Expand the tree layer by layer. refers to,",
            options: ["Greedy best-first search", "Depth-first search(DFS)", "Depth limited Search(DLS)", "Breadth-first search (BFS)"],
            answer: "Breadth-first search (BFS)"
          },
          {
            question: "Person A sends a message to person B. while the message is transmitted; person C has gained an access to the message. Which category of an attack is performed by person C?",
            options: ["Modification", "Interception", "Interruption", "Fabrication"],
            answer: "Interception"
          },
          {
            question: "Which data structure is used to store information about the source program constructs?",
            options: ["2d-array", "Stack", "Tree", "Queue"],
            answer: "Tree"
          },
          {
            question: "In which network topology consists of a single line cable- called a backbone connecting all nodes on a network without intervening connected deviecs?",
            options: ["Bus", "Ring", "Star", "Mesh"],
            answer: "Bus"
          },
          {
            question: "Which database design concept is commonly used in e-commerce platforms to efficiently store and retrieve customer order information?",
            options: ["Normalization", "Denormalization", "Partitioning", "Indexing"],
            answer: "Normalization"
          },
          {
            question: "Which one of the following terms refers to the techniques used for deciphering a cipher text without any knowledge of the enciphering mechanism involved?",
            options: ["Cryptography", "Cryptology", "Cryptanalysis", "Decryption"],
            answer: "Cryptanalysis"
          },
          {
            question: "All of the followings are scheduling criteria except?",
            options: ["CPU utilization", "Min Turnaround time", "Max Throughput", "Max Response time"],
            answer: "Max Response time"
          },
          {
            question: "Given a binary search tree, which traversal type would print the values in the nodes in sorted order?",
            options: ["Pre-order", "Pre-order and Post-order", "In-order", "Post-order"],
            answer: "In-order"
          },
          {
            question: "The user who programs a computer in machine or assembly language must be aware of the following except",
            options: [
              "The register set",
              "The type of data supported by the instructions",
              "The analysis model",
              "The memory structure"
            ],
            answer: "The analysis model"
          },
          {
            question: "In computer programming, what is the purpose of control structures such as loops and conditional statements?",
            options: [
              "To control the flow of program execution",
              "To perform mathematical",
              "To define the data types used in a program",
              "To allocate memory for variables"
            ],
            answer: "To control the flow of program execution"
          },
          {
            question: "Which of the following methods can be used to refresh a webpage?",
            options: ["Location.relocate", "Window.Relocate", "Window.resefresh", "Location Reload"],
            answer: "Location Reload"
          }
        ];
        
      
    