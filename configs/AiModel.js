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

    
    
    
      export const generateNotesAIModel = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {text: "Generate exam material detail content for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLK, Head, Body, title tag). The chapters : {\n      \"chapterTitle\": \"Advanced Routing & Routing Strategies\",\n      \"chapterSummary\": \"This chapter explores beyond basic routing, delving into dynamic routes, route parameters, catch-all routes, and implementing complex navigation flows within a Next.js application.\",\n      \"topics\": [\n        \"Dynamic Routes and Route Parameters\",\n        \"Catch-All Routes\",\n        \"Middleware for Route Protection and Redirects\",\n        \"Client-Side Navigation vs. Server-Side Navigation\",\n        \"Implementing Complex Navigation Flows (Nested Routes, etc.)\",\n        \"Advanced Link Component Usage\"\n      ]\n    }\n"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```html\n<h2>Advanced Routing & Routing Strategies</h2>\n<p>This chapter explores advanced routing techniques in Next.js, moving beyond basic routing to handle dynamic content, complex navigation, and robust route management.</p>\n\n<h3>Dynamic Routes and Route Parameters</h3>\n<p>This section covers creating routes that accept parameters.  Learn how to define dynamic segments in your routes using square brackets <code>[]</code>, access these parameters within your page components using <code>context.params</code>, and handle potential errors when parameters are missing or invalid.  Examples will include fetching data based on route parameters and building dynamic URLs.</p>\n\n<h3>Catch-All Routes</h3>\n<p>Explore the power of catch-all routes using three dots <code>...</code>. Understand how to create routes that handle a variable number of segments,  useful for creating flexible URL structures.  Learn how to access all captured segments within your page component and apply appropriate logic based on the provided parameters.</p>\n\n<h3>Middleware for Route Protection and Redirects</h3>\n<p>This section delves into Next.js Middleware, a powerful feature for performing actions before a request is completed.  Learn how to use middleware for route protection (e.g., requiring authentication), implementing redirects based on user roles or conditions, and performing other pre-rendering tasks. Examples will include protecting sensitive routes and redirecting unauthenticated users to a login page.</p>\n\n<h3>Client-Side Navigation vs. Server-Side Navigation</h3>\n<p>Compare and contrast client-side navigation (using the <code>Link</code> component) and server-side navigation (using <code>router.push</code> or similar methods).  Discuss the performance implications, SEO considerations, and when to use each approach. Examples will illustrate the differences in behavior and the impact on the user experience.</p>\n\n<h3>Implementing Complex Navigation Flows (Nested Routes, etc.)</h3>\n<p>This section focuses on structuring your application's navigation for scalability and maintainability.  Learn how to implement nested routes, creating a hierarchical structure for your pages.  Explore techniques for managing navigation within nested routes and ensuring a smooth user experience.  Examples will demonstrate effective ways to organize and navigate complex applications.</p>\n\n<h3>Advanced Link Component Usage</h3>\n<p>Go beyond the basics of the <code>Link</code> component. Explore features like <code>prefetch</code> for improved performance, handling events, and using custom properties for advanced styling and behavior. Learn how to optimize the <code>Link</code> component for different use cases and integrate it seamlessly within complex navigation structures.</p>\n\n```\n"},
            ],
          },
        ],
      });
    
      // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
      // console.log(result.response.text());
    
    
   
  