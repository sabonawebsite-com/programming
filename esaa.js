const questions = [
    {
      question: "Lexical analysis is responsible for:",
      options: [
        "Analyzing the syntactic structure of a program",
        "Analyzing the semantics of a program",
        "Breaking the input program into meaningful tokens",
        "Generating intermediate code"
      ],
      answer: "Breaking the input program into meaningful tokens"
    },
    {
      question: "Which of the following is not a lexical token?",
      options: [
        "Identifier",
        "Operator",
        "Keyword",
        "Loop"
      ],
      answer: "Loop"
    },
    {
      question: "The process of grouping tokens into higher-level language constructs is called:",
      options: [
        "Parsing",
        "Lexing",
        "Tokenizing",
        "Compiling"
      ],
      answer: "Parsing"
    },
    {
      question: "Which of the following is not a common approach to specify lexical structures?",
      options: [
        "Regular expressions",
        "Context-free grammars",
        "Deterministic finite automata",
        "Backus-Naur Form (BNF)"
      ],
      answer: "Backus-Naur Form (BNF)"
    },
    {
      question: "The purpose of a lexer generator is to:",
      options: [
        "Generate a lexical analyzer based on regular expressions",
        "Generate an optimized parser for a given grammar",
        "Generate code for intermediate representation",
        "Generate machine code for the target architecture"
      ],
      answer: "Generate a lexical analyzer based on regular expressions"
    },
    {
      question: "The output of the lexical analysis phase is:",
      options: [
        "Abstract Syntax Tree (AST)",
        "Symbol Table",
        "Token stream",
        "Intermediate code"
      ],
      answer: "Token stream"
    },
    {
       question: "Which of the following is an example of a syntactic error?",
       options: [
         "Using an undefined variable",
         "Dividing a number by zero",
         "Forgetting to close a parenthesis",
         "Misplacing a semicolon"
       ],
       answer: "Misplacing a semicolon"
     },
     {
       question: "The purpose of a parser in compiler design is to:",
       options: [
         "Check for syntax errors and build a parse tree",
         "Generate machine code from the source program",
         "Optimize the intermediate representation",
         "Execute the program directly"
       ],
       answer: "Check for syntax errors and build a parse tree"
     },
     {
       question: "Which of the following is not a commonly used parsing technique?",
       options: [
         "Recursive descent parsing",
         "Shift-reduce parsing",
         "LR parsing",
         "Lexical analysis"
       ],
       answer: "Lexical analysis"
     },
     {
       question: "The output of the parsing phase is typically represented as a:",
       options: [
         "Symbol table",
         "Parse tree",
         "Abstract Syntax Tree (AST)",
         "Token stream"
       ],
       answer: "Abstract Syntax Tree (AST)"
     },
     {
       question: "Semantic analysis in a compiler is responsible for:",
       options: [
         "Checking for syntax errors in the program",
         "Translating the source program into machine code",
         "Analyzing the meaning of the program",
         "Generating an optimized intermediate representation"
       ],
       answer: "Analyzing the meaning of the program"
     },
     {
       question: "Which of the following is not a semantic error?",
       options: [
         "Type mismatch in an assignment statement",
         "Accessing an array out of bounds",
         "Using a reserved keyword as an identifier",
         "Missing a semicolon at the end of a statement"
       ],
       answer: "Missing a semicolon at the end of a statement"
     },
     {
       question: "The purpose of symbol table in semantic analysis is to:",
       options: [
         "Store the intermediate representation of the program",
         "Store the lexical tokens of the program",
         "Store information about variables and their types",
         "Store the parse tree of the program"
       ],
       answer: "Store information about variables and their types"
     },
     {
       question: "Type checking in semantic analysis involves:",
       options: [
         "Ensuring variables are declared before use",
         "Checking if the operands of an operator have compatible types",
         "Transforming the source program into an equivalent intermediate representation",
         "Reordering instructions for better performance"
       ],
       answer: "Checking if the operands of an operator have compatible types"
     },
     {
      question: "The final output of the compiler is usually:",
      options: [
        "The optimized source program",
        "The machine code for the target architecture",
        "The intermediate representation of the program",
        "The parse tree of the program"
      ],
      answer: "The machine code for the target architecture"
    },
    {
     question: "Lexical analysis is the process of:",
     options: [
       "Checking the syntax of a program",
       "Breaking the program into meaningful tokens",
       "Analyzing the meaning of the program",
       "Generating machine code"
     ],
     answer: "Breaking the program into meaningful tokens"
   },
   {
     question: "Which of the following is not a role of the lexer in a compiler?",
     options: [
       "Identifying keywords",
       "Removing comments from the source code",
       "Grouping characters into tokens",
       "Constructing the parse tree"
     ],
     answer: "Constructing the parse tree"
   },
   {
     question: "Regular expressions are commonly used in compiler design for:",
     options: [
       "Defining the grammar of the language",
       "Tokenizing the input program",
       "Optimizing the generated code",
       "Checking semantic errors"
     ],
     answer: "Tokenizing the input program"
   },
   {
     question: "Which of the following is not a common token category?",
     options: [
       "Identifier",
       "Operator",
       "Literal",
       "Statement"
     ],
     answer: "Statement"
   },
   {
     question: "The purpose of a symbol table in lexical analysis is to:",
     options: [
       "Store the values of constants",
       "Track the position of each token",
       "Store information about identifiers",
       "Keep track of the program's execution flow"
     ],
     answer: "Store information about identifiers"
   },
   {
     question: "A lexical analyzer generator, such as Flex, is used to:",
     options: [
       "Generate optimized machine code",
       "Perform semantic analysis",
       "Generate a lexer based on regular expressions",
       "Implement the syntax of a programming language"
     ],
     answer: "Generate a lexer based on regular expressions"
   },
   {
     question: "Which of the following is not a typical tokenization error?",
     options: [
       "Missing a semicolon at the end of a statement",
       "Using a reserved keyword as an identifier",
       "Accessing an array out of bounds",
       "Forgetting to close a parenthesis"
     ],
     answer: "Accessing an array out of bounds"
   },
   {
     question: "Which of the following statements about syntax analysis is true?",
     options: [
       "It ensures the program is free of semantic errors",
       "It analyzes the meaning of the program",
       "It checks the program's adherence to the language grammar",
       "It optimizes the generated code"
     ],
     answer: "It checks the program's adherence to the language grammar"
   },
   {
     question: "The most common technique used for syntax analysis is:",
     options: [
       "Recursive descent parsing",
       "Bottom-up parsing",
       "Top-down parsing",
       "LR parsing"
     ],
     answer: "Recursive descent parsing"
   },
   {
     question: "Which of the following is not an advantage of top-down parsing?",
     options: [
       "Simplicity of implementation",
       "Immediate error detection",
       "Handles left-recursive grammars efficiently",
       "Supports left factoring"
     ],
     answer: "Handles left-recursive grammars efficiently"
   },
   {
     question: "Which of the following is not a top-down parsing algorithm?",
     options: [
       "LL(1)",
       "LL(k)",
       "SLR(1)",
       "Predictive parsing"
     ],
     answer: "$SLR(1)$"
   },
   {
     question: "Bottom-up parsing is also known as:",
     options: [
       "Shift-reduce parsing",
       "Recursive descent parsing",
       "Top-down parsing",
       "LL(1) parsing"
     ],
     answer: "Shift-reduce parsing"
   },
   {
     question: "LR parsing is based on:",
     options: [
       "Deterministic finite automata (DFA)",
       "Non-deterministic finite automata (NFA)",
       "Pushdown automata (PDA)",
       "Turing machines"
     ],
     answer: "Pushdown automata (PDA)"
   },
   {
     question: "Which of the following parsing techniques can handle left-recursive grammars?",
     options: [
       "Recursive descent parsing",
       "LL(1) parsing",
       "LR(0) parsing",
       "SLR(1) parsing"
     ],
     answer: "Recursive descent parsing"
   },
   {
     question: "A parse tree represents:",
     options: [
       "The order of statements in the program",
       "The hierarchical structure of the program",
       "The optimized version of the program",
       "The intermediate code of the program"
     ],
     answer: "The hierarchical structure of the program"
   },
    {
      question: "Which of the following is not a valid action in shift-reduce parsing?",
      options: ["Shift", "Reduce", "Accept", "Merge"],
      answer: "Merge",
    },
    {
      question: "The operator precedence parsing technique uses:",
      options: [
        "Regular expressions",
        "Operator precedence rules",
        "Pushdown automata",
        "Deterministic finite automata",
      ],
      answer: "Operator precedence rules",
    },
    {
      question: "An ambiguous grammar:",
      options: [
        "Allows multiple parse trees for the same input",
        "Is not suitable for bottom-up parsing",
        "Leads to infinite loops during parsing",
        "Results in runtime errors",
      ],
      answer: "Allows multiple parse trees for the same input",
    },
    {
      question: "Which of the following is not a technique for resolving shift-reduce conflicts in LR parsing?",
      options: [
        "Precedence declarations",
        "Associativity declarations",
        "Operator precedence rules",
        "Lookahead symbols",
      ],
      answer: "Lookahead symbols",
    },
    {
      question: "Which of the following is not a strategy for error recovery in parsing?",
      options: ["Panic mode", "Error propagation", "Error correction", "Backtracking"],
      answer: "Error correction",
    },
    {
      question: "What is the main purpose of a compiler?",
      options: [
        "To execute a program",
        "To interpret a program",
        "To translate a program into machine code",
        "To debug a program",
      ],
      answer: "To translate a program into machine code",
    },
    {
      question: "Which of the following is not a phase of the compiler?",
      options: [
        "Lexical analysis",
        "Semantic analysis",
        "Code optimization",
        "Debugging",
      ],
      answer: "Debugging",
    },
    {
      question: "The intermediate representation used by a compiler is:",
      options: [
        "Assembly language",
        "Machine code",
        "High-level language",
        "Abstract syntax tree",
      ],
      answer: "Abstract syntax tree",
    },
    {
      question:
        "The process of converting a high-level programming language into machine code is called:",
      options: ["Compilation", "Interpretation", "Execution", "Debugging"],
      answer: "Compilation",
    },
    {
      question: "Which of the following is not a typical optimization performed by a compiler?",
      options: [
        "Loop unrolling",
        "Constant folding",
        "Dead code elimination",
        "Syntax analysis",
      ],
      answer: "Syntax analysis",
    },
    {
      question: "What is the role of the optimizer in a compiler?",
      options: [
        "To generate machine code",
        "To improve the efficiency of the generated code",
        "To check for semantic errors",
        "To interpret the program",
      ],
      answer: "To improve the efficiency of the generated code",
    },
    {
      question: "Which of the following is an example of a static analysis performed by a compiler?",
      options: [
        "Type checking",
        "Code generation",
        "Register allocation",
        "Dynamic memory allocation",
      ],
      answer: "Type checking",
    },
    {
      question: "The process of allocating registers to variables is known as:",
      options: [
        "Lexical analysis",
        "Syntax analysis",
        "Code optimization",
        "Code generation",
      ],
      answer: "Code optimization",
    },
    {
      question: "Which of the following is not a common programming language paradigm?",
      options: [
        "Imperative",
        "Functional",
        "Object-oriented",
        "Compiler-oriented",
      ],
      answer: "Compiler-oriented",
    },
    {
      question: "Which phase of the compiler detects syntax errors in the input program?",
      options: [
        "Lexical analysis",
        "Semantic analysis",
        "Syntax analysis",
        "Code generation",
      ],
      answer: "Syntax analysis",
    },
    {
      question: "What is the role of the symbol table in compiler design?",
      options: [
        "To store variable values at runtime",
        "To store intermediate code instructions",
        "To store information about identifiers and their attributes",
        "To store machine code instructions",
      ],
      answer: "To store information about identifiers and their attributes",
    },
    {
      question: "Which of the following is not a compiler optimization technique?",
      options: [
        "Loop invariant code motion",
        "Dead code elimination",
        "Debugging",
        "Common subexpression elimination",
      ],
      answer: "Debugging",
    },
    {
      question: "Which of the following is an example of a lexical error?",
      options: [
        "Mismatched parentheses",
        "Type mismatch in an expression",
        "Undefined variable reference",
        "Misspelled keyword",
      ],
      answer: "Misspelled keyword",
    },
    {
      question:
        "The process of rearranging the order of instructions to improve cache performance is known as:",
      options: [
        "Loop unrolling",
        "Loop fusion",
        "Loop interchange",
        "Loop parallelization",
      ],
      answer: "Loop interchange",
    },
    {
      question: "Which of the following statements about compiler frontends is true?",
      options: [
        "Frontends generate machine code.",
        "Frontends handle optimization.",
        "Frontends perform lexical and syntax analysis.",
        "Frontends manage memory allocation.",
      ],
      answer: "Frontends perform lexical and syntax analysis.",
    },
    {
      question: "What is the main difference between a compiler and an interpreter?",
      options: [
        "A compiler translates the entire program before execution, while an interpreter translates and executes the program line by line.",
        "A compiler generates machine code, while an interpreter executes the source code directly.",
        "A compiler is used for high-level languages, while an interpreter is used for low-level languages.",
        "A compiler is slower than an interpreter.",
      ],
      answer:
        "A compiler translates the entire program before execution, while an interpreter translates and executes the program line by line.",
    },
    {
      question: "Which of the following is not a factor that affects compiler performance?",
      options: [
        "Size of the input program",
        "Speed of the processor",
        "Complexity of the programming language",
        "Memory availability",
      ],
      answer: "Complexity of the programming language",
    },
    {
      question:
        "The process of transforming the abstract syntax tree into a lower-level representation is called:",
      options: [
        "Lexical analysis",
        "Semantic analysis",
        "Code generation",
        "Code optimization",
      ],
      answer: "Code generation",
    },
    {
      question: "Which of the following is not a common method for error handling in compilers?",
      options: [
        "Printing an error message and terminating compilation",
        "Recovering from errors and continuing compilation",
        "Ignoring errors and producing an output anyway",
        "Providing suggestions for fixing errors",
      ],
      answer: "Ignoring errors and producing an output anyway",
    },
    {
      question: "What is the role of a lexer in a compiler?",
      options: [
        "To analyze the meaning of the program",
        "To generate  machine code",

        "To break the program into tokens",
        "To handle optimization techniques",
      ],
      answer: "To break the program into tokens",
    },
    {
      question: "A ________________ is a system in which multiple computers are connected to each other to share information and resources.",
      options: [
        "Hardware",
        "Software",
        "Number system",
        "Computer network"
      ],
      answer: "Computer network"
    },
    {
      question: "NIC stands for?",
      options: [
        "Network Internal Card",
        "Network Interconnect Card",
        "Network Interface Card",
        "Network Interface Component"
      ],
      answer: "Network Interface Card"
    },
    {
      question: "A term that refers to the way in which the nodes of a network are linked together.",
      options: [
        "network",
        "topology",
        "connection",
        "interconnectivity"
      ],
      answer: "topology"
    },
    {
      question: "A topology that involves Tokens.",
      options: [
        "Star",
        "Bus",
        "Ring",
        "Daisy Chaining"
      ],
      answer: "Ring"
    },
    {
      question: "Physical or logical arrangement of network is __________",
      options: [
        "Topology",
        "Routing",
        "Networking",
        "Control"
      ],
      answer: "Topology"
    },
    {
      question: "Which network topology requires a central controller or hub?",
      options: [
        "Star",
        "Mesh",
        "Ring",
        "Bus"
      ],
      answer: "Star"
    },
    {
      question: "_______ topology requires a multipoint connection.",
      options: [
        "Star",
        "Mesh",
        "Ring",
        "Bus"
      ],
      answer: "Bus"
    },
    {
      question: "Data communication system spanning states, countries, or the whole world is ________",
      options: [
        "LAN",
        "WAN",
        "MAN",
        "PAN"
      ],
      answer: "WAN"
    },
    {
      question: "Data communication system within a building or campus is________",
      options: [
        "LAN",
        "WAN",
        "MAN",
        "PAN"
      ],
      answer: "LAN"
    },
    {
      question: "Bluetooth is an example of __________",
      options: [
        "personal area network",
        "local area network",
        "virtual private network",
        "wide area network"
      ],
      answer: "personal area network"
    },
    {
      question: "A __________ is a device that forwards packets between networks by processing the routing information included in the packet.",
      options: [
        "bridge",
        "firewall",
        "router",
        "hub"
      ],
      answer: "router"
    },
    {
      question: "The physical layer is concerned with ___________",
      options: [
        "bit-by-bit delivery",
        "process to process delivery",
        "application to application delivery",
        "port to port delivery"
      ],
      answer: "bit-by-bit delivery"
    },
    {
      question: "Which transmission media provides the highest transmission speed in a network?",
      options: [
        "coaxial cable",
        "twisted pair cable",
        "optical fiber",
        "electrical cable"
      ],
      answer: "optical fiber"
    },
    {
      question: "Bits can be sent over guided and unguided media as analog signal by ___________",
      options: [
        "digital modulation",
        "amplitude modulation",
        "frequency modulation",
        "phase modulation"
      ],
      answer: "amplitude modulation"
    },
    {
      question: "The portion of physical layer that interfaces with the media access control sublayer is called ___________",
      options: [
        "physical signalling sublayer",
        "physical data sublayer",
        "physical address sublayer",
        "physical transport sublayer"
      ],
      answer: "physical signalling sublayer"
    },
     {
      question: "The physical layer provides __________",
      options: [
        "mechanical specifications of electrical connectors and cables",
        "electrical specification of transmission line signal level",
        "specification for IR over optical fiber",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "The physical layer is responsible for __________",
      options: [
        "line coding",
        "channel coding",
        "modulation",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "The physical layer translates logical communication requests from the ______ into hardware specific operations.",
      options: [
        "data link layer",
        "network layer",
        "trasnport layer",
        "application layer"
      ],
      answer: "data link layer"
    },
    {
      question: "A single channel is shared by multiple signals by ____________",
      options: [
        "analog modulation",
        "digital modulation",
        "multiplexing",
        "phase modulation"
      ],
      answer: "multiplexing"
    },
    {
      question: "The data link layer takes the packets from _________ and encapsulates them into frames for transmission.",
      options: [
        "network layer",
        "physical layer",
        "transport layer",
        "application layer"
      ],
      answer: "network layer"
    },
    {
      question: "Wireless transmission of signals can be done via ___________",
      options: [
        "radio waves",
        "microwaves",
        "infrared",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "Which of the following tasks is not done by data link layer?",
      options: [
        "framing",
        "error control",
        "flow control",
        "channel coding"
      ],
      answer: "channel coding"
    },
    {
      question: "Which sublayer of the data link layer performs data link functions that depend upon the type of medium?",
      options: [
        "logical link control sublayer",
        "media access control sublayer",
        "network interface control sublayer",
        "error control sublayer"
      ],
      answer: "media access control sublayer"
    },
    {
      question: "Header of a frame generally contains ______________",
      options: [
        "synchronization bytes",
        "addresses",
        "frame identifier",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "CRC stands for __________",
      options: [
        "cyclic redundancy check",
        "code repeat check",
        "code redundancy check",
        "cyclic repeat check"
      ],
      answer: "cyclic redundancy check"
    },
    {
      question: "Which of the following is a data link protocol?",
      options: [
        "ethernet",
        "point to point protocol",
        "hdlc",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "Which of the following is the multiple access protocol for channel access control?",
      options: [
        "CSMA/CD",
        "CSMA/CA",
        "Both CSMA/CD & CSMA/CA",
        "HDLC"
      ],
      answer: "Both CSMA/CD & CSMA/CA"
    },
    {
      question: "The network layer is concerned with __________ of data.",
      options: [
        "bits",
        "frames",
        "packets",
        "bytes"
      ],
      answer: "packets"
    },
    {
      question: "Which one of the following is not a function of network layer?",
      options: [
        "routing",
        "inter-networking",
        "congestion control",
        "error control"
      ],
      answer: "error control"
    },
    {
      question: "A 4 byte IP address consists of __________",
      options: [
        "only network address",
        "only host address",
        "network address & host address",
        "network address & MAC address"
      ],
      answer: "network address & host address"
    },
    {
      question: "Which of the following routing algorithms can be used for network layer design?",
      options: [
        "shortest path algorithm",
        "distance vector routing",
        "link state routing",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "Which of the following is not correct in relation to multi-destination routing?",
      options: [
        "is same as broadcast routing",
        "contains the list of all destinations",
        "data is not sent by packets",
        "there are multiple receivers"
      ],
      answer: "data is not sent by packets"
    },
    {
      question: "The network layer protocol for internet is __________",
      options: [
        "ethernet",
        "internet protocol",
        "hypertext transfer protocol",
        "file transfer protocol"
      ],
      answer: "internet protocol"
    },
    {
      question: "ICMP is primarily used for __________",
      options: [
        "error and diagnostic functions",
        "addressing",
        "forwarding",
        "routing"
      ],
      answer: "error and diagnostic functions"
    },
    {
      question: "Transport layer aggregates data from different applications into a single stream before passing it to ____________",
      options: [
        "network layer",
        "data link layer",
        "application layer",
        "physical layer"
      ],
      answer: "network layer"
    },
    {
      question: "Which of the following are transport layer protocols used in networking?",
      options: [
        "TCP and FTP",
        "UDP and HTTP",
        "TCP and UDP",
        "HTTP and FTP"
      ],
      answer: "TCP and UDP"
    },
    {
      question: "User datagram protocol is called connectionless because _____________",
      options: [
        "all UDP packets are treated independently by transport layer",
        "it sends data as a stream of related packets",
        "it is received in the same order as sent order",
        "it sends data very quickly"
      ],
      answer: "all UDP packets are treated independently by transport layer"
    },
    {
      question: "Transmission control protocol ___________",
      options: [
        "is a connection-oriented protocol",
        "uses a three way handshake to establish a connection",
        "receives data from application as a single stream",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "A _____ is a TCP name for a transport service access point.",
      options: [
        "port",
        "pipe",
        "node",
        "protocol"
      ],
      answer: "port"
    },
    {
      question: "Transport layer protocols deals with ____________",
      options: [
        "application to application communication",
        "process to process communication",
        "node to node communication",
        "man to man communication"
      ],
      answer: "process to process communication"
    },
    {
      question: "A local telephone network is an example of a _______ network.",
      options: [
        "Packet switched",
        "Circuit switched",
        "Bit switched",
        "Line switched"
      ],
      answer: "Circuit switched"
    },
    {
      question: "Most packet switches use this principle ____________",
      options: [
        "Stop and wait",
        "Store and forward",
        "Store and wait",
        "Stop and forward"
      ],
      answer: "Store and forward"
    },
    {
      question: "Which is not a application layer protocol?",
      options: [
        "HTTP",
        "SMTP",
        "FTP",
        "TCP"
      ],
      answer: "TCP"
    },
    {
      question: "The packet of information at the application layer is called __________",
      options: [
        "Packet",
        "Message",
        "Segment",
        "Frame"
      ],
      answer: "Message"
    },
    {
      question: "Which one of the following is an architecture paradigms?",
      options: [
        "Peer to peer",
        "Client-server",
        "HTTP",
        "Both Peer-to-Peer & Client-Server"
      ],
      answer: "Both Peer-to-Peer & Client-Server"
    },
    {
      question: "Application developer has permission to decide the following on transport layer side",
      options: [
        "Transport layer protocol",
        "Maximum buffer size",
        "Both Transport layer protocol and Maximum buffer size",
        "None of the mentioned"
      ],
      answer: "Both Transport layer protocol and Maximum buffer size"
    },
    {
      question: "Application layer offers _______ service.",
      options: [
        "End to end",
        "Process to process",
        "Both End to end and Process to process",
        "None of the mentioned"
      ],
      answer: "Both End to end and Process to process"
    },
    {
      question: "To deliver a message to the correct application program running on a host, the _______ address must be consulted.",
      options: [
        "IP",
        "MAC",
        "Port",
        "None of the mentioned"
      ],
      answer: "Port"
    }
  ];