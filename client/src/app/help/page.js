"use client"
import React, { useState } from 'react';
import { HelpCircle, Book, MessageCircle, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const premadePrompts = [
    "What is a disaster preparedness plan?",
    "How can I create an emergency kit?",
    "What should I do in case of an earthquake?",
    "How do I stay informed during a disaster?",
  ];

  const handlePromptClick = (prompt) => {
    setUserInput(prompt);
    handleSend(prompt);
  };

  const handleSend = (input) => {
    setMessages([...messages, { text: input, sender: "user" }]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Response to: ${input}`, sender: "bot" }
      ]);
    }, 1000);
    setUserInput("");
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Disaster Prediction Chatbot</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-[calc(100%-4rem)]">
        <div className="flex-1 overflow-auto mb-4 space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`${msg.sender === "user" ? "bg-blue-100 dark:bg-blue-900" : "bg-green-100 dark:bg-green-900"} p-2 rounded-lg max-w-[80%]`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {premadePrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handlePromptClick(prompt)}
              className="text-xs"
            >
              {prompt}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={() => handleSend(userInput)}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}

const HelpPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const helpTopics = [
    {
      id: 'gettingStarted',
      title: 'Getting Started',
      icon: <Book className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      content: 'Learn how to set up your account, configure alerts, and use the main features of our disaster preparedness app.',
    },
    {
      id: 'alerts',
      title: 'Understanding Alerts',
      icon: <HelpCircle className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
      content: 'Discover how our alert system works, what different alert levels mean, and how to customize your alert preferences.',
    },
    {
      id: 'support',
      title: 'Contact Support',
      icon: <MessageCircle className="h-6 w-6 text-green-500 dark:text-green-400" />,
      content: 'Need additional help? Our support team is here to assist you. Find out how to reach us.',
    },
    {
      id: 'settings',
      title: 'App Settings',
      icon: <Settings className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      content: 'Learn how to adjust your app settings, manage your profile, and customize your experience.',
    },
  ];

  const faqItems = [
    {
      question: "How do I change my notification settings?",
      answer: "You can change your notification settings by going to the 'Settings' page and selecting 'Notifications'. From there, you can choose which types of alerts you want to receive and how you want to receive them."
    },
    {
      question: "What should I do if I receive an emergency alert?",
      answer: "If you receive an emergency alert, stay calm and follow the instructions provided in the alert message. Make sure to have an emergency kit ready and stay tuned for further updates."
    },
    {
      question: "How often is the map updated?",
      answer: "Our map is updated in real-time as we receive new information from verified sources. However, in rapidly changing situations, there might be a slight delay. Always follow the most recent official guidance."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <div className="space-y-4">
                {helpTopics.map((topic) => (
                  <Button
                    key={topic.id}
                    variant={selectedTopic === topic.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    <span className="mr-2">{topic.icon}</span>
                    {topic.title}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;