import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrecautionChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(input);
      setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
    }, 1000);
  };

  const getAIResponse = (question) => {
    // This is a mock AI response. In a real application, this would call an API.
    const responses = {
      earthquake: "For earthquakes: Drop, Cover, and Hold On. Stay away from windows and heavy furniture.",
      flood: "For floods: Move to higher ground. Avoid walking or driving through flood waters.",
      hurricane: "For hurricanes: Board up windows, prepare an emergency kit, and follow evacuation orders if given.",
      default: "Stay informed through local news and official channels. Always have an emergency kit ready."
    };

    const lowercaseQuestion = question.toLowerCase();
    if (lowercaseQuestion.includes('earthquake')) return responses.earthquake;
    if (lowercaseQuestion.includes('flood')) return responses.flood;
    if (lowercaseQuestion.includes('hurricane')) return responses.hurricane;
    return responses.default;
  };

  return (
    <Card className="h-96">
      <CardHeader>
        <CardTitle>Precaution Chatbot</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </ScrollArea>
        <div className="flex">
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about precautions..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="ml-2">Send</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrecautionChatbot;