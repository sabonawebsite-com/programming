const questions=[
    {
      question: "Which of the following is not OOPS concept in Java?",
      options: [
        "Inheritance",
        "Encapsulation",
        "Polymorphism",
        "Compilation"
      ],
      answer: "Compilation"
    },
    {
      question: "Which of the following is a type of polymorphism in Java?",
      options: [
        "Compile time polymorphism",
        "Execution time polymorphism",
        "Multiple polymorphism",
        "Multilevel polymorphism"
      ],
      answer: "Compile time polymorphism"
    },
    {
      question: "When does method overloading is determined?",
      options: [
        "At run time",
        "At compile time",
        "At coding time",
        "At execution time"
      ],
      answer: "At compile time"
    },
    {
      question: "When Overloading does not occur?",
      options: [
        "More than one method with same name but different method signature and different number or type of parameters",
        "More than one method with same name, same signature but different number of signature",
        "More than one method with same name, same signature, same number of parameters but different type",
        "More than one method with same name, same number of parameters and type but different signature"
      ],
      answer: "More than one method with same name, same number of parameters and type but different signature"
    },
    {
      question: "Which concept of Java is a way of converting real world objects in terms of class?",
      options: [
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Inheritance"
      ],
      answer: "Abstraction"
    },
    {
      question: "Which concept of Java is achieved by combining methods and attribute into a class?",
      options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction"
      ],
      answer: "Encapsulation"
    },
    {
      question: "What is it called if an object has its own lifecycle and there is no owner?",
      options: [
        "Aggregation",
        "Composition",
        "Encapsulation",
        "Association"
      ],
      answer: "Association"
    },
    {
      question: "What is it called where child object gets killed if parent object is killed?",
      options: [
        "Aggregation",
        "Composition",
        "Encapsulation",
        "Association"
      ],
      answer: "Composition"
    },
    {
      question: "What is it called where object has its own lifecycle and child object cannot belong to another parent object?",
      options: [
        "Aggregation",
        "Composition",
        "Encapsulation",
        "Association"
      ],
      answer: "Aggregation"
    },
    {
      question: "Method overriding is combination of inheritance and polymorphism?",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "What would be the output of the following code snippet if variable a=10? 1.if(a<=0) 2.{ 3. if(a==0) 4. { 5. System.out.println(\"1 \"); 6. } 7. else 8. { 9. System.out.println(\"2 \"); 10. } 11.} 12.System.out.println(\"3 \");",
      options: [
        "1 2",
        "2 3",
        "1 3",
        "3"
      ],
      answer: "3"
    },
     {
      question: "The while loop repeats a set of code while the condition is not met?",
      options: [
        "True",
        "False"
      ],
      answer: "False"
    },
    {
      question: "What is true about a break?",
      options: [
        "Break stops the execution of entire program",
        "Break halts the execution and forces the control out of the loop",
        "Break forces the control out of the loop and starts the execution of next iteration",
        "Break halts the execution of the loop for certain time frame"
      ],
      answer: "Break halts the execution and forces the control out of the loop"
    },
    {
      question: "What is true about do statement?",
      options: [
        "do statement executes the code of a loop at least once",
        "do statement does not get execute if condition is not matched in the first iteration",
        "do statement checks the condition at the beginning of the loop",
        "do statement executes the code more than once always"
      ],
      answer: "do statement executes the code of a loop at least once"
    },
    {
      question: "Which of the following is used with the switch statement?",
      options: [
        "Continue",
        "Exit",
        "break",
        "do"
      ],
      answer: "break"
    },
    {
      question: "What is the valid data type for variable “a” to print “Hello World”? 1.switch(a) 2.{ 3. System.out.println(\"Hello World\"); 4.}",
      options: [
        "int and float",
        "byte and short",
        "char and long",
        "byte and char"
      ],
      answer: "byte and char"
    },
    {
      question: "Which of the following is not a decision making statement?",
      options: [
        "if",
        "if-else",
        "switch",
        "do-while"
      ],
      answer: "do-while"
    },
    {
      question: "Which of the following is not a valid jump statement?",
      options: [
        "break",
        "goto",
        "continue",
        "return"
      ],
      answer: "goto"
    },
    {
      question: "From where break statement causes an exit?",
      options: [
        "Only from innermost loop",
        "Terminates a program",
        "Only from innermost switch",
        "From innermost loops or switches"
      ],
      answer: "From innermost loops or switches"
    },
    {
      question: "Which of the following is not a valid flow control statement?",
      options: [
        "exit()",
        "break",
        "continue",
        "return"
      ],
      answer: "exit()"
    },
    {
      question: "Which component is used to compile, debug and execute java program?",
      options: [
        "JVM",
        "JDK",
        "JIT",
        "JRE"
      ],
      answer: "JDK"
    },
    {
      question: "Which component is responsible for converting bytecode into machine specific code?",
      options: [
        "JVM",
        "JDK",
        "JIT",
        "JRE"
      ],
      answer: "JVM"
    },
    {
      question: "Which component is responsible to run java program?",
      options: [
        "JVM",
        "JDK",
        "JIT",
        "JRE"
      ],
      answer: "JRE"
    },
    {
      question: "Which component is responsible to optimize bytecode to machine code?",
      options: [
        "JVM",
        "JDK",
        "JIT",
        "JRE"
      ],
      answer: "JIT"
    },
    {
      question: "Which statement is true about java?",
      options: [
        "Platform independent programming language",
        "Platform dependent programming language",
        "Code dependent programming language",
        "Sequence dependent programming language"
      ],
      answer: "Platform independent programming language"
    },
    {
      question: "Which of the below is invalid identifier with the main method?",
      options: [
        "public",
        "static",
        "private",
        "final"
      ],
      answer: "private"
    },
    {
      question: "What is the extension of java code files?",
      options: [
        ".class",
        ".java",
        ".txt",
        ".js"
      ],
      answer: ".java"
    },
    {
      question: "What is the extension of compiled java classes?",
      options: [
        ".class",
        ".java",
        ".txt",
        ".js"
      ],
      answer: ".class"
    },
    {
      question: "How can we identify whether a compilation unit is class or interface from a .class file?",
      options: [
        "Java source file header",
        "Extension of compilation unit",
        "We cannot differentiate between class and interface",
        "The class or interface name should be postfixed with unit type"
      ],
      answer: "Java source file header"
    },
    {
      question: "What is use of interpreter?",
      options: [
        "They convert bytecode to machine language code",
        "They read high level code and execute them",
        "They are intermediated between JIT and JVM",
        "It is a synonym for JIT"
      ],
      answer: "They read high level code and execute them"
    },
     {
      question: "When does Exceptions in Java arises in code sequence?",
      options: [
        "Run Time",
        "Compilation Time",
        "Can Occur Any Time",
        "None of the mentioned"
      ],
      answer: "Run Time"
    },
    {
      question: "Which of these keywords is not a part of exception handling?",
      options: [
        "try",
        "finally",
        "thrown",
        "catch"
      ],
      answer: "thrown"
    },
    {
      question: "Which of these keywords must be used to monitor for exceptions?",
      options: [
        "try",
        "finally",
        "throw",
        "catch"
      ],
      answer: "try"
    },
    {
      question: "Which of these keywords must be used to handle the exception thrown by try block in some rational manner?",
      options: [
        "try",
        "finally",
        "throw",
        "catch"
      ],
      answer: "catch"
    },
    {
      question: "Which of these keywords is used to manually throw an exception?",
      options: [
        "try",
        "finally",
        "throw",
        "catch"
      ],
      answer: "throw"
    },
    {
      question: "What will be the output of the following Java program? 1. class exception_handling 2. { 3. public static void main(String args[]) 4. { 5. try 6. { 7. System.out.print(\"Hello\" + \" \" + 1 / 0); 8. } 9. catch(ArithmeticException e) 10. { 11. System.out.print(\"World\"); 12. } 13. } 14. }",
      options: [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      answer: "World"
    },
    {
      question: "What will be the output of the following Java program? 1. class exception_handling 2. { 3. public static void main(String args[]) 4. { 5. try 6. { 7. int a, b; 8. b = 0; 9. a = 5 / b; 10. System.out.print(\"A\"); 11. } 12. catch(ArithmeticException e) 13. { 14. System.out.print(\"B\"); 15. } 16. } 17. }",
      options: [
        "A",
        "B",
        "Compilation Error",
        "Runtime Error"
      ],
      answer: "B"
    },
    {
      question: "What will be the output of the following Java program? 1. class exception_handling 2. { 3. public static void main(String args[]) 4. { 5. try 6. { 7. int a, b; 8. b = 0; 9. a = 5 / b; 10. System.out.print(\"A\"); 11. } 12. catch(ArithmeticException e) 13. { 14. System.out.print(\"B\"); 15. } 16. finally 17. { 18. System.out.print(\"C\"); 19. } 20. } 21. }",
      options: [
        "A",
        "B",
        "AC",
        "BC"
      ],
      answer: "BC"
    },
    {
      question: "What will be the output of the following Java program? 1. class exception_handling 2. { 3. public static void main(String args[]) 4. { 5. try 6. { 7. int i, sum; 8. sum = 10; 9. for (i = -1; i < 3 ;++i) 10. sum = (sum / i); 11. } 12. catch(ArithmeticException e) 13. { 14. System.out.print(\"0\"); 15. } 16. System.out.print(sum); 17. } 18. }",
      options: [
        "0",
        "05",
        "Compilation Error",
        "Runtime Error"
      ],
      answer: "Compilation Error"
    }
  ]