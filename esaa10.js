const questions = [
    {
        question: "What is multithreaded programming?",
        options: [
            "It’s a process in which two different processes run simultaneously",
            "It’s a process in which two or more parts of same process run simultaneously",
            "It’s a process in which many different process are able to access same information",
            "It’s a process in which a single process can access information from many sources"
        ],
        answer: "It’s a process in which two or more parts of same process run simultaneously"
    },
    {
        question: "Thread priority in Java is?",
        options: [
            "Integer",
            "Float",
            "double",
            "long"
        ],
        answer: "Integer"
    },
    {
        question: "What will happen if two thread of the same priority are called to be processed simultaneously?",
        options: [
            "Anyone will be executed first lexographically",
            "Both of them will be executed simultaneously",
            "None of them will be executed",
            "It is dependent on the operating system"
        ],
        answer: "It is dependent on the operating system"
    },
    {
        question: "What is the valid range of priority of a thread in Java multi-threading?",
        options: [
            "1 to 10",
            "0 to 10",
            "0 to 9",
            "1 to 9"
        ],
        answer: "1 to 10"
    },
    {
        question: "We can create thread in java by",
        options: [
            "implementing Thread",
            "extending Runnable",
            "extending Thread",
            "both b & c"
        ],
        answer: "both b & c"
    },
    {
        question: "What is the priority of the thread in the following Java Program?",
        code: `class multithreaded_programing {
    public static void main(String args[]) {
        Thread t = Thread.currentThread();
        System.out.println(t);
    }
}`,
        options: [
            "0",
            "1",
            "10",
            "5"
        ],
        answer: "5"
    },
    {
        question: "What is true about threading?",
        options: [
            "run() method calls start() method and runs the code",
            "run() method creates new thread",
            "run() method can be called directly without start() method being called",
            "start() method creates new thread and calls code written in run() method"
        ],
        answer: "start() method creates new thread and calls code written in run() method"
    },
    {
        question: "Give the abbreviation of AWT?",
        options: [
            "Applet Windowing Toolkit",
            "Abstract Windowing Toolkit",
            "Absolute Windowing Toolkit",
            "None of the above"
        ],
        answer: "Abstract Windowing Toolkit"
    },
    {
        question: "Where are the following four methods commonly used? i.public void add(Component c) ii.public void setSize(int width,int height) iii.public void setLayout(LayoutManager m) iv.public void setVisible(boolean)",
        options: [
            "Graphics class",
            "Component class",
            "Both A & B",
            "None"
        ],
        answer: "Component class"
    },
    {
        question: "Implement the Listener interface and overrides its methods is required to perform in event handling.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        question: "Which is the container that doesn't contain title bar and MenuBars but it can have other components like button, textfield etc.",
        options: [
            "Window",
            "Frame",
            "Panel",
            "Container"
        ],
        answer: "Panel"
    },
    {
        question: "The Java Foundation Classes (JFC) is a set of GUI components which simplify the development of desktop applications.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        question: "Which are passive controls that do not support any interaction with the user?",
        options: [
            "Choice",
            "List",
            "Labels",
            "Checkbox"
        ],
        answer: "Labels"
    },
    {
        question: "Which package provides many event classes and Listener interfaces for event handling?",
        options: [
            "java.awt",
            "java.awt.Graphics",
            "java.awt.event",
            "None"
        ],
        answer: "java.awt.event"
    },
    {
        question: "Which of the following protocol follows connection less service?",
        options: [
            "TCP",
            "TCP/IP",
            "UDP",
            "HTTP"
        ],
        answer: "UDP"
    },
    {
        question: "Which of the following statement is NOT true?",
        options: [
            "TCP is a reliable but slow.",
            "UDP is not reliable but fast.",
            "File Transfer Protocol (FTP) is a standard Internet protocol for transmitting files between computers on the Internet over TCP/IP connections.",
            "In HTTP, all communication between two computers are encrypted"
        ],
        answer: "In HTTP, all communication between two computers are encrypted"
    },
    {
        question: "Which of the following statement is TRUE?",
        options: [
            "With stream sockets there is no need to establish any connection and data flows between the processes are as continuous streams.",
            "Stream sockets are said to provide a connection-less service and UDP protocol is used",
            "Datagram sockets are said to provide a connection-oriented service and TCP protocol is used.",
            "With datagram sockets there is no need to establish any connection and data flows between the processes are as packets."
        ],
        answer: "With datagram sockets there is no need to establish any connection and data flows between the processes are as packets."
    },
    {
        question: "Which class is used to create servers that listen for either local client or remote client programs?",
        options: [
            "ServerSockets",
            "httpServer",
            "httpResponse",
            "None"
        ],
        answer: "ServerSockets"
    },
    {
        question: "Which classes are used for connection-less socket programming?",
        options: [
            "DatagramSocket",
            "DatagramPacket",
            "Both A & B",
            "None"
        ],
        answer: "Both A & B"
    },
    {
        question: "What is JDBC?",
        options: [
            "JDBC is a java based protocol.",
            "JDBC is a standard Java API for database-independent connectivity between the Java programming language and a wide range of databases.",
            "JDBC is a specification to tell how to connect to a database.",
            "Joint Driver for Basic Connection"
        ],
        answer: "JDBC is a standard Java API for database-independent connectivity between the Java programming language and a wide range of databases."
    },
    {
        question: "Which driver uses ODBC driver to connect to the database?",
        options: [
            "JDBC-ODBC bridge driver",
            "Native - API driver",
            "Network Protocol driver",
            "Thin driver"
        ],
        answer: "JDBC-ODBC bridge driver"
    },
    {
        question: "Which of the following type of JDBC driver, is also called Type 2 JDBC driver?",
        options: [
            "JDBC-ODBC Bridge plus ODBC driver",
            "Native-API, partly Java driver",
            "JDBC-Net, pure Java driver",
            "Native-protocol, pure Java driver"
        ],
        answer: "Native-API, partly Java driver"
    },
    {
        question: "Which of the following holds data retrieved from a database after you execute an SQL query using Statement objects.",
        options: [
            "ResultSet",
            "JDBC driver",
            "Connection",
            "Statement"
        ],
        answer: "ResultSet"
    },
    {
        question: "Which of the following type of JDBC driver, uses database native protocol?",
        options: [
            "JDBC-ODBC Bridge plus ODBC driver",
            "Native-API, partly Java driver",
            "JDBC-Net, pure Java driver",
            "Native-protocol, pure Java driver"
        ],
        answer: "Native-protocol, pure Java driver"
    },
    {
        question: "Which driver converts JDBC calls directly into the vendor-specific database protocol?",
        options: [
            "Native - API driver",
            "Network Protocol driver",
            "Thin driver",
            "Both B & C"
        ],
        answer: "Thin driver"
    },
    {
        question: "Which of the following step establishes a connection with a database?",
        options: [
            "Import packages containing the JDBC classes needed for database programming.",
            "Register the JDBC driver, so that you can open a communications channel with the database",
            "Open a connection using the DriverManager.getConnection () method. Execute a query u",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "In which of the following switching methods, the message is divided into small packets?",
        options: [
            "Message switching",
            "Packet switching",
            "Virtual switching",
            "None of the these"
        ],
        answer: "Packet switching"
    },
    {
        question: "Which of the following switch methods creates a point-to-point physical connection between two or more computers?",
        options: [
            "Message switching",
            "Packet switching",
            "Circuit switching",
            "None of the these"
        ],
        answer: "Circuit switching"
    },
    {
        question: "What is the second name of the proxy server?",
        options: [
            "Proxy tools",
            "Application proxy",
            "Application-level gateway",
            "All of the these"
        ],
        answer: "Application-level gateway"
    },
    {
        question: "Which of the following servers allows LAN users to share data?",
        options: [
            "Data server",
            "Point server",
            "File server",
            "Communication server"
        ],
        answer: "File server"
    },
    {
        question: "What is the total vulnerable time value of pure Aloha?",
        options: [
            "Tfr",
            "1/2 Tfr",
            "2 * Tfr",
            "4 * Tfr"
        ],
        answer: "2 * Tfr"
    },
    {
        question: "How many fields are in the SMDS packet?",
        options: [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        answer: "Three"
    },
    {
        question: "What is the maximum data transfer rate of the optical fiber wire?",
        options: [
            "50 kbps",
            "1000 kbps",
            "1000 Mbps",
            "None of the these"
        ],
        answer: "1000 Mbps"
    },
    {
        question: "POTS network works on the principle of ______",
        options: [
            "Telephone switching",
            "Proxy server",
            "File system",
            "Circuit system"
        ],
        answer: "Circuit switching"
    },
    {
        question: "Which of the following protocols is the bit-oriented protocol?",
        options: [
            "SSL",
            "http",
            "HDLC",
            "All of the these"
        ],
        answer: "HDLC"
    },
    {
        question: "SLIP stands for ______",
        options: [
            "System line internet protocol",
            "Serial line internet protocol",
            "Signal line internet protocol",
            "Signal internet protocol"
        ],
        answer: "Serial line internet protocol"
    },
    {
        question: "The second port is used to ______ in the two-port network.",
        options: [
            "Input terminal",
            "Output terminal",
            "Signal terminal",
            "Bandwidth terminal"
        ],
        answer: "Output terminal"
    },
    {
        question: "Which of the following layers does the HTTP protocol work on?",
        options: [
            "Physical layer",
            "Data-link layer",
            "Application layer",
            "None of the these"
        ],
        answer: "Application layer"
    },
    {
        question: "Which of the following statement correct about the cipher in cryptography?",
        options: [
            "It is a method for performing encryption and decryption",
            "It is used to establish the network connection",
            "It is a message event",
            "All of the these"
        ],
        answer: "It is a method for performing encryption and decryption"
    },
    {
        question: "SONET stands for ______.",
        options: [
            "Signal Operation Network",
            "Synchronous Optical Network",
            "System Optical Network",
            "Signal Optical Network"
        ],
        answer: "Synchronous Optical Network"
    },
    {
        question: "How many layers does the SONET contain?",
        options: [
            "2 layers",
            "3 layers",
            "4 layers",
            "5 layers"
        ],
        answer: "4 layers"
    },
    {
        question: "RAKE receiver designed for ______.",
        options: [
            "Multipath fading",
            "Signals",
            "Data network",
            "Network connection"
        ],
        answer: "Multipath fading"
    },
    {
        question: "What is the formula of high rate in zigzag code?",
        options: [
            "J / (J * 1)",
            "-Z / (1 + J)",
            "Z * (1 + J)",
            "J / (J + 1)"
        ],
        answer: "J / (J + 1)"
    },
    {
        question: "What is the size of the sender window in the Go Back N (ARQ) protocol?",
        options: [
            "0",
            "1",
            "10",
            "n"
        ],
        answer: "n"
    },
    {
        question: "What is the efficiency of the Go back N (ARQ) protocol?",
        options: [
            "N = N / (2a + 2a)",
            "N = N / (1 + 2a)",
            "N = N * (2a + 2a)",
            "N = N * (1 + 2a)"
        ],
        answer: "N = N / (1 + 2a)"
    },
    {
        question: "What is the size of the destination port in the UDP protocol?",
        options: [
            "8 bits",
            "16 bits",
            "20 bits",
            "32 bits"
        ],
        answer: "16 bits"
    },
    {
        question: "What network utility uses the time-To-Live (TTL) field in the IP header to elicit ICMP error messages?",
        options: [
            "Ping",
            "Route",
            "Traceroute",
            "Ifconfig"
        ],
        answer: "Traceroute"
    },
    {
        question: "A client of the DNS (Domain Name System) application is called ______.",
        options: [
            "DNS server",
            "DNS Name",
            "DNS resolver",
            "DNS inquirer"
        ],
        answer: "DNS resolver"
    },
    {
        question: "How many characters consist of the entire hostname?",
        options: [
            "511 characters",
            "255 characters",
            "127 characters",
            "31 characters"
        ],
        answer: "255 characters"
    },
    {
        question: "During normal IP packet forwarding by a router, which of the following fields of the IP header is updated?",
        options: [
            "Repeater",
            "Source address",
            "Destination address",
            "Checksum"
        ],
        answer: "Checksum"
    },
    {
        question: "Which of the following statements is correct about the DWDM?",
        options: [
            "It can transmit data at very high speeds",
            "It can transmit data at very slow speeds",
            "DWSM stands for digital wave division multiplexing",
            "None of the these"
        ],
        answer: "It can transmit data at very high speeds"
    },
    {
        question: "MAC address is also called ______.",
        options: [
            "Physical address",
            "Logical address",
            "Source address",
            "Destination address"
        ],
        answer: "Physical address"
    },
    {
        question: "Which of the following addresses is 32-bit?",
        options: [
            "MAC address",
            "Virtual address",
            "Source address",
            "Destination address"
        ],
        answer: "Virtual address"
    },
    {
        question: "EDI stands for _____.",
        options: [
            "Electronic Data Interchange",
            "Electronic Digital Internet",
            "Electronic Digital Interchange",
            "Electronic Data Internet"
        ],
        answer: "Electronic Data Interchange"
    },
    {
        question: "What is the maximum data transfer rate of the ISDN?",
        options: [
            "1024 Mbps",
            "64 Mbps",
            "64 kbps",
            "1024 kbps"
        ],
        answer: "64 kbps"
    },
    {
        question: "ARPANET stands for ______.",
        options: [
            "Advanced Recheck Projects Agency Internet",
            "Advanced Recheck Projects Agency Network",
            "Advanced Research Projects Agency Network",
            "Advanced Research Projects Agency Internet"
        ],
        answer: "Advanced Research Projects Agency Network"
    },
    {
        question: "What is the size of the UDP header?",
        options: [
            "8 bytes",
            "16 bytes",
            "20 bytes",
            "64 bytes"
        ],
        answer: "8 bytes"
    },
    {
        question: "Which of the following protocols is the connection-less protocol?",
        options: [
            "UDP",
            "TCP",
            "IP",
            "All of the these"
        ],
        answer: "UDP"
    },
    {
        question: "Wildcard domain name labels begin with a ______.",
        options: [
            ".",
            "0",
            "@",
            "*"
        ],
        answer: "*"
    },
    {
        question: "What is the maximum length of the STP wire?",
        options: [
            "20 ft",
            "50 ft",
            "50 meters",
            "100 meters"
        ],
        answer: "100 meters"
    },
    {
        question: "Which network is suitable for a building?",
        options: [
            "WAN",
            "LAN",
            "MAN",
            "PAN"
        ],
        answer: "LAN"
    },
    {
        question: "______ is a 2G mobile telecommunications based on the CDMA.",
        options: [
            "IS-95",
            "ISO 1990",
            "IS-97",
            "None of the these"
        ],
        answer: "IS-95"
    },
    {
        question: "Which of the following statements is correct about IRC?",
        options: [
            "It sends the messages in virtual time",
            "It is an application layer protocol",
            "It works on the proxy model",
            "All of the these"
        ],
        answer: "It is an application layer protocol"
    },
    {
        question: "Which of the following devices is not a networking device?",
        options: [
            "Hub",
            "Switch",
            "Bridge",
            "None of the these"
        ],
        answer: "None of the these"
    },
    {
        question: "Which of the following devices does not require power to forward the signals?",
        options: [
            "Active hub",
            "Passive hub",
            "Repeater",
            "Bridge"
        ],
        answer: "Passive hub"
    },
    {
        question: "How many pins does RJ-45 contain?",
        options: [
            "Two",
            "Four",
            "Eight",
            "Ten"
        ],
        answer: "Eight"
    },
    {
        question: "One of the following statements is false",
        options: [
            "Method overloading is resolved at compile time",
            "Method overriding is resolved at run time",
            "Overridden methods coexist in the same class",
            "Overloaded methods have the same name but different signature"
        ],
        answer: "Overridden methods coexist in the same class"
    },
    {
        question: "Among the following, which one is not a feature of Java?",
        options: [
            "Robust",
            "Structured",
            "Distributed",
            "High Performance"
        ],
        answer: "Structured"
    },
    {
        question: "Which one of the following statements is wrong about a web page?",
        options: [
            "The content of a static web page can only change if the source code is changed.",
            "The content of a dynamic page may change in response to users’ actions.",
            "An application that collects data from users through a form and stores it in a database requires the integration of client & server-side scripts",
            "Source code of a program written in a server-side scripting language is visible on a client application such as a browser"
        ],
        answer: "Source code of a program written in a server-side scripting language is visible on a client application such as a browser"
    },
    {
        question: "Suppose String S=null; then what type of exception will occur when we execute the statement System.out.println(S.charAt(0));",
        options: [
            "ArithmeticException",
            "OutOfMemoryError",
            "NumberFormatException",
            "NullPointerException"
        ],
        answer: "NullPointerException"
    },
    {
        question: "Which one of the following scheduling algorithms is both preemptive and non-preemptive?",
        options: [
            "Round Robin",
            "Priority",
            "FCFS",
            "SJF"
        ],
        answer: "Priority"
    },
    {
        question: "Which mode of transmission the entire capacity of the channel can be utilized for each direction?",
        options: [
            "Simplex",
            "Half duplex",
            "Full duplex",
            "all except A"
        ],
        answer: "Full duplex"
    },
    {
        question: "The activity of choosing an efficient execution strategy for processing a query is called as ______?",
        options: [
            "Query execution",
            "Query plan evaluation",
            "Query optimization",
            "Query parsing"
        ],
        answer: "Query optimization"
    },
    {
        question: "Which types of switching each node receives the entire message, stores it, and then transmits it to the next node?",
        options: [
            "Circuit Switching",
            "Packet Switching",
            "Message Switching",
            "all"
        ],
        answer: "Message Switching"
    },
    {
        question: "What happens if several catch blocks match the type of the thrown exception?",
        options: [
            "All the catch blocks for that try statement are executed in order.",
            "The first catch block is executed and the others are skipped.",
            "All the catch blocks for that try statement are skipped.",
            "The program will terminate without executing any of the catch blocks."
        ],
        answer: "The first catch block is executed and the others are skipped."
    },
    {
        question: "The DBMS acts as an interface between what two components of an enterprise-class database system?",
        options: [
            "Database application and the database",
            "Data and the database",
            "The user and the database application",
            "Database application and SQL"
        ],
        answer: "Database application and the database"
    },
    {
        question: "One of the following is false statement about uses of servlet",
        options: [
            "Processing and storing data submitted by HTML form.",
            "Providing dynamic content.",
            "Used to handle multiple requests concurrently",
            "Processing and returning data to user in HTML form only."
        ],
        answer: "Processing and returning data to user in HTML form only."
    },
    {
        question: "What will be the output of the following program?",
        options: [
            "9",
            "81",
            "27",
            "3"
        ],
        answer: "81"
    },
    {
        question: "Which one of the HTML5 attributes makes a text box inactive to edit?",
        options: [
            "required",
            "pattern",
            "read-only",
            "disable"
        ],
        answer: "read-only"
    },
    {
        question: "A variable declared ______ has a GLOBAL SCOPE?",
        options: [
            "outside program",
            "inside function",
            "outside function",
            "None Of the Above"
        ],
        answer: "outside function"
    },
    {
        question: "Which Java statement always executes its body at least once, even though the condition is not true?",
        options: [
            "for",
            "do-while",
            "while",
            "continue"
        ],
        answer: "do-while"
    },
    {
        question: "Software and hardware that uses hypertext Transfer Protocol to respond to client requests is ---?",
        options: [
            "file server",
            "mail server",
            "web server",
            "A and C"
        ],
        answer: "web server"
    },
    {
        question: "One of the following is not true about inheritance?",
        options: [
            "Inheritance is used for code reusing",
            "In inheritance the sub class can introduce its own specific variables",
            "A super class can access its own sub classes unique data members",
            "Java uses the word extends to implement inheritance"
        ],
        answer: "A super class can access its own sub classes unique data members"
    },
    {
        question: "Features of Java used to handle more than one job at a time.",
        options: [
            "Distributed",
            "Platform-Independent",
            "Portable",
            "Multi-threaded"
        ],
        answer: "Multi-threaded"
    },
    {
        question: "Which one of the following is not necessary condition for deadlock to occurred?",
        options: [
            "Hold and Wait",
            "Mutual inclusion",
            "No-preemption",
            "Circular wait"
        ],
        answer: "Mutual inclusion"
    },
    {
        question: "Which TCP/IP layer allows an IP packet to make a physical link to transmission media?",
        options: [
            "Application layer",
            "Internet layer",
            "network access layer",
            "transport layer"
        ],
        answer: "network access layer"
    },
    {
        question: "A process stack does not contain ______",
        options: [
            "Function parameters",
            "Local variables",
            "Return addresses",
            "PID of the child process"
        ],
        answer: "PID of the child process"
    },
    {
        question: "One of the following is not the reason for the need of query optimization?",
        options: [
            "To utilized storage space efficiently",
            "To increase system performance",
            "To maximize throughput",
            "To increase response time"
        ],
        answer: "To increase response time"
    },
    {
        question: "Which of the following is not common member to both abstract classes and interfaces?",
        options: [
            "static variables",
            "final variables",
            "private members",
            "abstract methods"
        ],
        answer: "private members"
    },
    {
        question: "Given a class named Student, which of the following is a valid constructor declaration for this class?",
        options: [
            "Constructor Student () { }",
            "public Student () { }",
            "Student Student ( ) { }",
            "Void Student ( ) { }"
        ],
        answer: "public Student () { }"
    },
    {
        question: "Which one of the following statements is True about operating systems as an I/O manager?",
        options: [
            "Control all the computer I/O devices.",
            "Issue commands to I/O devices, catching interrupts and handling errors",
            "Provide an interface between the device and the rest of the system.",
            "All"
        ],
        answer: "All"
    },
    {
        question: "Identify the correct statement based on the code snippet given below. $fop=fopen(“xyz.txt”,”a+”); fwrite($fop,”hello”); fclose($fop);",
        options: [
            "xyz.txt file is opened for reading only",
            "the text hello will be appended to the existing content in xyz.txt file",
            "the text hello won’t be written to xyz.txt file, if the file does not exist",
            "xyz.txt file is opened for write-only access"
        ],
        answer: "the text hello will be appended to the existing content in xyz.txt file"
    },
    {
        question: "To ensure integrity of the data, a database system should ensure transactions to possess certain properties. The property which makes sure that the partial effects of incomplete transactions should not visible to the other transactions is called ______?",
        options: [
            "Atomicity",
            "Isolation",
            "Consistency",
            "Durability"
        ],
        answer: "Isolation"
    },
    {
        question: "which one of the following is the result of the following PHP code? Given Code: echo strlen(“IP II Model-Exam !”);",
        options: [
            "20",
            "18",
            "16",
            "15"
        ],
        answer: "18"
    },
    {
        question: "Which layer allows an IP packet to make a physical link to the media?",
        options: [
            "Internet layer",
            "Network access layer",
            "Transport layer",
            "Application layer"
        ],
        answer: "Network access layer"
    },
    {
        question: "Which Java keyword cannot appear on instance variable declaration?",
        options: [
            "private",
            "static",
            "public",
            "string"
        ],
        answer: "string"
    },
    {
        question: "Assume Mr. Daniel is running different applications at the same time like browsing the internet while preparing his assignment, so which type of operating system he used.",
        options: [
            "ROTS",
            "Multi-tasking",
            "Multi-user",
            "DOS"
        ],
        answer: "Multi-tasking"
    },
    {
        question: "Based on the code snippet given below, which one of the following statements allow you to assign an email submitted from the form to a variable called email? UserEmail",
        options: [
            "$email= $_GET[\"email\"];",
            "$email= $_POST[\"email\"];",
            "echo $_REQUEST[\"email\"];",
            "$email= $_REQUEST[\"UserEmail\"];"
        ],
        answer: "$email= $_REQUEST[\"UserEmail\"];"
    },
    {
        question: "One of the following is not consider in cost estimation during query optimization?",
        options: [
            "Input/Output cost",
            "Communication cost",
            "CPU processing cost",
            "Device cost"
        ],
        answer: "Device cost"
    },
    {
        question: "Among the following lists one doesn’t describe a field in a relation?",
        options: [
            "Record",
            "Attributes",
            "Column",
            "All of them"
        ],
        answer: "Record"
    },
    {
        question: "Choose the lists of the keywords in order that they would be used to handle exceptions in Java.",
        options: [
            "catch, try, finally",
            "try, catch, finally",
            "finally, catch, try",
            "try, finally, catch"
        ],
        answer: "try, catch, finally"
    },
    {
        question: "If a process runs, out of the extra space allocated to it, then which action is not taken by the system?",
        options: [
            "It will have to be moved a process to a partition having a small space.",
            "Swapped out of memory until a large enough hole can be created",
            "Kill the process.",
            "All"
        ],
        answer: "All"
    },
    {
        question: "Which of the following primitive data types is not Integer type?",
        options: [
            "byte",
            "double",
            "int",
            "short"
        ],
        answer: "double"
    },
    {
        question: "Which one of the following is wrong about structural and object-oriented programming paradigms?",
        options: [
            "Structural Programming can solve moderate problems",
            "Object-Oriented Programming provides data hiding",
            "Structural Programming does not provide data hiding",
            "Structural Programming support code reusability"
        ],
        answer: "Structural Programming support code reusability"
    },
    {
        question: "What is the use of isset() function in PHP?",
        options: [
            "The isset() function is used to check whether a variable is set or not",
            "The isset() function is used to check whether a variable is free or not",
            "The isset() function is used to check whether a variable is a string or not",
            "The isset() function is used to set a new value to a variable"
        ],
        answer: "The isset() function is used to check whether a variable is set or not"
    },
    {
        question: "One of the following is not true statement.",
        options: [
            "Class is an entity that contains both data and methods.",
            "new operator used to create object from a given class",
            "C. In java new operator used to declare variable that used to store single value",
            "D. Classes are model of a given problem domain."
        ],
        answer: "C. In java new operator used to declare variable that used to store single value"
    },
    {
        question: "Which one of the following is the output of the given program? $m) { if($k!=2) continue; else echo $m; } ?>",
        options: [
            "0134",
            "Nov",
            "2",
            "SeptOctDecJan"
        ],
        answer: "2"
    },
    {
        question: "Which one of the following statements is the correct way of defining a CSS style using a class selector?",
        options: [
            "p,h1,h2,li { text-align: center; color: red; }",
            "p { background: yellow; color: red; }",
            "#par{ background: yellow; color: red; }",
            ".par { background: yellow; color: red; }"
        ],
        answer: ".par { background: yellow; color: red; }"
    },
    {
        question: "Which one of the following PHP functions is used to redirect a user to a specific page?",
        options: [
            "Send_redirect()",
            "header_location()",
            "header()",
            "redirect()"
        ],
        answer: "header()"
    },
    {
        question: "Which one is the right name given for unique identification of each entity?",
        options: [
            "Composite Key",
            "Primary Key",
            "Foreign key",
            "Candidate Key"
        ],
        answer: "Primary Key"
    },
    {
        question: "Which coding transition is at the middle of the bit and changes phase when a different bit is encountered?",
        options: [
            "Differential Manchester",
            "Manchester",
            "Delta modulation",
            "Pulse code modulation"
        ],
        answer: "Differential Manchester"
    },
    {
        question: "Which of the following is not primitive data type in Java?",
        options: [
            "String",
            "long",
            "Boolean",
            "int"
        ],
        answer: "String"
    },
    {
        question: "The velocity of propagation of a signal through a guided medium varies with frequency. This type transmission impairment is called………?",
        options: [
            "Noise",
            "Attenuation distortion",
            "Delay distortion",
            "B and C"
        ],
        answer: "Delay distortion"
    },
    {
        question: "Among the following one describes the functional dependency between non-key attributes of a relation?",
        options: [
            "Functional data dependency",
            "Partial functional data dependency",
            "Full functional data dependency",
            "Transitive functional data dependency"
        ],
        answer: "Transitive functional data dependency"
    },
    {
        question: "______ is methods assume conflict is rare and only checks for conflicts at commit/terminate time?",
        options: [
            "Shared Locking",
            "Optimistic",
            "Time stamping",
            "Executive locking"
        ],
        answer: "Optimistic"
    },
    {
        question: "______ is a rule of no component of the primary key may contain a NULL value.",
        options: [
            "Entity integrity",
            "Referential integrity",
            "Domain Integrity",
            "Cardinal integrity"
        ],
        answer: "Entity integrity"
    },
    {
        question: "Which one of the following is used to display an output in PHP?",
        options: [
            "document.write()",
            "out.print()",
            "print()",
            "write()"
        ],
        answer: "print()"
    },
    {
        question: "Among the following one is the process of analyzing the given relation schemas based on their functional dependencies and primary keys.",
        options: [
            "Decomposition",
            "Normalization",
            "Partitioning",
            "Distributing"
        ],
        answer: "Normalization"
    },
    {
        question: "______ are rules that should be obeyed or followed while manipulating the data?",
        options: [
            "E-R diagram",
            "Entity",
            "Relationship",
            "constraints"
        ],
        answer: "constraints"
    },
    {
        question: "A program written in ______ language does not require a server to run.",
        options: [
            "PHP",
            "Servlet",
            "JSP",
            "HTML"
        ],
        answer: "HTML"
    },
    {
        question: "One of the following statements is false",
        options: [
            "An exception is a compile time error",
            "In java there are predefined classes that used to handle exceptions",
            "In exception handling technique an exception object contains expected error information",
            "Exception handling mechanism decreases your program performance"
        ],
        answer: "An exception is a compile time error"
    },
    {
        question: "Which one is false about abstract class and interface in Java?",
        options: [
            "An interface cannot have instance variables.",
            "In Java, an Interface cannot be final",
            "There can be non-abstract methods within abstract class.",
            "We can define private modifier for variables in interfaces."
        ],
        answer: "We can define private modifier for variables in interfaces."
    },
    {
        question: "Which of the following OOP concept binds the code and data together and keeps them secure from the outside world?",
        options: [
            "Polymorphism",
            "Inheritance",
            "Abstraction",
            "Encapsulation"
        ],
        answer: "Encapsulation"
    },
    {
        question: "From the following list of Java variables; which one is invalid?",
        options: [
            "EMP_Salary",
            "Age27",
            "My-Name",
            "1200IDN"
        ],
        answer: "My-Name"
    },
    {
        question: "Which one of the following PHP functions is used to execute SQL queries?",
        options: [
            "mysqli_select_db()",
            "mysqli_fetch_assoc()",
            "mysqli_execute_query()",
            "mysqli_query()"
        ],
        answer: "mysqli_query()"
    },
    {
        question: "Which method execute first when you run Servlet code?",
        options: [
            "Service ( )",
            "destroy ( )",
            "init( )",
            "start( )"
        ],
        answer: "init( )"
    },
    {
        question: "A class declaration that begins with the keyword ______ must be stored in a file that has exactly the same name as that class and ends with the java file-name extension.",
        options: [
            "private",
            "final",
            "public",
            "abstract"
        ],
        answer: "public"
    },
    {
        question: "Which layer allows an IP packet to make a physical link to the media?",
        options: [
            "Internet layer",
            "Network access layer",
            "Transport layer",
            "Application layer"
        ],
        answer: "Network access layer"
    },
    {
        question: "Based on the html code given below identify the correct statement. Given Code: <p style=\"color:red;\">Hello Everyone</p>",
        options: [
            "<p> is an end tag and has no problem if we forget it",
            "\"Hello Everyone\" is an element that will be displayed on the browser in red color",
            "\"style\" is a CSS property",
            "style=\"color:red;\" is an internal CSS"
        ],
        answer: "\"Hello Everyone\" is an element that will be displayed on the browser in red color"
    },
    {
        question: "Which one of the following is correct statement?",
        options: [
            "Both unipolar encoding and polar encoding techniques are NRZ.",
            "Both NRZ-L and NRZ-I changes voltage level when different bit is encountered",
            "NRZ-I changes voltage level at when a different bit is encountered",
            "NRZ-L changes voltage when a 1 is encountered."
        ],
        answer: "NRZ-I changes voltage level at when a different bit is encountered"
    },
    {
        question: "Which one of the following statements is False about segmentation and paging?",
        options: [
            "In segmentation segments size is unequal and dynamic.",
            "In paging the virtual address space is divided into equal-sized block called pages frame.",
            "Pages and page frames should have the same size.",
            "To map each page into frames we need a special data structure called page table"
        ],
        answer: "To map each page into frames we need a special data structure called page table"
    },
    {
        question: "______ is a technique/process of keeping and maintaining a log file of all transaction changes made to database to enable effective recovery in event of failure?",
        options: [
            "Journaling",
            "View",
            "Backup",
            "Encryption"
        ],
        answer: "Journaling"
    },
    {
        question: "Timestamp ordering protocol is said to be free from deadlock because of ______ reason?",
        options: [
            "It is cascading free",
            "No transaction is made to wait",
            "It guarantees serializability",
            "None of them"
        ],
        answer: "No transaction is made to wait"
    },
    {
        question: "One of the following is false about Java database connectivity (JDBC)",
        options: [
            "It allows you to create Java application that can access data from different types of database systems.",
            "It used to connect Java standalone applications with back-end database servers.",
            "It uses different predefined java classes and methods to handle various data access functions.",
            "Different database systems can use the same JDBC driver, which used to establish the connection interface."
        ],
        answer: "Different database systems can use the same JDBC driver, which used to establish the connection interface."
    },
    {
        question: "Which keyword is used to prevent content of a variable from being modified?",
        options: [
            "final",
            "last",
            "constant",
            "static"
        ],
        answer: "final"
    },
    {
        question: "Which one of the following statements is True about operating systems?",
        options: [
            "It provides a platform on which application software can be installed on the bottom.",
            "It controls the overall functionality of the computer system.",
            "It primarily focuses on managing the hardware resource rather than software resources.",
            "We can use a computer, even if a computer has no installed operating system."
        ],
        answer: "It controls the overall functionality of the computer system."
    },
    {
        question: "Transaction-processing systems usually allow multiple transactions to run concurrently. Which of the following best suits as the advantage(s) of allowing concurrent execution of transactions?",
        options: [
            "Improved transaction throughput",
            "Serializability",
            "Reduced execution complexity",
            "Reduced waiting time"
        ],
        answer: "Improved transaction throughput"
    },
    {
        question: "Which one of the following subnet masks represents class A before and after subnetting?",
        options: [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "all"
        ],
        answer: "255.0.0.0"
    },
    {
        question: "Which mode of transmission the entire capacity of the channel can be utilized for each direction?",
        options: [
            "Simplex",
            "Half duplex",
            "Full duplex",
            "all except A"
        ],
        answer: "Full duplex"
    },
    {
        question: "If a transaction is allowed to read a data item that was produced by an uncommitted transaction, what do we call this read?",
        options: [
            "Repeatable read",
            "Dirty read",
            "Phantom read",
            "Conflict read"
        ],
        answer: "Dirty read"
    },
    {
        question: "______ is s a problem which occurs when two transactions access the same data items concurrently and their operations interleaved.",
        options: [
            "Loss Update",
            "Incorrect summery",
            "Temporary read",
            "Unrepeatable read"
        ],
        answer: "Loss Update"
    },
    {
        question: "which one of the following syntaxes is the correct way of defining a function in PHP?",
        options: [
            "functionName(parameters) {function body}",
            "function {function body}",
            "function functionName(parameters) {function body}",
            "data type functionName(parameters) {function body}"
        ],
        answer: "function functionName(parameters) {function body}"
    },
    {
        question: "Which of the following is not a java.util.Scanner method?",
        options: [
            "nextInt()",
            "next()",
            "nextLine()",
            "nextString()"
        ],
        answer: "nextString()"
    },
    {
        question: "Which of the following is the default file extension of PHP?",
        options: [
            ".php",
            ".hphp",
            ".xml",
            ".html"
        ],
        answer: ".php"
    },
    {
        question: "Identify false statement among the given.",
        options: [
            "Several classes can be declared as sub classes of the same super class",
            "Several classes can share the same variable.",
            "When we create an object of a sub class, constructor of a subclass executed first and then constructors of super class",
            "In inheritance we can have more than one sub class"
        ],
        answer: "When we create an object of a sub class, constructor of a subclass executed first and then constructors of super class"
    },
    {
        question: "For recovery purposes, the transaction processing system not needs to keep ______?",
        options: [
            "The beginning of transaction",
            "The operation not performed",
            "The ending of the transaction",
            "Transaction status(committed/aborted)"
        ],
        answer: "The operation not performed"
    },
    {
        question: "Which of the following is true about Java static methods and instance methods?",
        options: [
            "Instance methods belong to the class rather than the object of a class.",
            "Instance methods can be invoked without the need for creating an instance of a class.",
            "A static method can access static data member and can change the value of it.",
            "Static methods require an object of its class to be created before it can be called."
        ],
        answer: "A static method can access static data member and can change the value of it."
    },
    {
        question: "Which one of the following wireless transmission systems the sending and receiving antennas need not be aligned?",
        options: [
            "Microwave",
            "Radio waves",
            "Infrared waves",
            "Bluetooth"
        ],
        answer: "Radio waves"
    },
    {
        question: "which one of the following statements is wrong about a session?",
        options: [
            "It is used to make data accessible across all pages of a website",
            "echo $_SESSION[\"email\"]; is used to display the value of a session variable called email.",
            "session_start() function is used to start a session and must be there at the beginning of an index.php page of the website",
            "session_unset() function destroys all session variables"
        ],
        answer: "session_unset() function destroys all session variables"
    },
    {
        question: "What will happen when we run the following segment of Java code?",
        code: `public static void main(String args[]) {
    int i;
    int []a={3,4,0,5};
    for( i=3;i>=0;i--) {
        System.out.print(30/a[i]);
        System.out.print(a[i]);
    }
}`,
        options: [
            "Array elements 3 4 0 5 will be printed",
            "10 7 0 6 will be printed",
            "Compile Error will occur",
            "10 7 0 6 3 4 0 5 will be printed"
        ],
        answer: "10 7 0 6 will be printed"
    },
    {
        question: "______ means the transaction happens indivisibly; a transaction either happens completely or not at all.?",
        options: [
            "Isolated",
            "Atomicity",
            "Consistency",
            "Durability"
        ],
        answer: "Atomicity"
    },
    {
        question: "Which one of the following is used for only local communication in private network?",
        options: [
            "172.16.6.2",
            "10.123.16.145",
            "192.168.14.23",
            "All"
        ],
        answer: "All"
    },
    {
        question: "Which one of the following is not an access modifier in Java?",
        options: [
            "void",
            "protected",
            "public",
            "private"
        ],
        answer: "void"
    },
    {
        question: "One of the following is not the end result of abstraction in OOP?",
        options: [
            "Possible attributes",
            "Possible methods",
            "Possible class",
            "Well Organized codes"
        ],
        answer: "Well Organized codes"
    },
    {
        question: "Which of the following keyword is used to refer the member of base classes from a subclass?",
        options: [
            "base",
            "super",
            "this",
            "upper"
        ],
        answer: "super"
    },
    {
        question: "______ keyword is used to exit from Java loop statements.",
        options: [
            "continue",
            "quit",
            "break",
            "exit"
        ],
        answer: "break"
    },
    {
        question: "Concept of OOP that provides code reusability is ______",
        options: [
            "Polymorphism",
            "Inheritance",
            "Encapsulation",
            "Abstraction"
        ],
        answer: "Inheritance"
    },
    {
        question: "One of the following is true about relational database data model?",
        options: [
            "Navigational nature of processing.",
            "Visualized as a linear arrangement of records",
            "Little scope for query optimization",
            "High scope of query optimization"
        ],
        answer: "High scope of query optimization"
    },
    {
        question: "One of the following is true statement about constructors?",
        options: [
            "Constructors are methods of a given class which used to create objects",
            "Constructors are special attributes",
            "Constructors have the same name as class name and can return values",
            "A class can’t have more than one constructor"
        ],
        answer: "Constructors are methods of a given class which used to create objects"
    },
    {
        question: "Which one of the following is the correct way of creating a PHP variable?",
        options: [
            "int stud_age=20;",
            "$stud-age=20;",
            "stud_age=20;",
            "$_age=20;"
        ],
        answer: "$_age=20;"
    },
    {
        question: "Choose the correct statement about Java variables.",
        options: [
            "Variable names can start with a digit.",
            "Some Java keywords can be used as naming a variable",
            "Variable names can contain digits 0-9.",
            "All variables cannot be changing its value during execution"
        ],
        answer: "Variable names can contain digits 0-9."
    },
    {
        question: "Which connectivity device packets send to all connected device at the same time?",
        options: [
            "Switch",
            "router",
            "Hub",
            "Bridges"
        ],
        answer: "Hub"
    },
    {
        question: "Which one of the following statements is the right way of creating a cookie called product that can only stay for 2?",
        options: [
            "createcookie(\"product\",\"smart phone\",time()+(60*60*14),\"/\",\"localhost\",0);",
            "setcookie(\"product\",\"smart phone\",time()+(60*60*2*24),\"/\",\"localhost\",0);",
            "setcookie(\"product\",\"smart phone\",time()+(60*60*24*14),\"/\",\"localhost\",0);",
            "setcookie(\"product\",\"smart phone\",time()+(60*60*24),\"/\",\"localhost\",0);"
        ],
        answer: "setcookie(\"product\",\"smart phone\",time()+(60*60*24*14),\"/\",\"localhost\",0);"
    },
    {
        question: "Based on the above question #13, what is the broadcasting address for subnet #2?",
        options: [
            "178.191.0.255",
            "178.191.255.255",
            "178.191.12.255",
            "178.191.1.255"
        ],
        answer: "178.191.12.255"
    },
    {
        question: "Unshielded twisted pair cable that is used for 16 Mbps Token Ring is ---",
        options: [
            "Category 5",
            "Category 6",
            "Category 4",
            "Category 3"
        ],
        answer: "Category 4"
    },
    {
        question: "Which one of the following statements is True about process state transition?",
        options: [
            "If the given quantum time expired a running process can be interrupted and goes to the ready queue.",
            "When a process is created it goes to a ready state immediately.",
            "When a process successfully finished its task, it goes to a terminated state",
            "all"
        ],
        answer: "all"
    },
    {
        question: "One of the following is/are the recovery technique from catastrophic failures?",
        options: [
            "Undo",
            "Backup",
            "Redo",
            "Encryption"
        ],
        answer: "Backup"
    },
    {
        question: "The built-in base class in Java, which is used to handle all exceptions is:",
        options: [
            "Exception",
            "Runtime Exception",
            "Checked Exceptions",
            "Unchecked Exception"
        ],
        answer: "Exception"
    },
    {
        question: "In a schedule S with two transactions T1 and T2, T1 reads the data item which was produced by T2 and T1 commits before T2 commits. In this case, the schedule S is said to be a ______ schedule?",
        options: [
            "Recoverable",
            "Conflict serializable",
            "Non-recoverable",
            "Serial"
        ],
        answer: "Non-recoverable"
    },
    {
        question: "An entity that cannot stand by itself or that cannot have a record unless there is another entity to be related with it is for its existence is called?",
        options: [
            "strong Entity",
            "Weak entity",
            "dependent entity",
            "Independent"
        ],
        answer: "Weak entity"
    },
    {
        question: "Which wireless security method generates new keys each time when a client establishes connection to the router?",
        options: [
            "Wi-Fi Protected Access",
            "Extensible Authentication Protocol",
            "Wired Equivalency Protocol",
            "Traffic Filtering"
        ],
        answer: "Wi-Fi Protected Access"
    },
    {
        question: "In which condition the finally block will not be executed?",
        options: [
            "When Exception occurs and not handled",
            "When System.Exit() is called",
            "When Exception does not occur",
            "When Exception occurs and handled"
        ],
        answer: "When System.Exit() is called"
    },
    {
        question: "If we want to develop a program to display the names of 7 days in a week, what type of Java statement can be appropriate to solve the problem?",
        options: [
            "if...else if",
            "for loop",
            "nested if",
            "if...else"
        ],
        answer: "for loop"
    },
    {
        question: "______ is a program that executes compiled Java bytecode on a specific platform.",
        options: [
            "NetBeans",
            "JVM",
            "JDK",
            "JRE"
        ],
        answer: "JVM"
    },
    {
        question: "Which one of the following database models under record database model category?",
        options: [
            "Hierarchical Database Model",
            "Network Database Model",
            "Relational Database Model",
            "all of them"
        ],
        answer: "all of them"
    },
    {
        question: "Which of the following is correct way of inheriting interface A by class B?",
        options: [
            "interface A implements B {}",
            "class B implements A {}",
            "class B extends A {}",
            "interface B extends A {}"
        ],
        answer: "class B implements A {}"
    }
];

