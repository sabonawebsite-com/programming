// questions.js

const questions = [
    {
      question: "Which of the following is a linear data structure?",
      options: ["Tree", "Graph", "Array", "Heap"],
      answer: "Array"
    },
    {
      question: "What is the time complexity to access an element in an array by its index?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      answer: "O(1)"
    },
    {
      question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      answer: "Stack"
    },
    {
      question: "The operation of adding a new element to a stack is called:",
      options: ["Pop", "Peek", "Push", "Overflow"],
      answer: "Push"
    },
    {
      question: "The operation of removing an element from a stack is called:",
      options: ["Push", "Peek", "Pop", "Underflow"],
      answer: "Pop"
    },
    {
      question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
      options: ["Stack", "Queue", "Linked List", "Heap"],
      answer: "Queue"
    },
    {
      question: "The operation of adding a new element to a queue is called:",
      options: ["Dequeue", "Enqueue", "Front", "Rear"],
      answer: "Enqueue"
    },
    {
      question: "The operation of removing an element from a queue is called:",
      options: ["Enqueue", "Front", "Dequeue", "Rear"],
      answer: "Dequeue"
    },
    {
      question: "A linked list is a:",
      options: ["Contiguous data structure", "Non-contiguous data structure", "Static data structure", "Fixed-size data structure"],
      answer: "Non-contiguous data structure"
    },
    {
      question: "What is a disadvantage of a singly linked list compared to a doubly linked list?",
      options: ["Requires more memory per node", "Traversal is only possible in one direction", "Insertion and deletion are slower", "Accessing a specific element is faster"],
      answer: "Traversal is only possible in one direction"
    },
    {
      question: "A tree in which each node has at most two children is called a:",
      options: ["Complete Tree", "Full Tree", "Binary Tree", "AVL Tree"],
      answer: "Binary Tree"
    },
    {
      question: "Which traversal method visits the root node last?",
      options: ["Inorder", "Preorder", "Postorder", "Level Order"],
      answer: "Postorder"
    },
    {
      question: "Which traversal method visits the root node first?",
      options: ["Inorder", "Preorder", "Postorder", "Level Order"],
      answer: "Preorder"
    },
    {
      question: "Which traversal method visits the nodes in increasing order in a Binary Search Tree (BST)?",
      options: ["Preorder", "Postorder", "Inorder", "Level Order"],
      answer: "Inorder"
    },
    {
      question: "A balanced binary search tree where the height difference between the left and right subtrees of any node is at most 1 is called an:",
      options: ["Red-Black Tree", "B-Tree", "AVL Tree", "Heap"],
      answer: "AVL Tree"
    },
    {
      question: "A heap data structure is a:",
      options: ["Linear data structure", "Tree-based data structure satisfying the heap property", "Graph-based data structure", "Linked list implementation"],
      answer: "Tree-based data structure satisfying the heap property"
    },
    {
      question: "In a min-heap, the value of the root node is always:",
      options: ["The largest element", "The smallest element", "Equal to the average of all elements", "Greater than or equal to its children"],
      answer: "The smallest element"
    },
    {
      question: "Which data structure is efficient for implementing priority queues?",
      options: ["Array", "Linked List", "Heap", "Stack"],
      answer: "Heap"
    },
    {
      question: "A graph consists of:",
      options: ["Nodes only", "Edges only", "Vertices and edges", "Paths and cycles"],
      answer: "Vertices and edges"
    },
    {
      question: "A graph where edges have a direction is called a:",
      options: ["Undirected graph", "Directed graph", "Weighted graph", "Cyclic graph"],
      answer: "Directed graph"
    },
    {
      question: "A graph where edges have associated weights or costs is called a:",
      options: ["Undirected graph", "Directed graph", "Weighted graph", "Acyclic graph"],
      answer: "Weighted graph"
    },
    {
      question: "Which data structure is often used to represent adjacency relationships in a graph?",
      options: ["Array", "Stack", "Adjacency Matrix or Adjacency List", "Queue"],
      answer: "Adjacency Matrix or Adjacency List"
    },
    {
      question: "Which graph traversal algorithm explores as far as possible along each branch before backtracking?",
      options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Shortest Path Algorithm", "Minimum Spanning Tree Algorithm"],
      answer: "Depth-First Search (DFS)"
    },
    {
      question: "Which graph traversal algorithm explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level?",
      options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Topological Sort", "Dijkstra's Algorithm"],
      answer: "Breadth-First Search (BFS)"
    },
    {
      question: "A set is a data structure that stores:",
      options: ["Ordered elements with duplicates", "Unordered elements with duplicates", "Ordered unique elements", "Unordered unique elements"],
      answer: "Unordered unique elements"
    },
    {
      question: "Which of the following is a comparison-based sorting algorithm?",
      options: ["Counting Sort", "Radix Sort", "Bubble Sort", "Bucket Sort"],
      answer: "Bubble Sort"
    },
    {
      question: "What is the average time complexity of Bubble Sort?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
      answer: "O(n^2)"
    },
    {
      question: "What is the average time complexity of Merge Sort?",
      options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
      answer: "O(n log n)"
    },
    {
      question: "What is the average time complexity of Quick Sort?",
      options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
      answer: "O(n log n)"
    },
    {
      question: "What is the worst-case time complexity of Quick Sort?",
      options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
      answer: "O(n^2)"
    },
    {
      question: "Which sorting algorithm has the best worst-case time complexity among comparison-based sorting algorithms?",
      options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
      answer: "Merge Sort"
    },
    {
      question: "Which sorting algorithm is efficient for small datasets?",
      options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
      answer: "Insertion Sort"
    },
    {
      question: "Which of the following sorting algorithms is stable?",
      options: ["Quick Sort", "Heap Sort", "Selection Sort", "Merge Sort"],
      answer: "Merge Sort"
    },
    {
      question: "What is the time complexity of Binary Search in a sorted array of size n?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      answer: "O(log n)"
    },
    {
      question: "What is the time complexity of Linear Search in an array of size n in the worst case?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(n)"
    },
    {
      question: "Which algorithmic paradigm involves breaking down a problem into smaller overlapping subproblems, solving each subproblem only once, and storing the solutions to avoid redundant computations?",
      options: ["Greedy approach", "Divide and conquer", "Dynamic programming", "Backtracking"],
      answer: "Dynamic programming"
    },
    {
      question: "Which algorithmic paradigm involves making locally optimal choices at each step with the hope of finding a global optimum?",
      options: ["Dynamic programming", "Divide and conquer", "Greedy approach", "Backtracking"],
      answer: "Greedy approach"
    },
    {
      question: "Which algorithmic paradigm involves breaking down a problem into smaller, independent subproblems, solving them recursively, and then combining their solutions?",
      options: ["Greedy approach", "Dynamic programming", "Divide and conquer", "Backtracking"],
      answer: "Divide and conquer"
    },
    {
      question: "Which algorithmic paradigm is often used for finding all possible solutions to a problem by exploring all potential candidates?",
      options: ["Dynamic programming", "Greedy approach", "Divide and conquer", "Backtracking"],
      answer: "Backtracking"
    },
    {
      question: "Dijkstra's algorithm is used to find the:",
      options: ["Minimum spanning tree of a graph", "Shortest path between two nodes in a weighted graph", "Topological sort of a directed acyclic graph", "Connected components of a graph"],
      answer: "Shortest path between two nodes in a weighted graph"
    },
    {
      question: "Kruskal's algorithm is used to find the:",
      options: ["Shortest path between two nodes in a graph", "Minimum spanning tree of a graph", "Topological sort of a directed acyclic graph", "Connected components of a graph"],
      answer: "Minimum spanning tree of a graph"
    },
    {
      question: "Prim's algorithm is used to find the:",
      options: ["Shortest path between two nodes in a graph", "Minimum spanning tree of a graph", "Topological sort of a directed acyclic graph", "Connected components of a graph"],
      answer: "Minimum spanning tree of a graph"
    },
    {
      question: "Topological sorting is applicable to:",
      options: ["Any directed graph", "Only undirected graphs", "Only directed acyclic graphs (DAGs)", "Only complete graphs"],
      answer: "Only directed acyclic graphs (DAGs)"
    },
    {
      question: "What is the time complexity of Breadth-First Search (BFS) in a graph with V vertices and E edges using an adjacency list?",
      options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
      answer: "O(V + E)"
    },
    {
      question: "What is the time complexity of Depth-First Search (DFS) in a graph with V vertices and E edges using an adjacency list?",
      options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
      answer: "O(V + E)"
    },
    {
      question: "What is the purpose of hashing?",
      options: ["To sort data efficiently", "To search data in constant average time", "To compress data", "To encrypt data"],
      answer: "To search data in constant average time"
    },
    {
      question: "A collision in a hash table occurs when:",
      options: ["Two different keys map to the same index", "The hash table is full", "An element is deleted from the hash table", "The hash function is poorly designed"],
      answer: "Two different keys map to the same index"
    },
    {
      question: "Which of the following is a common collision resolution technique in hashing?",
      options: ["Bubble Sort", "Binary Search", "Separate Chaining", "Depth-First Search"],
      answer: "Separate Chaining"
    },
    {
      question: "What is the average time complexity of searching for an element in a hash table?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      answer: "O(1)"
    },
    {
      question: "What is the worst-case time complexity of searching for an element in a hash table?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(n)"
    },
    {
      question: "The efficiency of an algorithm is often analyzed in terms of:",
      options: ["Space complexity only", "Time complexity only", "Both time and space complexity", "Input size"],
      answer: "Both time and space complexity"
    },
    {
      question: "Big O notation describes the:",
      options: ["Exact running time of an algorithm", "Lower bound on the running time of an algorithm", "Upper bound on the running time of an algorithm as the input size grows", "Average running time of an algorithm for a specific input"],
      answer: "Upper bound on the running time of an algorithm as the input size grows"
    },
    {
      question: "Which of the following represents the fastest growing function?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(2^n)"],
      answer: "O(2^n)"
    },
    {
      question: "Which of the following represents the slowest growing function?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(2^n)"],
      answer: "O(log n)"
    },
    {
      question: "Abstract Data Type (ADT) refers to:",
      options: ["A specific implementation of a data structure", "A logical description of the data and its operations, independent of implementation", "A low-level programming construct for managing memory", "A visual representation of data relationships"],
      answer: "A logical description of the data and its operations, independent of implementation"
    }
    ,
  {
    question: "Which of the following is NOT a primitive data type?",
    options: ["integer", "boolean", "character", "array"],
    answer: "array"
  },
  {
    question: "What is the primary advantage of using a linked list over an array?",
    options: ["Faster access to elements", "Efficient insertion and deletion of elements", "Lower memory overhead", "Random access capability"],
    answer: "Efficient insertion and deletion of elements"
  },
  {
    question: "In a doubly linked list, each node contains:",
    options: ["Data and a pointer to the next node", "Data and a pointer to the previous node", "Data and pointers to both the next and previous nodes", "Only data"],
    answer: "Data and pointers to both the next and previous nodes"
  },
  {
    question: "Which of the following is an application of a stack?",
    options: ["Managing print jobs", "Implementing undo/redo functionality", "Serving requests in order of arrival", "Storing website URLs in history"],
    answer: "Implementing undo/redo functionality"
  },
  {
    question: "What is the time complexity of the peek operation in a stack?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: "O(1)"
  },
  {
    question: "Which of the following is an application of a queue?",
    options: ["Evaluating arithmetic expressions", "Balancing parentheses", "Handling interrupts in an operating system", "Implementing recursion"],
    answer: "Handling interrupts in an operating system"
  },
  {
    question: "What is a circular queue?",
    options: ["A queue implemented using a circular linked list", "A queue where the rear pointer wraps around to the front if the queue is not full", "A queue that can grow or shrink dynamically from both ends", "A queue with a fixed capacity"],
    answer: "A queue where the rear pointer wraps around to the front if the queue is not full"
  },
  {
    question: "Which data structure is best suited for representing hierarchical relationships?",
    options: ["Array", "Linked List", "Queue", "Tree"],
    answer: "Tree"
  },
  {
    question: "The height of a tree is the:",
    options: ["Number of nodes in the longest path from the root to a leaf", "Total number of nodes in the tree", "Number of levels in the tree", "Number of edges in the longest path from the root to a leaf"],
    answer: "Number of edges in the longest path from the root to a leaf"
  },
  {
    question: "A full binary tree of height h has how many nodes?",
    options: ["2^h", "2^(h+1) - 1", "2^h - 1", "h+1"],
    answer: "2^(h+1) - 1"
  },
  {
    question: "What is the maximum number of nodes at level 'l' (root at level 0) in a binary tree?",
    options: ["l", "2l", "2^l", "l^2"],
    answer: "2^l"
  },
  {
    question: "Which of the following is NOT a type of binary tree traversal?",
    options: ["Inorder", "Preorder", "Postorder", "Breadth-First"],
    answer: "Breadth-First"
  },
  {
    question: "In a Binary Search Tree, for any node, all keys in its left subtree are:",
    options: ["Greater than the key in the node", "Less than the key in the node", "Equal to the key in the node", "Can be greater or less"],
    answer: "Less than the key in the node"
  },
  {
    question: "What is the time complexity of searching for a key in a balanced Binary Search Tree in the worst case?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: "O(log n)"
  },
  {
    question: "Which of the following is a self-balancing binary search tree?",
    options: ["Complete Binary Tree", "Full Binary Tree", "AVL Tree", "Binary Heap"],
    answer: "AVL Tree"
  },
  {
    question: "In a max-heap, the value of any node is:",
    options: ["Less than or equal to the value of its parent", "Greater than or equal to the value of its parent", "Equal to the value of its parent", "Independent of its parent's value"],
    answer: "Greater than or equal to the value of its parent"
  },
  {
    question: "What is the time complexity of the insert operation in a binary heap?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: "O(log n)"
  },
  {
    question: "Which of the following is NOT a basic operation on a graph?",
    options: ["Adding a vertex", "Removing an edge", "Finding the diameter", "Checking if an edge exists"],
    answer: "Finding the diameter"
  },
  {
    question: "The degree of a vertex in an undirected graph is:",
    options: ["The number of incoming edges", "The number of outgoing edges", "The total number of edges incident to the vertex", "The number of adjacent vertices"],
    answer: "The total number of edges incident to the vertex"
  },
  {
    question: "A path in a graph where the first and last vertices are the same is called a:",
    options: ["Simple path", "Cycle", "Connected component", "Spanning tree"],
    answer: "Cycle"
  },
  {
    question: "A connected graph without any cycles is called a:",
    options: ["Complete graph", "Directed graph", "Tree", "Weighted graph"],
    answer: "Tree"
  },
  {
    question: "Which of the following algorithms can detect cycles in a directed graph?",
    options: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Prim's Algorithm"],
    answer: "Depth-First Search"
  },
  {
    question: "What is a spanning tree of a connected graph?",
    options: ["A subgraph that includes all vertices and forms a cycle", "A subgraph that includes all vertices and is also a tree", "A subgraph with the minimum number of edges", "A subgraph with the maximum number of edges"],
    answer: "A subgraph that includes all vertices and is also a tree"
  },
  {
    question: "Which algorithm finds the shortest paths from a single source vertex to all other vertices in a weighted directed graph with non-negative edge weights?",
    options: ["Kruskal's Algorithm", "Prim's Algorithm", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
    answer: "Dijkstra's Algorithm"
  },
  {
    question: "Which algorithm can handle negative edge weights in finding the shortest paths?",
    options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "Bellman-Ford Algorithm"],
    answer: "Bellman-Ford Algorithm"
  },
  {
    question: "What is the purpose of a hash function?",
    options: ["To encrypt data", "To map keys to indices in a hash table", "To sort data", "To compress data"],
    answer: "To map keys to indices in a hash table"
  },
  {
    question: "Which of the following is an open addressing technique for collision resolution in hashing?",
    options: ["Separate Chaining", "Linear Probing", "Double Hashing", "Both Linear Probing and Double Hashing"],
    answer: "Both Linear Probing and Double Hashing"
  },
  {
    question: "The load factor of a hash table is defined as:",
    options: ["The number of empty slots divided by the total number of slots", "The number of collisions divided by the number of insertions", "The number of elements divided by the total number of slots", "The total number of slots divided by the number of elements"],
    answer: "The number of elements divided by the total number of slots"
  },
  {
    question: "Which sorting algorithm has a time complexity of O(n log n) in the worst case?",
    options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Heap Sort"],
    answer: "Heap Sort"
  },
  {
    question: "Which sorting algorithm works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning?",
    options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
    answer: "Selection Sort"
  },
  {
    question: "What is the space complexity of Merge Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)"
  },
  {
    question: "Which sorting algorithm is often used for sorting arrays in place?",
    options: ["Merge Sort", "Heap Sort", "Counting Sort", "Radix Sort"],
    answer: "Heap Sort"
  },
  {
    question: "Counting Sort is an example of a:",
    options: ["Comparison-based sorting algorithm", "Divide and conquer algorithm", "Non-comparison-based sorting algorithm", "In-place sorting algorithm"],
    answer: "Non-comparison-based sorting algorithm"
  },
  {
    question: "What is the time complexity of Counting Sort?",
    options: ["O(n log n)", "O(n^2)", "O(n + k)", "O(n*k)"],
    answer: "O(n + k)"
  },
  {
    question: "Radix Sort sorts elements by:",
    options: ["Comparing adjacent elements", "Repeatedly dividing the list", "Processing individual digits or characters", "Building a heap structure"],
    answer: "Processing individual digits or characters"
  },
  {
    question: "What is the average time complexity of searching in an unsorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)"
  },
  {
    question: "Interpolation search is an improvement over binary search when:",
    options: ["The data is not sorted", "The data is uniformly distributed", "The size of the data is small", "Searching for the first element"],
    answer: "The data is uniformly distributed"
  },
  {
    question: "Which of the following is NOT a common algorithmic design paradigm?",
    options: ["Greedy", "Dynamic Programming", "Divide and Conquer", "Branch and Bound"],
    answer: "Branch and Bound"
  },
  {
    question: "Memoization is a technique used in:",
    options: ["Greedy algorithms", "Divide and conquer algorithms", "Dynamic programming", "Backtracking algorithms"],
    answer: "Dynamic programming"
  },
  {
    question: "The time complexity of a recursive algorithm can often be analyzed using:",
    options: ["Master Theorem", "Pigeonhole Principle", "Euclidean Algorithm", "Newton's Method"],
    answer: "Master Theorem"
  },
  {
    question: "In backtracking, pruning is used to:",
    options: ["Sort the solution space", "Avoid exploring unnecessary parts of the search space", "Guarantee an optimal solution", "Increase the depth of recursion"],
    answer: "Avoid exploring unnecessary parts of the search space"
  },
  {
    question: "What is the goal of algorithm analysis?",
    options: ["To implement the algorithm in a specific programming language", "To determine the correctness of the algorithm", "To estimate the resources (time and space) required by the algorithm", "To find all possible inputs for the algorithm"],
    answer: "To estimate the resources (time and space) required by the algorithm"
  },
  {
    question: "The space complexity of an algorithm refers to:",
    options: ["The amount of time the algorithm takes to run", "The amount of memory the algorithm uses", "The number of lines of code in the algorithm", "The number of input parameters to the algorithm"],
    answer: "The amount of memory the algorithm uses"
  },
  {
    question: "Which of the following is a common way to represent the time complexity of an algorithm?",
    options: ["Omega notation", "Theta notation", "Big O notation", "Small o notation"],
    answer: "Big O notation"
  },
  {
    question: "What is the time complexity of accessing the i-th element in a singly linked list?",
    options: ["O(1)", "O(log i)", "O(i)", "O(n)"],
    answer: "O(i)"
  },
  {
    question: "Which data structure is often used to implement a hash map or dictionary?",
    options: ["Array", "Linked List", "Tree", "Hash Table"],
    answer: "Hash Table"
  }
    ,
    {
        question: "Which of the following is a disadvantage of using a hash table?",
        options: ["Fast access time", "Requires extra memory for pointers", "Collision resolution can be complex", "Easy to implement"],
        answer: "Collision resolution can be complex"
    },
    {
        question: "What is the purpose of a binary search tree?",
        options: ["To store data in a sorted manner", "To allow fast insertion and deletion", "To allow fast searching", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of the following is NOT a characteristic of a binary search tree?",
        options: ["Left subtree contains only nodes with keys less than the node's key", "Right subtree contains only nodes with keys greater than the node's key", "Both left and right subtrees are binary search trees", "The height of the tree is always balanced"],
        answer: "The height of the tree is always balanced"
    }
  ]
  
  
 