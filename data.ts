import Team from './public/images/team.jpg';

export interface TeamType {
  id: number;
  name: string;
  members: number;
  availableSlots: number;
  category: string;
  goal: string;
  status: string;
  img: StaticImageData;
  creator?: string;
  description?: string;
  aim?: string;
  objectives?: string[];
  memberDetails?: { name: string; username: string; profileLink: string }[];
  skillLevel?: string;
  programmingStacks?: string[];
}

export const teamsData: TeamType[] = [
  {
    id: 1,
    name: 'Web Development Wizards',
    members: 4,
    availableSlots: 1,
    category: 'Web Development',
    goal: 'Build a portfolio website.',
    status: 'Open',
    img: Team,
    creator: 'John Doe',
    description: 'We are a team of web development enthusiasts building interactive and responsive web applications.',
    aim: 'Enhance our web development skills while building a professional portfolio.',
    objectives: [
      'Collaborate on web projects',
      'Explore the latest web technologies',
      'Build a fully functional portfolio website'
    ],
    memberDetails: [
      { name: 'Jane Doe', username: 'janed', profileLink: '/profile/janed' },
      { name: 'Mark Smith', username: 'marks', profileLink: '/profile/marks' },
    ],
    skillLevel: 'Intermediate',
    programmingStacks: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'Data Science Ninjas',
    members: 3,
    availableSlots: 2,
    category: 'Data Science',
    goal: 'Analyze and visualize data.',
    status: 'Open',
    img: Team,
    creator: 'Alice Johnson',
    description: 'A team dedicated to mastering data science skills through real-world projects and data analysis.',
    aim: 'Work on real datasets to improve data manipulation and visualization skills.',
    objectives: [
      'Analyze datasets using Python',
      'Create visualizations to showcase insights',
      'Work together to solve data-related problems'
    ],
    memberDetails: [
      { name: 'Bob Brown', username: 'bobb', profileLink: '/profile/bobb' },
      { name: 'Charlie Clark', username: 'charliec', profileLink: '/profile/charliec' },
    ],
    skillLevel: 'Beginner',
    programmingStacks: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    id: 3,
    name: 'AI Innovators',
    members: 5,
    availableSlots: 0,
    category: 'Artificial Intelligence',
    goal: 'Develop an AI model.',
    status: 'Closed',
    img: Team,
    creator: 'Sarah Connor',
    description: 'A team working on cutting-edge AI technologies to build intelligent solutions.',
    aim: 'Build, train, and deploy machine learning models to solve real-world challenges.',
    objectives: [
      'Understand the fundamentals of AI and ML',
      'Develop machine learning models',
      'Deploy AI solutions in real-world applications'
    ],
    memberDetails: [
      { name: 'Linda Lee', username: 'lindal', profileLink: '/profile/lindal' },
    ],
    skillLevel: 'Advanced',
    programmingStacks: ['TensorFlow', 'Keras', 'Python'],
  },
  {
    id: 4,
    name: 'Mobile App Creators',
    members: 2,
    availableSlots: 3,
    category: 'Mobile Development',
    goal: 'Create a mobile app.',
    status: 'Open',
    img: Team,
    creator: 'Michael Jordan',
    description: 'An enthusiastic team focused on building mobile applications for Android and iOS platforms.',
    aim: 'Develop a user-friendly mobile application with modern design and smooth functionality.',
    objectives: [
      'Learn mobile app development best practices',
      'Build and test mobile apps using React Native',
      'Deploy apps on app stores'
    ],
    memberDetails: [
      { name: 'Scottie Pippen', username: 'scottiep', profileLink: '/profile/scottiep' },
      { name: 'Dennis Rodman', username: 'dennisr', profileLink: '/profile/dennisr' },
    ],
    skillLevel: 'Intermediate',
    programmingStacks: ['React Native', 'Expo', 'JavaScript'],
  },
];
