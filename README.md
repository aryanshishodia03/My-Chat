# AI Chatbot with React (Vite) and Groq API

## Overview
This is a Vite + React-based AI chatbot application that interacts with the Groq API to generate responses. It demonstrates how to build a chat interface, handle user inputs, and connect with an API securely using environment variables.

## Features
- Modern React with Vite
- Custom chat UI
- Secure API key handling using environment variables
- Simple and extendable code structure

## Important Files
- **useChatBot.ts**: Main hook for managing chat messages and API requests
- **useChatScroll.ts**: Scroll management for chat view
- **ChatComponent.tsx**: User interface components for chat interaction

## Setup Instructions

### Prerequisites
- Node.js (v16+) installed
- Git installed
- A Groq API key (sign up at Groq platform)

### Initial Setup
1. Clone this repository:
git clone https://github.com/aryanshishodia03/My-Chat.git

text
2. Navigate to project directory:
cd My-Chat

text
3. Install dependencies:
npm install

text
4. Create a `.env` file in the root directory and add your Groq API key:
VITE_GROQ_API_KEY=your_groq_api_key_here

text
> Make sure to replace `your_groq_api_key_here` with your actual API key.  
> **Important**: `.env` is included in `.gitignore` to keep your API key secure.

### Run the Development Server
npm run dev

text
Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Usage
Type your message in the input box and press Enter or click the send button. The chat interface will interact with the Groq API and display bot responses.