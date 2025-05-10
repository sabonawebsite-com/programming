const questions = [
  {
    question: "What is the primary focus of this database management systems course?",
    options: [
      "Advanced database administration",
      "Basics of database systems, data retrieval and modification",
      "Network administration",
      "Web development"
    ],
    answer: "Basics of database systems, data retrieval and modification"
  },
  {
    question: "Which of the following is a key topic covered in the course?",
    options: [
      "Cybersecurity",
      "Relational algebra and calculus",
      "Software engineering",
      "Computer networking"
    ],
    answer: "Relational algebra and calculus"
  },
  {
    question: "What is one of the main objectives of the course?",
    options: [
      "To become a full-stack developer",
      "To understand the principles of database design systems",
      "To learn graphic design",
      "To master artificial intelligence"
    ],
    answer: "To understand the principles of database design systems"
  },
   {
    question: "Which of the following is NOT a topic covered in Chapter 1?",
    options: [
      "Overview of Database Systems",
      "Basics of Database",
      "File organization verses Database approach",
	  "Data Models"
    ],
    answer: "Data Models"
  },

  {
    question: "In which chapter is the Entity Relationship (ER) Model discussed?",
    options: [
      "Chapter 2",
      "Chapter 3",
      "Chapter 4",
      "Chapter 5"
    ],
    answer: "Chapter 3"
  },

  {
    question: "What does ER stand for?",
    options: [
      "Entity Resolution",
      "Entity Relationship",
      "Error Reporting",
      "Event Receiver"
    ],
    answer: "Entity Relationship"
  },

  {
    question: "Which of the following is a component of the ER Model?",
    options: [
      "Functions",
      "Entities",
      "Classes",
      "Objects"
    ],
    answer: "Entities"
  },

  {
    question: "What is the purpose of normalization in database design?",
    options: [
      "To increase data redundancy",
      "To reduce data anomalies and improve data integrity",
      "To slow down data retrieval",
      "To complicate database management"
    ],
    answer: "To reduce data anomalies and improve data integrity"
  },

  {
    question: "Which normal form deals with eliminating repeating groups?",
    options: [
      "First Normal Form",
      "Second Normal Form",
      "Third Normal Form",
      "Boyce-Codd Normal Form"
    ],
    answer: "First Normal Form"
  },

  {
    question: "What is SQL?",
    options: [
      "A programming language",
      "A database management system",
      "A structured query language",
      "An operating system"
    ],
    answer: "A structured query language"
  },
  {
    question: "What is the difference between a database and a file processing system?",
    options: [
      "There is no difference",
      "A database system provides better data management and organization",
      "A file processing system is more efficient",
      "Databases are only used for small amounts of data"
    ],
    answer: "A database system provides better data management and organization"
  },
  {
    question: "Which of the following is a disadvantage of the file-based approach?",
    options: [
      "Data redundancy and inconsistency",
      "Easy data sharing",
      "Data independence",
      "Centralized control"
    ],
    answer: "Data redundancy and inconsistency"
  },
  {
    question: "What is a DBMS?",
    options: [
      "Data Backup Management System",
      "Database Management System",
      "Data Manipulation System",
      "Digital Marketing System"
    ],
    answer: "Database Management System"
  },
  {
    question: "Which of the following is a benefit of the database approach?",
    options: [
      "Increased data redundancy",
      "Data isolation",
      "Improved data integrity",
      "Lack of data sharing"
    ],
    answer: "Improved data integrity"
  },
  {
    question: "What is a data model?",
    options: [
      "A tool for analyzing data",
      "A blueprint for database design",
      "A type of database software",
      "A method of data encryption"
    ],
    answer: "A blueprint for database design"
  },
  {
   question: "What are the basic principles of database design systems?",
    options: [
      "Using different programming languages",
      "Using different database models",
      "Applying complex algorithms",
      "Implementing network protocols"
    ],
    answer: "Using different database models"
  },
  {
    question: "What is the purpose of an ER diagram?",
    options: [
      "To write SQL queries",
      "To visualize database structure",
      "To design user interfaces",
      "To manage network traffic"
    ],
    answer: "To visualize database structure"
  },
  {
    question: "Which of the following is a type of database model?",
    options: [
      "Object-oriented model",
      "Hierarchical model",
	  "Relational model",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is data independence?",
    options: [
      "Data that is not dependent on software",
      "The ability to modify the schema without affecting the application",
      "Data that is stored in multiple locations",
      "The ability to access data without a DBMS"
    ],
    answer: "The ability to modify the schema without affecting the application"
  },
  {
    question: "What is a database schema?",
    options: [
      "A diagram of the database",
      "The physical storage of the database",
      "The logical structure of the database",
      "A query language"
    ],
    answer: "The logical structure of the database"
  },

  {
    question: "What is a database instance?",
    options: [
      "A copy of the database schema",
      "The actual data stored in the database at a particular moment",
      "A backup of the database",
      "A type of database user"
    ],
    answer: "The actual data stored in the database at a particular moment"
  },

  {
    question: "Which of the following is NOT a type of data model?",
    options: [
      "Relational model",
      "Network model",
      "Object-oriented model",
      "Procedural model"
    ],
    answer: "Procedural model"
  },
  {
    question: "What is the purpose of the relational model?",
    options: [
      "To store data in a hierarchical structure",
      "To store data in tables",
      "To store data as objects",
      "To store data in a network structure"
    ],
    answer: "To store data in tables"
  },
  {
    question: "What is a relational database schema?",
    options: [
      "A collection of tables",
      "A set of constraints on the data",
      "The physical storage of tables",
	  "Both A and B"
    ],
    answer: "Both A and B"
  },
  {
    question: "What is a relational constraint?",
    options: [
      "A limitation on the number of tables",
      "A rule that applies to data in the database",
      "A type of SQL query",
      "A method of data encryption"
    ],
    answer: "A rule that applies to data in the database"
  },
  {
    question: "Which of the following is a type of relational constraint?",
    options: [
      "Primary key constraint",
      "Foreign key constraint",
      "Unique constraint",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is a primary key?",
    options: [
      "A key that identifies a row uniquely in a table",
      "A key that connects two tables",
      "A key used for sorting data",
      "A key that is not unique"
    ],
    answer: "A key that identifies a row uniquely in a table"
  },
  {
    question: "What is a foreign key?",
    options: [
      "A key that identifies a row uniquely in a table",
      "A key that connects two tables",
      "A key used for sorting data",
      "A key that is not unique"
    ],
    answer: "A key that connects two tables"
  },
  {
    question: "What is entity integrity?",
    options: [
      "The constraint that all primary key values must be unique",
      "The constraint that all foreign key values must reference an existing primary key",
      "The constraint that data must be consistent",
      "The constraint that data must be accurate"
    ],
    answer: "The constraint that all primary key values must be unique"
  },
  {
    question: "What is referential integrity?",
    options: [
      "The constraint that all primary key values must be unique",
      "The constraint that all foreign key values must reference an existing primary key",
      "The constraint that data must be consistent",
      "The constraint that data must be accurate"
    ],
    answer: "The constraint that all foreign key values must reference an existing primary key"
  },

  {
    question: "What is functional dependency?",
    options: [
      "A relationship between tables",
      "A constraint on data values",
      "A relationship between attributes in a table",
      "A type of database query"
    ],
    answer: "A relationship between attributes in a table"
  },

  {
    question: "In the context of databases, what is normalization?",
    options: [
      "The process of organizing data to reduce redundancy and improve integrity",
      "The process of backing up data",
      "The process of encrypting data",
      "The process of querying data"
    ],
    answer: "The process of organizing data to reduce redundancy and improve integrity"
  },

  {
    question: "Which normal form eliminates repeating groups of data?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "1NF"
  },

  {
    question: "Which normal form requires that every non-key attribute be fully functionally dependent on the primary key?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "2NF"
  },

  {
    question: "Which normal form requires that non-key attributes be independent of each other?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "3NF"
  },
  {
    question: "What does BCNF stand for?",
    options: [
      "Boyce Codd Normal Form",
      "Basic Conceptual Normal Form",
      "Binary Code Normal Form",
      "Balanced Cardinality Normal Form"
    ],
    answer: "Boyce Codd Normal Form"
  },
  {
     question: "Which normal form is a stricter version of 3NF?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "BCNF"
  },
  {
    question: "What is the goal of normalization?",
    options: [
      "To increase data redundancy",
      "To minimize data redundancy and dependency",
      "To complicate data retrieval",
      "To make database design more difficult"
    ],
    answer: "To minimize data redundancy and dependency"
  },

  {
    question: "What is a file in the context of database systems?",
    options: [
      "A collection of related records",
      "A single piece of data",
      "A database schema",
      "A query language"
    ],
    answer: "A collection of related records"
  },

  {
    question: "What is a record in a file?",
    options: [
      "A single piece of data",
      "A collection of related fields",
      "A database schema",
      "A query language"
    ],
    answer: "A collection of related fields"
  },

  {
    question: "What is a heap file?",
    options: [
      "A file of ordered records",
      "A file of unordered records",
      "A file with an index",
      "A temporary file"
    ],
    answer: "A file of unordered records"
  },

  {
    question: "What is a sorted file?",
    options: [
      "A file of unordered records",
      "A file of ordered records",
      "A file with no records",
      "A file that is compressed"
    ],
    answer: "A file of ordered records"
  },
  {
    question: "What is hashing?",
    options: [
      "A technique for ordering records",
      "A technique for accessing records directly",
      "A technique for encrypting data",
      "A technique for compressing files"
    ],
    answer: "A technique for accessing records directly"
  },
  {
    question: "What is an index in database systems?",
    options: [
      "A pointer to data",
      "A type of file",
      "A query language",
      "A method of data encryption"
    ],
    answer: "A pointer to data"
  },
  {
    question: "What is a B-tree?",
    options: [
      "A type of single-level index",
      "A type of dynamic multilevel index",
      "A type of hashing technique",
      "A type of file organization"
    ],
    answer: "A type of dynamic multilevel index"
  },

  {
    question: "What is a B+ tree?",
    options: [
      "A type of single-level index",
      "A type of dynamic multilevel index",
      "A type of hashing technique",
      "A type of file organization"
    ],
    answer: "A type of dynamic multilevel index"
  },
  {
    question: "What is the difference between a B-tree and a B+ tree?",
    options: [
      "They are the same",
      "B+ tree stores data only at the leaf nodes",
      "B-tree stores data only at the leaf nodes",
      "B+ tree is simpler than B-tree"
    ],
    answer: "B+ tree stores data only at the leaf nodes"
  },
  {
    question: "What is relational algebra?",
    options: [
      "A type of database software",
      "A procedural query language",
      "A non-procedural query language",
      "A method of data storage"
    ],
    answer: "A procedural query language"
  },

  {
    question: "What is relational calculus?",
    options: [
      "A type of database software",
      "A procedural query language",
      "A non-procedural query language",
      "A method of data storage"
    ],
    answer: "A non-procedural query language"
  },
  {
    question: "Which language is SQL based on?",
    options: [
      "Relational Algebra",
      "Relational Calculus",
      "Both Relational Algebra and Relational Calculus",
      "Neither Relational Algebra nor Relational Calculus"
    ],
    answer: "Both Relational Algebra and Relational Calculus"
  },
  {
    question: "Which of the following is an operation in relational algebra?",
    options: [
      "Selection",
      "Projection",
      "Join",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What does the SELECT operation do in relational algebra?",
    options: [
      "Chooses columns",
      "Chooses rows",
      "Combines tables",
      "Renames tables"
    ],
    answer: "Chooses rows"
  },
  {
    question: "What does the PROJECT operation do in relational algebra?",
    options: [
      "Chooses columns",
      "Chooses rows",
      "Combines tables",
      "Renames tables"
    ],
    answer: "Chooses columns"
  },
  {
    question: "What does the JOIN operation do in relational algebra?",
    options: [
      "Chooses columns",
      "Chooses rows",
      "Combines tables",
      "Renames tables"
    ],
    answer: "Combines tables"
  },

  {
    question: "What is SQL used for?",
    options: [
      "Designing user interfaces",
      "Managing and manipulating databases",
      "Creating web pages",
      "Developing operating systems"
    ],
    answer: "Managing and manipulating databases"
  },

  {
    question: "Which of the following is a type of SQL statement?",
    options: [
      "DDL",
      "DML",
      "DCL",
      "All of the above"
    ],
    answer: "All of the above"
  },

  {
    question: "What does DDL stand for?",
    options: [
      "Data Definition Language",
      "Data Manipulation Language",
      "Data Control Language",
      "Database Design Language"
    ],
    answer: "Data Definition Language"
  },
  {
    question: "What does DML stand for?",
    options: [
      "Data Definition Language",
      "Data Manipulation Language",
      "Data Control Language",
      "Database Design Language"
    ],
    answer: "Data Manipulation Language"
  },
  {
    question: "What does DCL stand for?",
    options: [
      "Data Definition Language",
      "Data Manipulation Language",
      "Data Control Language",
      "Database Design Language"
    ],
    answer: "Data Control Language"
  },
  {
    question: "Which type of SQL statement is used to define the database schema?",
    options: [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    answer: "DDL"
  },

  {
    question: "Which type of SQL statement is used to manipulate data in the database?",
    options: [
      "DDL",
      "DML",
      "DCL",
	  "TCL"
    ],
    answer: "DML"
  },
  {
    question: "Which type of SQL statement is used to control access to the database?",
    options: [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    answer: "DCL"
  },
   {
    question: "What are constraints in SQL?",
    options: [
      "Limitations on the size of the database",
      "Rules that enforce data integrity",
      "Types of SQL queries",
      "Methods of data encryption"
    ],
    answer: "Rules that enforce data integrity"
  },
  {
    question: "Which of the following is a type of SQL constraint?",
    options: [
      "UNIQUE",
      "NOT NULL",
      "CHECK",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is a view in SQL?",
    options: [
      "A virtual table based on the result-set of an SQL statement",
      "A physical table in the database",
      "A type of SQL query",
      "A method of data backup"
    ],
    answer: "A virtual table based on the result-set of an SQL statement"
  },
  {
    question: "What are nested queries in SQL?",
    options: [
      "Queries within queries",
      "Queries that join multiple tables",
      "Queries that use aggregate functions",
      "Queries that update data"
    ],
    answer: "Queries within queries"
  },
  {
    question: "How do you write comments in SQL?",
    options: [
      "Using //",
      "Using --",
      "Using /* and */",
      "Both B and C"
    ],
    answer: "Both B and C"
  },

  {
    question: "What is the purpose of the 'CREATE TABLE' statement in SQL?",
    options: [
      "To insert data into a table",
      "To delete a table",
      "To modify data in a table",
      "To define a new table"
    ],
    answer: "To define a new table"
  },
  {
    question: "Which SQL statement is used to insert new data into a table?",
    options: [
      "SELECT",
      "UPDATE",
      "INSERT",
      "DELETE"
    ],
    answer: "INSERT"
  },
  {
    question: "Which SQL statement is used to modify existing data in a table?",
    options: [
      "SELECT",
      "UPDATE",
      "INSERT",
      "DELETE"
    ],
    answer: "UPDATE"
  },
  {
    question: "Which SQL statement is used to delete data from a table?",
    options: [
      "SELECT",
      "UPDATE",
      "INSERT",
      "DELETE"
    ],
    answer: "DELETE"
  },
  {
    question: "Which SQL statement is used to retrieve data from a table?",
    options: [
      "SELECT",
      "UPDATE",
      "INSERT",
      "DELETE"
    ],
    answer: "SELECT"
  },
  {
    question: "What is the purpose of the 'WHERE' clause in an SQL query?",
    options: [
      "To sort the results",
      "To filter the results",
      "To join tables",
      "To group the results"
    ],
    answer: "To filter the results"
  },
  {
    question: "Which SQL clause is used to sort the result-set of a query?",
    options: [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "JOIN"
    ],
    answer: "ORDER BY"
  },
  {
    question: "Which SQL clause is used to group rows that have the same values into summary rows?",
    options: [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "JOIN"
    ],
    answer: "GROUP BY"
  },
  {
    question: "Which SQL keyword is used to combine rows from two or more tables?",
    options: [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "JOIN"
    ],
    answer: "JOIN"
  },
  {
    question: "What is the purpose of an aggregate function in SQL?",
    options: [
      "To perform calculations on multiple rows and return a single value",
      "To select specific columns",
      "To sort the results",
      "To filter the results"
    ],
    answer: "To perform calculations on multiple rows and return a single value"
  },
  {
    question: "Which of the following is an aggregate function in SQL?",
    options: [
      "COUNT()",
      "SUM()",
      "AVG()",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is a subquery in SQL?",
    options: [
      "A query that selects all columns",
      "A query within another query",
      "A query that updates data",
      "A query that deletes data"
    ],
    answer: "A query within another query"
  },
  {
    question: "What is the purpose of the 'VIEW' in SQL?",
    options: [
     "To create a physical copy of a table",
     "To define a virtual table based on the result of a query",
     "To encrypt data in a table",
     "To optimize query performance"
    ],
    answer: "To define a virtual table based on the result of a query"
  },
  {
    question: "Which SQL statement is used to create a view?",
    options: [
      "CREATE TABLE",
      "CREATE VIEW",
      "ALTER TABLE",
      "DROP TABLE"
    ],
    answer: "CREATE VIEW"
  },
  {
    question: "Which SQL statement is used to modify an existing table?",
    options: [
      "CREATE TABLE",
      "CREATE VIEW",
      "ALTER TABLE",
      "DROP TABLE"
    ],
    answer: "ALTER TABLE"
  },
   {
    question: "Which SQL statement is used to delete a table?",
    options: [
      "CREATE TABLE",
      "CREATE VIEW",
      "ALTER TABLE",
      "DROP TABLE"
    ],
    answer: "DROP TABLE"
  },
  {
    question: "What is the purpose of the 'PRIMARY KEY' constraint?",
    options: [
      "To uniquely identify each row in a table",
      "To create a relationship between tables",
      "To ensure that a column does not contain NULL values",
      "To specify a default value for a column"
    ],
    answer: "To uniquely identify each row in a table"
  },
  {
    question: "What is the purpose of the 'FOREIGN KEY' constraint?",
    options: [
      "To uniquely identify each row in a table",
      "To create a relationship between tables",
      "To ensure that a column does not contain NULL values",
      "To specify a default value for a column"
    ],
    answer: "To create a relationship between tables"
  },
  {
    question: "What is the purpose of the 'UNIQUE' constraint?",
    options: [
      "To uniquely identify each row in a table",
      "To create a relationship between tables",
      "To ensure that all values in a column are different",
      "To specify a default value for a column"
    ],
    answer: "To ensure that all values in a column are different"
  },
  {
    question: "What is the purpose of the 'NOT NULL' constraint?",
    options: [
      "To uniquely identify each row in a table",
      "To create a relationship between tables",
      "To ensure that a column does not contain NULL values",
      "To specify a default value for a column"
    ],
    answer: "To ensure that a column does not contain NULL values"
  },
  {
    question: "What is the purpose of the 'CHECK' constraint?",
    options: [
      "To uniquely identify each row in a table",
      "To create a relationship between tables",
      "To ensure that all values in a column satisfy a condition",
      "To specify a default value for a column"
    ],
    answer: "To ensure that all values in a column satisfy a condition"
  },
  {
    question: "What is the purpose of the 'DEFAULT' constraint?",
    options: [
      "To uniquely identify each row in a table",
      "To create a relationship between tables",
      "To ensure that a column does not contain NULL values",
      "To specify a default value for a column"
    ],
    answer: "To specify a default value for a column"
  },
  {
    question: "Which SQL data type is used to store text?",
    options: [
      "INT",
      "VARCHAR",
      "DATE",
      "BOOLEAN"
    ],
    answer: "VARCHAR"
  },
  {
    question: "Which SQL data type is used to store numbers without decimals?",
    options: [
      "INT",
      "VARCHAR",
      "DATE",
      "DECIMAL"
    ],
    answer: "INT"
  },
  {
    question: "Which SQL data type is used to store dates?",
    options: [
      "INT",
      "VARCHAR",
      "DATE",
      "BOOLEAN"
    ],
    answer: "DATE"
  },
  {
    question: "Which SQL data type is used to store numbers with decimals?",
    options: [
      "INT",
      "VARCHAR",
      "DATE",
      "DECIMAL"
    ],
    answer: "DECIMAL"
  },
  {
    question: "Which SQL statement is used to grant privileges to a user?",
    options: [
      "GRANT",
      "REVOKE",
      "COMMIT",
      "ROLLBACK"
    ],
    answer: "GRANT"
  },
  {
    question: "Which SQL statement is used to take back privileges from a user?",
    options: [
      "GRANT",
      "REVOKE",
      "COMMIT",
      "ROLLBACK"
    ],
    answer: "REVOKE"
  },
  {
    question: "What is the purpose of the 'COMMIT' statement in SQL?",
    options: [
      "To undo changes",
      "To save changes",
      "To grant privileges",
      "To revoke privileges"
    ],
    answer: "To save changes"
  },
  {
    question: "What is the purpose of the 'ROLLBACK' statement in SQL?",
    options: [
      "To undo changes",
      "To save changes",
      "To grant privileges",
      "To revoke privileges"
    ],
    answer: "To undo changes"
  },
  {
    question: "In ER diagrams, what does a rectangle represent?",
    options: [
      "Attribute",
      "Entity",
      "Relationship",
      "Key"
    ],
    answer: "Entity"
  },
  {
    question: "In ER diagrams, what does an oval represent?",
    options: [
      "Attribute",
      "Entity",
      "Relationship",
      "Key"
    ],
    answer: "Attribute"
  },
  {
   question: "In ER diagrams, what does a diamond represent?",
    options: [
      "Attribute",
      "Entity",
      "Relationship",
      "Key"
    ],
    answer: "Relationship"
  },
  {
    question: "What is cardinality in ER diagrams?",
    options: [
      "The number of entities",
      "The number of attributes",
      "The number of relationships",
      "The number of instances of one entity related to another"
    ],
    answer: "The number of instances of one entity related to another"
  },
  {
    question: "What is a weak entity?",
    options: [
      "An entity that does not have a primary key of its own",
      "An entity with few attributes",
      "An entity involved in few relationships",
      "An entity that is not important"
    ],
    answer: "An entity that does not have a primary key of its own"
  },
  {
    question: "What is a composite attribute?",
    options: [
      "An attribute that can be divided into smaller subparts",
      "An attribute that is a key",
      "An attribute that is derived from another attribute",
      "An attribute that can have multiple values"
    ],
    answer: "An attribute that can be divided into smaller subparts"
  },
  {
    question: "What is a multi-valued attribute?",
    options: [
      "An attribute that can be divided into smaller subparts",
      "An attribute that is a key",
      "An attribute that is derived from another attribute",
      "An attribute that can have multiple values"
    ],
    answer: "An attribute that can have multiple values"
  },
  {
    question: "What is a derived attribute?",
    options: [
      "An attribute that can be divided into smaller subparts",
      "An attribute that is a key",
      "An attribute whose value can be calculated from the value of related attributes",
      "An attribute that can have multiple values"
    ],
    answer: "An attribute whose value can be calculated from the value of related attributes"
  },
  {
    question: "What is a key attribute?",
    options: [
      "An attribute that can be divided into smaller subparts",
      "An attribute that uniquely identifies an entity",
      "An attribute that is derived from another attribute",
      "An attribute that can have multiple values"
    ],
    answer: "An attribute that uniquely identifies an entity"
  },
  {
    question: "What is the difference between single-valued and multi-valued attributes?",
    options: [
      "Single-valued attributes can have only one value, while multi-valued attributes can have multiple values.",
      "Multi-valued attributes can have only one value, while single-valued attributes can have multiple values.",
      "Single-valued attributes are keys, while multi-valued attributes are not.",
      "There is no difference."
    ],
    answer: "Single-valued attributes can have only one value, while multi-valued attributes can have multiple values."
  }

];