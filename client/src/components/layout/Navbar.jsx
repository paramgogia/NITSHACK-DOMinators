"use client"

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe, User } from 'lucide-react';

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
];

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const { user, logout } = useAuth();
  const searchParams = useSearchParams();
  const isLoggedIn = searchParams.get('isLogin') === 'true';

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log(`Language changed to: ${language.label}`);
  };

  const handleLogout = () => {
    logout();
    // You might want to redirect to home page after logout
    window.location.href = '/?isLogin=false';
  };

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            RiskRadar
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              Alerts
            </Link>
            <Link href="/map" className="hover:text-primary transition-colors">
              Map
            </Link>
            <Link href="/ai-prediction" className="hover:text-primary transition-colors">
              Forecast
            </Link>
            <Link href="/donation" className="hover:text-primary transition-colors">
              Donation
            </Link>
            <Link href="/help" className="hover:text-primary transition-colors">
              Help
            </Link>
            <Link href="/notifications" className="hover:text-primary transition-colors">
              Notifications
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  {selectedLanguage.label}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languageOptions.map((language) => (
                  <DropdownMenuItem 
                    key={language.code} 
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
                <Suspense>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link 
                  href={{
                    pathname: '/login',
                    query: { isLogin: false }
                  }}
                >
                  Login
                </Link>
              </Button>
            )}
            </Suspense>
            
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}