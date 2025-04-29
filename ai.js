const questions = [
    { question: "Which of the following is not a valid process state?",
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
    question: "What is the primary focus of this course?",
    options: [
    "Web development",
    "Database management",
    "Data structures and algorithms",
    "Operating systems"
    ],
    answer: "Data structures and algorithms"
    },
    {
    question: "Which of the following is NOT a data structure covered in this course?",
    options: [
    "Linked list",
    "Stack",
    "Queue",
    "Compiler"
    ],
    answer: "Compiler"
    },
    {
    question: "What does ADT stand for?",
    options: [
    "Abstract Data Type",
    "Advanced Data Table",
    "Array Data Type",
    "Applied Data Technology"
    ],
    answer: "Abstract Data Type"
    },
    {
    question: "Which of the following is a property of an algorithm?",
    options: [
    "Ambiguity",
    "Finiteness",
    "Inefficiency",
    "Dependence on hardware"
    ],
    answer: "Finiteness"
    },
    {
    question: "What is the purpose of asymptotic analysis?",
    options: [
    "To measure the exact execution time of an algorithm",
    "To analyze the complexity of an algorithm as input size increases",
    "To write efficient code",
    "To debug programs"
    ],
    answer: "To analyze the complexity of an algorithm as input size increases"
    },
    {
    question: "Which sorting algorithm is known for its simplicity but inefficiency?",
    options: [
    "Merge sort",
    "Quick sort",
    "Bubble sort",
    "Heap sort"
    ],
    answer: "Bubble sort"
    },
    {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: [
    "Insertion sort",
    "Selection sort",
    "Bubble sort",
    "Quick sort"
    ],
    answer: "Quick sort"
    },
    {
    question: "Which searching algorithm requires a sorted list?",
    options: [
    "Linear search",
    "Binary search",
    "Both A and B",
    "None of the above"
    ],
    answer: "Binary search"
    },
    {
    question: "What is the time complexity of linear search in the worst case?",
    options: [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n^2)"
    ],
    answer: "O(n)"
    },
    {
    question: "What is the time complexity of binary search in the worst case?",
    options: [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n^2)"
    ],
    answer: "O(log n)"
    },
    {
    question: "Which data structure uses pointers to connect elements?",
    options: [
    "Array",
    "Linked list",
    "Stack",
    "Queue"
    ],
    answer: "Linked list"
    },
    {
    question: "What is a singly linked list?",
    options: [
    "A list with nodes pointing to the next node only",
    "A list with nodes pointing to both the next and previous nodes",
    "A list where the last node points back to the first node",
    "A list with no nodes"
    ],
    answer: "A list with nodes pointing to the next node only"
    },
    {
    question: "What is a doubly linked list?",
    options: [
    "A list with nodes pointing to the next node only",
    "A list with nodes pointing to both the next and previous nodes",
    "A list where the last node points back to the first node",
    "A list with no nodes"
    ],
    answer: "A list with nodes pointing to both the next and previous nodes"
    },
    {
    question: "What is a circular linked list?",
    options: [
    "A list with nodes pointing to the next node only",
    "A list with nodes pointing to both the next and previous nodes",
    "A list where the last node points back to the first node",
    "A list with no nodes"
    ],
    answer: "A list where the last node points back to the first node"
    },
    {
    question: "Which data structure follows the LIFO principle?",
    options: [
    "Queue",
    "Stack",
    "Linked list",
    "Tree"
    ],
    answer: "Stack"
    },
    {
    question: "In a stack, where does insertion and deletion happen?",
    options: [
    "At the beginning",
    "At the end",
    "In the middle",
    "Randomly"
    ],
    answer: "At the end"
    },
    {
    question: "Which of the following is an application of stack?",
    options: [
    "Print queue",
    "Evaluation of algebraic expressions",
    "Breadth-first search",
    "Shortest path algorithm"
    ],
    answer: "Evaluation of algebraic expressions"
    },
    {
    question: "What is the purpose of infix to postfix conversion?",
    options: [
    "To simplify algebraic expressions",
    "To evaluate expressions efficiently using a stack",
    "To convert to binary code",
    "To sort expressions"
    ],
    answer: "To evaluate expressions efficiently using a stack"
    },
    {
    question: "Which data structure is used for function calls?",
    options: [
    "Queue",
    "Stack",
    "Linked list",
    "Tree"
    ],
    answer: "Stack"
    },
    {
    question: "Which data structure follows the FIFO principle?",
    options: [
    "Queue",
    "Stack",
    "Linked list",
    "Tree"
    ],
    answer: "Queue"
    },
    {
    question: "In a queue, where does insertion happen?",
    options: [
    "At the front",
    "At the rear",
    "In the middle",
    "Randomly"
    ],
    answer: "At the rear"
    },
    {
    question: "In a queue, where does deletion happen?",
    options: [
    "At the front",
    "At the rear",
    "In the middle",
    "Randomly"
    ],
    answer: "At the front"
    },
    {
    question: "What is a double-ended queue (deque)?",
    options: [
    "A queue with two fronts",
    "A queue where elements can be inserted or deleted at both ends",
    "A queue with priority",
    "A queue implemented using two stacks"
    ],
    answer: "A queue where elements can be inserted or deleted at both ends"
    },
    {
    question: "What is a priority queue?",
    options: [
    "A queue where elements are processed in order of priority",
    "A queue with double ends",
    "A queue with limited size",
    "A queue that uses a stack"
    ],
    answer: "A queue where elements are processed in order of priority"
    },
    {
    question: "Which of the following is an application of queues?",
    options: [
    "Recursion",
    "Tree traversal",
    "Job scheduling",
    "Expression evaluation"
    ],
    answer: "Job scheduling"
    },
    {
    question: "What is a binary tree?",
    options: [
    "A tree with at most two children per node",
    "A tree with at most one child per node",
    "A tree with no children",
    "A linear data structure"
    ],
    answer: "A tree with at most two children per node"
    },
    {
    question: "What is a binary search tree?",
    options: [
    "A binary tree where the left child is always smaller than the parent, and the right child is always greater",
    "A binary tree where the left child is always greater than the parent, and the right child is always smaller",
    "A binary tree with no order",
    "A tree used for searching only"
    ],
    answer: "A binary tree where the left child is always smaller than the parent, and the right child is always greater"
    },
    {
    question: "Which of the following is a tree traversal method?",
    options: [
    "Linear search",
    "Bubble sort",
    "Inorder traversal",
    "Postfix notation"
    ],
    answer: "Inorder traversal"
    },
    {
    question: "What is a graph?",
    options: [
    "A linear data structure",
    "A hierarchical data structure",
    "A data structure consisting of nodes and edges",
    "A data structure used for sorting"
    ],
    answer: "A data structure consisting of nodes and edges"
    },
    {
    question: "What is the difference between a directed and undirected graph?",
    options: [
    "Directed graphs have edges with direction, undirected graphs have edges without direction",
    "Undirected graphs have edges with direction, directed graphs have edges without direction",
    "Directed graphs have more nodes",
    "Undirected graphs have more edges"
    ],
    answer: "Directed graphs have edges with direction, undirected graphs have edges without direction"
    },
    {
    question: "Which of the following is a graph traversal method?",
    options: [
    "Inorder",
    "Preorder",
    "Depth-first search",
    "Level order"
    ],
    answer: "Depth-first search"
    },
    {
    question: "Which sorting algorithm is also known as diminishing increment sort?",
    options: [
    "Merge sort",
    "Quick sort",
    "Shell sort",
    "Heap sort"
    ],
    answer: "Shell sort"
    },
    {
    question: "Which sorting algorithm uses a divide-and-conquer approach?",
    options: [
    "Insertion sort",
    "Selection sort",
    "Merge sort",
    "Bubble sort"
    ],
    answer: "Merge sort"
    },
    {
    question: "Which sorting algorithm is efficient for large datasets?",
    options: [
    "Bubble sort",
    "Insertion sort",
    "Selection sort",
    "Merge sort"
    ],
    answer: "Merge sort"
    },
    {
    question: "What is hashing?",
    options: [
    "A sorting algorithm",
    "A searching technique that uses a hash function to map keys to indices in an array",
    "A data structure",
    "A tree traversal method"
    ],
    answer: "A searching technique that uses a hash function to map keys to indices in an array"
    },
    {
    question: "What is the purpose of analyzing time and space requirements of algorithms?",
    options: [
    "To make algorithms more complex",
    "To evaluate the efficiency of algorithms",
    "To write longer code",
    "To confuse programmers"
    ],
    answer: "To evaluate the efficiency of algorithms"
    },
    {
    question: "Which notation is used to represent the time complexity of an algorithm?",
    options: [
    "ASCII",
    "Big-O",
    "UTF-8",
    "Roman numerals"
    ],
    answer: "Big-O"
    },
    {
    question: "What does O(n) represent in time complexity?",
    options: [
    "Constant time",
    "Logarithmic time",
    "Linear time",
    "Quadratic time"
    ],
    answer: "Linear time"
    },
    {
    question: "What does O(log n) represent in time complexity?",
    options: [
    "Constant time",
    "Logarithmic time",
    "Linear time",
    "Quadratic time"
    ],
    answer: "Logarithmic time"
    },
    {
    question: "What does O(n^2) represent in time complexity?",
    options: [
    "Constant time",
    "Logarithmic time",
    "Linear time",
    "Quadratic time"
    ],
    answer: "Quadratic time"
    },
    {
    question: "Which sorting algorithm has a time complexity of O(n^2) in the worst case?",
    options: [
    "Merge sort",
    "Quick sort",
    "Bubble sort",
    "Heap sort"
    ],
    answer: "Bubble sort"
    },
     {
    question: "Which sorting algorithm has a time complexity of O(n log n) in the best case?",
    options: [
    "Insertion sort",
    "Selection sort",
    "Merge sort",
    "Bubble sort"
    ],
    answer: "Merge sort"
    },
    {
    question: "In a binary search tree, which node is the root node?",
    options: [
    "The first node inserted",
    "The last node inserted",
    "The middle node",
    "Any node can be the root"
    ],
    answer: "Any node can be the root"
    },
    {
    question: "Which tree traversal method visits the root node last?",
    options: [
    "Inorder",
    "Preorder",
    "Postorder",
    "Level order"
    ],
    answer: "Postorder"
    },
    {
    question: "Which tree traversal method visits the root node first?",
    options: [
    "Inorder",
    "Preorder",
    "Postorder",
    "Level order"
    ],
    answer: "Preorder"
    },
    {
    question: "What is the purpose of dynamic memory allocation?",
    options: [
    "To allocate memory at compile time",
    "To allocate memory at runtime",
    "To free memory",
    "To manage static variables"
    ],
    answer: "To allocate memory at runtime"
    },
    {
    question: "Which data structure is used to implement a priority queue?",
    options: [
    "Linked list",
    "Stack",
    "Heap",
    "Hash table"
    ],
    answer: "Heap"
    },
    {
    question: "What is the advantage of using a linked list over an array?",
    options: [
    "Faster access to elements",
    "Fixed size",
    "Dynamic size",
    "Efficient sorting"
    ],
    answer: "Dynamic size"
    },
    {
    question: "What is the disadvantage of using a linked list?",
    options: [
    "Inefficient insertion",
    "Efficient deletion",
    "Random access is not allowed",
    "Dynamic size"
    ],
    answer: "Random access is not allowed"
    },
    {
    question: "Which searching technique is most efficient?",
    options: [
    "Linear search",
    "Binary search",
    "Both are equally efficient",
    "Depends on the data"
    ],
    answer: "Binary search"
},
{
question: "Which sorting algorithm is similar to playing cards?",
options: [
"Bubble sort",
"Selection sort",
"Insertion sort",
"Merge sort"
],
answer: "Insertion sort"
},
{
question: "In selection sort, how many swaps are performed in each pass?",
options: [
"Multiple swaps",
"One swap",
"No swap",
"Depends on the data"
],
answer: "One swap"
},
{
question: "What is the primary advantage of merge sort?",
options: [
"In-place sorting",
"Simplicity",
"Efficiency for large datasets",
"Low memory usage"
],
answer: "Efficiency for large datasets"
},
{
question: "What is the space complexity of merge sort?",
options: [
"O(1)",
"O(log n)",
"O(n)",
"O(n^2)"
],
answer: "O(n)"
},
{
question: "Which sorting algorithm is based on the comparison of adjacent elements?",
options: [
"Selection sort",
"Insertion sort",
"Bubble sort",
"Merge sort"
],
answer: "Bubble sort"
},
{
question: "What is the worst-case time complexity of insertion sort?",
options: [
"O(n)",
"O(log n)",
"O(n log n)",
"O(n^2)"
],
answer: "O(n^2)"
},
{
question: "Which algorithm is used in heap sort?",
options: [
"Divide and conquer",
"Greedy approach",
"Heap data structure",
"Dynamic programming"
],
answer: "Heap data structure"
},
{
question: "What is the time complexity of heap sort?",
options: [
"O(n)",
"O(n log n)",
"O(n^2)",
"O(log n)"
],
answer: "O(n log n)"
},

];