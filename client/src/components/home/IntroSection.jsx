import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Disaster Alert System</h1>
      <p className="mb-6">Stay informed and prepared with real-time disaster alerts and information.</p>
      <Button asChild>
        <Link href="/login">Get Started</Link>
      </Button>
    </section>
  );
}