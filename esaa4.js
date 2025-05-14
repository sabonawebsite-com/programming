const questions = [
    {
      question: "Hamiltonian path problem is",
      options: [
        "P class problem",
        "NP problem",
        "N class problem",
        "NP complete problem"
      ],
      answer: "NP complete problem"
    },
    {
      question: "Dynamic programming is used to find",
      options: [
        "One Solution Is Generated",
        "All Optimal Solution Is Generated",
        "No Optimal Solution Is Generated",
        "Partial Solution Is Generated"
      ],
      answer: "All Optimal Solution Is Generated"
    },
    {
      question: "An algorithm that always runs in polynomial time but possibly returns erroneous answers is called a",
      options: [
        "Monte Carlo Algorithm",
        "Las Vegas Algorithm",
        "Atlantic City Algorithm",
        "Approximation algorithm"
      ],
      answer: "Monte Carlo Algorithm"
    },
    {
      question: "What are dendrites?",
      options: [
        "nuclear projections",
        "other Name For Nucleus",
        "Fibers Of Nerves",
        "Twisted Network"
      ],
      answer: "Fibers Of Nerves"
    },
    {
      question: "Which Data Structure is used to perform Recursion?",
      options: [
        "queue",
        "Array",
        "stack",
        "linked list"
      ],
      answer: "stack"
    },
    {
      question: "Which of the following statements about loop invariants is false?",
      options: [
        "A loop invariant is the opposite, that is the negation, of the condition of the loop",
        "Loop invariants are used to show that algorithms produce the correct results.",
        "To prove that a statement is a loop invariant, we use mathematical induction",
        "Loop invariants remain true each time a loop is executed"
      ],
      answer: "A loop invariant is the opposite, that is the negation, of the condition of the loop."
    },
    {
      question: "Which is not the important aspect of Loop",
      options: [
        "nested loop",
        "Initial condition",
        "invariant relation",
        "termination"
      ],
      answer: "nested loop"
    },
    {
      question: "What is Adaline in neural networks?",
      options: [
        "Automatic Linear Element",
        "Adaptive Line Element",
        "Adaptive Linear Element",
        "Adaptive Nonlinear Element"
      ],
      answer: "Adaptive Linear Element"
    },
    {
      question: "What is the objective of the knapsack problem?",
      options: [
        "To Get Maximum Weight In The Knapsack",
        "To Get Minimum Total Value In The Knapsack",
        "To Get Maximum Total Value In The Knapsack",
        "To Get Minimum Weight In The Knapsack"
      ],
      answer: "To Get Maximum Total Value In The Knapsack"
    },
    {
      question: "What is the purpose of using randomized quick sort over standard quick sort?",
      options: [
        "To reduce worst case time complexity",
        "To improve average case time complexity",
        "To reduce worst case space complexity",
        "To improve accuracy"
      ],
      answer: "To reduce worst case time complexity"
    },
    {
      question: "Fractional knapsack problem is solved most efficiently by which of the following algorithm?",
      options: [
        "Dynamic Programming",
        "Greedy Algorithm",
        "Divide And Conquer",
        "Backtracking"
      ],
      answer: "Greedy Algorithm"
    },
     {
      question: "Which of the following is not basic control structure",
      options: [
        "the loop",
        "the decision",
        "the process",
        "the sequential"
      ],
      answer: "the process"
    },
    {
      question: "Which data structure has a better amortized running time than others?",
      options: [
        "Stack",
        "Queue",
        "Priority Queue",
        "List"
      ],
      answer: "Priority Queue"
    },
    {
      question: "What is the average case time complexity of merge sort?",
      options: [
        "O(N Log N)",
        "O(Log Log N)",
        "O(Log N)",
        "O(n*n)"
      ],
      answer: "O (N Log N)"
    },
    {
      question: "Which of the following algorithm can be used to solve the Hamiltonian path problem efficiently?",
      options: [
        "iterative improvement",
        "branch and bound",
        "divide and conquer",
        "greedy algorithm"
      ],
      answer: "branch and bound"
    },
    {
     question: "Which data structure is most suitable for implementing best first branch and bound strategy?",
      options: [
        "Queue",
        "Stack",
        "Priority Queue",
        "Linked List"
      ],
      answer: "Priority Queue"
    },
    {
      question: "Which data structure is used for implementing a FIFO branch and bound strategy?",
      options: [
        "Queue",
        "Array",
        "Stack",
        "Linked List"
      ],
      answer: "Queue"
    },
    {
      question: "Time taken in decreasing the node value in a binomial heap is",
      options: [
        "O(log n)",
        "0(1)",
        "O(n)",
        "O(n log n)"
      ],
      answer: "O(log n)"
    },
    {
      question: "What is the worst case time complexity of merge sort?",
      options: [
        "O(n*n)",
        "O(Log N)",
        "O(N Log N)",
        "O(Log Log N)"
      ],
      answer: "O(N Log N)"
    },
    {
      question: "Which of the following algorithms has worst time complexity?",
      options: [
        "binary search",
        "insertion sort",
        "linear search",
        "merge sort"
      ],
      answer: "insertion sort"
    },
    {
      question: "Multithreaded computation can be better understood with the help of a",
      options: [
        "Computation undirected acyclic graph",
        "Computation directed cyclic graph",
        "Computation undirected cyclic graph",
        "Computation directed acyclic graph"
      ],
      answer: "Computation directed acyclic graph"
    },
    {
      question: "What approach is being followed in Floyd Warshall Algorithm?",
      options: [
        "Dynamic Programming",
        "Greedy Technique",
        "Linear Programming",
        "Backtracking"
      ],
      answer: "Dynamic Programming"
    },
    {
      question: "Which of the following is/are property/properties of a dynamic programming problem?",
      options: [
        "Require More Time",
        "Greedy Approach",
        "Evolutionary Approach",
        "Optimal Substructure And Overlapping Subproblems"
      ],
      answer: "Optimal Substructure and Overlapping Subproblems"
    },
    {
      question: "Algorithm can be represented as",
      options: [
        "Flowchart",
        "Pseudocode",
        "All of above",
        "None"
      ],
      answer: "All of above"
    },
    {
      question: "What is tail recursion?",
      options: [
        "A function where the recursive functions leads to an infinite loop",
        "A recursive function that has two base cases",
        "A recursive function where the function doesn't return anything and just prints the values",
        "A function where the recursive call is the last thing executed by the function"
      ],
      answer: "A function where the recursive call is the last thing executed by the function"
    },
    {
      question: "What is the feature of ANNs due to which they can deal with noisy, fuzzy, inconsistent data?",
      options: [
        "Non Distributive Nature Of Networks",
        "Distributive Nature Of Networks",
        "Non Associative Nature Of Networks",
        "Is A Meta Heuristic Search Method"
      ],
      answer: "Distributive Nature of Networks"
    },
    {
      question: "Fractional knapsack problem is also known as",
      options: [
        "Continuous knapsack problem",
        "Divisible knapsack problem",
        "0/1 knapsack problem",
        "Non continuous knapsack problem"
      ],
      answer: "Continuous knapsack problem"
    },
    {
      question: "Which of the following methods can be used to solve the Knapsack problem?",
      options: [
        "Sorting Algorithm",
        "Monte-Carlo Algorithm",
        "Divide And Conquer",
        "Brute Force, Recursion And Dynamic Programming"
      ],
      answer: "Brute Force, Recursion and Dynamic Programming"
    },
    {
      question: "In greedy method which type of solution is generated",
      options: [
        "Optimal solution",
        "Worst solution",
        "Best solution",
        "All solutions"
      ],
      answer: "Optimal solution"
    },
    {
      question: "What is best case complexity of selection sort",
      options: [
        "n^2",
        "nlogn",
        "n",
        "None"
      ],
      answer: "n^2"
    },
    {
      question: "Which of the following data structures is best suited for implementing a recursive algorithm?",
      options: [
        "Array",
        "Linked list",
        "Stack",
        "Queue"
      ],
      answer: "Stack"
    },
    {
      question: "Which of the following algorithms is an example of a greedy algorithm?",
      options: [
        "Quick Sort",
        "Dijkstra's shortest path algorithm",
        "Bellman-Ford algorithm",
        "Kruskal's algorithm for minimum spanning tree"
      ],
      answer: "Kruskal's algorithm for minimum spanning tree"
    },
    {
      question: "Which of the following is a dynamic programming problem?",
      options: [
        "Longest Common Subsequence",
        "Binary Search",
        "Depth First Search",
        "Breadth First Search"
      ],
      answer: "Longest Common Subsequence"
    },
    {
      question: "Which of the following sorting algorithms has a worst-case time complexity of O(n^2)?",
      options: [
        "Merge Sort",
        "Heap Sort",
        "Quick Sort",
        "Bubble Sort"
      ],
      answer: "Bubble Sort"
    },
    {
      question: "Which of the following algorithms is used to find the strongly connected components in a directed graph?",
      options: [
        "Kruskal's algorithm",
        "Prim's algorithm",
        "Floyd-Warshall algorithm",
        "Kosaraju's algorithm"
      ],
      answer: "Kosaraju's algorithm"
    },
    {
      question: "Which of the following data structures is best suited for implementing a priority queue?",
      options: [
        "Array",
        "Linked list",
        "Stack",
        "Heap"
      ],
      answer: "Heap"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between two vertices in a graph?",
      options: [
        "Breadth First Search",
        "Depth First Search",
        "Dijkstra's shortest path algorithm",
        "Bellman-Ford algorithm"
      ],
      answer: "Dijkstra's shortest path algorithm"
    },
    {
      question: "Which of the following data structures is best suited for implementing a hash table?",
      options: [
        "Array",
        "Linked list",
        "Stack",
        "Queue"
      ],
      answer: "Array"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a flow network?",
      options: [
        "Kruskal's algorithm",
        "Prim's algorithm",
        "Ford-Fulkerson algorithm",
        "Bellman-Ford algorithm"
      ],
      answer: "Ford-Fulkerson algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum spanning tree of a weighted graph?",
      options: [
        "Kruskal's algorithm",
        "Prim's algorithm",
        "Floyd-Warshall algorithm",
        "Bellman-Ford algorithm"
      ],
      answer: "Kruskal's algorithm or Prim's algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the transitive closure of a directed graph?",
      options: [
        "Floyd-Warshall algorithm",
        "Bellman-Ford algorithm",
        "Kosaraju's algorithm",
        "Depth First Search"
      ],
      answer: "Floyd-Warshall algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum subarray sum?",
      options: [
        "Merge Sort",
        "Heap Sort",
        "Quick Sort",
        "Kadane’s algorithm"
      ],
      answer: "Kadane’s algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the articulation points in a graph?",
      options: [
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Depth First Search",
        "Kruskal’s algorithm"
      ],
      answer: "Depth First Search"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between all pairs of vertices in a graph?",
      options: [
        "Breadth First Search",
        "Depth First Search",
        "Dijkstra’s shortest path algorithm",
        "Floyd-Warshall algorithm"
      ],
      answer: "Floyd-Warshall algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the longest increasing subsequence in a sequence?",
      options: [
        "Merge Sort",
        "Heap Sort",
        "Quick Sort",
        "Dynamic Programming"
      ],
      answer: "Dynamic Programming"
    },
    {
      question: "Which of the following algorithms is used to find the topological order of a directed acyclic graph?",
      options: [
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Depth First Search",
        "Kahn’s algorithm"
      ],
      answer: "Kahn’s algorithm"
    },
    {
      question: "Which of the following data structures is best suited for implementing a breadth-first search algorithm?",
      options: [
        "Array",
        "Linked list",
        "Stack",
        "Queue"
      ],
      answer: "Queue"
    },
    {
      question: "Which of the following algorithms is used to find the maximum independent set in a graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Depth First Search",
        "Bron-Kerbosch algorithm"
      ],
      answer: "Bron-Kerbosch algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the diameter of a tree?",
      options: [
        "Breadth First Search",
        "Depth First Search",
        "Dijkstra’s shortest path algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Depth First Search"
    },
     {
      question: "Which of the following algorithms is used to find the longest path in a directed acyclic graph?",
      options: [
        "Breadth First Search",
        "Depth First Search",
        "Dijkstra’s shortest path algorithm",
        "Bellman-Ford algorithm"
      ],
      answer: "Depth First Search"
    },
    {
      question: "Which of the following algorithms is used to find the minimum number of coins needed to make change for a given amount?",
      options: [
        "Greedy algorithm",
        "Depth First Search",
        "Breadth First Search",
        "Dijkstra’s shortest path algorithm"
      ],
      answer: "Greedy algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Ford-Fulkerson algorithm",
        "Prim’s algorithm"
      ],
      answer: "Ford-Fulkerson algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the kth largest element in an unsorted array?",
      options: [
        "Quick Sort",
        "Merge Sort",
        "Heap Sort",
        "Selection algorithm"
      ],
      answer: "Selection algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum sum of a subarray with a given sum constraint?",
      options: [
        "Merge Sort",
        "Heap Sort",
        "Quick Sort",
        "Sliding Window algorithm"
      ],
      answer: "Sliding Window algorithm"
    },

    {
      question: "Which of the following algorithms is used to find the longest common subsequence between two sequences?",
      options: [
        "Merge Sort",
        "Heap Sort",
        "Quick Sort",
        "Dynamic Programming"
      ],
      answer: "Dynamic Programming"
    },
    {
      question: "Which of the following algorithms is used to find the maximum matching in a bipartite graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Hopcroft-Karp algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Hopcroft-Karp algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum vertex cover in a graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Depth First Search",
        "Hungarian algorithm"
      ],
      answer: "Hungarian algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum weighted matching in a bipartite graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Hungarian algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Hungarian algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum path cover in a directed acyclic graph?",
      options: [
        "Breadth First Search",
        "Depth First Search",
        "Dijkstra’s shortest path algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Depth First Search"
    },
    {
      question: "Which of the following algorithms is used to find the minimum spanning tree in a weighted graph?",
      options: [
        "Dijkstra’s algorithm",
        "Prim’s algorithm",
        "Bellman-Ford algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Prim’s algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the all-pairs shortest paths in a weighted graph?",
      options: [
        "Dijkstra’s algorithm",
        "Floyd-Warshall algorithm",
        "Bellman-Ford algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Floyd-Warshall algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the convex hull of a set of points?",
      options: [
        "Graham’s scan",
        "Quick Sort",
        "Merge Sort",
        "Heap Sort"
      ],
      answer: "Graham’s scan"
    },
    {
      question: "Which of the following algorithms is used to find the maximum independent set in a bipartite graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Depth First Search",
        "König’s theorem"
      ],
      answer: "König’s theorem"
    },
    {
      question: "Which of the following algorithms is used to find the maximum clique in a graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Depth First Search",
        "Bron-Kerbosch algorithm"
      ],
      answer: "Bron-Kerbosch algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the chromatic number of a graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Depth First Search",
        "Greedy algorithm"
      ],
      answer: "Greedy algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with multiple sources and sinks?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Dinic’s algorithm"
      ],
      answer: "Dinic’s algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between all pairs of vertices in a graph with negative edges?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Floyd-Warshall algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with capacities that are fractional numbers?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Push-Relabel algorithm"
      ],
      answer: "Push-Relabel algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum spanning tree in an undirected graph with negative edges?",
      options: [
        "Dijkstra’s algorithm",
        "Prim’s algorithm",
        "Bellman-Ford algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Bellman-Ford algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with capacities that can change over time?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Ford-Fulkerson algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between two vertices in a graph with negative edges?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Bellman-Ford algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with capacities that are integers?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Edmonds-Karp algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum spanning tree in an undirected graph with positive and negative edges?",
      options: [
        "Dijkstra’s algorithm",
        "Prim’s algorithm",
        "Bellman-Ford algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Bellman-Ford algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with capacities that can be increased or decreased by a certain amount?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Push-Relabel algorithm"
      ],
      answer: "Push-Relabel algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between two vertices in a graph with positive and negative edges?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Bellman-Ford algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum cut in a network with capacities that are integers?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Ford-Fulkerson algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum matching in a general graph?",
      options: [
        "Hopcroft-Karp algorithm",
        "Edmonds-Karp algorithm",
        "Dinic’s algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Dinic’s algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between all pairs of vertices in a graph with positive and negative edges?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Floyd-Warshall algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the minimum cut in a network with capacities that can change over time?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Ford-Fulkerson algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the articulation points in an undirected graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Tarjan’s algorithm",
        "Hopcroft-Tarjan algorithm"
      ],
      answer: "Tarjan’s algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the bridges in an undirected graph?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Tarjan’s algorithm",
        "Hopcroft-Tarjan algorithm"
      ],
      answer: "Tarjan’s algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with capacities that are real numbers?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Ford-Fulkerson algorithm"
      ],
      answer: "Ford-Fulkerson algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the maximum flow in a network with capacities that can be increased or decreased by a real number?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Edmonds-Karp algorithm",
        "Push-Relabel algorithm"
      ],
      answer: "Push-Relabel algorithm"
    },
    {
      question: "Which of the following algorithms is used to find the shortest path between all pairs of vertices in a graph with positive edges?",
      options: [
        "Dijkstra’s algorithm",
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
        "Kruskal’s algorithm"
      ],
      answer: "Floyd-Warshall algorithm"
    }
  ];