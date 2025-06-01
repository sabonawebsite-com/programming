const questions = [
  {
    question: "Which of the following is NOT a key component of a computer network?",
    options: ["Nodes", "Protocols", "Modems", "Routers"],
    answer: "Modems"
  },
  {
    question: "Which layer of the OSI model is responsible for establishing, managing, and terminating sessions between applications?",
    options: ["Physical layer", "Data link layer", "Session layer", "Transport layer"],
    answer: "Session layer"
  },
  {
    question: "What is the primary function of a router in a computer network?",
    options: [
      "Transferring data within the same network segment",
      "Connecting two or more separate networks",
      "Filtering and forwarding network traffic",
      "Establishing secure connections between devices"
    ],
    answer: "Connecting two or more separate networks"
  },
  {
    question: "Which network topology connects all devices in a linear fashion?",
    options: ["Star", "Bus", "Mesh", "Ring"],
    answer: "Bus"
  },
  {
    question: "Which technology allows multiple devices to share a single IP address?",
    options: ["DNS", "DHCP", "NAT", "ARP"],
    answer: "NAT"
  },
  {
    question: "What is the purpose of a MAC address?",
    options: [
      "To uniquely identify a device in a network",
      "To establish a secure connection between devices",
      "To translate domain names into IP addresses",
      "To assign an IP address to a device"
    ],
    answer: "To uniquely identify a device in a network"
  },
  {
    question: "What is the maximum number of IP addresses in an IPv4 address?",
    options: ["256", "512", "1024", "4294967296"],
    answer: "4294967296"
  },
  {
    question: "Which network protocol is used for secure transmission of data over the internet?",
    options: ["FTP", "HTTP", "TCP", "SSL/TLS"],
    answer: "SSL/TLS"
  },
  {
    question: "Which device is used to connect multiple computers in a local area network (LAN)?",
    options: ["Switch", "Router", "Modem", "Hub"],
    answer: "Switch"
  },
  {
    question: "What is the purpose of a subnet mask in a computer network?",
    options: [
      "To encrypt data transmitted over the network",
      "To identify the network portion of an IP address",
      "To determine the physical location of a device",
      "To establish a secure connection between devices"
    ],
    answer: "To identify the network portion of an IP address"
  },
  {
    question: "Which network protocol is commonly used to retrieve emails from a mail server?",
    options: ["SMTP", "POP3", "FTP", "HTTP"],
    answer: "POP3"
  },
  {
    question: "Which type of network cable is commonly used for Ethernet connections?",
    options: ["Coaxial cable", "Fiber optic cable", "Twisted pair cable", "HDMI cable"],
    answer: "Twisted pair cable"
  },
  {
    question: "What is the purpose of a firewall in a computer network?",
    options: [
      "To block unauthorized access to a network",
      "To amplify network signals for better performance",
      "To translate IP addresses into domain names",
      "To provide physical connectivity between devices"
    ],
    answer: "To block unauthorized access to a network"
  },
  {
    question: "Which networking device operates at the data link layer of the OSI model?",
    options: ["Switch", "Router", "Hub", "Modem"],
    answer: "Switch"
  },
  {
    question: "What is the maximum data transfer rate of a USB 3.0 port?",
    options: ["480 Mbps", "1 Gbps", "5 Gbps", "10 Gbps"],
    answer: "5 Gbps"
  },
  {
    question: "Which wireless networking standard provides the fastest data transfer rates?",
    options: ["802.11a", "802.11b", "802.11g", "802.11ac"],
    answer: "802.11ac"
  },
  {
    question: "Which type of network address is used to identify a device within a local network?",
    options: ["IP address", "MAC address", "URL address", "Domain name"],
    answer: "MAC address"
  },
  {
    question: "Which network protocol is used to transfer web pages from a server to a client's web browser?",
    options: ["HTTP", "FTP", "TCP", "SMTP"],
    answer: "HTTP"
  },
  {
    question: "Which network device operates at the physical layer of the OSI model?",
    options: ["Repeater", "Bridge", "Switch", "Router"],
    answer: "Repeater"
  },
  {
    question: "Which technique is used to combine multiple channels into a single high-speed link?",
    options: ["Multiplexing", "Demultiplexing", "Switching", "Routing"],
    answer: "Multiplexing"
  },
  {
    question: "What is the purpose of DNS in a computer network?",
    options: [
      "To assign IP addresses to devices",
      "To translate domain names into IP addresses",
      "To establish secure connections between devices",
      "To control access to a network"
    ],
    answer: "To translate domain names into IP addresses"
  },
  {
    question: "Which protocol is used for secure file transfer over a network?",
    options: ["FTP", "SMTP", "SSH", "DNS"],
    answer: "SSH"
  },
  {
    question: "Which layer of the OSI model is responsible for error detection and retransmission of data?",
    options: ["Network layer", "Transport layer", "Data link layer", "Physical layer"],
    answer: "Transport layer"
  },
  {
    question: "Which network topology provides redundancy and fault tolerance?",
    options: ["Star", "Bus", "Mesh", "Ring"],
    answer: "Mesh"
  },
  {
    question: "Which technology allows devices to communicate over long distances using existing electrical power lines?",
    options: ["DSL", "Fiber optics", "Power-line communication", "Wi-Fi"],
    answer: "Power-line communication"
  },
{
    question: "Which of the following is a set of rules governing the format and transmission of data between devices in a computer network?",
    options: ["IP address", "MAC address", "Protocol", "Subnet mask"],
    answer: "Protocol"
  },
  {
    question: "What is the primary purpose of the Internet Protocol (IP) in networking?",
    options: [
      "Ensuring secure data transfer",
      "Providing physical connectivity between devices",
      "Addressing and routing data packets",
      "Managing network access permissions"
    ],
    answer: "Addressing and routing data packets"
  },
  {
    question: "Which networking component is responsible for forwarding data packets between different networks?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: "Router"
  },
  {
    question: "What is the function of a Domain Name System (DNS) server in networking?",
    options: [
      "Assigning IP addresses to devices",
      "Translating domain names to IP addresses",
      "Establishing secure connections between devices",
      "Managing network traffic flow"
    ],
    answer: "Translating domain names to IP addresses"
  },
  {
    question: "Which layer of the OSI model is responsible for logical addressing and routing in a network?",
    options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
    answer: "Network layer"
  },
  {
    question: "Which networking device operates at the data link layer of the OSI model and filters network traffic based on MAC addresses?",
    options: ["Router", "Switch", "Bridge", "Gateway"],
    answer: "Switch"
  },
  {
    question: "What is the purpose of subnetting in networking?",
    options: [
      "Improving network security",
      "Increasing data transfer speed",
      "Dividing a large network into smaller segments",
      "Creating virtual private networks (VPNs)"
    ],
    answer: "Dividing a large network into smaller segments"
  },
  {
    question: "Which protocol is commonly used for securely transferring files between computers in a network?",
    options: ["HTTP", "SMTP", "FTP", "DHCP"],
    answer: "FTP"
  },
  {
    question: "Which type of IP address is used to identify the current network and cannot be assigned to individual devices?",
    options: [
      "Private IP address",
      "Static IP address",
      "Dynamic IP address",
      "Public IP address"
    ],
    answer: "Private IP address"
  },
  {
    question: "Which networking component connects multiple devices in a local area network (LAN) and operates at the physical layer of the OSI model?",
    options: ["Router", "Hub", "Switch", "Bridge"],
    answer: "Hub"
  },
  {
    question: "What is the primary purpose of the Dynamic Host Configuration Protocol (DHCP) in networking?",
    options: [
      "Resolving domain names to IP addresses",
      "Assigning unique MAC addresses to devices",
      "Automatically assigning IP addresses to devices on a network",
      "Ensuring secure data transmission between devices"
    ],
    answer: "Automatically assigning IP addresses to devices on a network"
  },
  {
    question: "Which network topology consists of a central node connected to multiple other nodes, forming a star-like pattern?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: "Star"
  },
  {
    question: "What is the function of a gateway in networking?",
    options: [
      "Controlling network access and permissions",
      "Forwarding data packets between different networks",
      "Translating between different network protocols",
      "Establishing secure connections between devices"
    ],
    answer: "Translating between different network protocols"
  },
  {
    question: "Which protocol is commonly used for sending and receiving emails over a network?",
    options: ["FTP", "SMTP", "HTTP", "SNMP"],
    answer: "SMTP"
  },
  {
    question: "Which networking component is used to amplify and regenerate data signals, extending the reach of a network?",
    options: ["Switch", "Bridge", "Hub", "Repeater"],
    answer: "Repeater"
  },
  {
    question: "What is the purpose of ARP (Address Resolution Protocol) in networking?",
    options: [
      "Resolving domain names to IP addresses",
      "Assigning IP addresses to devices",
      "Mapping IP addresses to MAC addresses",
      "Establishing secure connections between devices"
    ],
    answer: "Mapping IP addresses to MAC addresses"
  },
  {
    question: "Which network protocol is used for secure web browsing and encrypts data transmission between a web browser and a web server?",
    options: ["HTTP", "FTP", "HTTPS", "POP3"],
    answer: "HTTPS"
  },
  {
    question: "Which type of network address is used to uniquely identify a device within a network?",
    options: ["IP address", "MAC address", "DNS address", "Subnet mask"],
    answer: "MAC address"
  },
  {
    question: "What is the purpose of VLANs (Virtual Local Area Networks) in networking?",
    options: [
      "Increasing network speed",
      "Enhancing network security",
      "Segmenting a physical network into multiple virtual networks",
      "Enabling wireless connectivity in a LAN"
    ],
    answer: "Segmenting a physical network into multiple virtual networks"
  },
  {
    question: "Which network protocol is used for translating domain names into IP addresses?",
    options: ["SMTP", "DNS", "DHCP", "SNMP"],
    answer: "DNS"
  },
  {
    question: "Which networking component acts as an intermediary between a client device and a server, forwarding client requests to the appropriate server?",
    options: ["Router", "Switch", "Bridge", "Proxy server"],
    answer: "Proxy server"
  },
  {
    question: "What is the purpose of NAT (Network Address Translation) in networking?",
    options: [
      "Translating domain names to IP addresses",
      "Providing secure remote access to a network",
      "Assigning unique MAC addresses to devices",
      "Allowing multiple devices to share a single public IP address"
    ],
    answer: "Allowing multiple devices to share a single public IP address"
  },
  {
    question: "Which networking protocol is used for real-time communication, such as voice and video calls, over the internet?",
    options: [
      "RTP (Real-time Transport Protocol)",
      "ICMP (Internet Control Message Protocol)",
      "SNMP (Simple Network Management Protocol)",
      "RIP (Routing Information Protocol)"
    ],
    answer: "RTP (Real-time Transport Protocol)"
  },
  {
    question: "Which type of network cable is commonly used for high-speed Ethernet connections?",
    options: ["Coaxial cable", "Fiber-optic cable", "Twisted pair cable", "HDMI cable"],
    answer: "Twisted pair cable"
  },
  {
    question: "What is the purpose of ICMP (Internet Control Message Protocol) in networking?",
    options: [
      "Resolving domain names to IP addresses",
      "Assigning IP addresses to devices",
      "Facilitating communication between different network protocols",
      "Providing error reporting and diagnostic information in IP networks"
    ],
    answer: "Providing error reporting and diagnostic information in IP networks"
  },
  {
    question: "Which of the following is the primary networking protocol suite used on the internet?",
    options: ["TCP/IP", "HTTP", "DNS", "FTP"],
    answer: "TCP/IP"
  },
  {
    question: "How many layers are there in the OSI Reference Model?",
    options: ["4", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for ensuring error-free transmission of data between nodes?",
    options: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical Layer"],
    answer: "Transport Layer"
  },
  {
    question: "What is the function of the Transport Layer in the OSI Reference Model?",
    options: [
      "Addressing and routing data packets",
      "Establishing connections between devices",
      "Encapsulating data into packets",
      "Transmitting data over the physical medium"
    ],
    answer: "Establishing connections between devices"
  },
  {
    question: "Which protocol operates at the Transport Layer of the OSI Reference Model and provides reliable, connection-oriented data delivery?",
    options: ["IP", "ICMP", "TCP", "UDP"],
    answer: "TCP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for translating data formats and providing encryption and decryption services?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Transport Layer"
    ],
    answer: "Presentation Layer"
  },
  {
    question: "Which TCP/IP protocol is used for the delivery of email messages?",
    options: ["SMTP", "FTP", "HTTP", "DHCP"],
    answer: "SMTP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for logical addressing and routing?",
    options: ["Network Layer", "Data Link Layer", "Physical Layer", "Application Layer"],
    answer: "Network Layer"
  },
  {
    question: "What is the purpose of the Network Layer in the OSI Reference Model?",
    options: [
      "Ensuring reliable data delivery",
      "Establishing end-to-end connections",
      "Providing error detection and correction",
      "Addressing and routing data packets"
    ],
    answer: "Addressing and routing data packets"
  },
  {
    question: "Which TCP/IP protocol is used for retrieving email from a mail server?",
    options: ["SMTP", "IMAP", "POP3", "SNMP"],
    answer: "POP3"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for defining the format and structure of data packets?",
    options: ["Data Link Layer", "Transport Layer", "Application Layer", "Presentation Layer"],
    answer: "Data Link Layer"
  },
  {
    question: "Which TCP/IP protocol is used for translating domain names into IP addresses?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    answer: "DNS"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for establishing, managing, and terminating sessions between applications?",
    options: ["Presentation Layer", "Session Layer", "Transport Layer", "Application Layer"],
    answer: "Session Layer"
  },
  {
    question: "Which TCP/IP protocol is used for transferring files between computers over a network?",
    options: ["FTP", "HTTP", "SMTP", "DNS"],
    answer: "FTP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for providing a user interface and enabling access to network services?",
    options: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
    answer: "Application Layer"
  },
  {
    question: "Which TCP/IP protocol is used for browsing websites?",
    options: ["FTP", "HTTP", "SMTP", "DHCP"],
    answer: "HTTP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for the physical transmission of data bits over a network medium?",
    options: ["Data Link Layer", "Transport Layer", "Physical Layer", "Network Layer"],
    answer: "Physical Layer"
  },
  {
    question: "Which TCP/IP protocol is used for remote terminal access to a network device?",
    options: ["FTP", "HTTP", "SSH", "SMTP"],
    answer: "SSH"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for detecting and correcting errors in data transmission?",
    options: ["Transport Layer", "Data Link Layer", "Physical Layer", "Presentation Layer"],
    answer: "Data Link Layer"
  },
  {
    question: "Which TCP/IP protocol is used for automatically assigning IP addresses to devices on a network?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    answer: "DHCP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for ensuring secure data transmission through encryption and decryption?",
    options: ["Presentation Layer", "Session Layer", "Transport Layer", "Application Layer"],
    answer: "Presentation Layer"
  },
  {
    question: "Which TCP/IP protocol is used for remotely managing network devices?",
    options: ["FTP", "HTTP", "SNMP", "SMTP"],
    answer: "SNMP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for addressing devices on a network using MAC addresses?",
    options: ["Network Layer", "Data Link Layer", "Physical Layer", "Application Layer"],
    answer: "Data Link Layer"
  },
  {
    question: "Which TCP/IP protocol is used for resolving IP addresses to MAC addresses on a local network?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    answer: "ARP"
  },
  {
    question: "Which layer of the OSI Reference Model is responsible for providing network services, such as email, file transfer, and web browsing?",
    options: ["Transport Layer", "Data Link Layer", "Application Layer", "Presentation Layer"],
    answer: "Application Layer"
  },
  {
    question: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    options: [
      "DML(Data Manipulation Language)",
      "Query",
      "Relational Schema",
      "DDL(Data Definition Language)"
    ],
    answer: "DDL(Data Definition Language)"
  },
  {
    question: "Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?",
    options: [
      "DML(Data Manipulation Language)",
      "DDL(Data Definition Language)",
      "Query",
      "Relational Schema"
    ],
    answer: "DML(Data Manipulation Language)"
  },
  {
    question: "Which one of the following given statements possibly contains the error?",
    options: [
      "select * from emp where empid = 10003;",
      "select empid from emp where empid = 10006;",
      "select empid from emp;",
      "select empid where empid = 1009 and Lastname = 'GELLER';"
    ],
    answer: "select empid where empid = 1009 and Lastname = 'GELLER';"
  },
  {
    question: "What do you mean by one to many relationships?",
    options: [
      "One class may have many teachers",
      "One teacher can have many classes",
      "Many classes may have many teachers",
      "Many teachers may have many classes"
    ],
    answer: "One teacher can have many classes"
  },
  {
    question: "A Database Management System is a type of ______ software.",
    options: [
      "It is a type of system software",
      "It is a kind of application software",
      "It is a kind of general software",
      "Both A and C"
    ],
    answer: "It is a type of system software"
  },
  {
    question: "The term 'FAT' stands for ______",
    options: [
      "File Allocation Tree",
      "File Allocation Table",
      "File Allocation Graph",
      "All of the above"
    ],
    answer: "File Allocation Table"
  },
  {
    question: "Which of the following can be considered as the maximum size that is supported by FAT?",
    options: ["8GB", "4GB", "4TB", "None of the above"],
    answer: "4GB"
  },
  {
    question: "The term 'NTFS' refers to which one of the following?",
    options: [
      "New Technology File System",
      "New Tree File System",
      "New Table type File System",
      "Both A and C"
    ],
    answer: "New Technology File System"
  },
  {
    question: "Which of the following can be considered as the maximum size that is supported by NTFS?",
    options: ["4GB", "16TB", "64TB", "8TB"],
    answer: "16TB"
  },
  {
    question: "A huge collection of the information or data accumulated form several different sources is known as ______:",
    options: [
      "Data Management",
      "Data Mining",
      "Data Warehouse",
      "Both B and C"
    ],
    answer: "Data Warehouse"
  },
  {
    question: "Which of the following can be used to extract or filter the data & information from the data warehouse?",
    options: [
      "Data redundancy",
      "Data recovery tool",
      "Data mining",
      "Both B and C"
    ],
    answer: "Data mining"
  },
  {
    question: "Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.",
    options: [
      "Data Repository",
      "Data Inconsistency",
      "Data Mining",
      "Data Redundancy"
    ],
    answer: "Data Redundancy"
  },
  {
    question: "Which one of the following refers to the 'data about data'?",
    options: ["Directory", "Sub Data", "Warehouse", "Meta Data"],
    answer: "Meta Data"
  },
  {
    question: "Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?",
    options: [
      "Conceptual Level",
      "Physical Level",
      "File Level",
      "Logical Level"
    ],
    answer: "Physical Level"
  },
  {
    question: "To which of the following the term 'DBA' referred?",
    options: [
      "Data Bank Administrator",
      "Database Administrator",
      "Data Administrator",
      "None of the above"
    ],
    answer: "Database Administrator"
  },
  {
    question: "In general, a file is basically a collection of all related ______.",
    options: ["Rows & Columns", "Fields", "Database", "Records"],
    answer: "Records"
  },
  {
    question: "The term 'Data' refers to:",
    options: [
      "The electronic representation of the information(or data)",
      "Basic information",
      "Row Facts and figures",
      "Both A and C"
    ],
    answer: "Row Facts and figures"
  },
  {
    question: "Rows of a relation are known as the ______.",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: "Tuples"
  },
  {
    question: "Which of the following refers to the number of tuples in a relation?",
    options: ["Entity", "Column", "Cardinality", "None of the above"],
    answer: "Cardinality"
  },
  {
    question: "Which one of the following is a type of Data Manipulation Command?",
    options: ["Create", "Alter", "Delete", "All of the above"],
    answer: "Delete"
  },
  {
    question: "Which of the following command is a type of Data Definition language command?",
    options: ["Create", "Update", "Delete", "Merge"],
    answer: "Create"
  },
  {
    question: "Which of the following is a top-down approach in which the entity's higher level can be divided into two lower sub-entities?",
    options: ["Aggregation", "Generalization", "Specialization", "All of the above"],
    answer: "Specialization"
  },
  {
    question: "In which one of the following, the multiple lower entities are grouped (or combined) together to form a single higher-level entity?",
    options: ["Specialization", "Generalization", "Aggregation", "None of the above"],
    answer: "Generalization"
  },
  {
    question: "In a relation database, every tuples divided into the fields are known as the ______.",
    options: ["Queries", "Domains", "Relations", "All of the above"],
    answer: "Domains"
  },
  {
    question: "The term 'TCL' stands for ______.",
    options: [
      "Ternary Control Language",
      "Transmission Control Language",
      "Transaction Central Language",
      "Transaction Control Language"
    ],
    answer: "Transaction Control Language"
  },
  {
    question: "In the relational table, which of the following can also be represented by the term 'attribute'?",
    options: ["Entity", "Row", "Column", "Both B &C"],
    answer: "Column"
  },
  {
    question: "Which of the following refers to the number of attributes in a relation?",
    options: ["Degree", "Row", "Column", "All of the above"],
    answer: "Degree"
  },
  {
    question: "Which of the following is used in the application programs to request data from the database management system?",
    options: [
      "Data Manipulation language",
      "Data Definition Language",
      "Data Control Language",
      "All of the above"
    ],
    answer: "Data Manipulation language"
  },
  {
    question: "Which one of the following command is used to delete the existing row in a table?",
    options: ["Delete", "Update", "Insert", "None of the above"],
    answer: "Delete"
  },
  {
    question: "Which of the following commands is used to save any transaction permanently into the database?",
    options: ["Commit", "Rollback", "Savepoint", "None of the above"],
    answer: "Commit"
  },
  {
    question: "Which one of the following commands is used for removing (or deleting) a relation forms the SQL database?",
    options: ["Delete", "Drop", "Remove", "All of the above"],
    answer: "Drop"
  },
  {
    question: "Which one of the following commands is used to restore the database to the last committed state?",
    options: ["Savepoint", "Rollback", "Commit", "Both A & B"],
    answer: "Rollback"
  },
  {
    question: "The database management system can be considered as the collection of ______ that enables us to create and maintain the database.",
    options: ["Translators", "Programs", "Keys", "Language activity"],
    answer: "Programs"
  },
  {
    question: "The term 'DFD' stands for?",
    options: [
      "Data file diagram",
      "Data flow document",
      "Data flow diagram",
      "None of the above"
    ],
    answer: "Data flow diagram"
  },
  {
    question: "Which of the following refers collection of the information stored in a database at a specific time?",
    options: [
      "Independence",
      "Instance of the database",
      "Schema",
      "Data domain"
    ],
    answer: "Instance of the database"
  },
  {
    question: "The term 'SQL' stands for",
    options: [
      "Standard query language",
      "Sequential query language",
      "Structured query language",
      "Server-side query language"
    ],
    answer: "Structured query language"
  },
  {
    question: "The term 'Data independence' refers to ______",
    options: [
      "Data is defined separately and not included in the programs",
      "Programs are not dependent on the logical attributes of the data",
      "Programs are not dependent on the physical attributes of the data",
      "Both B & C"
    ],
    answer: "Both B & C"
  },
  {
    question: "What is the relation calculus?",
    options: [
      "It is a kind of procedural language",
      "It is a non-procedural language",
      "It is a high-level language",
      "It is Data Definition language"
    ],
    answer: "It is a non-procedural language"
  },
  {
    question: "Which one of the following refers to the total view of the database content?",
    options: [
      "Conceptual view",
      "Physical view",
      "Internal view",
      "External view"
    ],
    answer: "Conceptual view"
  },
  {
    question: "For what purpose the DML is provided?",
    options: [
      "Addition of new structure in the database",
      "Manipulation & processing of the database",
      "Definition of the physical structure of the database system",
      "All of the above"
    ],
    answer: "Manipulation & processing of the database"
  },
  {
    question: "The term 'ODBC' stands for ______",
    options: [
      "Oral database connectivity",
      "Oracle database connectivity",
      "Open database connectivity",
      "Object database connectivity"
    ],
    answer: "Open database connectivity"
  },
  {
    question: "The architecture of a database can be viewed as the ______",
    options: ["One level", "Two-level", "Three-level", "Four level"],
    answer: "Three-level"
  },
  {
    question: "In the relation model, the relation are generally termed as ______",
    options: ["Tuples", "Attributes", "Rows", "Tables"],
    answer: "Tables"
  },
  {
    question: "The Database Management Query language is generally designed for the ______",
    options: [
      "Support end-users who use English like commands",
      "Specifying the structure of the database",
      "Support in the development of the complex applications software",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which of the following keys is generally used to represents the relationships between the tables?",
    options: ["Primary key", "Foreign key", "Secondary key", "None of the above"],
    answer: "Foreign key"
  },
  {
    question: "Which of the following levels is considered as the level closed to the end-users?",
    options: [
      "Internal Level",
      "External Level",
      "Conceptual Level",
      "Physical Level"
    ],
    answer: "External Level"
  },
  {
    question: "A computer security protocol for logging-in can be considered as the example of the ______ component of an information system.",
    options: ["Data", "Software", "Procedure", "Hardware"],
    answer: "Procedure"
  },
  {
    question: "Which one of the following keyword is used to find out the number of values in a column?",
    options: ["TOTAL", "COUNT", "SUM", "ADD"],
    answer: "COUNT"
  },
  {
    question: "Which one of the following is commonly used to define the overall design of the database?",
    options: [
      "Application program",
      "Data definition language",
      "Schema",
      "Source code"
    ],
    answer: "Schema"
  },
  {
    question: "Which one of the following commands is used to modify a column inside a table?",
    options: ["Drop", "Update", "Alter", "Set"],
    answer: "Alter"
  }
]