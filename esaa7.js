
    const questions = [{
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
      question: "To access the services of the operating system, the interface is provided by the",
      options: [
        "Library",
        "System calls",
        "Assembly instructions",
        "API"
      ],
      answer: "System calls"
    },
    {
      question: "CPU scheduling is the basis of",
      options: [
        "multiprogramming operating systems",
        "larger memory sized systems",
        "multiprocessor systems",
        "none of the mentioned"
      ],
      answer: "multiprogramming operating systems"
    },
    {
      question: "Which one of the following is not true?",
      options: [
        "kernel remains in the memory during the entire computer session",
        "kernel is made of various modules which can not be loaded in running operating system",
        "kernel is the first part of the operating system to load into memory during booting",
        "kernel is the program that constitutes the central core of the operating system"
      ],
      answer: "kernel is made of various modules which can not be loaded in running operating system"
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
      question: "Where is the operating system placed in the memory?",
      options: [
        "either low or high memory (depending on the location of interrupt vector)",
        "in the low memory",
        "in the high memory",
        "none of the mentioned"
      ],
      answer: "either low or high memory (depending on the location of interrupt vector)"
    },
    {
      question: "If a process fails, most operating system write the error information to a",
      options: [
        "new file",
        "another running process",
        "log file",
        "none of the mentioned"
      ],
      answer: "log file"
    },
    {
      question: "Which one of the following is not a real time operating system?",
      options: [
        "RTLinux",
        "Palm OS",
        "QNX",
        "VxWorks"
      ],
      answer: "Palm OS"
    },
    {
      question: "What does OS X has?",
      options: [
        "monolithic kernel with modules",
        "microkernel",
        "monolithic kernel",
        "hybrid kernel"
      ],
      answer: "hybrid kernel"
    },
    {
      question: "In operating system, each process has its own",
      options: [
        "open files",
        "pending alarms, signals, and signal handlers",
        "address space and global variables",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to?",
      options: [
        "Suspended state",
        "Terminated state",
        "Ready state",
        "Blocked state"
      ],
      answer: "Ready state"
    },
    {
      question: "Cascading termination refers to the termination of all child processes if the parent process terminates",
      options: [
        "Normally or abnormally",
        "Abnormally",
        "Normally",
        "None of the mentioned"
      ],
      answer: "Normally or abnormally"
    },
    {
      question: 'When a process is in a "Blocked" state waiting for some I/O service. When the service is completed, it goes to the',
      options: [
        "Terminated state",
        "Suspended state",
        "Running state",
        "Ready state"
      ],
      answer: "Ready state"
    },
    {
      question: "Transient operating system code is a code that",
      options: [
        "stays in the memory always",
        "never enters the memory space",
        "comes and goes as needed",
        "is not easily accessible"
      ],
      answer: "comes and goes as needed"
    },
    {
      question: "The portion of the process scheduler in an operating system that dispatches processes is concerned with",
      options: [
        "assigning ready processes to waiting queue",
        "assigning running processes to blocked queue",
        "assigning ready processes to CPU",
        "all of the mentioned"
      ],
      answer: "assigning ready processes to CPU"
    },
    {
      question: "The FCFS algorithm is particularly troublesome for",
      options: [
        "operating systems",
        "multiprocessor systems",
        "time sharing systems",
        "multiprogramming systems"
      ],
      answer: "time sharing systems"
    },
    {
      question: "For an effective operating system, when to check for deadlock?",
      options: [
        "every time a resource request is made at fixed time intervals",
        "at fixed time intervals",
        "every time a resource request is made",
        "none of the mentioned"
      ],
      answer: "every time a resource request is made at fixed time intervals"
    },
    {
      question: "A deadlock avoidance algorithm dynamically examines the __________ to ensure that a circular wait condition can never exist.",
      options: [
        "operating system",
        "resources",
        "system storage state",
        "resource allocation state"
      ],
      answer: "resource allocation state"
    },
    {
      question: "Swapping __________ be done when a process has pending I/O, or has to execute I/O operations only into operating system buffers.",
      options: [
        "must never",
        "maybe",
        "can",
        "must"
      ],
      answer: "must never"
    },
    {
      question: "The main memory accommodates",
      options: [
        "cpu",
        "user processes",
        "operating system",
        "all of the mentioned"
      ],
      answer: "operating system"
    },
      {
      question: "The operating system is responsible for?",
      options: [
        "bad-block recovery",
        "booting from disk",
        "disk initialization",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },
    {
      question: "The operating system and the other processes are protected from being modified by an already running process because",
      options: [
        "every address generated by the CPU is being checked against the relocation and limit registers",
        "they have a protection algorithm",
        "they are in different memory spaces",
        "they are in different logical addresses"
      ],
      answer: "every address generated by the CPU is being checked against the relocation and limit registers"
    },
    {
      question: "Using transient code, __________ the size of the operating system during program execution.",
      options: [
        "maintains",
        "changes",
        "increases",
        "decreases"
      ],
      answer: "changes"
    },
    {
      question: "The operating system maintains a __________ table that keeps track of how many frames have been allocated, how many are there, and how many are available.",
      options: [
        "memory",
        "mapping",
        "page",
        "frame"
      ],
      answer: "frame"
    },
    {
      question: "To obtain better memory utilization, dynamic loading is used.  With dynamic loading, a routine is not loaded until it is called. For implementing dynamic loading",
      options: [
        "special support from operating system is essential",
        "special support from hardware is required",
        "user programs can implement dynamic loading without any special support from hardware or operating system",
        "special support from both hardware and operating system is essential"
      ],
      answer: "user programs can implement dynamic loading without any special support from hardware or operating system"
    },
    {
      question: "The __________ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system.",
      options: [
        "Device drivers",
        "I/O systems",
        "Devices",
        "Buses"
      ],
      answer: "Device drivers"
    },
    {
      question: "In real time operating system",
      options: [
        "process scheduling can be done only once",
        "all processes have the same priority",
        "kernel is not required",
        "a task must be serviced by its deadline period"
      ],
      answer: "a task must be serviced by its deadline period"
    },
    {
      question: "Hard real time operating system has __________ jitter than a soft real time operating system.",
      options: [
        "equal",
        "more",
        "less",
        "none of the mentioned"
      ],
      answer: "less"
    },
    {
      question: "For real time operating systems, interrupt latency should be",
      options: [
        "zero",
        "minimal",
        "maximum",
        "dependent on the scheduling"
      ],
      answer: "minimal"
    },
    {
      question: "Which one of the following is a real time operating system?",
      options: [
        "Windows CE",
        "RTLinux",
        "VxWorks",
        "All of the mentioned"
      ],
      answer: "All of the mentioned"
    },
    {
      question: "The priority of a process will __________ if the scheduler assigns it a static priority.",
      options: [
        "depends on the operating system",
        "change",
        "remain unchanged",
        "none of the mentioned"
      ],
      answer: "remain unchanged"
    },
    {
      question: "What are the characteristics of Host based IDS?",
      options: [
        "Logs are analysed to detect tails of intrusion",
        "The host operating system logs in the audit information",
        "Logs includes logins, file opens, and program executions",
        "All of the mentioned"
      ],
      answer: "All of the mentioned"
    },
    {
      question: "What are the characteristics of stack based IDS?",
      options: [
        "It is programmed to interpret a certain series of packets",
        "It models the normal usage of the network as a noise characterization",
        "They are integrated closely with the TCP/IP stack and watch packets",
        "The host operating system logs in the audit information"
      ],
      answer: "They are integrated closely with the TCP/IP stack and watch packets"
    },
    {
      question: "If the sum of the working - set sizes increases, exceeding the total number of available frames",
      options: [
        "the operating system selects a process to suspend",
        "the system crashes",
        "then the process crashes",
        "the memory overflows"
      ],
      answer: "the operating system selects a process to suspend"
    },
    {
      question: "The information about all files is kept in",
      options: [
        "operating system",
        "separate directory structure",
        "swap space",
        "none of the mentioned"
      ],
      answer: "separate directory structure"
    },
    {
      question: "The operating system keeps a small table containing information about all open files called",
      options: [
        "file table",
        "directory table",
        "open-file table",
        "system table"
      ],
      answer: "open-file table"
    },
    {
      question: "What will happen in the single level directory?",
      options: [
        "All files are contained in the same directory",
        "All files are contained in different directories all at the same level",
        "Depends on the operating system",
        "None of the mentioned"
      ],
      answer: "All files are contained in the same directory"
    },
    {
      question: "The operating system __________ the links when traversing directory trees, to preserve the acyclic structure of the system.",
      options: [
        "deletes",
        "considers",
        "ignores",
        "none of the mentioned"
      ],
      answer: "ignores"
    },
    {
      question: "To recover from failures in the network operations __________ information may be maintained.",
      options: [
        "operating system",
        "ip address",
        "stateless",
        "state"
      ],
      answer: "state"
    },
    {
      question: "On systems where there are multiple operating system, the decision to load a particular one is done by",
      options: [
        "process control block",
        "file control block",
        "boot loader",
        "bootstrap"
      ],
      answer: "boot loader"
    },
    {
      question: "Whenever a process needs I/O to or from a disk it issues a",
      options: [
        "system call to the operating system",
        "a special procedure",
        "system call to the CPU",
        "all of the mentioned"
      ],
      answer: "system call to the operating system"
    },
    {
      question: "The two steps the operating system takes to use a disk to hold its files are _______ and ________",
      options: [
        "caching & logical formatting",
        "logical formatting & swap space creation",
        "swap space creation & caching",
        "partitioning & logical formatting"
      ],
      answer: "partitioning & logical formatting"
    },
    {
      question: "The _______ program initializes all aspects of the system, from CPU registers to device controllers and the contents of main memory, and then starts the operating system.",
      options: [
        "bootstrap",
        "main",
        "bootloader",
        "rom"
      ],
      answer: "bootstrap"
    },
    {
      question: "In SCSI disks used in high end PCs, the controller maintains a list of _________ on the disk. The disk is initialized during _________ formatting which sets aside spare sectors not visible to the operating system.",
      options: [
        "destroyed blocks, partitioning",
        "bad blocks, low level formatting",
        "destroyed blocks, high level formatting",
        "bad blocks, partitioning"
      ],
      answer: "bad blocks, low level formatting"
    },
    {
      question: "Which principle states that programs, users, and even the systems be given just enough privileges to perform their task?",
      options: [
        "principle of least privilege",
        "principle of process scheduling",
        "principle of operating system",
        "none of the mentioned"
      ],
      answer: "principle of least privilege"
    },
    {
      question: "Network operating system runs on ___________",
      options: [
        "every system in the network",
        "server",
        "both server and every system in the network",
        "none of the mentioned"
      ],
      answer: "server"
    },
    {
      question: "What are the types of distributed operating systems?",
      options: [
        "Zone based Operating system",
        "Level based Operating system",
        "Network Operating system",
        "All of the mentioned"
      ],
      answer: "Network Operating system"
    },
    {
      question: "In Unix, which system call creates the new process?",
      options: [
        "create",
        "fork",
        "new",
        "none of the mentioned"
      ],
      answer: "fork"
    },
    {
      question: "What is a reusable resource?",
      options: [
        "that can be used by one process at a time and is not depleted by that use",
        "that can be used by more than one process at a time",
        "that can be shared between various threads",
        "none of the mentioned"
      ],
      answer: "that can be used by one process at a time and is not depleted by that use"
    },
    {
      question: "Which of the following condition is required for a deadlock to be possible?",
      options: [
        "mutual exclusion",
        "a process may hold allocated resources while awaiting assignment of other resources",
        "no resource can be forcibly removed from a process holding it",
        "all of the mentioned"
      ],
      answer: "all of the mentioned"
    },[
        {
          question: "A system is in the safe state if ____________",
          options: [
            "the system can allocate resources to each process in some order and still avoid a deadlock",
            "there exist a safe sequence",
            "all of the mentioned",
            "none of the mentioned"
          ],
          answer: "the system can allocate resources to each process in some order and still avoid a deadlock"
        },
        {
          question: "The circular wait condition can be prevented by ____________",
          options: [
            "defining a linear ordering of resource types",
            "using thread",
            "using pipes",
            "all of the mentioned"
          ],
          answer: "defining a linear ordering of resource types"
        },
        {
          question: "Which one of the following is the deadlock avoidance algorithm?",
          options: [
            "banker’s algorithm",
            "round-robin algorithm",
            "elevator algorithm",
            "karn’s algorithm"
          ],
          answer: "banker’s algorithm"
        },
        {
          question: "What is the drawback of banker’s algorithm?",
          options: [
            "in advance processes rarely know how much resource they will need",
            "the number of processes changes as time progresses",
            "resource once available can disappear",
            "all of the mentioned"
          ],
          answer: "all of the mentioned"
        },
        {
          question: "For an effective operating system, when to check for deadlock?",
          options: [
            "every time a resource request is made",
            "at fixed time intervals",
            "every time a resource request is made at fixed time intervals",
            "none of the mentioned"
          ],
          answer: "every time a resource request is made at fixed time intervals"
        },
        {
          question: "A problem encountered in multitasking when a process is perpetually denied necessary resources is called ____________",
          options: [
            "deadlock",
            "starvation",
            "inversion",
            "aging"
          ],
          answer: "starvation"
        },
        {
          question: "Which one of the following is a visual ( mathematical ) way to determine the deadlock occurrence?",
          options: [
            "resource allocation graph",
            "starvation graph",
            "inversion graph",
            "none of the mentioned"
          ],
          answer: "resource allocation graph"
        },
        {
          question: "To avoid deadlock ____________",
          options: [
            "there must be a fixed number of resources to allocate",
            "resource allocation must be done only once",
            "all deadlocked processes must be aborted",
            "inversion technique can be used"
          ],
          answer: "there must be a fixed number of resources to allocate"
        },
        {
          question: "Which requested resources are granted with deadlock detection?",
          options: [
            "Resources",
            "Processes",
            "Programs",
            "Users",
            "Data",
            "Both C & D"
          ],
          answer: "Processes"
        },
        {
          question: "Prevention strategies of deadlock are very…?",
          options: [
            "Simple",
            "Complex",
            "Conservative",
            "Straight",
            "Difficult",
            "Both A&B"
          ],
          answer: "Conservative"
        },
        {
          question: "Which thread management work done by a pure Kernel Level Thread facility?",
          options: [
            "Kernel",
            "Program",
            "Application",
            "Threads",
            "Data",
            "Information"
          ],
          answer: "Kernel"
        },
        {
          question: "Which labs initially developed by UNIX?",
          options: [
            "NASA",
            "Microsoft",
            "Kaspersky",
            "Bell",
            "Dell",
            "Both A&B"
          ],
          answer: "Bell"
        },
        {
          question: "The advantage of Multiprocessor system is …",
          options: [
            "Operating system",
            "Expensive hardware",
            "Microsoft",
            "Data collection",
            "Increased Throughput",
            "Both A and B"
          ],
          answer: "Increased Throughput"
        },
         {
          question: "Win32 application programming interfaces are for",
          options: [
            "Windows",
            "UNIX",
            "Linux",
            "Microsoft",
            "Solaris",
            "Both B&C"
          ],
          answer: "Windows"
        },
        {
          question: "………. that implies an unsafe state.",
          options: [
            "the existence of deadlock",
            "that deadlock will eventually occur",
            "the pages of deadlock",
            "that some unfortunate sequence of events might lead to deadlock",
            "none of these"
          ],
          answer: "that some unfortunate sequence of events might lead to deadlock"
        },
        {
          question: "Which one process cannot overwrite another’s a memory, either inadvertently or maliciously.",
          options: [
            "sections",
            "partitions",
            "modules",
            "regions",
            "frames",
            "both A&B"
          ],
          answer: "partitions"
        },
        {
          question: "………. That can be loaded into adjacent “holes” in the main memory.",
          options: [
            "segments",
            "frames",
            "partitions",
            "pages",
            "regions",
            "None of these"
          ],
          answer: "segments"
        },
        {
          question: "System’s evaluate common schedule strategies.",
          options: [
            "throughput",
            "means response time",
            "variance of response time",
            "all of the above",
            "both A&B",
            "no response time"
          ],
          answer: "all of the above"
        },
        {
          question: "How much time will spend when LRU replaces the page?",
          options: [
            "shortest time in memory",
            "shortest time in memory without being referenced",
            "longest time in memory",
            "longest time in memory without being referenced",
            "both A&B",
            "both C&D"
          ],
          answer: "longest time in memory without being referenced"
        },
        {
          question: "Why Spooling helps?",
          options: [
            "while printing when computer release to do other things",
            "jobs go more smoothly with less stop",
            "printing it is a more secure method of accessing data",
            "none of the above",
            "both B&C",
            "both A&C"
          ],
          answer: "while printing when computer release to do other things"
        },
        {
          question: "OS spends much of its time paging also instead of executing applications software, it is called……….",
          options: [
            "spooling",
            "formatting",
            "thrashing",
            "booting",
            "scanning",
            "both A&B"
          ],
          answer: "thrashing"
        },
        {
          question: "………… is an interrupt handler.",
          options: [
            "memory location that keeps track",
            "peripheral devices",
            "operating device",
            "numeric code that indicated the priority request",
            "utility program",
            "None of these"
          ],
          answer: "utility program"
        },
        {
          question: "Running process does not interrupt by ……………",
          options: [
            "device",
            "timer interrupts",
            "power failure",
            "scheduling process",
            "both A&B",
            "none of above"
          ],
          answer: "device"
        },
        {
          question: "………….. is an Overlay.",
          options: [
            "a part of an OS",
            "a specific memory location",
            "overloading the system with many users fills",
            "a contiguous memory that was used in the olden days for running",
            "both A&B",
            "None of these"
          ],
          answer: "overloading the system with many users fills"
        },
         {
          question: "CPU scheduling is the basis of ___________",
          options: [
            "multiprocessor systems",
            "multiprogramming operating systems",
            "larger memory sized systems",
            "none of the mentioned"
          ],
          answer: "multiprogramming operating systems"
        },
        {
          question: "With multiprogramming ______ is used productively.",
          options: [
            "time",
            "space",
            "money",
            "all of the mentioned"
          ],
          answer: "time"
        },
        {
          question: "What are the two steps of a process execution?",
          options: [
            "I/O & OS Burst",
            "CPU & I/O Burst",
            "Memory & I/O Burst",
            "OS & Memory Burst"
          ],
          answer: "CPU & I/O Burst"
        },
        {
          question: "An I/O bound program will typically have ____________",
          options: [
            "a few very short CPU bursts",
            "many very short I/O bursts",
            "many very short CPU bursts",
            "a few very short I/O bursts"
          ],
          answer: "many very short CPU bursts"
        },
        {
          question: "A process is selected from the ______ queue by the ________ scheduler, to be executed.",
          options: [
            "blocked, short term",
            "wait, long term",
            "ready, short term",
            "ready, long term"
          ],
          answer: "ready, short term"
        },
        {
          question: "In the following cases non – preemptive scheduling occurs?",
          options: [
            "When a process switches from the running state to the ready state",
            "When a process goes from the running state to the waiting state",
            "When a process switches from the waiting state to the ready state",
            "All of the mentioned"
          ],
          answer: "When a process goes from the running state to the waiting state"
        },
        {
          question: "The switching of the CPU from one process or thread to another is called ____________",
          options: [
            "process switch",
            "task switch",
            "context switch",
            "all of the mentioned"
          ],
          answer: "all of the mentioned"
        },
        {
          question: "What is Dispatch latency?",
          options: [
            "the speed of dispatching a process from running to the ready state",
            "the time of dispatching a process from running to ready state and keeping the CPU idle",
            "the time to stop one process and start running another one",
            "none of the mentioned"
          ],
          answer: "the time to stop one process and start running another one"
        },
        {
          question: "Scheduling is done so as to ____________",
          options: [
            "increase CPU utilization",
            "decrease CPU utilization",
            "keep the CPU more idle",
            "none of the mentioned"
          ],
          answer: "increase CPU utilization"
        },
        {
          question: "Scheduling is done so as to ____________",
          options: [
            "increase the throughput",
            "decrease the throughput",
            "increase the duration of a specific amount of work",
            "none of the mentioned"
          ],
          answer: "increase the throughput"
        },
        {
          question: "What is Turnaround time?",
          options: [
            "the total waiting time for a process to finish execution",
            "the total time spent in the ready queue",
            "the total time spent in the running queue",
            "the total time from the completion till the submission of a process"
          ],
          answer: "the total time from the completion till the submission of a process"
        },
        {
          question: "Scheduling is done so as to ____________",
          options: [
            "increase the turnaround time",
            "decrease the turnaround time",
            "keep the turnaround time same",
            "there is no relation between scheduling and turnaround time"
          ],
          answer: "decrease the turnaround time"
        },
        {
          question: "What is Waiting time?",
          options: [
            "the total time in the blocked and waiting queues",
            "the total time spent in the ready queue",
            "the total time spent in the running queue",
            "the total time from the completion till the submission of a process"
          ],
          answer: "the total time spent in the ready queue"
        },
        {
          question: "Scheduling is done so as to ____________",
          options: [
            "increase the waiting time",
            "keep the waiting time the same",
            "decrease the waiting time",
            "none of the mentioned"
          ],
          answer: "decrease the waiting time"
        },
        {
          question: "What is Response time?",
          options: [
            "the total time taken from the submission time till the completion time",
            "the total time taken from the submission time till the first response is produced",
            "the total time taken from submission time till the response is output",
            "none of the mentioned"
          ],
          answer: "the total time taken from the submission time till the first response is produced"
        },
        {
          question: "Round robin scheduling falls under the category of ____________",
          options: [
            "Non-preemptive scheduling",
            "Preemptive scheduling",
            "All of the mentioned",
            "None of the mentioned"
          ],
          answer: "Preemptive scheduling"
        },
        {
          question: "With round robin scheduling algorithm in a time shared system ____________",
          options: [
            "using very large time slices converts it into First come First served scheduling algorithm",
            "using very small time slices converts it into First come First served scheduling algorithm",
            "using extremely small time slices increases performance",
            "using very small time slices converts it into Shortest Job First algorithm"
          ],
          answer: "using very large time slices converts it into First come First served scheduling algorithm"
        },
        {
          question: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
          options: [
            "assigning ready processes to CPU",
            "assigning ready processes to waiting queue",
            "assigning running processes to blocked queue",
            "all of the mentioned"
          ],
          answer: "assigning ready processes to CPU"
        },
        {
          question: "Complex scheduling algorithms ____________",
          options: [
            "are very appropriate for very large computers",
            "use minimal resources",
            "use many resources",
            "all of the mentioned"
          ],
          answer: "are very appropriate for very large computers"
        },
        {
          question: "What is FIFO algorithm?",
          options: [
            "first executes the job that came in last in the queue",
            "first executes the job that came in first in the queue",
            "first executes the job that needs minimal processor",
            "first executes the job that has maximum processor needs"
          ],
          answer: "first executes the job that came in first in the queue"
        },
        {
          question: "The strategy of making processes that are logically runnable to be temporarily suspended is called ____________",
          options: [
            "Non preemptive scheduling",
            "Preemptive scheduling",
            "Shortest job first",
            "First come First served"
          ],
          answer: "Preemptive scheduling"
        },
        {
          question: "What is Scheduling?",
          options: [
            "allowing a job to use the processor",
            "making proper use of processor",
            "all of the mentioned",
            "none of the mentioned"
          ],
          answer: "allowing a job to use the processor"
        },
        {
          question: "There are 10 different processes running on a workstation. Idle processes are waiting for an input event in the input queue. Busy processes are scheduled with the Round-Robin time sharing method. Which out of the following quantum times is the best value for small response times, if the processes have a short runtime, e.g. less than 10ms?",
          options: [
            "tQ = 15ms",
            "tQ = 40ms",
            "tQ = 45ms",
            "tQ = 50ms"
          ],
          answer: "tQ = 15ms"
        },
        {
          question: "Orders are processed in the sequence they arrive if _______ rule sequences the jobs.",
          options: [
            "earliest due date",
            "slack time remaining",
            "first come, first served",
            "critical ratio"
          ],
          answer: "first come, first served"
        },
        {
          question: "Which of the following algorithms tends to minimize the process flow time?",
          options: [
            "First come First served",
            "Shortest Job First",
            "Earliest Deadline First",
            "Longest Job First"
          ],
          answer: "Shortest Job First"
        },
    ]]