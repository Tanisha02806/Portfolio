import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import WorkExperience from '../components/portfolio/WorkExperience';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import Footer from '../components/portfolio/Footer';
import FreelanceFlow from "../components/portfolio/assets/FreelanceFlow.jpeg";
import StudyHub from "../components/portfolio/assets/StudyHub.jpeg";
import Taskade from "../components/portfolio/assets/Taskade.png";

const AVATAR_URL = 'https://media.base44.com/images/public/6a0af822f0200687ee4b5a44/0ea58bb1b_generated_44ae5beb.png';

const projects = [
  {
    id: 1,
    title: 'Freelance Collaboration Platform Mini Upwork',
    description: 'A full-stack freelance marketplace platform where clients can post projects, freelancers can apply with proposals, chat in real-time, track milestones, and leave reviews after project completion.',
    image: FreelanceFlow,
    tags: ['React Native', 'Node.js', 'Stripe'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Tanisha02806/Freelance-Collaboration-Platform-Mini-Upwork-',
  },
  {
    id: 2,
    title: 'Smart Student Productivity Dashboard',
    description: 'A modern all-in-one productivity platform designed specifically for college students to manage assignments, attendance, study sessions, notes, deadlines, and focus tracking efficiently. Built with a modern full-stack architecture and production-level frontend practices, this project demonstrates real-world dashboard development, UI/UX thinking, state management, authentication systems, analytics visualization, and scalable application design.',
    image: StudyHub,
    tags: ['React', 'D3.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Tanisha02806/Smart-Student-Productivity-Dashboard',
  },
  {
    id: 3,
    title: 'Taskade – Student Task Planner UI/UX Case Study',
    description: 'Taskade is a student productivity mobile app designed to simplify task management, scheduling, and focus tracking. This UI/UX case study showcases research, wireframes, user flows, and modern mobile interfaces built with a clean blue-and-white aesthetic. Features include task planning, reminders, focus mode, progress analytics, and an intuitive student-friendly experience.',
    image: Taskade,
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    liveUrl: '#',
    githubUrl: 'https://www.behance.net/gallery/249435057/Taskade-Student-Task-Planner-UIUX-Case-Study',
  },
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