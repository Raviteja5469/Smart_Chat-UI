# Smart-ChatAI

Smart-ChatAI is a modern, AI-powered chat application built with React and Vite. It features professional UI, smart replies, thread summarization, and Gemini 2.0 Flash integration for enhanced productivity and collaboration.

## Features

- **AI-Powered Chat**: Get smart reply suggestions and thread summaries using Gemini 2.0 Flash.
- **Professional UI**: Sleek, responsive design with animated effects and onboarding.
- **User List & Search**: Easily find and start chats with team members. Search conversations by name or message.
- **Icebreaker Generator**: Use AI to generate friendly, professional icebreakers for new chats.
- **Message Enhancer**: Instantly enhance your message text for clarity and professionalism.
- **Onboarding Experience**: Welcoming full-screen start page with animated chat-themed background.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
	```bash
	git clone [https://github.com/Raviteja5469/Smart_Chat-UI/]
	cd Smart-ChatAI/Smart_Chat-UI/
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Add your Gemini API key to `.env`:
	```env
	VITE_GEMINI_API_KEY=your-gemini-api-key
	```

### Running the App
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/pages/ChatList.jsx` — Sidebar chat list and search
- `src/pages/ChatWindow.jsx` — Main chat window with AI features
- `src/pages/NewChat.jsx` — Start new chat and generate icebreakers
- `src/components/AIActionButton.jsx` — Reusable AI action button
- `src/components/Message.jsx` — Chat message bubble
- `src/data/dummyData.js` — Sample users and chats

## Customization

- Update avatars, user names, and chat data in `src/data/dummyData.js`.
- Change UI styles using Tailwind CSS classes in component files.
- Integrate with your own backend or extend AI features as needed.

## License

This project is licensed under the MIT License.

