const questions = [
    {
        question: "What is the primary purpose of partitioning disks in Linux?",
        options: [
            "To organize files into directories",
            "To protect different parts of the file system and manage backups",
            "To increase internet speed",
            "To reduce the need for swap space"
        ],
        answer: "To protect different parts of the file system and manage backups"
    },
    {
        question: "Which command is used to list disk partitions in Linux?",
        options: [
            "mount",
            "df",
            "fdisk -l",
            "du"
        ],
        answer: "fdisk -l"
    },
    {
        question: "What is the purpose of the 'mkfs' command in Linux?",
        options: [
            "To mount a file system",
            "To create a file system on a disk or partition",
            "To delete a file system",
            "To check disk usage"
        ],
        answer: "To create a file system on a disk or partition"
    },
    {
        question: "What is swap space used for in Linux?",
        options: [
            "To store temporary internet files",
            "To optimize RAM usage by moving inactive pages to disk",
            "To increase CPU performance",
            "To backup user data"
        ],
        answer: "To optimize RAM usage by moving inactive pages to disk"
    },
    {
        question: "Which command provides disk usage information in a human-readable format?",
        options: [
            "df -h",
            "du -k",
            "fdisk -h",
            "mount -h"
        ],
        answer: "df -h"
    },
    {
        question: "What is the main advantage of Logical Volume Management (LVM)?",
        options: [
            "It reduces the need for hard disks",
            "It allows dynamic management of storage capacity by pooling disks",
            "It increases internet bandwidth",
            "It replaces the need for RAID"
        ],
        answer: "It allows dynamic management of storage capacity by pooling disks"
    },
    {
        question: "What is the minimum number of disks required for RAID Level 5?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "3"
    },
    {
        question: "Which RAID level provides striping without parity?",
        options: [
            "RAID Level 0",
            "RAID Level 1",
            "RAID Level 5",
            "RAID Level 10"
        ],
        answer: "RAID Level 0"
    },
    {
        question: "What is the purpose of a 'hot spare' in RAID?",
        options: [
            "To cool down the system",
            "To automatically replace a failed disk",
            "To increase disk speed",
            "To reduce power consumption"
        ],
        answer: "To automatically replace a failed disk"
    },
    {
        question: "Which of the following best describes 'mirroring' in RAID?",
        options: [
            "Writing data randomly across all disks",
            "Creating an exact copy of data on another disk",
            "Storing parity information for data recovery",
            "Combining disks into a single logical volume"
        ],
        answer: "Creating an exact copy of data on another disk"
    },
        {
        question: "What are the three main steps required to configure a Linux device for TCP/IP networking?",
        options: [
            "Installing a web server, setting up DNS, configuring email",
            "Configuring the network interface, setting up routing, setting up name service",
            "Creating user accounts, partitioning disks, enabling firewalls",
            "Updating the kernel, installing drivers, rebooting the system"
        ],
        answer: "Configuring the network interface, setting up routing, setting up name service"
    },
    {
        question: "Which file needs to be modified to enable IP packet forwarding when setting up a Linux system as a router?",
        options: [
            "/etc/resolv.conf",
            "/etc/sysctl.conf",
            "/etc/named.conf",
            "/etc/hosts"
        ],
        answer: "/etc/sysctl.conf"
    },
    {
        question: "What is the primary function of a web server like Apache?",
        options: [
            "To manage user authentication",
            "To store and deliver webpages in response to client requests",
            "To encrypt network traffic",
            "To allocate IP addresses dynamically"
        ],
        answer: "To store and deliver webpages in response to client requests"
    },
    {
        question: "What is the purpose of BIND in Linux?",
        options: [
            "To configure firewalls",
            "To manage disk partitions",
            "To act as a DNS server for resolving hostnames to IP addresses",
            "To create virtual machines"
        ],
        answer: "To act as a DNS server for resolving hostnames to IP addresses"
    },
    {
        question: "Which protocol is primarily used by Mail Transfer Agents (MTAs) to send emails between servers?",
        options: [
            "FTP",
            "HTTP",
            "SMTP",
            "SSH"
        ],
        answer: "SMTP"
    },
    {
        question: "What is the main benefit of using a proxy cache like Squid?",
        options: [
            "To increase CPU performance",
            "To accelerate HTTP requests by caching frequently accessed content",
            "To encrypt all network traffic",
            "To replace the need for DNS"
        ],
        answer: "To accelerate HTTP requests by caching frequently accessed content"
    },
    {
        question: "Which tool is used to check if a destination device is reachable on a network?",
        options: [
            "traceroute",
            "ping",
            "netstat",
            "ifconfig"
        ],
        answer: "ping"
    },
    {
        question: "What is the primary purpose of the Network Time Protocol (NTP) service?",
        options: [
            "To synchronize clocks between computer systems",
            "To allocate IP addresses dynamically",
            "To monitor network bandwidth usage",
            "To encrypt network communications"
        ],
        answer: "To synchronize clocks between computer systems"
    },
    {
        question: "Which protocol allows secure remote administration by enabling command execution on a remote device?",
        options: [
            "HTTP",
            "FTP",
            "SSH",
            "SMTP"
        ],
        answer: "SSH"
    },
    {
        question: "What is the function of a loopback adapter in network troubleshooting?",
        options: [
            "To test network transmission by sending and receiving signals internally",
            "To increase wireless signal strength",
            "To replace faulty network cables",
            "To encrypt data packets"
        ],
        answer: "To test network transmission by sending and receiving signals internally"
    },
      {
        question: "What is the primary purpose of DHCP in a network?",
        options: [
            "To encrypt network traffic",
            "To automatically assign IP addresses and related configuration to hosts",
            "To block malicious websites",
            "To monitor CPU usage"
        ],
        answer: "To automatically assign IP addresses and related configuration to hosts"
    },
    {
        question: "Why is SSH preferred over Telnet for remote access?",
        options: [
            "SSH has faster connection speeds",
            "SSH provides encrypted communication while Telnet does not",
            "Telnet cannot be used on Linux systems",
            "SSH is only for file transfers"
        ],
        answer: "SSH provides encrypted communication while Telnet does not"
    },
    {
        question: "Which ports are officially assigned to FTP for active connections?",
        options: [
            "Ports 80 and 443",
            "Ports 20 and 21",
            "Ports 22 and 23",
            "Ports 53 and 67"
        ],
        answer: "Ports 20 and 21"
    },
    {
        question: "What is the main function of NFS (Network File System)?",
        options: [
            "To assign IP addresses dynamically",
            "To enable distributed file sharing across networks",
            "To encrypt email communications",
            "To block unauthorized network access"
        ],
        answer: "To enable distributed file sharing across networks"
    },
    {
        question: "Which of the following is a key capability of a SAMBA server?",
        options: [
            "Assigning domain names",
            "Sharing files and printers between Linux and Windows systems",
            "Filtering network packets",
            "Managing DNS records"
        ],
        answer: "Sharing files and printers between Linux and Windows systems"
    },
    {
        question: "What is the primary benefit of setting up a tracking domain for email?",
        options: [
            "Reducing the cost of email services",
            "Improving sender reputation and email deliverability",
            "Blocking spam emails",
            "Encrypting all outgoing emails"
        ],
        answer: "Improving sender reputation and email deliverability"
    },
    {
        question: "What is the main purpose of a firewall in network security?",
        options: [
            "To increase internet speed",
            "To monitor and control incoming and outgoing traffic based on security rules",
            "To replace antivirus software",
            "To manage DHCP assignments"
        ],
        answer: "To monitor and control incoming and outgoing traffic based on security rules"
    },
    {
        question: "Which type of firewall operates at the application layer and acts as an intermediary between users and services?",
        options: [
            "Packet-filtering firewall",
            "Proxy service firewall",
            "Stateful inspection firewall",
            "Circuit-level gateway"
        ],
        answer: "Proxy service firewall"
    },
    {
        question: "What additional features does a Next-Generation Firewall (NGFW) provide compared to traditional firewalls?",
        options: [
            "Basic packet filtering only",
            "Deep packet inspection and intrusion prevention",
            "Exclusive hardware-based filtering",
            "Limited to port-based rules"
        ],
        answer: "Deep packet inspection and intrusion prevention"
    },
    {
        question: "Which protocol does SAMBA use to enable file and printer sharing between Linux and Windows systems?",
        options: [
            "FTP",
            "SMTP",
            "SMB/CIFS",
            "HTTP"
        ],
        answer: "SMB/CIFS"
    },

    {
        question: "What is the first step in the network troubleshooting process?",
        options: [
            "Implementing solutions immediately",
            "Defining the problem clearly",
            "Restarting all network devices",
            "Checking internet speed"
        ],
        answer: "Defining the problem clearly"
    },
    {
        question: "Which of the following is NOT listed as a common network problem?",
        options: [
            "Cable issues",
            "Software compatibility",
            "Monitor resolution",
            "Traffic overload"
        ],
        answer: "Monitor resolution"
    },
    {
        question: "What tool would you use to identify duplicate IP addresses on a network?",
        options: [
            "Ping command",
            "Event Viewer",
            "SolarWinds Engineer's Toolset",
            "Perimeter 81"
        ],
        answer: "Ping command"
    },
    {
        question: "When troubleshooting IP problems, what should you check first after identifying the problematic devices?",
        options: [
            "User account permissions",
            "Physical connections",
            "Firewall settings",
            "DNS configurations"
        ],
        answer: "Physical connections"
    },
    {
        question: "What should you do if you suspect a duplicate IP address issue?",
        options: [
            "Increase network bandwidth",
            "Disconnect the device and ping from another machine",
            "Reinstall the operating system",
            "Change the subnet mask"
        ],
        answer: "Disconnect the device and ping from another machine"
    },
    {
        question: "Which Windows tool is specifically mentioned for viewing system logs and diagnosing problems?",
        options: [
            "Task Manager",
            "Device Manager",
            "Event Viewer",
            "Registry Editor"
        ],
        answer: "Event Viewer"
    },
    {
        question: "What is a common cause of boot problems when attempting to start from a network?",
        options: [
            "Missing bootable program",
            "Incorrect screen resolution",
            "Too many user accounts",
            "Outdated web browser"
        ],
        answer: "Missing bootable program"
    },
    {
        question: "Which of these is a cloud-based network management platform mentioned in the chapter?",
        options: [
            "SolarWinds",
            "Auvik",
            "Wireshark",
            "Nmap"
        ],
        answer: "Auvik"
    },
    {
        question: "What should you check if pinging both the destination IP and gateway IP fails?",
        options: [
            "Monitor cables",
            "Keyboard settings",
            "Subnet mask and route configurations",
            "Printer connections"
        ],
        answer: "Subnet mask and route configurations"
    },
    {
        question: "What type of issue would you suspect if a device's port is physically down?",
        options: [
            "Software licensing problem",
            "Physical connectivity issue",
            "DNS resolution failure",
            "Insufficient RAM"
        ],
        answer: "Physical connectivity issue"
    },
     {
        question: "What is the correct formula for calculating security risk?",
        options: [
            "Risk = Threat + Vulnerability + Impact",
            "Risk = Threat * Vulnerability * Impact",
            "Risk = Threat / Vulnerability * Impact",
            "Risk = Threat - Vulnerability + Impact"
        ],
        answer: "Risk = Threat * Vulnerability * Impact"
    },
    {
        question: "Which of the following is NOT one of the three main goals of computer security?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authenticity"
        ],
        answer: "Authenticity"
    },
    {
        question: "What type of attack involves inserting a router between client and server to modify packets?",
        options: [
            "Phishing attack",
            "Man-in-the-middle attack",
            "Buffer overflow attack",
            "Denial-of-service attack"
        ],
        answer: "Man-in-the-middle attack"
    },
    {
        question: "Which security mechanism uses mathematical algorithms to transform data into an unreadable form?",
        options: [
            "Digital Signature",
            "Access Control",
            "Encipherment (encryption)",
            "Authentication Exchange"
        ],
        answer: "Encipherment (encryption)"
    },
    {
        question: "What is the key difference between symmetric and asymmetric encryption?",
        options: [
            "Symmetric is faster but less secure",
            "Symmetric uses one key while asymmetric uses two",
            "Asymmetric can only be used for digital signatures",
            "Symmetric encryption doesn't use algorithms"
        ],
        answer: "Symmetric uses one key while asymmetric uses two"
    },
    {
        question: "Which phase of the intrusion kill chain involves pairing malware with an exploit into a deliverable payload?",
        options: [
            "Reconnaissance",
            "Weaponization",
            "Delivery",
            "Exploitation"
        ],
        answer: "Weaponization"
    },
    {
        question: "What is the primary purpose of a firewall in network security?",
        options: [
            "To encrypt all outgoing emails",
            "To provide a single choke point for security and auditing",
            "To automatically backup system files",
            "To increase network bandwidth"
        ],
        answer: "To provide a single choke point for security and auditing"
    },
    {
        question: "Which type of attack primarily targets the availability of a system?",
        options: [
            "Interception",
            "Modification",
            "Interruption",
            "Fabrication"
        ],
        answer: "Interruption"
    },
    {
        question: "What is the main difference between a hacker and a cracker in security terms?",
        options: [
            "Hackers use Windows while crackers use Linux",
            "Hackers work for companies while crackers are independent",
            "Hackers program creatively while crackers have malicious intent",
            "There is no real difference between them"
        ],
        answer: "Hackers program creatively while crackers have malicious intent"
    },
    {
        question: "Which of the following is NOT mentioned as a way to prevent network intrusions?",
        options: [
            "User education",
            "Closing ports",
            "Increasing processor speed",
            "Intrusion Detection Systems"
        ],
        answer: "Increasing processor speed"
    }
];