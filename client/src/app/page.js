import { Button } from "@/components/ui/button"
import Link from 'next/link'
import DisasterNews from '@/components/home/DisasterNews'
import IntroSection from '@/components/home/IntroSection' 
import { Map, Bell, Settings, Brain, Heart, Robot } from "lucide-react"

export default function Home() {
  const actionCards = [
    {
      title: "View Map",
      subtitle: "LOCATION • TRACKING",
      icon: <Map className="w-6 h-6" />,
      href: "/map",
      gradient: "from-purple-100 to-purple-300",
      textColor: "text-purple-700"
    },
    {
      title: "Get Alerts",
      subtitle: "NOTIFY • UPDATE",
      icon: <Bell className="w-6 h-6" />,
      href: "/alert-settings",
      gradient: "from-orange-100 to-orange-300",
      textColor: "text-orange-700"
    },
    {
      title: "Set Preferences",
      subtitle: "CUSTOMIZE • CONTROL",
      icon: <Settings className="w-6 h-6" />,
      href: "/login",
      gradient: "from-teal-100 to-teal-300",
      textColor: "text-teal-700"
    },
    {
      title: "Risk Prediction",
      subtitle: "HELP • SUPPORT",
      icon: <Brain className="w-6 h-6" />,
      href: "/login",
      gradient: "from-blue-100 to-blue-300",
      textColor: "text-blue-700"
    },
    {
      title: "Donation",
      subtitle: "HELP • REBUILD",
      icon: <Heart className="w-6 h-6" />,
      href: "/login",
      gradient: "from-red-100 to-red-300",
      textColor: "text-red-700"
    },
    {
      title: "AI Assistant",
      subtitle: "ASSIST • GUIDE",
      icon: <Brain className="w-6 h-6" />,
      href: "/login",
      gradient: "from-green-100 to-green-300",
      textColor: "text-green-700"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <IntroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <DisasterNews />
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {actionCards.map((card, index) => (
              <Link key={index} href={card.href} className="block">
                <div
                  className={`relative overflow-hidden rounded-xl p-4 h-[140px]
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    bg-gradient-to-b ${card.gradient} cursor-pointer`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-3">
                      <span className={`${card.textColor}`}>
                        {card.icon}
                      </span>
                    </div>
                    
                    <h3 className={`text-base font-semibold mb-1 ${card.textColor}`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-xs font-medium ${card.textColor} opacity-75`}>
                      {card.subtitle}
                    </p>
                    
                    <div className="mt-auto flex justify-end">
                      <svg
                        className={`w-4 h-4 ${card.textColor}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}