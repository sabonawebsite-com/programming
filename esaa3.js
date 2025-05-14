const questions=[
    {
      question: "What is used for database security ?",
      options: [
        "data encryption",
        "a view",
        "finger print",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question: "Data security threats include:",
      options: [
        "a privacy invasion",
        "hardware protection",
        "fraudulent manipulation of data",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question: "......is responsible for using that the database remains in a consistent state despite system failure.",
      options: [
        "Storage manager",
        "Transaction manager",
        "End user",
        "Sophisticated"
      ],
      answer: "Transaction manager"
    },
    {
      question: "Prevention of access to the database by unauthorized users is referred to as:",
      options: ["Integrity", "Productivity", "Security", "Reliability"],
      answer: "Security"
    },
    {
      question: "Data integrity means:",
      options: [
        "providing first access to stored data",
        "ensuring correctness and consistency of data",
        "providing data sharing",
        "none of the above"
      ],
      answer: "ensuring correctness and consistency of data"
    },
    {
      question: "Authentication refers to :",
      options: [
        "methods of restricting user access to system",
        "controlling access to portions of database",
        "controlling the operation on the data",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question: "A Proxy server is used for which of the following?",
      options: [
        "To provide security against unauthorized users",
        "To process client requests for web pages",
        "To process client requests for database access",
        "To provide TCP/IP"
      ],
      answer: "To process client requests for web pages"
    },
    {
      question: "Passwords enable users to",
      options: [
        "get into the system quickly",
        "make efficient use of time",
        "retain confidentiality of files",
        "simplify file structures"
      ],
      answer: "retain confidentiality of files"
    },
    {
      question: "Which will not harm computer resources?",
      options: ["firewall", "Virus", "Trojan horse", "None of the above"],
      answer: "firewall"
    },
    {
      question: "A program designed to destroy data on your computer which can travel to 'infect' other computers is called a",
      options: ["disease", "torpedo", "hurricane", "virus"],
      answer: "virus"
    },
    {
      question: "Trojan-Horse programs",
      options: [
        "are legitimate programs that allow unauthorized access",
        "are hacker programs that do not show up on the system",
        "really do not usually work",
        "are usually immediately discovered"
      ],
      answer: "are legitimate programs that allow unauthorized access"
    },
    {
      question: "Technology, no longer protected by copyright, and is available to everyone, is considered to be:",
      options: ["proprietary", "open", "experimental", "in the public domain."],
      answer: "proprietary"
    },
    {
      question: "What is a backup?",
      options: [
        "Restoring the information backup",
        "An exact copy of a system's information",
        "The ability to get a system up and running in the event of a system crash or failure",
        "All of these"
      ],
      answer: "All of these"
    },
    {
      question: "A computer checks the ______ of user names and passwords for a match before granting access.",
      options: ["Website", "Network", "Backup file", "Data base"],
      answer: "Data base"
    },
    {
      question: "All of the following are examples of real security and privacy risks. EXCEPT:",
      options: ["Hackers", "Spam", "Viruses", "Identity theft"],
      answer: "Spam"
    },
    {
      question: "Security violation due to",
      options: ["malicious", "accidental", "both (a) and (b)", "none of these"],
      answer: "both (a) and (b)"
    },
    {
      question: "______ is a computer crime in which a criminal breaks into a computer system for exploring details of information etc.",
      options: ["Hacking", "Spoofing", "Eavesdropping", "Phishing"],
      answer: "Hacking"
    },
    {
      question: "What does SSL stand for?",
      options: [
        "Saving Sharing and Limits",
        "Safe, Secured and Locked",
        "Secure Socket Limbs",
        "Secure Socket Layers"
      ],
      answer: "Secure Socket Layers"
    },
    {
      question: "The security of a system can be improved by",
      options: [
        "threat monitoring",
        "audit log",
        "both (a) and (b)",
        "none of these"
      ],
      answer: "threat monitoring"
    },
    {
      question: "Which of the following would most likely NOT be a symptom of a virus?",
      options: [
        "Existing program files and icons disappear",
        "The CD-ROM stops functioning",
        "The Web browser opens to an unusual home page",
        "Odd messages or images are displayed on the screen"
      ],
      answer: "The CD-ROM stops functioning"
    },
    {
      question: "______ are viruses that are triggered by the passage of time or on a certain date.",
      options: [
        "Boot-sector viruses",
        "Macro viruses",
        "Time bombs",
        "Worms"
      ],
      answer: "Time bombs"
    },
    {
      question: "Verification of a login name and password is known as:",
      options: ["configuration", "accessibility", "authentication", "logging in"],
      answer: "configuration"
    },
    {
      question: "______ is a security protocol based on digital certificates.",
      options: [
        "Digital signature",
        "Secure sockets layer protocol",
        "Secure electronic transactions",
        "None of these"
      ],
      answer: "Secure electronic transactions"
    },
    {
      question: "Worm was made up of",
      options: ["one program", "two programs", "three programs", "all of these"],
      answer: "two programs"
    },
    {
      question: "The ability to recover and read deleted or damaged files from a criminal's computer is an example of a law enforcement specialty called:",
      options: [
        "robotics",
        "simulation",
        "computer forensics",
        "animation"
      ],
      answer: "computer forensics"
    },
    {
      question: "Firewalls are used to protect against",
      options: [
        "unauthorized Attacks",
        "virus Attacks",
        "Data Driven Attacks",
        "Fire Attacks"
      ],
      answer: "unauthorized Attacks"
    },
    {
      question: "Junk e-mail is also called",
      options: ["spam", "spoof", "sniffer script", "spool"],
      answer: "spam"
    },
    {
      question: "Nowadays, phishing has become a criminal practice of using social engineering. For which of the following ?",
      options: [
        "Social networking sites",
        "Mobile Phones",
        "E-mail",
        "Cyber cafes"
      ],
      answer: "Mobile Phones"
    },
    {
      question: "Back up of the data files will help to prevent.",
      options: [
        "loss of confidentiality",
        "duplication of data",
        "virus infection",
        "loss of data"
      ],
      answer: "loss of data"
    },
    {
      question: "What is backup?",
      options: [
        "Adding more components to your network",
        "Protecting data by copying it from the original source to a different destination",
        "Filtering old data from new data",
        "Accessing data on tape"
      ],
      answer: "Protecting data by copying it from the original source to a different destination"
    },
    {
      question: "______ can be used to minimize the risk of security breaches or viruses.",
      options: ["Firewall", "Backups", "Encryption", "Digital signature"],
      answer: "Firewall"
    },
    {
      question: "Software, such as viruses, worms and Trojan horses, that has a malicious intent is known as:",
      options: ["spyware", "adware", "spam", "malware"],
      answer: "malware"
    },
    {
      question: "A ______ sometimes called a boot sector virus, executes when a computer boots up because it resides in the boot sector of a floppy disk or the master boot record of a hard disk.",
      options: [
        "system virus",
        "Trojan horse virus",
        "file virus",
        "None of these"
      ],
      answer: "None of these"
    },
    {
      question: "The digital signature is:",
      options: [
        "A form of security for electronic records",
        "Copy",
        "Task",
        "Area"
      ],
      answer: "A form of security for electronic records"
    },
    {
      question: "A result of a computer virus can not lead to",
      options: [
        "Disk Crash",
        "Mother Board Crash",
        "Corruption of programs",
        "Deletion of files"
      ],
      answer: "Mother Board Crash"
    },
    {
      question: "______ is science that attempts to produce machines that display the same type of intelligence that humans do.",
      options: [
        "Nanoscience",
        "Nanotechnology",
        "Simulation",
        "Artificial intelligence"
      ],
      answer: "Artificial intelligence"
    },
    {
      question: "If you receive an e-mail from someone you don't know, what should you do?",
      options: [
        "Forward it to the police immediately",
        "Delete it without opening it",
        "Open it and respond to them saying you don't know them",
        "Reply and ask them for their personal information"
      ],
      answer: "Delete it without opening it"
    },
    {
      question: "Secret key is used in",
      options: [
        "Public key cryptography",
        "Symmetric cryptography",
        "Asymmetric cryptography",
        "none"
      ],
      answer: "Symmetric cryptography"
    },
    {
      question: "Is a specialized form of online identity theft.",
      options: [
        "Spoofing",
        "Unauthorized disclosure",
        "Eavesdropping",
        "Phishing"
      ],
      answer: "Phishing"
    },
    {
      question: "______ involves some one masquerading as someone else.",
      options: [
        "Spoofing",
        "Unauthorized action",
        "Eavesdropping",
        "Phishing"
      ],
      answer: "Spoofing"
    },
    {
      question: "When information about transactions is transmitted in transparent way hackers can catch the transmissions to obtain customers sensitive information. This is known as",
      options: [
        "Spoofing",
        "Unauthorized disclosure",
        "Eavesdropping",
        "Phishing"
      ],
      answer: "Unauthorized disclosure"
    },
    {
      question: "A competitor or an unhappy customer can alter a website so that it refuses services to potential clients. This is known as",
      options: [
        "Unauthorized action",
        "Unauthorized disclosure",
        "Eavesdropping",
        "Phishing"
      ],
      answer: "Unauthorized action"
    },
    {
      question: "______ can catch the transmissions to obtain customers sensitive information",
      options: ["Firewall", "Antivirus", "Hackers", "None"],
      answer: "Hackers"
    },
    {
      question: "______ is online identity theft.",
      options: [
        "Eavesdropping",
        "Phishing",
        "Spoofing",
        "None of these"
      ],
      answer: "Phishing"
    },
    {
      question: "Which of the following is not a risk in internet based transaction",
      options: [
        "eavesdropping",
        "spoofing",
        "encryption",
        "unauthorized action"
      ],
      answer: "encryption"
    },
    {
      question: "A security tool to verify the authenticity of the message and claimed identity of the sender and to verify the message integrity is",
      options: [
        "encryption",
        "firewalls",
        "digital certificates",
        "digital signature"
      ],
      answer: "digital signature"
    },
    {
      question: "______ are electronic files that are used to uniquely identify people and resources over the internet",
      options: [
        "Digital signature",
        "Digital certificate",
        "Encryption recourse",
        "None"
      ],
      answer: "Digital certificate"
    },
    {
      question: "An electronic file that uniquely identifies individuals and websites on the internet and enables secure, confidential communications.",
      options: [
        "Digital signature",
        "Digital certificates",
        "Encryption",
        "Firewalls"
      ],
      answer: "Digital certificates"
    },
    {
      question: "______ is designed to protect a person's personal information.",
      options: [
        "Data integrity",
        "Cyber law",
        "Private legislation",
        "None"
      ],
      answer: "Private legislation"
    },
    {
      question: "This acts like a gatekeeper that examines each user's identification before allowing them to enter the organization's internal networks.",
      options: [
        "Antivirus program",
        "Biometrics",
        "Fire wall",
        "none"
      ],
      answer: "Biometrics"
    },
    {
      question: "SSL is the most widely deployed",
      options: [
        "Security protocol",
        "Data encryption",
        "Cryptography",
        "None"
      ],
      answer: "Security protocol"
    },
    {
      question: "Is the process of coding and scrambling of messages to prevent unauthorized access to understanding of data being transmitted",
      options: [
        "Cryptography",
        "Encryption",
        "Security key",
        "none"
      ],
      answer: "Encryption"
    },
    {
      question: "______ is used to keep transmission private through the use of data encryption techniques:",
      options: [
        "Data encryption",
        "Cryptography",
        "Security key",
        "None"
      ],
      answer: "Cryptography"
    },
    {
      question: "The attacker monitors the data between the shoppers' computer and the server",
      options: ["Spoofing", "snoofing", "Sniffing", "none"],
      answer: "Sniffing"
    },
    {
      question: "The private content of a transaction, if unprotected, can be intercepted when it goes through the route over the internet is",
      options: [
        "spoofing",
        "Snooping",
        "sniffing",
        "eavesdropping"
      ],
      answer: "eavesdropping"
    },
    {
      question: "Creating illegitimate sites that appear to be published by established organizations are by this name",
      options: ["Spamming", "Snooping", "Phishing", "Stealing"],
      answer: "Phishing"
    },
    {
      question: "A digital signature performs a similar function to a",
      options: [
        "Thump impression",
        "Written Signature",
        "Scanning",
        "None"
      ],
      answer: "Written Signature"
    },
    {
      question: "___are often delivered to a PC through an email attachment and are often designed to do harm.",
      options: ["Viruses", "Spam", "Portals", "Email messages"],
      answer: "Viruses"
    },
    {
      question: "1 First boot sector virus is",
      options: ["Computed", "Mind", "Brain", "Elk cloner"],
      answer: "Brain"
    },
    {
      question: "2 The linking of computers with a communication system is called",
      options: ["Assembling", "Interlocking", "Pairing", "Networking"],
      answer: "Networking"
    },
    {
      question: "3 The phrase ____ describe viruses, worms, Trojan horse attack applets and attack scripts.",
      options: ["Spam", "Phishing", "Malware", "Virus"],
      answer: "Malware"
    },
    {
      question: "4 Abuse messaging systems to send unsolicited is",
      options: ["Phishing", "Adware", "Firewall", "Spam"],
      answer: "Spam"
    },
    {
      question: "5 A person who uses his or her expertise to gain access to other people’s computers to get information illegally or do damage is a",
      options: ["Hacker", "Analyst", "Spammer", "Programmer"],
      answer: "Hacker"
    },
    [
    {
      question: "6 Malicious access are unauthorized",
      options: [
        "Destruction of data",
        "Modification of data",
        "Reading of data",
        "All of these"
      ],
      answer: "Reading of data"
    },
    {
      question: "7 Encrypted passwords are used for",
      options: [
        "Security purpose",
        "Passwords list secret",
        "Faster execution",
        "Both (a) and (b)"
      ],
      answer: "Both (a) and (b)"
    },
    {
      question: "8 A firewall",
      options: [
        "Separates a network into multiple domains",
        "May need to allow http to pass",
        "Limits network access between the two security domains and maintains and logs all connections",
        "is a computer or router that sits between the trusted and untrusted"
      ],
      answer: "Separates a network into multiple domains"
    },
    {
      question: "9 Link encryption",
      options: [
        "Is used only to detect errors",
        "Cannot be used in a large network",
        "Is less secure than end-to-end encryption",
        "Is more secure than end-to-end encryption"
      ],
      answer: "Is less secure than end-to-end encryption"
    },
    {
      question: "10 A high paging rate",
      options: [
        "Always creates a slow system",
        "Is a symptom of too much processor activity",
        "Keeps the system running well",
        "May also cause a high I/O rate"
      ],
      answer: "May also cause a high I/O rate"
    },
    {
      question: "1 Stack is also called as",
      options: [
        "First in first out",
        "First in last out",
        "Last in last out",
        "Last in first out"
      ],
      answer: "Last in first out"
    },
    {
      question: "2 Any node is the path from the root to the node is called",
      options: [
        "Ancestor node",
        "Successor node",
        "Internal node",
        "None of the above"
      ],
      answer: "Ancestor node"
    },
    {
      question: "3 Which of the following is not the type of queue?",
      options: [
        "Priority queue",
        "Circular queue",
        "Single ended queue",
        "Ordinary queue"
      ],
      answer: "Single ended queue"
    },
    {
      question: "4 A graph is a collection of nodes, called ...... And line segments called arcs or that connect pair of nodes.",
      options: [
        "vertices, paths",
        "vertices, edges",
        "graph node, edges",
        "edges, vertices"
      ],
      answer: "vertices, edges"
    },
    {
      question: "5 In ........, search start at the beginning of the list and check every element in the list.",
      options: [
        "Binary search",
        "Hash Search",
        "Linear search",
        "Binary Tree search"
      ],
      answer: "Linear search"
    },
    {
      question: "6 In the traversal we process all of a vertex's descendants before we move to an adjacent vertex.",
      options: [
        "Depth Limited",
        "With First",
        "Breadth First",
        "Depth First"
      ],
      answer: "Depth First"
    },
    {
      question: "7 To represent hierarchical relationship between elements, Which data structure is suitable?",
      options: ["Graph", "Tree", "Dequeue", "Priority"],
      answer: "Tree"
    },
    {
      question: "8 Which of the following data structure is linear type?",
      options: ["Stack", "Graph", "Trees", "Binary tree"],
      answer: "Stack"
    },
    {
      question: "9 Herder node is used as sentinel in",
      options: ["Queues", "Stacks", "Graphs", "Binary tree"],
      answer: "Binary tree"
    },
    {
      question: "10 Which of the following data structure can't store the nonhomogeneous data elements?",
      options: [
        "Arrays",
        "Stacks",
        "Records",
        "None of the above"
      ],
      answer: "Arrays"
    },
    {
      question: "11 A binary search tree whose left subtree and right subtree differ in hight by at most 1 unit is called",
      options: [
        "Lemma tree",
        "Redblack tree",
        "AVL tree",
        "None of the above"
      ],
      answer: "AVL tree"
    },
    {
      question: "12 ...... is a pile in which items are added at one end and removed from the other.",
      options: ["List", "Queue", "Stack", "Array"],
      answer: "Queue"
    },
    {
      question: "13 Which of the following is non-linear data structure?",
      options: ["Trees", "Stacks", "Strings", "All of the above"],
      answer: "Trees"
    },
    {
      question: "14 The number of comparisons done by sequential search is",
      options: [
        "$(N/2)+1$",
        "$(N+1)/2$",
        "$(N-1)/2$",
        "$(N-2)/2$"
      ],
      answer: "$(N+1)/2$"
    },
    {
      question: "15 ...... is not the operation that can be performed on queue.",
      options: ["Traversal", "Insertion", "Deletion", "Retrieval"],
      answer: "Traversal"
    },
    {
      question: "16 Which is/are the application(s) of stack",
      options: [
        "Function calls",
        "Large number Arithmetic",
        "Evaluation of arithmetic expressions",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "17 Which of the following data structures are indexed structures?",
      options: [
        "Stack",
        "Linked lists",
        "Linear arrays",
        "None of the above"
      ],
      answer: "Linear arrays"
    },
    {
      question: "18 Which of the following data structure store the homogeneous data elements?",
      options: ["Lists", "Pointers", "Records", "Arrays"],
      answer: "Records"
    },
    {
      question: "19 Linear arrays are also called.......",
      options: [
        "One-dimensional array",
        "Vertical array",
        "Horizontal array",
        "All of the above"
      ],
      answer: "One-dimensional array"
    },
    {
      question: "20 A does not keep track of address of every element in the list.",
      options: ["Stack", "Queue", "String", "Linear array"],
      answer: "Linear array"
    },
    {
      question: "21 The complexity of linear search algorithm is",
      options: ["$O(n)$", "(log n)", "$0(n2)$", "O(n log n)"],
      answer: "$O(n)$"
    },
    {
      question: "22 The complexity of Binary search algorithm is",
      options: ["$O(n)$", "(log n)", "$O(n2)$", "O(n log n)"],
      answer: "(log n)"
    },
    {
      question: "23 The complexity of Bubble sort algorithm is",
      options: ["$O(n)$", "(log n)", "$O(n2)$", "O(n log n)"],
      answer: "$O(n2)$"
    },
    {
      question: "24 The complexity of merge sort algorithm is",
      options: ["$O(n)$", "(log n)", "$O(n2)$", "O(n log n)"],
      answer: "O(n log n)"
    },
    {
      question: "25 The space factor when determining the efficiency of algorithm is measured by",
      options: [
        "Counting the maximum memory needed by the algorithm",
        "Counting the minimum memory needed by the algorithm",
        "Counting the average memory needed by the algorithm",
        "Counting the maximum disk space needed by the algorithm"
      ],
      answer: "Counting the maximum memory needed by the algorithm"
    },
    {
      question: "26 The operation of processing each element in the list is known as",
      options: ["Traversal", "Inserting", "Merging", "Sorting"],
      answer: "Traversal"
    },
    {
      question: "27 Binary trees with threads are called as.",
      options: [
        "Special trees",
        "Pointer trees",
        "Threaded trees",
        "None of the above"
      ],
      answer: "Threaded trees"
    },
    {
      question: "28 In Binary trees nodes with no successor are called......",
      options: ["End nodes", "Final nodes", "Last nodes", "Terminal nodes"],
      answer: "Terminal nodes"
    },
    {
      question: "29 The depth of a complete binary tree is given by",
      options: [
        "Dn $=n~log~2n$",
        "Dn $=n~log~2n+1$",
        "Dn $=log~2n$",
        "Dn $=log~2n+1$"
      ],
      answer: "Dn $=log~2n+1$"
    },
    {
      question: "30 Every node N in a binary tree T except the root has a unique parent called the ... of N.",
      options: [
        "Predecessor",
        "Antecedents",
        "Precursor",
        "None of the above"
      ],
      answer: "Predecessor"
    },
    {
      question: "31 The in order traversal of tree will yield a sorted listing of elements of tree in....",
      options: [
        "Merging",
        "AVL Trees",
        "Binary trees",
        "Binary search trees"
      ],
      answer: "Binary search trees"
    },
    {
      question: "32 A binary tree whose every node has either zero or two children is called..",
      options: [
        "Extended binary tree",
        "Complete binary tree",
        "Binary Search tree",
        "Disjoint tree"
      ],
      answer: "Extended binary tree"
    },
    {
      question: "33 The post order traversal of a binary tree is DEBFCA. Find out the pre order traversal",
      options: ["ABFCDE", "ADBFEC", "ABDECF", "ABDCEF"],
      answer: "ABDECF"
    },
    {
      question: "34 Three standards ways of traversing a binary tree T with root R",
      options: [
        "Prefix, infix, postfix",
        "Pre-process, in-process, post-process",
        "Pre-traversal, in-traversal, post-traversal",
        "Pre-order, in-order, post-order"
      ],
      answer: "Pre-order, in-order, post-order"
    },
    {
      question: "35 A technique for direct search is",
      options: ["Hashing", "Tree Search", "Binary Search", "Linear Search"],
      answer: "Hashing"
    },
    {
      question: "36 If a node having two children is deleted from a binary tree, it is replaced by its",
      options: [
        "Preorder predecessor",
        "Inorder predecessor",
        "Inorder successor",
        "Preorder successor"
      ],
      answer: "Inorder successor"
    },
    {
      question: "37 A full binary tree with $2n+1$ nodes contain",
      options: [
        "n leaf nodes",
        "n non-leaf nodes",
        "n-1 leaf nodes",
        "n-1 non-leaf nodes"
      ],
      answer: "n non-leaf nodes"
    },
    {
      question: "38 A full binary tree with n leaves contains",
      options: [
        "n-1 nodes",
        "log2n nodes",
        "2n-1 nodes",
        "$2^{n}$ nodes"
      ],
      answer: "2n-1 nodes"
    },
    {
      question: "39 The smallest element of an array's index is called its",
      options: ["extraction", "range", "lower bound", "upper bound"],
      answer: "lower bound"
    },
    {
      question: "40 The data structure required for Breadth First Traversal on a graph is",
      options: ["queue", "stack", "array", "None of the above"],
      answer: "queue"
    },
    {
      question: "41 One can convert a binary tree into its mirror image by traversing it in",
      options: ["inorder", "preorder", "postorder", "None of the above"],
      answer: "postorder"
    },
    {
      question: "42 The data structure required to evaluate a postfix expression is",
      options: ["queue", "stack", "linked-list", "All of the above"],
      answer: "stack"
    },
    {
      question: "43 Which of the following sorting methods would be most suitable for sorting a list which is almost sorted",
      options: [
        "Insertion Sort",
        "Selection Sort",
        "Quick Sort",
        "Bubble Sort"
      ],
      answer: "Bubble Sort"
    },
    {
      question: "44 The process of accessing data stored in a serial access memory is similar to manipulating data on a",
      options: ["heap", "queue", "stack", "None of the above"],
      answer: "stack"
    },
    {
      question: "45 The postfix form of A*B+C/D is",
      options: ["ABCD+/*", "AB*CD/+", "*AB/CD+", "A*BC+/D"],
      answer: "AB*CD/+"
    },
    {
      question: "46 A linear collection of data elements where the linear node is given by means of pointer is called",
      options: [
        "linked list",
        "node list",
        "primitive list",
        "None of these"
      ],
      answer: "linked list"
    },
    {
      question: "47 Representation of data structure in memory is known as:",
      options: [
        "storage structure",
        "file structure",
        "abstract data type",
        "None of the above"
      ],
      answer: "abstract data type"
    },
    {
      question: "48 The goal of hashing is to produce a search that takes",
      options: [
        "O(1) time",
        "O(n2) time",
        "O(log n) time",
        "O(n log n) time"
      ],
      answer: "O(1) time"
    },
    {
      question: "49 The complexity of multiplying two matrices of order m*n and n*p is",
      options: ["np", "mn+p", "mn", "mnp"],
      answer: "mnp"
    },
    {
      question: "50 For an undirected graph with n vertices and e edges, the sum of the degree of each vertex is equal to",
      options: ["2n", "2e", "(e2+1)/2", "(2n-1)/2"],
      answer: "2e"
    },
    {
      question: "51 Which data structure allows deleting data elements from and inserting at rear?",
      options: [
        "Stacks",
        "Queues",
        "Dequeues",
        "Binary search tree"
      ],
      answer: "Queues"
    },
    {
      question: "52 Which data structure is used in breadth first search of a graph to hold nodes?",
      options: ["Array", "Tree", "Stack", "queue"],
      answer: "queue"
    },
    {
      question: "53 Identify the data structure which allows deletions at both ends of the list but insertion at only one end.",
      options: [
        "Stack",
        "Priority queues",
        "Output restricted qequeue",
        "Input restricted dequeue"
      ],
      answer: "Input restricted dequeue"
    },
    {
      question: "54 Which of the following data structure is non linear type?",
      options: [
        "Graph",
        "Stacks",
        "Lists",
        "None of the above"
      ],
      answer: "Graph"
    },
    {
      question: "55 In a queue, the initial values of front pointer f rare pointer r should be …….. and ……….. respectively.",
      options: ["0 and 1", "0 and -1", "-1 and 0", "1 and 0"],
      answer: "0 and -1"
    },
    {
      question: "56 There is an extra element at the head of the list called a .........",
      options: ["Sentinel", "Antinel", "List head", "List header"],
      answer: "Sentinel"
    },
   
    {
      question: "57 The property of binary tree is",
      options: [
        "The root cannot contain NULL",
        "The first subset is called left subtree",
        "The second subtree is called right subtree",
        "The right subtree can be empty"
      ],
      answer: "The right subtree can be empty"
    },
    {
      question: "58 When new data are to be inserted into a data structure, but there is not available space;  this situation is usually called .......",
      options: ["overflow", "Underflow", "housefull", "memoryfull"],
      answer: "overflow"
    },
    {
      question: "59 A data structure where elements can be added or removed at either end but not in the middle is called ......",
      options: ["stacks", "queues", "dequeue", "linked lists"],
      answer: "dequeue"
    },
    {
      question: "60 The use of pointers to refer elements of a data structure in which elements are logically adjacent is ......",
      options: ["stack", "queue", "pointers", "linked allocation"],
      answer: "linked allocation"
    },
    {
      question: "61 Binary search algorithm cannot be applied to...",
      options: [
        "pointer array",
        "sorted linear array",
        "sorted binary trees",
        "sorted linked list"
      ],
      answer: "pointer array"
    },
    {
      question: "62 ............ is the method used by card sorter?",
      options: ["Quick", "Heap", "Insertion", "Radix sort"],
      answer: "Radix sort"
    },
    {
      question: "63 Which of the following conditions checks available free space in avail list?",
      options: ["Avail=Top", "Null=Avail", "Avail=Null", "Avail=Max stack"],
      answer: "Avail=Null"
    },
    {
      question: "64 Which of the following is not the type of queue?",
      options: [
        "Priority queue",
        "Circular queue",
        "Ordinary queue",
        "Single ended queue"
      ],
      answer: "Single ended queue"
    },
    {
      question: "65 ........ is a directed tree in which outdegree of each node is less than or equal to two.",
      options: ["Binary tree", "Dinary tree", "Unary tree", "None of the above"],
      answer: "Binary tree"
    },
    {
      question: "66 The number of comparisons done by sequential search is .......",
      options: ["(N/2)-1", "(N+1)/2", "(N-1)/2", "(N+2)/2"],
      answer: "(N+1)/2"
    },
    {
      question: "67 In ......, search start at the beginning of the list and check every element in the list.",
      options: [
        "Hash Search",
        "Binary search",
        "Linear search",
        "Binary Tree search"
      ],
      answer: "Linear search"
    },
    {
      question: "68 The operation that combines the element is of A and B in a single sorted list C with n=r+s element is called.......",
      options: ["Sharing", "Merging", "Inserting", "None of the above"],
      answer: "Merging"
    },
    {
      question: "69 Which of the following is an internal sorting?",
      options: [
        "2-way Merge Sort",
        "Tape Sort",
        "Merge Sort",
        "Tree Sort"
      ],
      answer: "Tree Sort"
    },
    {
      question: "70 Which of the following is an external sorting?",
      options: [
        "Merge Sort",
        "Tree Sort",
        "Bubble Sort",
        "Insertion Sort"
      ],
      answer: "Merge Sort"
    },
    {
      question: "71 ...... is the term used to insert an element into stack?",
      options: ["Push", "Pull", "Pop", "All of the above"],
      answer: "Push"
    },
    {
      question: "72 .......... is the term used to delete an element from the stack?",
      options: ["Push", "Pull", "Pop", "All of the above"],
      answer: "Pop"
    },
    {
      question: "73 Before inserting into stack one must check the condition.........",
      options: ["Overflow", "Underflow", "Maximum elements", "Existing elements"],
      answer: "Overflow"
    },
    {
      question: "74 Deletion in the linked stack takes place by deleting........",
      options: [
        "Beginning of the list",
        "End of the list",
        "Middle of the list",
        "Node pointed by the start process."
      ],
      answer: "Node pointed by the start process."
    },
    {
      question: "75 The value of REAR is increased by 1 when.......",
      options: [
        "An element is merged in a queue",
        "An element is added in a queue",
        "An element is traversed in a queue",
        "An element is deleted in a queue"
      ],
      answer: "An element is added in a queue"
    },
    {
      question: "76 The operation of processing each element in the list is known as......",
      options: ["merging", "traversal", "inserting", "sorting"],
      answer: "traversal"
    },
    {
      question: "77 Sequential representation of binary tree uses........",
      options: [
        "Array with pointers",
        "Single linear array",
        "Two dimensional arrays",
        "Three dimensional arrays"
      ],
      answer: "Array with pointers"
    },
    {
      question: "78 In a 2-tree, nodes with 0 children are called............",
      options: ["Outer node", "Exterior node", "External node", "Outside node"],
      answer: "External node"
    },
    {
      question: "79 In a extended-binary tree nodes with 2 children are called........",
      options: ["Inner node", "Internal node", "Domestic node", "Interior node"],
      answer: "Internal node"
    },
    {
      question: "80 The line drawn from a node N of tree T to a successor is called .......",
      options: ["Route", "Arrow", "Edge", "Path"],
      answer: "Edge"
    },
    {
      question: "81 Which of the following sorting algorithms does not have a worst case running time of O(n2)?",
      options: [
        "Insertion sort",
        "Quick sort",
        "Bubble sort",
        "Merge sort"
      ],
      answer: "Merge sort"
    },
    {
      question: "82 In a circular linked list",
      options: [
        "there is no beginning and no end.",
        "components are arranged hierarchically.",
        "forward and backward traversal within the list is permitted.",
        "components are all linked together in some sequential manner."
      ],
      answer: "there is no beginning and no end."
    },
    {
      question: "83 The quick sort algorithm exploit _________ design technique",
      options: [
        "Overflow",
        "Backtracking",
        "Dynamic programming",
        "Divide and Conquer"
      ],
      answer: "Divide and Conquer"
    },
    {
      question: "84 The data structure required to check whether an expression contains balanced parenthesis is",
      options: ["Stack", "Queue", "Tree", "Array"],
      answer: "Stack"
    },
    {
      question: "85 What data structure would you mostly likely see in a nonrecursive implementation of a recursive algorithm?",
      options: ["Trees", "Linked list", "Stack", "Queue"],
      answer: "Stack"
    },
    {
      question: "86 The number of leaf nodes in a complete binary tree of depth d is",
      options: ["2d", "2d–1+1", "2d+1+1", "2d+1"],
      answer: "2d"
    },
    {
      question: "87 The pre-order and post order traversal of a Binary Tree generates the same output.  The tree can have maximum",
      options: [
        "One node",
        "Two nodes",
        "Three nodes",
        "Any number of nodes"
      ],
      answer: "One node"
    },
    {
      question: "88 A binary tree of depth “d” is an almost complete binary tree if",
      options: [
        "Each leaf in the tree is either at level “d” or at level “d–1”",
        "For any node “n” in the tree with a right descendent at level “d” all the left descendents of “n” that are leaves, are also at level “d”",
        "Both (A) & (B)",
        "None of the above"
      ],
      answer: "Both (A) & (B)"
    },
    {
      question: "89 In a binary tree a sequence of consecutive edges is called ...... A",
      options: ["Path", "Rotate", "Two-way", "Connecting lines"],
      answer: "Path"
    },
    {
      question: "90 An adjacency matrix representation of a graph cannot contain information of:",
      options: [
        "nodes",
        "edges",
        "parallel edges",
        "direction of edges"
      ],
      answer: "parallel edges"
    },
    {
      question: "91 ........ is not the operation that can be performed on queue.",
      options: ["Traversal", "Retrieval", "Deletion", "Insertion"],
      answer: "Traversal"
    },
    {
      question: "92 A linear list in which the last node points to the first node is ........",
      options: [
        "singly linked list",
        "doubly linked list",
        "circular linked list",
        "none of the above"
      ],
      answer: "circular linked list"
    },
    {
      question: "93 A linear list in which the pointer points only to the successive node is......",
      options: [
        "singly linked list",
        "circular linked list",
        "doubly linked list",
        "none of the above"
      ],
      answer: "singly linked list"
    },
    {
      question: "94 A ...... indicates the end of the list.",
      options: ["Guard", "Sentinel", "End pointer", "Last pointer"],
      answer: "Sentinel"
    },
    {
      question: "95 LLINK is the pointer pointing to the ......",
      options: [
        "head node",
        "last node",
        "successor node",
        "predecessor node"
      ],
      answer: "predecessor node"
    },
    {
      question: "96 Indexing the........ element in the list is not possible in linked lists.",
      options: ["first", "middle", "last", "All of the above"],
      answer: "middle"
    },
    {
      question: "97 A doubly linked list has .......... pointers with each node.",
      options: ["0", "1", "2", "3"],
      answer: "2"
    },
    {
      question: "98 A linear list in which each node has point to the predecessor and successors nodes is called ........",
      options: [
        "singly linked list",
        "linear linked list",
        "doubly linked list",
        "None of the above"
      ],
      answer: "doubly linked list"
    },
    {
      question: "99 RLINK is the pointer pointing to the......",
      options: [
        "last node",
        "head node",
        "successor node",
        "predecessor node"
      ],
      answer: "successor node"
    },
    {
      question: "100 In a linked list, insertion can be done as.........",
      options: ["beginning", "middle", "end", "all of the above"],
      answer: "all of the above"
    }
  ]]