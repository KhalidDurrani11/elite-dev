
import React from 'react';

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}