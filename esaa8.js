const questions = [
  {
    question: "Software is defined as ______",
    options: [
      "a) set of programs, documentation & configuration of data",
      "b) set of programs",
      "c) documentation and configuration of data",
      "d) None of the mentioned"
    ],
    answer: "a) set of programs, documentation & configuration of data"
  },
  {
    question: "What is Software Engineering?",
    options: [
      "a) Designing a software",
      "b) Testing a software",
      "c) Application of engineering principles to the design a software",
      "d) None of the above"
    ],
    answer: "c) Application of engineering principles to the design a software"
  },
  {
    question: "Who is the father of Software Engineering?",
    options: [
      "a) Margaret Hamilton",
      "b) Watts S. Humphrey",
      "c) Alan Turing",
      "d) Boris Beizer"
    ],
    answer: "b) Watts S. Humphrey"
  },
  {
    question: "What are the features of Software Code?",
    options: [
      "a) Simplicity",
      "b) Accessibility",
      "c) Modularity",
      "d) All of the above"
    ],
    answer: "d) All of the above"
  },
  {
    question: "______ is a software development activity that is not a part of software processes.",
    options: [
      "a) Validation",
      "b) Specification",
      "c) Development",
      "d) Dependence"
    ],
    answer: "d) Dependence"
  },
  {
    question: "Define Agile scrum methodology.",
    options: [
      "a) project management that emphasizes incremental progress",
      "b) project management that emphasizes decremental progress",
      "c) project management that emphasizes neutral progress",
      "d) project management that emphasizes no progress"
    ],
    answer: "a) project management that emphasizes incremental progress"
  },
  {
    question: "CASE stands for",
    options: [
      "a) Computer-Aided Software Engineering",
      "b) Control Aided Science and Engineering",
      "c) Cost Aided System Experiments",
      "d) None of the mentioned"
    ],
    answer: "a) Computer-Aided Software Engineering"
  },
  {
    question: "______ is defined as the process of generating analysis and designing documents?",
    options: [
      "a) Re-engineering",
      "b) Reverse engineering",
      "c) Software re-engineering",
      "d) Science and engineering"
    ],
    answer: "b) Reverse engineering"
  },
  {
    question: "The activity that distributes estimated effort across the planned project duration by allocating the effort to specific software developing tasks is ______",
    options: [
      "a) Project scheduling",
      "b) Detailed schedule",
      "c) Macroscopic schedule",
      "d) None of the mentioned"
    ],
    answer: "a) Project scheduling"
  },
  {
    question: "What is a Functional Requirement?",
    options: [
      "a) specifies the tasks the program must complete",
      "b) specifies the tasks the program should not complete",
      "c) specifies the tasks the program must not work",
      "d) All of the mentioned"
    ],
    answer: "a) specifies the tasks the program must complete"
  },
  {
    question: "Why do bugs and failures occur in software?",
    options: [
      "a) Because of Developers",
      "b) Because of companies",
      "c) Because of both companies and Developers",
      "d) None of the mentioned"
    ],
    answer: "c) Because of both companies and Developers"
  },
  {
    question: "Attributes of good software is ______",
    options: [
      "a) Development",
      "b) Maintainability & functionality",
      "c) Functionality",
      "d) Maintainability"
    ],
    answer: "b) Maintainability & functionality"
  },
  {
    question: "The Cleanroom philosophy was proposed by ______",
    options: [
      "a) Linger",
      "b) Mills",
      "c) Dyer",
      "d) All of the Mentioned"
    ],
    answer: "d) All of the Mentioned"
  },
  {
    question: "What does SDLC stands for?",
    options: [
      "a) System Design Life Cycle",
      "b) Software Design Life Cycle",
      "c) Software Development Life Cycle",
      "d) System Development Life cycle"
    ],
    answer: "c) Software Development Life Cycle"
  },
  {
    question: "Who proposed the spiral model?",
    options: [
      "a) Barry Boehm",
      "b) Pressman",
      "c) Royce",
      "d) IBM"
    ],
    answer: "a) Barry Boehm"
  },
  {
    question: "______ is not among the eight principles followed by the Software Code of Ethics and Professional Practice.",
    options: [
      "a) PRODUCT",
      "b) ENVIRONMENT",
      "c) PUBLIC",
      "d) PROFESSION"
    ],
    answer: "b) ENVIRONMENT"
  },
  {
    question: "Which of the following are CASE tools?",
    options: [
      "a) Central Repository",
      "b) Integrated Case Tools",
      "c) Upper Case Tools",
      "d) All of the mentioned"
    ],
    answer: "d) All of the mentioned"
  },
  {
    question: "______ suits the Manifesto for Agile Software Development.",
    options: [
      "a) Customer collaboration",
      "b) Individuals and interactions",
      "c) Working software",
      "d) All of the mentioned"
    ],
    answer: "d) All of the mentioned"
  },
  {
    question: "Software patch is defined as ______",
    options: [
      "a) Daily or routine Fix",
      "b) Required or Critical Fix",
      "c) Emergency Fix",
      "d) None of the mentioned"
    ],
    answer: "c) Emergency Fix"
  },
  {
    question: "______ software development team has no permanent leader.",
    options: [
      "a) Controlled Centralized (CC)",
      "b) Controlled decentralized (CD)",
      "c) Democratic decentralized (DD)",
      "d) None of the mentioned"
    ],
    answer: "c) Democratic decentralized (DD)"
  },
  {
    question: "Regardless of application area, project size, or complexity, software development work may be divided into three generic phases: the ______ phase, which focuses on what, the ______ phase, which focuses on how, and the ______ phase, which focuses on change.",
    options: [
      "a) iii, ii, i",
      "b) iii, i, ii",
      "c) i, ii, iii",
      "d) ii, i, iii"
    ],
    answer: "a) iii, ii, i"
  },
  {
    question: "______ is not a fundamental activity for software processes in software development.",
    options: [
      "a) Evolution",
      "b) Design and implementation",
      "c) Validation",
      "d) Verification"
    ],
    answer: "d) Verification"
  },
  {
    question: "What are agile manifesto principles?",
    options: [
      "a) Customer satisfaction",
      "b) Face-to-face communication within a development team",
      "c) Changes in requirements are welcome",
      "d) All of the mentioned"
    ],
    answer: "d) All of the mentioned"
  },
  {
    question: "Faster delivery is possible with CBSE.",
    options: [
      "a) False",
      "b) True"
    ],
    answer: "b) True"
  },
  {
    question: "Who proposed Function Points?",
    options: [
      "a) Albrecht",
      "b) Jacobson",
      "c) Boehm",
      "d) Booch"
    ],
    answer: "a) Albrecht"
  },
  {
    question: "______ is a software development life cycle model that is chosen if the development team has less experience on similar projects.",
    options: [
      "a) Iterative Enhancement Model",
      "b) RAD",
      "c) Spiral",
      "d) Waterfall"
    ],
    answer: "c) Spiral"
  },
  {
    question: "Agile Software Development is based on which of the following type?",
    options: [
      "a) Iterative Development",
      "b) Incremental Development",
      "c) Both Incremental and Iterative Development",
      "d) Linear Development"
    ],
    answer: "c) Both Incremental and Iterative Development"
  },
  {
    question: "______ is a software developing team has a defined leader who coordinates specific tasks and secondary leaders that have responsibility for sub tasks.",
    options: [
      "a) Democratic decentralized (DD)",
      "b) Controlled centralized (CC)",
      "c) Controlled decentralized (CD)",
      "d) None of the mentioned"
    ],
    answer: "c) Controlled decentralized (CD)"
  },
  {
    question: "4GT Model is a set of ______",
    options: [
      "a) Programs",
      "b) CASE Tools",
      "c) Software tools",
      "d) None of the mentioned"
    ],
    answer: "c) Software tools"
  },
  {
    question: "Engineers developing software should not",
    options: [
      "a) be dependent on their colleagues",
      "b) maintain integrity and independence in their professional judgment",
      "c) not knowingly accept work that is outside your competence",
      "d) not use your technical skills to misuse other people's computers"
    ],
    answer: "a) be dependent on their colleagues"
  },
  {
    question: "______ is not suitable for accommodating any change?",
    options: [
      "a) RAD Model",
      "b) Waterfall Model",
      "c) Build & Fix Model",
      "d) Prototyping Model"
    ],
    answer: "b) Waterfall Model"
  },
  {
    question: "The model which has a major disadvantage in terms of the coding phase of a software life cycle model is ______",
    options: [
      "a) Rad Model",
      "b) Spiral Model",
      "c) 4GT Model",
      "d) Waterfall Model"
    ],
    answer: "c) 4GT Model"
  },
  {
    question: "Adaptive Software Development(ASD) has which of the following three framework activities?",
    options: [
      "a) speculation, collaboration, learning",
      "b) analysis, design, coding",
      "c) requirements gathering, adaptive cycle planning, iterative development",
      "d) all of the mentioned"
    ],
    answer: "a) speculation, collaboration, learning"
  },
  {
    question: "Which of the following is not a project factor that should be considered when planning the structure of software developing teams?",
    options: [
      "a) The rigidity of the delivery date",
      "b) The degree of sociability required for the project",
      "c) High frustration caused by personal, business, or technological factors that causes friction among team members",
      "d) The difficulty of the problem to be solved"
    ],
    answer: "b) The degree of sociability required for the project"
  },
  {
    question: "What is the full form of the 'COCOMO' model?",
    options: [
      "a) Cost Constructive Estimation Model",
      "b) Constructive Cost Estimation Model",
      "c) Constructive Case Estimation Model",
      "d) Constructive Cost Estimating Model"
    ],
    answer: "b) Constructive Cost Estimation Model"
  },
  {
    question: "Which one of the following is not a software process quality?",
    options: [
      "a) Visibility",
      "b) Timeliness",
      "c) Productivity",
      "d) Portability"
    ],
    answer: "d) Portability"
  },
  {
    question: "Cleanroom software development process complies with the operational analysis principles by using a method called known as",
    options: [
      "a) referential transparency",
      "b) degenerative error correction",
      "c) box structure specification",
      "d) none of the mentioned"
    ],
    answer: "c) box structure specification"
  },
  {
    question: "What is system software?",
    options: [
      "a) computer program",
      "b) Testing",
      "c) AI",
      "d) IOT"
    ],
    answer: "a) computer program"
  },
  {
    question: "Quality Management is known as ______",
    options: [
      "a) SQL",
      "b) SQA",
      "c) SQM",
      "d) SQA and SQM"
    ],
    answer: "b) SQA"
  },
  {
    question: "______ is the definition of objects in the database that leads directly to a standard approach for the creation of software documentation.",
    options: [
      "a) Data/data integration",
      "b) Information sharing",
      "c) Document standardization",
      "d) Data integrity"
    ],
    answer: "c) Document standardization"
  },
  {
    question: "______ is an indirect measure of software development process.",
    options: [
      "a) Cost",
      "b) Effort Applied",
      "c) Efficiency",
      "d) All of the mentioned"
    ],
    answer: "c) Efficiency"
  },
  {
    question: "According to an IBM research, '31% of projects are abandoned before they are completed, 53% exceed their cost projections by an average of 189 percent, and 94 projects are restarted for every 100 projects.' What is the significance of these figures?",
    options: [
      "a) Lack of software ethics and understanding",
      "b) Management issues in the company",
      "c) Lack of adequate training",
      "d) All of the mentioned"
    ],
    answer: "d) All of the mentioned"
  },
  {
    question: "Which of the following document contains the user system requirements?",
    options: [
      "a) SRD",
      "b) DDD",
      "c) SDD",
      "d) SRS"
    ],
    answer: "d) SRS"
  },
  {
    question: "______ specification is also known as SRS document.",
    options: [
      "a) white-box",
      "b) grey-box",
      "c) black-box",
      "d) none of the mentioned"
    ],
    answer: "c) black-box"
  },
  {
    question: "Which of the following is not a part of Software evolution?",
    options: [
      "a) Re-engineering activities",
      "b) Maintenance activities",
      "c) Development activities",
      "d) Negotiating with client"
    ],
    answer: "d) Negotiating with client"
  },
  {
    question: "______ is a Strategy to achieve Software diversity.",
    options: [
      "a) Explicit specification of different algorithms",
      "b) Different programming languages",
      "c) Different design methods and tools",
      "d) All of the mentioned"
    ],
    answer: "d) All of the mentioned"
  },
  {
    question: "In which step of SDLC actual programming of software code is done?",
    options: [
      "a) Development and Documentation",
      "b) Maintenance and Evaluation",
      "c) Design",
      "d) Analysis"
    ],
    answer: "a) Development and Documentation"
  },
  {
    question: "Software Debugging is known as ______",
    options: [
      "a) identifying the task to be computerized",
      "b) creating program code",
      "c) creating the algorithm",
      "d) finding and correcting errors in the program code"
    ],
    answer: "d) finding and correcting errors in the program code"
  },
  {
    question: "The word which describes the importance of software design is?",
    options: [
      "a) Complexity",
      "b) Quality",
      "c) Efficiency",
      "d) Accuracy"
    ],
    answer: "b) Quality"
  },
  {
    question: "The incorrect activity among the following for the configuration management of a software system is ______",
    options: [
      "a) Version management",
      "b) System management",
      "c) Change management",
      "d) Internship management"
    ],
    answer: "d) Internship management"
  },
  {
    question: "Build & Fix Model is suitable for programming exercises of ______ LOC (Line of Code).",
    options: [
      "a) 100-200",
      "b) 200-400",
      "c) 400-1000",
      "d) above 1000"
    ],
    answer: "a) 100-200"
  },
  {
    question: "RAD stands for",
    options: [
      "a) Relative Application Development",
      "b) Rapid Application Development",
      "c) Rapid Application Document",
      "d) None of the mentioned"
    ],
    answer: "b) Rapid Application Development"
  },
  {
    question: "Which one of the following models is not suitable for accommodating any change?",
    options: [
      "a) Build & Fix Model",
      "b) Prototyping Model",
      "c) RAD Model",
      "d) Waterfall Model"
    ],
    answer: "d) Waterfall Model"
  },
  {
    question: "Which is not one of the types of prototype of Prototyping Model?",
    options: [
      "a) Horizontal Prototype",
      "b) Vertical Prototype",
      "c) Diagonal Prototype",
      "d) Domain Prototype"
    ],
    answer: "c) Diagonal Prototype"
  },
  {
    question: "Which one of the following is not a phase of Prototyping Model?",
    options: [
      "a) Quick Design",
      "b) Coding",
      "c) Prototype Refinement",
      "d) Engineer Product"
    ],
    answer: "b) Coding"
  },
  {
    question: "Which of the following statements regarding Build & Fix Model is wrong?",
    options: [
      "a) No room for structured design",
      "b) Code soon becomes unfixable & unchangeable",
      "c) Maintenance is practically not possible",
      "d) It scales up well to large projects"
    ],
    answer: "d) It scales up well to large projects"
  },
  {
    question: "RAD Model has",
    options: [
      "a) 2 phases",
      "b) 3 phase",
      "c) 5 phases",
      "d) 6 phases"
    ],
    answer: "c) 5 phases"
  },
  {
    question: "What is the major drawback of using RAD Model?",
    options: [
      "a) Highly specialized & skilled developers/designers are required",
      "b) Increases reusability of components",
      "c) Encourages customer/client feedback",
      "d) Increases reusability of components, Highly specialized & skilled developers/designers are required"
    ],
    answer: "d) Increases reusability of components, Highly specialized & skilled developers/designers are required"
  },
  {
    question: "SDLC stands for",
    options: [
      "a) Software Development Life Cycle",
      "b) System Development Life cycle",
      "c) Software Design Life Cycle",
      "d) System Design Life Cycle"
    ],
    answer: "a) Software Development Life Cycle"
  },
  {
    question: "Which model can be selected if user is involved in all the phases of SDLC?",
    options: [
      "a) Waterfall Model",
      "b) Prototyping Model",
      "c) RAD Model",
      "d) both Prototyping Model & RAD Model"
    ],
    answer: "c) RAD Model"
  },
  {
    question: "Select the option that suits the Manifesto for Agile Software Development",
    options: [
      "a) Individuals and interactions",
      "b) Working software",
      "c) Customer collaboration",
      "d) All of the mentioned"
    ],
    answer: "d) All of the mentioned"
  },
  {
    question: "Agile Software Development is based on",
    options: [
      "a) Incremental Development",
      "b) Iterative Development",
      "c) Linear Development",
      "d) Both Incremental and Iterative Development"
    ],
    answer: "d) Both Incremental and Iterative Development"
  },
  {
    question: "Which on of the following is not an agile method?",
    options: [
      "a) XP",
      "b) AGT",
      "c) AUP",
      "d) All of the mentioned"
    ],
    answer: "b) AGT"
  },
  {
    question: "Agility is defined as the ability of a project team to respond rapidly to a change.",
    options: [
      "a) True",
      "b) False"
    ],
    answer: "a) True"
  },
  {
    question: "How is plan driven development different from agile development?",
    options: [
      "a) Outputs are decided through a process of negotiation during the software development process",
      "b) Specification, design, implementation and testing are interleaved",
      "c) Iteration occurs within activities",
      "d) All of the mentioned"
    ],
    answer: "c) Iteration occurs within activities"
  },
  {
    question: "How many phases are there in Scrum ?",
    options: [
      "a) Two",
      "b) Three",
      "c) Four",
      "d) Scrum is an agile method which means it does not have phases"
    ],
    answer: "b) Three"
  },
  {
    question: "Agile methods seem to work best when team members have a relatively high skill level.",
    options: [
      "a) True",
      "b) False"
    ],
    answer: "a) True"
  },
  {
    question: "Which of the following does not apply to agility to a software process?",
    options: [
      "a) Uses incremental product delivery strategy",
      "b) Only essential work products are produced",
      "c) Eliminate the use of project planning and testing",
      "d) All of the mentioned"
    ],
    answer: "c) Eliminate the use of project planning and testing"
  },
  {
    question: "Which three framework activities are present in Adaptive Software Development(ASD) ?",
    options: [
      "a) analysis, design, coding",
      "b) requirements gathering, adaptive cycle planning, iterative development",
      "c) speculation, collaboration, learning",
      "d) all of the mentioned"
    ],
    answer: "c) speculation, collaboration, learning"
  },
  {
    question: "In agile development it is more important to build software that meets the customers' needs today than worry about features that might be needed in the future.",
    options: [
      "a) True",
      "b) False"
    ],
    answer: "a) True"
  }
];

