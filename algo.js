const questions = [
    {
    question: "What is the primary goal of Algorithm Analysis?",
    options: [
    "To write code quickly",
    "To determine the efficiency of an algorithm",
    "To debug code effectively",
    "To choose the best programming language"
    ],
    answer: "To determine the efficiency of an algorithm"
    },
    {
    question: "Which asymptotic notation represents the worst-case scenario of an algorithm's time complexity?",
    options: [
    "Big Theta (Θ)",
    "Big Omega (Ω)",
    "Big O (O)",
    "Little o (o)"
    ],
    answer: "Big O (O)"
    },
    {
    question: "In a max-heap, the value of a parent node is...",
    options: [
    "Always less than its children",
    "Always equal to its children",
    "Always greater than or equal to its children",
    "Always zero"
    ],
    answer: "Always greater than or equal to its children"
    },
    {
    question: "What is the purpose of hashing?",
    options: [
    "To sort data",
    "To map keys to indices for efficient data retrieval",
    "To compress data",
    "To encrypt data"
    ],
    answer: "To map keys to indices for efficient data retrieval"
    },
    {
    question: "What are the UNION and FIND operations used for?",
    options: [
    "Sorting arrays",
    "Searching in trees",
    "Manipulating sets",
    "Graph traversals"
    ],
    answer: "Manipulating sets"
    },
    {
    question: "Which algorithmic paradigm breaks down a problem into smaller subproblems?",
    options: [
    "Greedy Algorithm",
    "Dynamic Programming",
    "Divide and Conquer",
    "Backtracking"
    ],
    answer: "Divide and Conquer"
    },
    {
    question: "Binary search is efficient for...",
    options: [
    "Sorted arrays",
    "Unsorted arrays",
    "Linked lists",
    "Graphs"
    ],
    answer: "Sorted arrays"
    },
    {
    question: "Merge sort's time complexity is...",
    options: [
    "O(n^2)",
    "O(log n)",
    "O(n log n)",
    "O(n!)"
    ],
    answer: "O(n log n)"
    },
    {
    question: "Quick sort's average time complexity is...",
    options: [
    "O(n^2)",
    "O(log n)",
    "O(n log n)",
    "O(n!)"
    ],
    answer: "O(n log n)"
    },
    {
    question: "Selection sort repeatedly finds the...",
    options: [
    "Maximum element",
    "Minimum element",
    "Median element",
    "Last element"
    ],
    answer: "Minimum element"
    },
    {
    question: "Greedy algorithms make...",
    options: [
    "Globally optimal choices",
    "Locally optimal choices",
    "Random choices",
    "No choices"
    ],
    answer: "Locally optimal choices"
    },
    {
    question: "What is a Minimum Spanning Tree (MST)?",
    options: [
    "A tree with maximum edge weights",
    "A tree that connects all vertices with minimum edge weights and no cycles",
    "A tree with the fewest vertices",
    "A tree with the most cycles"
    ],
    answer: "A tree that connects all vertices with minimum edge weights and no cycles"
    },
    {
    question: "Kruskal's algorithm builds the MST by...",
    options: [
    "Adding vertices",
    "Adding edges in any order",
    "Adding the cheapest edges that don't create cycles",
    "Removing expensive edges"
    ],
    answer: "Adding the cheapest edges that don't create cycles"
    },
    {
    question: "Prim's algorithm builds the MST by...",
    options: [
    "Adding vertices",
    "Adding edges in any order",
    "Adding the cheapest edge connected to the current tree",
    "Removing expensive edges"
    ],
    answer: "Adding the cheapest edge connected to the current tree"
    },
    {
    question: "Dijkstra's algorithm is used to find...",
    options: [
    "All pairs shortest paths",
    "Shortest path from a single source",
    "Maximum spanning tree",
    "Longest path"
    ],
    answer: "Shortest path from a single source"
    },
    {
    question: "The Floyd-Warshall algorithm finds...",
    options: [
    "Shortest path from a single source",
    "All pairs shortest paths",
    "Minimum spanning tree",
    "Longest path"
    ],
    answer: "All pairs shortest paths"
    },
    {
    question: "In the 0/1 Knapsack problem, you can...",
    options: [
    "Take fractions of items",
    "Take any quantity of items",
    "Either take an item entirely or not at all",
    "Only take items with the highest value"
    ],
    answer: "Either take an item entirely or not at all"
    },
    {
    question: "Depth First Search (DFS) explores...",
    options: [
    "Breadth-wise",
    "Depth-wise",
    "Randomly",
    "By weight"
    ],
    answer: "Depth-wise"
    },
    {
    question: "Backtracking is used to...",
    options: [
    "Find the shortest path",
    "Explore all possible solutions",
    "Sort data",
    "Compress data"
    ],
    answer: "Explore all possible solutions"
    },
    {
    question: "The 8 Queens problem involves...",
    options: [
    "Placing 8 kings on a chessboard",
    "Placing 8 queens on a chessboard so that none attack each other",
    "Finding the shortest path for a knight",
    "Coloring a chessboard"
    ],
    answer: "Placing 8 queens on a chessboard so that none attack each other"
    },
    {
    question: "Graph coloring assigns colors to vertices such that...",
    options: [
    "All vertices have different colors",
    "Adjacent vertices have the same color",
    "No two adjacent vertices have the same color",
    "Colors are assigned randomly"
    ],
    answer: "No two adjacent vertices have the same color"
    },
    {
    question: "A Hamiltonian cycle visits every vertex...",
    options: [
    "At least once",
    "At most once",
    "Exactly once and returns to the start",
    "In a random order"
    ],
    answer: "Exactly once and returns to the start"
    },
    {
    question: "The Traveling Salesman Problem aims to find...",
    options: [
    "The longest possible route",
    "Any route",
    "The shortest possible route visiting all cities once",
    "The most scenic route"
    ],
    answer: "The shortest possible route visiting all cities once"
    },
    {
    question: "Probabilistic algorithms use...",
    options: [
    "Exact calculations",
    "Heuristics",
    "Randomness",
    "No specific method"
    ],
    answer: "Randomness"
    },
    {
    question: "Parallel algorithms execute...",
    options: [
    "One instruction at a time",
    "Multiple instructions simultaneously",
    "Instructions in a specific sequence",
    "No instructions"
    ],
    answer: "Multiple instructions simultaneously"
    },
    {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    answer: "O(log n)"
    },
    {
    question: "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Quick sort", "Merge sort", "Bubble sort", "Selection sort"],
    answer: "Merge sort"
    },
    {
    question: "Which data structure is used to implement Prim's algorithm?",
    options: ["Queue", "Stack", "Heap", "Linked list"],
    answer: "Heap"
    },
    {
    question: "What type of problem is the Knapsack problem?",
    options: ["Sorting", "Searching", "Optimization", "Graph traversal"],
    answer: "Optimization"
    },
    {
    question: "Which algorithm is used for topological sorting?",
    options: ["Dijkstra's", "DFS", "BFS", "Prim's"],
    answer: "DFS"
    },
    {
    question: "What is the main characteristic of dynamic programming?",
    options: ["Greedy approach", "Recursion without memoization", "Solving overlapping subproblems", "Randomization"],
    answer: "Solving overlapping subproblems"
    },
    {
    question: "In graph theory, what is a cycle?",
    options: ["A path with no repeated vertices", "A path that starts and ends at the same vertex", "A path with maximum edges", "A path with minimum edges"],
    answer: "A path that starts and ends at the same vertex"
    },
    {
    question: "Which algorithm can detect negative weight cycles in a graph?",
    options: ["Dijkstra's", "Bellman-Ford", "Prim's", "Kruskal's"],
    answer: "Bellman-Ford"
    },
    {
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(n)"
    },
    {
    question: "Which sorting algorithm is in-place?",
    options: ["Merge sort", "Quick sort", "Counting sort", "Radix sort"],
    answer: "Quick sort"
    },
     {
    question: "What is the main idea behind the greedy approach?",
    options: [
    "To find the optimal solution by considering all possibilities.",
    "To find the best solution by making locally optimal choices at each step.",
    "To divide the problem into smaller subproblems and solve them recursively.",
    "To use randomness to find a solution."
    ],
    answer: "To find the best solution by making locally optimal choices at each step."
    },
    {
    question: "Which of the following is NOT a characteristic of dynamic programming?",
    options: [
    "Optimal Substructure",
    "Overlapping Subproblems",
    "Greedy Approach",
    "Memoization"
    ],
    answer: "Greedy Approach"
    },
    {
    question: "What is the time complexity of Dijkstra's algorithm using a priority queue?",
    options: [
    "O(O(n log n)",
  "O(n^2)",
  "O(n!)"
  ],
  answer: "O(n log n)"
  },
  {
  question: "Which problem can be solved using dynamic programming?",
  options: [
  "Finding the shortest path in a graph with negative weights.",
  "Finding the longest path in an unweighted graph.",
  "Finding the minimum spanning tree in a graph.",
  "Finding all occurrences of a pattern in a text."
  ],
  answer: "Finding the longest path in an unweighted graph."
  },
  {
  question: "What is the purpose of backtracking?",
  options: [
  "To optimize the time complexity of algorithms.",
  "To find all possible solutions to a problem.",
  "To sort elements in an array.",
  "To search for a specific element in a data structure."
  ],
  answer: "To find all possible solutions to a problem."
  },
  {
  question: "In the 8-Queens problem, what is the constraint for placing queens?",
  options: [
  "No two queens should be in the same row.",
  "No two queens should be in the same column.",
  "No two queens should attack each other.",
  "All of the above."
  ],
  answer: "All of the above."
  },
  {
  question: "What is the goal of graph coloring?",
  options: [
  "To assign different colors to all vertices.",
  "To assign the minimum number of colors to vertices such that no adjacent vertices have the same color.",
  "To assign the maximum number of colors to vertices.",
  "To color all edges of a graph."
  ],
  answer: "To assign the minimum number of colors to vertices such that no adjacent vertices have the same color."
  },
  {
  question: "Which of the following problems involves finding a cycle in a graph?",
  options: [
  "Shortest Path Problem",
  "Minimum Spanning Tree Problem",
  "Hamiltonian Cycle Problem",
  "Knapsack Problem"
  ],
  answer: "Hamiltonian Cycle Problem"
  },
  {
  question: "What is the Traveling Salesman Problem (TSP)?",
  options: [
  "Finding the shortest path between two cities.",
  "Finding the longest path between two cities.",
  "Finding the shortest possible route that visits each city exactly once and returns to the starting city.",
  "Finding the most scenic route between cities."
  ],
  answer: "Finding the shortest possible route that visits each city exactly once and returns to the starting city."
  },
  {
  question: "Which type of algorithm uses randomness as part of its logic?",
  options: [
  "Deterministic Algorithm",
  "Greedy Algorithm",
  "Probabilistic Algorithm",
  "Dynamic Programming Algorithm"
  ],
  answer: "Probabilistic Algorithm"
  },
  {
  question: "What is the advantage of parallel algorithms?",
  options: [
  "They are simpler to implement.",
  "They can solve problems faster by performing multiple operations simultaneously.",
  "They require less memory.",
  "They are always more efficient than sequential algorithms."
  ],
  answer: "They can solve problems faster by performing multiple operations simultaneously."
  },
  {
  question: "Which of the following is an example of a Divide and Conquer algorithm?",
  options: [
  "Linear Search",
  "Bubble Sort",
  "Quick Sort",
  "Dijkstra's Algorithm"
  ],
  answer: "Quick Sort"
  },
  {
  question: "In a min-heap, the root node always contains the...",
  options: [
  "Largest element",
  "Smallest element",
  "Median element",
  "Average element"
  ],
  answer: "Smallest element"
  },
  {
  question: "Hashing is used for...",
  options: [
  "Efficient data retrieval",
  "Sorting data",
  "Compressing data",
  "Encrypting data"
  ],
  answer: "Efficient data retrieval"
  },
  {
  question: "The time complexity of the FIND operation in a disjoint-set data structure with union by rank and path compression is nearly...",
  options: [
  "O(1)",
  "O(log n)",
  "O(n)",
  "O(n log n)"
  ],
  answer: "O(1)"
  },
  {
  question: "Which sorting algorithm has a time complexity of O(n^2) in the worst case?",
  options: [
  "Merge Sort",
  "Quick Sort",
  "Heap Sort",
  "Insertion Sort"
  ],
  answer: "Insertion Sort"
  },
  {
  question: "Which algorithm is used to find the shortest path from a single source to all other vertices in a weighted graph without negative weight edges?",
  options: [
  "Floyd-Warshall Algorithm",
  "Bellman-Ford Algorithm",
  "Dijkstra's Algorithm",
  "Kruskal's Algorithm"
  ],
  answer: "Dijkstra's Algorithm"
  },
  {
  question: "What is the main difference between greedy algorithms and dynamic programming?",
  options: [
  "Greedy algorithms consider all possible solutions, while dynamic programming makes locally optimal choices.",
  "Greedy algorithms make locally optimal choices, while dynamic programming solves overlapping subproblems.",
  "Greedy algorithms are always more efficient than dynamic programming.",
  "Dynamic programming can only be used for optimization problems, while greedy algorithms can be used for any problem."
  ],
  answer: "Greedy algorithms make locally optimal choices, while dynamic programming solves overlapping subproblems."
  },
  {
  question: "Which technique is used to avoid redundant computations in dynamic programming?",
  options: [
  "Recursion",
  "Iteration",
  "Memoization",
  "Randomization"
  ],
  answer: "Memoization"
  },
  {
  question: "In graph theory, a tree is a connected graph with...",
  options: [
  "Cycles",
  "No cycles",
  "Multiple paths between any two vertices",
  "Maximum number of edges"
  ],
  answer: "No cycles"
  }
  ];