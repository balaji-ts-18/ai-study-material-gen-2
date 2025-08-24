# Preparation AI - AI-Powered Learning Management System (LMS)

### 🚀 Live Demo
Check out the live application here: [https://preparationai.in/](https://preparationai.in/)

---

## 📖 Introduction
**Preparation AI** is a full-stack, AI-based Learning Management Platform (LMS) designed to help users build and create comprehensive study materials.  

Whether you're preparing for an **exam**, a **job interview**, or even **coding challenges**, this platform leverages artificial intelligence to generate tailored content from scratch.  

It provides a seamless experience from **content creation** to **interactive learning**, all within a modern and responsive interface.  

👉 The application is **completely free** to use, allowing all users to access its powerful features without any subscription.

---

## ✨ Key Features

- **AI-Powered Content Generation**  
  Utilizes the **Google Gemini AI model** to dynamically generate:
  - Course outlines  
  - Detailed notes  
  - Chapters  
  - Interactive flashcards  
  - Engaging quizzes  

  Content is tailored based on **user-provided topics**, **pasted content**, and **selected difficulty levels** (*easy, moderate, hard*).

- **Comprehensive Study Material Types**  
  Offers diverse learning formats:
  - Structured notes  
  - Detailed chapters  
  - Animated flashcards  
  - Interactive quizzes (with instant feedback)

- **Effortless Course Creation**  
  Create study material easily by providing a topic or pasting content, then selecting a difficulty level.

- **Unlimited Course Creation**  
  No restrictions. Users can generate unlimited courses for free.

- **Asynchronous Content Processing with Ingest**  
  - Handles **background jobs** and **AI workflows**  
  - Ensures heavy tasks (like content generation) run seamlessly in the background  
  - Provides monitoring for API failures and execution details  

- **Robust User Authentication**  
  Integrated with **Clerk Authentication**, supporting:
  - Email login  
  - Google sign-in  
  - Facebook sign-in  

  Features **custom sign-up** and **sign-in** pages.

- **Personalized Dashboard**  
  Users can view and manage all previously created courses.

- **Responsive User Interface**  
  Built with:
  - **Next.js**  
  - **Tailwind CSS**  
  - **ShadCN UI**  

  Ensures a modern, responsive, and accessible UI across devices.

- **Scalable Backend**  
  - **Neon PostgreSQL** for data storage  
  - Managed with **Drizzle ORM**

- **SEO Optimization**  
  Essential meta tags included in the root layout for better visibility.

- **Email Notifications**  
  - Welcome emails for new users  
  - Notifications after content generation completion

---

## 🛠️ Technologies Used

- **Framework:** Next.js (React Framework)  
- **Styling:** Tailwind CSS, ShadCN UI  
- **Database:**  
  - Neon PostgreSQL + Drizzle ORM (for LMS app)  
  - Convex (for AI PDF Note Taker app)  
- **Authentication:** Clerk Authentication  
- **AI Model:** Google Gemini AI  
- **Background Jobs/Workflow:** Ingest  
- **Deployment:**  
  - Vercel (Next.js app)  
  - Ingest Cloud (background functions)  
- **Other Libraries/Tools:**  
  - Lucid React → Icon library  
  - UUID → Unique identifiers  
  - Axios → API calls  
  - React Card Flip → Interactive flashcards  
  - Sonner → Elegant toast notifications  
  - React Redux ES7+ Snippets → VS Code extension for productivity  
  - LangChain → LLM-powered app framework (used in AI PDF Note Taker)  
  - TipTap → Advanced text editor (used in AI PDF Note Taker)

---

## 📂 Related Project: AI PDF Note Taker

For another half of the code, check the **GitHub repository**:  
👉 [https://github.com/gaonkarBhai/preparationai](https://github.com/gaonkarBhai/preparationai)

### Features:
- **PDF Upload & Management**  
  Upload PDFs, assign names, and manage them within a workspace.  

- **Integrated PDF Viewer**  
  Displays uploaded PDFs alongside a powerful text editor.

- **AI Question Answering from PDFs**  
  Ask questions directly from uploaded PDFs.  
  The AI retrieves and formats answers using **LangChain** + **Google Gemini AI**.  

- **Advanced Text Editor**  
  Powered by **TipTap**, supports:
  - Bold, italic, underline, highlight, etc.  
  - Rich text note-taking & saving  

- **Real-time Data Storage**  
  Uses **Convex** for:
  - Real-time database  
  - Vector search capabilities  
  - Serverless functions  
  - File storage  

---
