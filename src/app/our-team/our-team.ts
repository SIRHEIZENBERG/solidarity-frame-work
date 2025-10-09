// our-team.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  department?: string;
  image: string;
  bio: string;
  email: string;
  specialties?: string[];
}

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.html',
  styleUrl: './our-team.css',
})
export class OurTeam {
  headTeacher: TeamMember = {
    name: 'Dr. Margaret Anderson',
    role: 'Head Teacher',
    image: 'https://i.pravatar.cc/300?img=10',
    bio: 'With over 20 years of experience in education leadership, Dr. Anderson brings a wealth of knowledge and a passion for fostering academic excellence. Her vision for our school emphasizes holistic development, innovative teaching methods, and creating a nurturing environment where every student can thrive.',
    email: 'm.anderson@school.edu',
    specialties: ['Educational Leadership', 'Curriculum Development', 'Student Welfare'],
  };

  teachers: TeamMember[] = [
    {
      name: 'Mr. James Patterson',
      role: 'Mathematics Teacher',
      department: 'STEM Department',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Passionate about making mathematics accessible and engaging for all students. Specializes in creating interactive learning experiences that build confidence and problem-solving skills.',
      email: 'j.patterson@school.edu',
      specialties: ['Algebra', 'Calculus', 'Problem Solving'],
    },
    {
      name: 'Ms. Sarah Williams',
      role: 'English Literature Teacher',
      department: 'Humanities Department',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Dedicated to inspiring a love of reading and creative writing. Creates dynamic classroom environments that encourage critical thinking and self-expression through literature.',
      email: 's.williams@school.edu',
      specialties: ['Creative Writing', 'Classic Literature', 'Poetry'],
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Science Teacher',
      department: 'STEM Department',
      image: 'https://i.pravatar.cc/300?img=13',
      bio: 'Brings real-world science to life through hands-on experiments and innovative teaching methods. Committed to developing the next generation of scientists and critical thinkers.',
      email: 'm.chen@school.edu',
      specialties: ['Biology', 'Chemistry', 'Lab Research'],
    },
    {
      name: 'Mrs. Emily Rodriguez',
      role: 'History Teacher',
      department: 'Humanities Department',
      image: 'https://i.pravatar.cc/300?img=9',
      bio: 'Passionate about connecting past events to present-day issues. Uses storytelling and interactive projects to make history relevant and engaging for modern students.',
      email: 'e.rodriguez@school.edu',
      specialties: ['World History', 'Social Studies', 'Cultural Studies'],
    },
    {
      name: 'Mr. David Thompson',
      role: 'Physical Education Teacher',
      department: 'Sports & Wellness',
      image: 'https://i.pravatar.cc/300?img=14',
      bio: 'Committed to promoting healthy lifestyles and teamwork through sports. Believes in the power of physical activity to build character, confidence, and resilience.',
      email: 'd.thompson@school.edu',
      specialties: ['Team Sports', 'Fitness', 'Athletic Development'],
    },
    {
      name: 'Ms. Lisa Patel',
      role: 'Art & Design Teacher',
      department: 'Creative Arts',
      image: 'https://i.pravatar.cc/300?img=20',
      bio: 'Inspires creativity and self-expression through various artistic mediums. Believes every student has unique creative potential waiting to be discovered and nurtured.',
      email: 'l.patel@school.edu',
      specialties: ['Visual Arts', 'Digital Design', 'Creative Expression'],
    },
  ];
}
