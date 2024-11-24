import React from 'react';
import { LoginForm } from './LoginForm';

export function Login() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    // Implement actual authentication logic here
  };

  return (
    <section className="min-h-screen py-24 px-4 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100">
      <LoginForm onLogin={handleLogin} />
    </section>
  );
}