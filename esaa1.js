const questions = [
    {
      question: "Which of the following statements accurately describes database recovery?",
      options: [
        "It involves creating a backup of the entire database.",
        "It ensures the system remains operational during a failure.",
        "It restores the database to a consistent and usable state after a failure.",
        "It prevents failures from occurring in the first place."
      ],
      answer: "It restores the database to a consistent and usable state after a failure."
    },
    {
      question: "Which recovery method focuses on restoring the database to a known previous state using a backup?",
      options: [
        "Log-based recovery",
        "Checkpoint-based recovery",
        "Deferred database modification",
        "Immediate database modification"
      ],
      answer: "Log-based recovery"
    },
    {
      question: "Which recovery method involves replaying logged actions to bring the database to a consistent state?",
      options: [
        "Shadow paging",
        "ARIES recovery algorithm",
        "Transaction log replay",
        "Multi-database recovery"
      ],
      answer: "Transaction log replay"
    },
    {
      question: "In the context of recovery methods, what is the purpose of checkpoints?",
      options: [
        "To perform incremental backups of the database.",
        "To provide a recovery point in the event of a failure.",
        "To replicate data across multiple nodes for fault tolerance.",
        "To distribute data fragments across different servers."
      ],
      answer: "To provide a recovery point in the event of a failure."
    },
    {
      question: "Which recovery method allows for updates to be applied immediately and directly to the database?",
      options: [
        "Log-based recovery",
        "Deferred database modification",
        "Immediate database modification",
        "Checkpoint-based recovery"
      ],
      answer: "Immediate database modification"
    },
    {
      question: "Which recovery method is most suitable for a distributed database system?",
      options: [
        "Immediate database modification",
        "Transaction log replay",
        "Multi-database recovery",
        "Shadow paging"
      ],
      answer: "Multi-database recovery"
    },
    {
      question: "Which recovery method is focused on minimizing the impact of failures by deferring modifications until a committed state?",
      options: [
        "Checkpoint-based recovery",
        "Immediate database modification",
        "Deferred database modification",
        "Log-based recovery"
      ],
      answer: "Deferred database modification"
    },
    {
      question: "Which recovery method is known for its efficiency and speed but requires additional storage space?",
      options: [
        "ARIES recovery algorithm",
        "Shadow paging",
        "Transaction log replay",
        "Deferred database modification"
      ],
      answer: "Shadow paging"
    },
    {
      question: "Which recovery method ensures atomicity, consistency, isolation, and durability (ACID) properties of database transactions?",
      options: [
        "Shadow paging",
        "Immediate database modification",
        "ARIES recovery algorithm",
        "Multi-database recovery"
      ],
      answer: "ARIES recovery algorithm"
    },
    {
      question: "Which recovery method focuses on minimizing the loss of committed transactions during a failure?",
      options: [
        "Log-based recovery",
        "Deferred database modification",
        "Checkpoint-based recovery",
        "Immediate database modification"
      ],
      answer: "Log-based recovery"
    },
    {
      question: "Which recovery method involves dividing a database into smaller fragments and storing them on different nodes?",
      options: [
        "Data replication",
        "Data allocation",
        "Horizontal fragmentation",
        "Vertical fragmentation"
      ],
      answer: "Horizontal fragmentation"
    },
     {
      question: "Which recovery method is known for its ability to recover the database to a consistent state even after a crash during recovery?",
      options: [
        "Shadow paging",
        "ARIES recovery algorithm",
        "Checkpoint-based recovery",
        "Transaction log replay"
      ],
      answer: "ARIES recovery algorithm"
    },
    {
      question: "Which recovery method relies on maintaining a transaction log that records all  database modifications?",
      options: [
        "Multi-database recovery",
        "Immediate database modification",
        "Log-based recovery",
        "Deferred database modification"
      ],
      answer: "Log-based recovery"
    },
    {
      question: "Which recovery method involves rolling back uncommitted transactions and redoing committed transactions based on the transaction log?",
      options: [
        "Checkpoint-based recovery",
        "Transaction log replay",
        "Shadow paging",
        "Immediate database modification"
      ],
      answer: "Transaction log replay"
    },
    {
      question: "Which recovery method is best suited for a system that requires high availability  and minimal downtime?",
      options: [
        "Deferred database modification",
        "ARIES recovery algorithm",
        "Immediate database modification",
        "Log-based recovery"
      ],
      answer: "ARIES recovery algorithm"
    },
    {
     question: "Which recovery method involves creating incremental backups of only the changes made since the last full backup?",
      options: [
        "Differential backup",
        "Shadow paging",
        "Log-based recovery",
        "Checkpoint-based recovery"
      ],
      answer: "Differential backup"
    },
    {
      question: "In finite automata, Q stands for?",
      options: [
        "Finite set of input symbols",
        "Transition function",
        "Finite set of states",
        "One Start state"
      ],
      answer: "Finite set of states"
    },
    {
      question: "Final state is represented by?",
      options: [
        "Square",
        "Circle",
        "Double Circle",
        "Rhombus"
      ],
      answer: "Double Circle"
    },
    {
      question: "of FA are represented by circles",
      options: [
        "States",
        "Start state",
        "Intermediate states",
        "Transition"
      ],
      answer: "States"
    },
    {
      question: "There are tuples in finite state machine",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: "5"
    },
    {
      question: "Number of states require to accept string ends with 10.",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      answer: "3"
    },
    {
      question: "Languages of a automata is",
      options: [
        "If it halts",
        "If it is accepted by automata",
        "If automata touch final state in its life time",
        "All language are language of automata"
      ],
      answer: "If it is accepted by automata"
    },
    {
      question: "Language of finite automata is",
      options: [
        "Type 0",
        "Type 1",
        "Type 2",
        "Type 3"
      ],
      answer: "Type 3"
    },
    {
      question: "The basic limitation of finite automata is that",
      options: [
        "it can't remember arbitrary large amount of information",
        "it sometimes recognize grammar that are not regular",
        "it sometimes fails to recognize regular grammar",
        "None of the above"
      ],
      answer: "it can't remember arbitrary large amount of information"
    },
    {
      question: "The grammar defined by regular expressions is known as?",
      options: [
        "regular language",
        "regular grammar",
        "regular notations",
        "regular operation"
      ],
      answer: "regular grammar"
    },
    {
      question: "The language defined by regular grammar is known as?",
      options: [
        "regular language",
        "regular grammar",
        "regular notations",
        "regular operation"
      ],
      answer: "regular language"
    },
    {
      question: "Union of two languages L and M is written as?",
      options: [
        "$LM=\{st|$ is in Landt is in M}",
        "$L+M$",
        "$L^{*}M$",
        "$LUM=\{s|s$ is in Lors is in M}"
      ],
      answer: "$LUM=\{s|s$ is in Lors is in M}"
    },
    {
      question: "Concatenation (.) has the highest precedence",
      options: [
        "first",
        "second",
        "third",
        "fourth"
      ],
      answer: "first"
    },
    {
      question: "Which of them are not left associative?",
      options: [
        "*",
        "|",
        "plus(+)",
        "."
      ],
      answer: "."
    },
    {
      question: "The RE in which any number of O's is followed by any number of 1's followed by any number of 2's is?",
      options: [
        "$(0+1+2)^{*}$",
        "$0^{*}1^{*}2^{*}$",
        "$0^{*}+1+2$",
        "$(0+1)^{*}2^{*}$"
      ],
      answer: "$0^{*}1^{*}2^{*}$"
    },
    {
      question: "Consider the production of the grammar S->AA A->aa A->bb Describe the language specified by the production grammar.",
      options: [
        "$L=$ {aaaa,aabb,bbaa, bbbb}",
        "$L=$ {abab,abaa, aaab, baaa}",
        "$L=$ {aaab, baba,bbaa, bbbb}",
        "$L=$ {aaaa,abab,bbaa,aaab}"
      ],
      answer: "$L=$ {aaaa,aabb,bbaa, bbbb}"
    },
    {
      question: "Which of the following is not a part of 5-tuple finite automata?",
      options: [
        "Input alphabet",
        "Transition function",
        "Initial State",
        "Output Alphabet"
      ],
      answer: "Output Alphabet"
    },
    {
      question: "The entity which generate Language is termed as:",
      options: [
        "Automata",
        "Tokens",
        "Grammar",
        "Data"
      ],
      answer: "Grammar"
    },
    {
      question: "Which of the following statement is false?",
      options: [
        "Context free language is the subset of context sensitive language",
        "Regular language is the subset of context sensitive language",
        "Recursively ennumerable language is the super set of regular language",
        "Context sensitive language is a subset of context free language"
      ],
      answer: "Context sensitive language is a subset of context free language"
    },
    {
      question: "The Grammar can be defined as: $G=(V,\Sigma,p,S)$   In the given definition, what does S represents?",
      options: [
        "Accepting State",
        "Starting Variable",
        "Sensitive Grammar",
        "None of these"
      ],
      answer: "Starting Variable"
    },
    {
      question: "Which of the following statement is correct?",
      options: [
        "All Regular grammar are context free but not vice versa",
        "All context free grammar are regular grammar but not vice versa",
        "Regular grammar and context free grammar are the same entity",
        "None of the mentioned"
      ],
      answer: "All Regular grammar are context free but not vice versa"
    },
    {
      question: "The appropriate precedence order of operations over a Regular Language is",
      options: [
        "Kleene, Union, Concatenate",
        "Kleene, Star, Union",
        "Kleene, Dot, Union",
        "Star, Union, Dot"
      ],
      answer: "Kleene, Dot, Union"
    },
    {
      question: "Regular Expression R and the language it describes can be represented as:",
      options: [
        "R, $R(L)$",
        "L(R), $R(L)$",
        "R, $L(R)$",
        "All of the mentioned"
      ],
      answer: "R, $L(R)$"
    },
    {
      question: "Which of the following language classes is recognized by a finite automaton?",
      options: [
        "Context-free languages",
        "Context-sensitive languages",
        "Regular languages",
        "Recursively enumerable languages"
      ],
      answer: "Regular languages"
    },
    {
      question: "Which of the following language classes is generated by a context-free grammar?",
      options: [
        "Recursively enumerable languages",
        "Regular languages",
        "Context-sensitive languages",
        "Context-free languages"
      ],
      answer: "Context-free languages"
    },
    {
      question: "Which language class is closed under union, concatenation, and Kleene closure?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Regular languages"
    },
    {
      question: "Which language class can be recognized by a Turing machine?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Recursively enumerable languages"
    },
    {
      question: "Which language class is generated by a grammar where the left-hand side of each production consists of a single non-terminal symbol?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Context-free languages"
    },
    {
      question: "Which language class is not closed under complementation?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Context-free languages"
    },
    {
      question: "Which language class can be recognized by a pushdown automaton?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Context-free languages"
    },
    {
      question: "Which language class is more powerful than the regular languages but less powerful than the context-sensitive languages?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Context-free languages"
    },
    {
      question: "Which language class can be described by a regular expression?",
      options: [
        "Context-free languages",
        "Context-sensitive languages",
        "Regular languages",
        "Recursively enumerable languages"
      ],
      answer: "Regular languages"
    },
    {
      question: "Which language class is recognized by a linear-bounded automaton?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      answer: "Context-sensitive languages"
    },
    {
      question: "is the class of decision problems that can be solved by non-deterministic polynomial algorithms.",
      options: [
        "NP",
        "P",
        "Hard",
        "Complete"
      ],
      answer: "NP"
    },
    {
      question: "Problems that cannot be solved by any algorithm are called?",
      options: [
        "tractable problems",
        "intractable problems",
        "undecidable problems",
        "decidable problems"
      ],
      answer: "undecidable problems"
    },
    {
      question: "Halting problem is an example for?",
      options: [
        "decidable problem",
        "undecidable problem",
        "complete problem",
        "trackable problem"
      ],
      answer: "undecidable problem"
    },
    {
      question: "Which complexity class represents decision problems that can be solved by a deterministic Turing machine in polynomial time?",
      options: [
        "P",
        "NP",
        "EXP",
        "PSPACE"
      ],
      answer: "P"
    },
    {
      question: "Which complexity class includes the hardest problems in NP?",
      options: [
        "P",
        "NP",
        "NP-complete",
        "NP- hard"
      ],
      answer: "NP- complete"
    },
    {
      question: "A problem is NP-complete if:",
      options: [
        "It can be solved in polynomial time.",
        "It can be verified in polynomial time.",
        "It is harder than any problem in P.",
        "It is the easiest problem in NP."
      ],
      answer: "It is harder than any problem in P."
    },
    {
      question: "Which complexity class captures problems that require an exponential amount of  time to solve?",
      options: [
        "P",
        "NP",
        "EXP",
        "PSPACE"
      ],
      answer: "EXP"
    },
    {
      question: "If a polynomial-time algorithm is discovered for any NP-complete problem, it would imply:",
      options: [
        "P = NP",
        "P ≠ NP",
        "NP = PSPACE",
        "NP ⊆ P"
      ],
      answer: "P = NP"
    },
    {
      question: "Which complexity class represents decision problems that can be solved by a deterministic Turing machine using polynomial space?",
      options: [
        "P",
        "NP",
        "EXP",
        "PSPACE"
      ],
      answer: "PSPACE"
    },
    {
      question: "The class NP-hard includes problems that are:",
      options: [
        "Easier than NP-complete problems.",
        "Harder than NP-complete problems.",
        "Not necessarily in NP.",
        "Solvable in exponential time."
      ],
      answer: "Not necessarily in NP."
    },
    {
      question: "Which complexity class captures problems that require an exponential amount of  time to solve but may have relaxed space requirements compared to PSPACE?",
      options: [
        "P",
        "NP",
        "EXP",
        "EXPTIME"
      ],
      answer: "EXP"
    },
     {
      question: "Which complexity class represents problems that are at least as hard as the NP- complete problems?",
      options: [
        "P",
        "NP",
        "NP-complete",
        "NP-hard"
      ],
      answer: "NP-hard"
    },
    {
      question: "The class PSPACE captures the amount of:",
      options: [
        "Time required to solve a problem.",
        "Space (memory) required to solve a problem.",
        "Both time and space required to solve a problem.",
        "Time and space complexity of a problem."
      ],
      answer: "Space (memory) required to solve a problem."
    },
    {
      question: "Which complexity class represents problems that can be solved by a deterministic Turing machine in exponential time?",
      options: [
        "P",
        "NP",
        "EXP",
        "PSPACE"
      ],
      answer: "EXP"
    },
    {
      question: "Which complexity class includes all problems that can be solved by a Turing machine in a finite amount of time?",
      options: [
        "P",
        "NP",
        "PSPACE",
        "EXPTIME"
      ],
      answer: "EXPTIME"
    },
    {
      question: "The class NP represents problems that can be:",
      options: [
        "Solved efficiently by a deterministic Turing machine.",
        "Solved in exponential time by a nondeterministic Turing machine.",
        "Verified efficiently by a deterministic Turing machine.",
        "Verified in exponential time by a nondeterministic Turing machine."
      ],
      answer: "Verified efficiently by a deterministic Turing machine."
    },
    {
      question: "Which complexity class is more powerful than P but less powerful than EXPTIME?",
      options: [
        "P",
        "NP",
        "PSPACE",
        "EXPTIME"
      ],
      answer: "PSPACE"
    },
    {
      question: "How many stages of procedure does a non-deterministic algorithm consist of?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "2"
    },
    {
      question: "To which of the following class does a CNF-satisfiability problem belong?",
      options: [
        "NP class",
        "P class",
        "NP complete",
        "NP hard"
      ],
      answer: "NP complete"
    },
    {
      question: "Which of the following problems is not NP complete?",
      options: [
        "Hamiltonian circuit",
        "Bin packing",
        "Partition problem",
        "Halting problem"
      ],
      answer: "Halting problem"
    }
  ];