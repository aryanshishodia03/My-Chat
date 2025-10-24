import axios from "axios";
import { useState } from "react"

interface Message {
    text: string;
    sender: "user" | "bot";
}

const useChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = async(message: string) => {
        const newMessages: Message[] = [...messages, {text: message, sender: "user"}];
        setMessages(newMessages);

        try {
            const response = await axios.post(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                    model: "llama-3.1-8b-instant",
                    messages: [
                        {
                            role: "user", 
                            content: message
                        }
                    ],
                    // temperature: 0.7, 
                    // max_tokens: 1024 
                },
                {
                    headers: {
                        "Authorization": "Bearer import.meta.env.VITE_GROQ_API_KEY",
                        "Content-Type": "application/json"
                    }
                }
            );
            
            const botMessage = response.data.choices[0].message.content;
            setMessages([...newMessages, {text: botMessage, sender: "bot"}]);
        } catch (error) {
            console.error("Error fetching AI response: ", error);
            if (axios.isAxiosError(error)) {
                console.error("Error details:", error.response?.data);
            }
        }
    };
    
    return { messages, sendMessage };
}

export default useChatBot;
