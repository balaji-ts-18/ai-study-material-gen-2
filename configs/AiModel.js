const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const courseOutlineAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for <python> for <exam> and level of difficulty will be <easy> wilth summary of course, List of chapters along with summary for each chapter, topic list in each chapter, all result in JSON format only\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseSummary\": \"This easy-level Python course provides a foundational understanding of Python programming concepts.  It covers basic syntax, data types, control flow, and fundamental programming structures.  The course is designed to prepare students for a basic Python proficiency exam.\",\n  \"chapters\": [\n    {\n      \"chapterTitle\": \"Introduction to Python\",\n      \"chapterSummary\": \"This chapter introduces the basics of Python, including installation, setting up your environment, and writing your first program. It covers fundamental concepts like variables, data types, and basic operators.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Installing Python\",\n        \"Setting up your development environment (IDE/text editor)\",\n        \"Running your first Python program\",\n        \"Basic Syntax (Indentation, Comments)\",\n        \"Variables and Data Types (Integers, Floats, Strings, Booleans)\",\n        \"Basic Operators (+, -, *, /, //, %, **)\",\n        \"Type Conversion\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Control Flow\",\n      \"chapterSummary\": \"This chapter covers how to control the flow of execution in your programs using conditional statements and loops.\",\n      \"topics\": [\n        \"Conditional Statements (if, elif, else)\",\n        \"Boolean Logic (and, or, not)\",\n        \"Loops (for loop, while loop)\",\n        \"Break and Continue Statements\",\n        \"Nested Loops\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Data Structures\",\n      \"chapterSummary\": \"This chapter introduces fundamental data structures in Python, including lists, tuples, and dictionaries.\",\n      \"topics\": [\n        \"Lists (creation, accessing elements, methods)\",\n        \"Tuples (creation, accessing elements)\",\n        \"Dictionaries (creation, accessing elements, methods)\",\n        \"List Comprehensions (basic examples)\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Functions\",\n      \"chapterSummary\": \"This chapter teaches how to create and use functions to modularize your code and improve readability.\",\n      \"topics\": [\n        \"Defining Functions\",\n        \"Function Parameters and Arguments\",\n        \"Return Values\",\n        \"Scope of Variables\",\n        \"Function calls\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Input and Output\",\n      \"chapterSummary\": \"This chapter covers how to take input from the user and display output to the console.\",\n      \"topics\": [\n        \"Taking user input using `input()`\",\n        \"Displaying output using `print()`\",\n        \"Formatting output using f-strings\"\n      ]\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  