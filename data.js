const questions = [
    {
      question: "Which of the following best describes wireless communication?",
      options: ["Communication using physical cables", "Communication through electromagnetic waves", "Communication using infrared signals only", "Communication requiring a fixed infrastructure"],
      answer: "Communication through electromagnetic waves"
    },
    {
      question: "What is the primary characteristic of mobile computing?",
      options: ["High processing power", "Ability to compute while physically moving", "Large storage capacity", "Dependence on a wired network"],
      answer: "Ability to compute while physically moving"
    },
    {
      question: "Which of the following is an example of a service enabled by wireless and mobile technologies?",
      options: ["Printing documents", "Playing a local video file", "Accessing the internet on a smartphone", "Using a wired telephone"],
      answer: "Accessing the internet on a smartphone"
    },
    {
      question: "What is the key difference between 'wireless' and 'mobile'?",
      options: ["'Wireless' implies movement, while 'mobile' implies no physical connection.", "'Mobile' implies movement, while 'wireless' implies no physical connection.", "They are the same concept.", "One refers to hardware, the other to software."],
      answer: "'Mobile' implies movement, while 'wireless' implies no physical connection."
    },
    {
      question: "Which of the following is NOT typically considered a challenge in mobile computing?",
      options: ["Power management", "Network connectivity", "User interface design for small screens", "Unlimited bandwidth"],
      answer: "Unlimited bandwidth"
    },
    {
      question: "Android and iOS are examples of:",
      options: ["Mobile devices", "Mobile computing technologies", "Mobile operating systems", "Wireless network standards"],
      answer: "Mobile operating systems"
    },
    {
      question: "Which technology is NOT a fundamental enabler of mobile computing?",
      options: ["Battery technology", "Sensor technology", "Wired network cables", "Communication protocols"],
      answer: "Wired network cables"
    },
    {
      question: "Electromagnetic waves are fundamental to:",
      options: ["Wired communication", "Mobile operating systems", "Wireless communication", "Battery technology"],
      answer: "Wireless communication"
    },
    {
      question: "What is the purpose of frequency allocation and regulation?",
      options: ["To increase signal strength", "To improve battery life", "To avoid interference between different wireless services", "To reduce the cost of wireless communication"],
      answer: "To avoid interference between different wireless services"
    },
    {
      question: "Which component is responsible for transmitting and receiving wireless signals?",
      options: ["Router", "Modem", "Antenna", "Switch"],
      answer: "Antenna"
    },
    {
      question: "Reflection, refraction, and diffraction are phenomena related to:",
      options: ["Antenna design", "Signal modulation", "Signal propagation", "Frequency allocation"],
      answer: "Signal propagation"
    },
    {
      question: "What is the purpose of multiplexing in wireless communication?",
      options: ["To encrypt data", "To amplify the signal", "To transmit multiple signals simultaneously", "To reduce signal attenuation"],
      answer: "To transmit multiple signals simultaneously"
    },
    {
      question: "Converting digital data into an analog signal for wireless transmission is called:",
      options: ["Multiplexing", "Modulation", "Attenuation", "Propagation"],
      answer: "Modulation"
    },
    {
      question: "CSMA/CA is a Media Access Control (MAC) protocol used to:",
      options: ["Encrypt wireless data", "Manage frequency allocation", "Prevent collisions in wireless networks", "Increase the range of wireless signals"],
      answer: "Prevent collisions in wireless networks"
    },
    {
      question: "WLAN stands for:",
      options: ["Wireless Local Area Network", "Wired Local Area Network", "Wireless Long-range Network", "Wired Long-range Network"],
      answer: "Wireless Local Area Network"
    },
    {
      question: "Which IEEE standard defines WLAN technologies?",
      options: ["IEEE 802.3", "IEEE 802.15", "IEEE 802.11", "IEEE 802.16"],
      answer: "IEEE 802.11"
    },
    {
      question: "HiperLAN is a set of WLAN standards primarily developed in:",
      options: ["North America", "Asia", "Europe", "Australia"],
      answer: "Europe"
    },
    {
      question: "WPAN stands for:",
      options: ["Wired Personal Area Network", "Wireless Public Access Network", "Wireless Personal Area Network", "Wired Public Access Network"],
      answer: "Wireless Personal Area Network"
    },
    {
      question: "Bluetooth is defined by which IEEE standard?",
      options: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.15.1", "IEEE 802.16"],
      answer: "IEEE 802.15.1"
    },
    {
      question: "Zigbee is often used in:",
      options: ["Cellular networks", "Wired LANs", "Wireless Sensor Networks", "Satellite communication"],
      answer: "Wireless Sensor Networks"
    },
    {
      question: "The fundamental principle behind cellular networks is:",
      options: ["Using high-power transmitters", "Frequency reuse", "Wired connections between base stations", "Unidirectional communication"],
      answer: "Frequency reuse"
    },
    {
      question: "Which of the following was a 1G cellular technology?",
      options: ["GSM", "CDMA", "AMPS", "LTE"],
      answer: "AMPS"
    },
    {
      question: "SMS was introduced with which generation of cellular networks?",
      options: ["1G", "2G", "3G", "4G"],
      answer: "2G"
    },
    {
      question: "GPRS and EDGE are considered:",
      options: ["1G technologies", "2G technologies", "2.5G technologies", "3G technologies"],
      answer: "2.5G technologies"
    },
    {
      question: "Which technology is characteristic of 4G cellular networks?",
      options: ["GSM", "UMTS", "LTE", "AMPS"],
      answer: "LTE"
    },
    {
      question: "Enhanced mobile broadband, massive machine-type communications, and ultra-reliable low-latency communications are key features of:",
      options: ["3G", "4G", "5G", "2G"],
      answer: "5G"
    },
    {
      question: "Mobile IP is a protocol designed to:",
      options: ["Increase data transmission rates", "Secure wireless communication", "Allow mobile devices to maintain connectivity while moving", "Manage power consumption in mobile devices"],
      answer: "Allow mobile devices to maintain connectivity while moving"
    },
    {
      question: "In Mobile IP, the entity responsible for maintaining the mobile node's home address is the:",
      options: ["Foreign Agent", "Correspondent Node", "Mobile Node", "Home Agent"],
      answer: "Home Agent"
    },
    {
      question: "The process by which a mobile node informs its home agent about its current location is called:",
      options: ["Handoff", "Tunneling", "Registration", "Encapsulation"],
      answer: "Registration"
    },
    {
      question: "Tunneling and encapsulation are used in Mobile IP to:",
      options: ["Encrypt data transmissions", "Forward packets to the mobile node's current location", "Authenticate the mobile node", "Compress data packets"],
      answer: "Forward packets to the mobile node's current location"
    },
    {
      question: "MANET stands for:",
      options: ["Mobile Ad-hoc Network", "Main Area Network", "Mobile Access Network Entity", "Managed Area Network"],
      answer: "Mobile Ad-hoc Network"
    },
    {
      question: "A key characteristic of a Mobile ad-hoc network (MANET) is:",
      options: ["Reliance on a fixed infrastructure", "Centralized control", "Self-configuring nature", "High power consumption"],
      answer: "Self-configuring nature"
    },
    {
      question: "A primary security challenge specific to wireless networks is:",
      options: ["Physical cable damage", "Limited processing power", "Open transmission medium", "Battery drain"],
      answer: "Open transmission medium"
    },
    {
      question: "WEP is an example of:",
      options: ["A strong wireless security protocol", "A mobile operating system", "An older wireless encryption standard with known vulnerabilities", "A type of antenna"],
      answer: "An older wireless encryption standard with known vulnerabilities"
    },
    {
      question: "VPN stands for:",
      options: ["Virtual Private Network", "Very Public Network", "Video Processing Node", "Voice Protocol Network"],
      answer: "Virtual Private Network"
    },
    {
      question: "How does a VPN help secure wireless transmission?",
      options: ["By increasing signal strength", "By encrypting data and providing authentication", "By managing network traffic", "By preventing physical access to devices"],
      answer: "By encrypting data and providing authentication"
    },
  
    {
      question: "A key characteristic of a Mobile ad-hoc network (MANET) is:",
      options: ["Reliance on a fixed infrastructure", "Centralized control", "Self-configuring nature", "High power consumption"],
      answer: "Self-configuring nature"
    },
    {
      question: "A primary security challenge specific to wireless networks is:",
      options: ["Physical cable damage", "Limited processing power", "Open transmission medium", "Battery drain"],
      answer: "Open transmission medium"
    },
    {
      question: "WEP is an example of:",
      options: ["A strong wireless security protocol", "A mobile operating system", "An older wireless encryption standard with known vulnerabilities", "A type of antenna"],
      answer: "An older wireless encryption standard with known vulnerabilities"
    },
    {
      question: "VPN stands for:",
      options: ["Virtual Private Network", "Very Public Network", "Video Processing Node", "Voice Protocol Network"],
      answer: "Virtual Private Network"
    },
    {
      question: "How does a VPN help secure wireless transmission?",
      options: ["By increasing signal strength", "By encrypting data and providing authentication", "By managing network traffic", "By preventing physical access to devices"],
      answer: "By encrypting data and providing authentication"
    },
    {
      question: "Which of the following is an important aspect of wireless security policies?",
      options: ["Physical security of devices only", "Regular software updates and strong passwords", "Ignoring guest network security", "Sharing network passwords publicly"],
      answer: "Regular software updates and strong passwords"
    },
    {
      question: "Which of the following is NOT a fundamental concept of mobile computing?",
      options: ["Portability", "Connectivity", "Context awareness", "Fixed location"],
      answer: "Fixed location"
    },
    {
      question: "Which of these is a potential issue or challenge in mobile computing?",
      options: ["Unlimited battery life", "Seamless network handover", "Strong signal strength everywhere", "Security vulnerabilities"],
      answer: "Security vulnerabilities"
    },
    {
      question: "Which technology is essential for enabling location-based services on mobile devices?",
      options: ["Bluetooth", "GPS", "Wi-Fi", "Zigbee"],
      answer: "GPS"
    },
    {
      question: "What does 'context awareness' in mobile computing refer to?",
      options: ["The device's ability to process data quickly", "The device's ability to understand its surroundings and user situation", "The device's physical size and weight", "The device's ability to connect to any network"],
      answer: "The device's ability to understand its surroundings and user situation"
    },
    {
      question: "Which of the following is a function of an antenna?",
      options: ["Processing data", "Storing data", "Transmitting and receiving wireless signals", "Controlling network traffic"],
      answer: "Transmitting and receiving wireless signals"
    },
    {
      question: "What is the electromagnetic spectrum?",
      options: ["The range of all possible radio waves", "The range of all electromagnetic radiation frequencies", "The range of visible light frequencies", "The range of sound waves"],
      answer: "The range of all electromagnetic radiation frequencies"
    },
    {
      question: "Which of the following is a type of multiplexing?",
      options: ["Amplitude Modulation (AM)", "Frequency Modulation (FM)", "Time Division Multiplexing (TDM)", "Phase Modulation (PM)"],
      answer: "Time Division Multiplexing (TDM)"
    },
    {
      question: "What is the purpose of modulation in wireless communication?",
      options: ["To amplify the signal", "To reduce noise", "To convert digital data into analog signals", "To compress data"],
      answer: "To convert digital data into analog signals"
    },
    {
      question: "Which of the following is a characteristic of Wireless Sensor Networks (WSNs)?",
      options: ["High power consumption", "Centralized control", "Spatially distributed sensor nodes", "Long-range communication"],
      answer: "Spatially distributed sensor nodes"
    },
    {
      question: "Which of the following is a key advantage of cellular networks?",
      options: ["Limited mobility", "Low coverage area", "Wide area coverage", "High cost"],
      answer: "Wide area coverage"
    },
    {
      question: "What is 'handoff' in cellular networks?",
      options: ["The process of setting up a base station", "The process of transferring a call from one cell to another", "The process of allocating frequencies", "The process of encrypting data"],
      answer: "The process of transferring a call from one cell to another"
    },
    {
      question: "Which technology enabled mobile internet access in cellular networks?",
      options: ["1G", "2G", "3G", "4G"],
      answer: "3G"
    },
    {
      question: "What is the main goal of 5G cellular networks?",
      options: ["To decrease data rates", "To increase voice call quality only", "To provide enhanced mobile broadband, massive machine-type communications, and ultra-reliable low-latency communications", "To reduce network coverage"],
      answer: "To provide enhanced mobile broadband, massive machine-type communications, and ultra-reliable low-latency communications"
    },
    {
      question: "In Mobile IP, what is the role of the Foreign Agent (FA)?",
      options: ["To maintain the mobile node's home address", "To forward packets to the mobile node's current location", "To communicate with the Correspondent Node", "To manage network security"],
      answer: "To forward packets to the mobile node's current location"
    },
    {
      question: "What is 'tunneling' in the context of Mobile IP?",
      options: ["A method of encrypting data", "A process of compressing data", "A technique for forwarding packets by encapsulating them", "A way to increase signal strength"],
      answer: "A technique for forwarding packets by encapsulating them"
    },
    {
      question: "Which type of network does NOT rely on a fixed infrastructure?",
      options: ["Cellular network", "WLAN", "MANET", "Wired LAN"],
      answer: "MANET"
    },
    {
      question: "What is a potential vulnerability in wireless LANs?",
      options: ["Physical damage to cables", "High cost of equipment", "Rogue access points", "Limited mobility"],
      answer: "Rogue access points"
    },
    {
      question: "What is the purpose of wireless security policies?",
      options: ["To limit network access", "To protect data and prevent unauthorized access", "To increase network speed", "To reduce network costs"],
      answer: "To protect data and prevent unauthorized access"
    },
    {
      question: "Which of the following is NOT a type of service commonly associated with wireless and mobile computing?",
      options: ["Voice calls", "Data transfer", "Physical mail delivery", "Location-based services"],
      answer: "Physical mail delivery"
    },
    {
       question: "Which of the following is a key factor to consider in mobile computing?",
       options: ["Device Portability", "Device Power Consumption", "Network Connectivity", "All of the Above"],
       answer: "All of the Above"
    },
    {
       question: "Which of the following is NOT a type of antenna?",
       options: ["Dipole Antenna", "Yagi-Uda Antenna", "Parabolic Antenna", "Ethernet Antenna"],
       answer: "Ethernet Antenna"
    },
    {
       question: "Which of the following is NOT a type of modulation technique?",
       options: ["Amplitude Modulation (AM)", "Frequency Modulation (FM)", "Phase Modulation (PM)", "Optical Modulation (OM)"],
       answer: "Optical Modulation (OM)"
    },
    {
       question: "Which of the following is NOT a generation of cellular networks?",
       options: ["1G", "2G", "3G", "10G"],
       answer: "10G"
    },
    {
       question: "Which of the following is a primary function of Mobile IP?",
       options: ["To manage network security", "To improve data compression", "To enable mobile devices to maintain connectivity while moving", "To increase antenna range"],
       answer: "To enable mobile devices to maintain connectivity while moving"
    },
    {
       question: "Which of the following is a common security threat to wireless networks?",
       options: ["Eavesdropping", "Data Theft", "Unauthorized Access", "All of the Above"],
       answer: "All of the Above"
    },
    {
       question: "What does IEEE stand for?",
       options: ["Institute of Electrical and Electronics Engineers", "International Electrical Engineering Enterprise", "Internet Engineering Execution Entity", "Integrated Electronic Equipment Engineers"],
       answer: "Institute of Electrical and Electronics Engineers"
    },
    {
       question: "Which of the following is a characteristic of 4G networks?",
       options: ["Circuit Switching", "Packet Switching", "Analog Transmission", "Low Data Rates"],
       answer: "Packet Switching"
    },
    {
       question: "What is the primary function of a Home Agent (HA) in Mobile IP?",
       options: ["To manage foreign network access", "To maintain the mobile node's home address and forward packets", "To encrypt data transmissions", "To control antenna direction"],
       answer: "To maintain the mobile node's home address and forward packets"
    },
    {
       question: "Which of the following is a common technology used in Wireless Personal Area Networks (WPANs)?",
       options: ["Wi-Fi", "Bluetooth", "Cellular", "Satellite"],
       answer: "Bluetooth"
    },
    {
       question: "What is the purpose of frequency reuse in cellular networks?",
       options: ["To increase signal strength", "To reduce interference and increase capacity", "To decrease power consumption", "To simplify network management"],
       answer: "To reduce interference and increase capacity"
    },
    {
       question: "Which of the following is a characteristic of 5G networks?",
       options: ["Low latency", "High bandwidth", "Massive device connectivity", "All of the Above"],
       answer: "All of the Above"
    },
    {
       question: "In wireless communication, what is 'attenuation'?",
       options: ["The process of increasing signal strength", "The decrease in signal strength over distance", "A type of modulation", "A method of multiplexing"],
       answer: "The decrease in signal strength over distance"
    },
    {
       question: "Which of the following is a security protocol used in WLANs?",
       options: ["TCP/IP", "HTTP", "WPA2", "FTP"],
       answer: "WPA2"
    },
    {
       question: "What is the role of Media Access Control (MAC) protocols in wireless networks?",
       options: ["To manage network routing", "To prevent data collisions during transmission", "To encrypt data", "To control antenna direction"],
       answer: "To prevent data collisions during transmission"
    },
  ];
      