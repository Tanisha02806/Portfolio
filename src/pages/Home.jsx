import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import WorkExperience from '../components/portfolio/WorkExperience';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import Footer from '../components/portfolio/Footer';

const AVATAR_URL = 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/0ea58bb1b_generated_44ae5beb.png';

const projects = [
  {
    id: 1,
    title: 'Freelance Collaboration Platform Mini Upwork',
    description: 'A full-stack freelance marketplace platform where clients can post projects, freelancers can apply with proposals, chat in real-time, track milestones, and leave reviews after project completion.',
    image: 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/eddca521d_generated_9ddd4faf.png',
    tags: ['React Native', 'Node.js', 'Stripe'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Tanisha02806/Freelance-Collaboration-Platform-Mini-Upwork-',
  },
  {
    id: 2,
    title: 'Smart Student Productivity Dashboard',
    description: 'A modern all-in-one productivity platform designed specifically for college students to manage assignments, attendance, study sessions, notes, deadlines, and focus tracking efficiently. Built with a modern full-stack architecture and production-level frontend practices, this project demonstrates real-world dashboard development, UI/UX thinking, state management, authentication systems, analytics visualization, and scalable application design.',
    image: 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/0080d2236_generated_3b0878cd.png',
    tags: ['React', 'D3.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Tanisha02806/Smart-Student-Productivity-Dashboard',
  },
  // {
  //   id: 3,
  //   title: 'Social Platform',
  //   description: 'A community-driven social media app with real-time messaging.',
  //   image: 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/1ac0509e8_generated_cd3bbe0c.png',
  //   tags: ['Next.js', 'Socket.io', 'MongoDB'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
  // {
  //   id: 4,
  //   title: 'Fitness Tracker',
  //   description: 'Health and workout tracking app with personalized insights.',
  //   image: 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/ab94c3016_generated_95be66c0.png',
  //   tags: ['Flutter', 'Firebase', 'ML Kit'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
  // {
  //   id: 5,
  //   title: 'Travel Booking',
  //   description: 'Luxury travel planning and booking platform with AI recommendations.',
  //   image: 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/ee54c87e6_generated_04a23a2c.png',
  //   tags: ['Vue.js', 'Python', 'AWS'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Music Streaming',
  //   description: 'Audio streaming service with personalized playlists and discovery.',
  //   image: 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/5f61f5d84_generated_3f586a07.png',
  //   tags: ['React', 'Rust', 'WebAudio'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection avatarUrl={AVATAR_URL} />
      <WorkExperience />
      <ProjectsGrid projects={projects} />
      <Footer />
    </div>
  );
}