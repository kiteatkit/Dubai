"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <main className="pt-20 min-h-screen bg-[#050506]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Login Form */}
          <div className="bg-[#0A0A0B] rounded-xl p-8 shadow-lg border border-[#A58A5E]/20">
            <h1 className="text-3xl font-bold mb-8 text-[#A58A5E]">Welcome Back</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-[#EBEBED] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#050506] border border-[#A58A5E]/40 text-[#EBEBED] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A58A5E] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[#EBEBED] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#050506] border border-[#A58A5E]/40 text-[#EBEBED] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A58A5E] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-[#A58A5E] focus:ring-[#A58A5E] border-[#A58A5E]/40 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-[#EBEBED]">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-[#A58A5E] hover:text-[#8B6F4A] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#A58A5E] text-[#EBEBED] px-6 py-3 rounded-lg hover:bg-[#8B6F4A] transition-colors font-semibold"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Right side - Image and Text */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/dubai-marina.jpg"
                alt="Dubai Marina"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-[#EBEBED]">
                  <h2 className="text-4xl font-bold mb-4">Rush Hour Real Estate</h2>
                  <p className="text-xl">
                    Your trusted partner in real estate investments and property management in Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 