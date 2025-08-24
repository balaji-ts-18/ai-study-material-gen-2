Preparation AI - AI-Powered Learning Management System (LMS)
Live Demo
Check out the live application here: https://preparationai.in/
Introduction
Preparation AI is a full-stack, AI-based Learning Management Platform (LMS) designed to help users build and create comprehensive study materials. Whether you're preparing for an exam, a job interview, or even coding challenges, this platform leverages artificial intelligence to generate tailored content from scratch. It provides a seamless experience from content creation to interactive learning, all within a modern and responsive interface. The application is completely free to use, allowing all users to access its powerful features without any subscription.
Key Features
• AI-Powered Content Generation: Utilizes the Google Gemini AI model to dynamically generate course outlines, detailed notes, chapters, interactive flashcards, and engaging quizzes. Content is tailored based on user-provided topics, pasted content, and selected difficulty levels (easy, moderate, hard).
• Comprehensive Study Material Types: Offers diverse learning formats including structured notes, detailed chapters, animated flashcards, and interactive quizzes with instant feedback on correct answers.
• Effortless Course Creation: Users can easily create study material by providing a topic or pasting existing content, then selecting a difficulty level (easy, moderate, hard).
• Unlimited Course Creation: All users can create an unlimited number of courses and study materials without any restrictions or payment.
• Asynchronous Content Processing with Ingest: Ingest functions are crucial for running background jobs and AI workflows, ensuring that resource-intensive tasks like content generation happen seamlessly in the background without making the user wait. Ingest also helps in monitoring API call failures and providing execution details.
• Robust User Authentication: Integrated with Clerk Authentication for secure and easy user management. It supports email, Google, and Facebook sign-in options, featuring custom sign-up and sign-in pages.
• Personalized Dashboard: A user-friendly dashboard allows users to view all previously created courses.
• Responsive User Interface: Built with Next.js, Tailwind CSS, and Shad CN UI Component Library to deliver a modern, highly responsive, and accessible user experience across various devices.
• Scalable Backend: Employs a Neon PostgreSQL database for robust data storage, managed efficiently with Drizzle ORM.
• SEO Optimization: Includes essential meta tags in the root layout for improved search engine optimization.
• Email Notifications: Designed to send welcome emails to new users and notifications upon content generation completion.
Technologies Used
• Framework: Next.js (React Framework)
• Styling: Tailwind CSS, Shad CN UI Component Library
• Database: Neon PostgreSQL, Drizzle ORM (for LMS app); Convex (for AI PDF Note Taker app)
• Authentication: Clerk Authentication
• AI Model: Google Gemini AI
• Background Jobs/Workflow: Ingest
• Deployment: Vercel (for Next.js application); Ingest Cloud (for background functions)
• Other Libraries/Tools:
    ◦ Lucid React: Icon library
    ◦ UUID: For generating unique identifiers
    ◦ Axios: HTTP client for API calls
    ◦ React Card Flip: For interactive flashcards
    ◦ Sonner: For elegant toast notifications
    ◦ React Redux ES7+ Snippets: Recommended VS Code extension for faster development
    ◦ LangChain: Framework for developing applications powered by large language models (used in AI PDF Note Taker)
    ◦ TipTap: Advanced text editor (used in AI PDF Note Taker)
Related Project: AI PDF Note Taker
For another half of the code, which focuses on an AI PDF Note Taking application, you can refer to the following GitHub repository:
• GitHub Repository: https://github.com/gaonkarBhai/preparationai
This related project offers distinct functionalities:
• PDF Upload & Management: Users can upload PDF files, assign names, and manage them within a dedicated workspace.
• Integrated PDF Viewer: Displays uploaded PDF files directly alongside a powerful text editor for efficient note-taking.
• AI Question Answering from PDFs: Users can ask questions to the AI, which intelligently retrieves and formats answers directly from the content of their uploaded PDFs, leveraging LangChain and Google Gemini AI.
• Advanced Text Editor: A fully functional and customizable editor (powered by TipTap) for taking and saving notes, with rich text formatting options (bold, italic, underline, highlight, etc.).
• Real-time Data Storage: Utilizes Convex as a real-time database, which also supports vector search capabilities, serverless functions, and file storage.
