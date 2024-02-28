// pages/dashboard/index.js
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPhone, faEnvelope, faUser, faStar, faUserShield, faBook, faGraduationCap, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const userInfo = {
    name: 'John Doe',
    timezone: 'GMT+1',
    phone: '+1234567890',
    email: 'john.doe@example.com',
    rank: 'Gold',
    subscriptionPlan: 'Premium',
  };

  const achievementIcons = [
    { id: 1, icon: faMedal, color: 'green' },
    { id: 2, icon: faMedal, color: 'blue' },
    { id: 3, icon: faMedal, color: 'yellow' },
  ];
  

  // Mock data for learning progress
  const [learningProgress, setLearningProgress] = useState([
    { name: 'Week 1', progress: 10 },
    { name: 'Week 2', progress: 45 },
    { name: 'Week 3', progress: 21 },
    { name: 'Week 4', progress: 80 },
    { name: 'Week 6', progress: 23 },
    { name: 'Week 7', progress: 13 },
    { name: 'Week 8', progress: 83 },
    { name: 'Week 9', progress: 31 },
  ]);

  // Mock data for registered courses
  const [registeredCourses, setRegisteredCourses] = useState([
    { id: 1, title: 'Introduction to Web Development', level: 'Beginner', progress: 50 },
    { id: 2, title: 'Data Science Fundamentals', level: 'Intermediate', progress: 90 },
    { id: 3, title: 'Machine Learning Basics', level: 'Advanced', progress: 30 },
  ]);

  // Mock data for achievements
  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Completed Introduction to Web Development' },
    { id: 2, title: 'Achieved Data Science Fundamentals Certificate' },
    { id: 3, title: 'Completed Machine Learning Basics' },
  ]);

  // Mock data for teammates
  const [teammates, setTeammates] = useState([
    { id: 1, name: 'Alice Smith', role: 'Developer', img: '/images/Capture 2.PNG' },
    { id: 2, name: 'Bob Johnson', role: 'Designer', img: '/images/Capture 4.PNG' },
    { id: 3, name: 'Charlie Brown', role: 'Project Manager', img: '/images/Capture 5.PNG' },
    { id: 4, name: 'Diana Clark', role: 'Engineer', img: '/images/Capture 6.PNG' },
    { id: 5, name: 'Ella Garcia', role: 'Data Analyst', img: '/images/Capture 7.PNG' },
    { id: 6, name: 'Franklin Lee', role: 'Marketing Manager', img: '/images/Capture 8.PNG' },
    // Add more teammates as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const teammatesPerPage = 2;

  const indexOfLastTeammate = currentPage * teammatesPerPage;
  const indexOfFirstTeammate = indexOfLastTeammate - teammatesPerPage;
  const currentTeammates = teammates.slice(indexOfFirstTeammate, indexOfLastTeammate);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Fetch additional data or perform any side effects here
  }, []);

  return (
<div className="container mx-auto px-4 py-1">
  <Head>
    <title>Dashboard</title>
  </Head>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-2 gap-2">
        {/* Profile Box */}
        <div className="bg-white py-2 px-8 rounded-lg shadow-lg flex flex-col items-start space-y-4 flex-grow">
          {/* Name and Timezone */}
          <div className='flex gap-4 align-middle'>
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image src="/images/Capture 1.PNG" alt="Profile Image" layout="fill" className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-600">Timezone: {userInfo.timezone}</p>
            </div>
          </div>
          {/* Additional Information */}
          <div className="flex flex-col space-y-2">
            {/* Phone */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
              <span className='ml-2 mr-2'>Phone:</span><span className="ml-2">{userInfo.phone}</span>
            </div>
            {/* Email */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
              <span className='ml-2 mr-2'>Email:</span><span className="ml-2">{userInfo.email}</span>
            </div>
            {/* Rank */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <span className='ml-2 mr-2'>Rank:</span><span className="ml-2">{userInfo.rank}</span>
            </div>
            {/* Subscription Plan */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUserShield} className="text-green-500" />
              <span className='ml-2 mr-2'>Plan:</span><span className="ml-2">{userInfo.subscriptionPlan}</span>
            </div>
          </div>
        </div>
        {/* End of Profile Box */}
        <div className="bg-white py-2 px-8 rounded-lg shadow-lg flex-grow">
          <h3 className="text-lg font-semibold">Favourite Mate</h3>
          <ul className="grid grid-cols-1 gap-2">
            {currentTeammates.map(teammate => (
              <li key={teammate.id} className="flex items-center space-x-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={teammate.img} alt="group-image" layout="fill" className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{teammate.name}</p>
                  <p className="text-sm text-gray-500">{teammate.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastTeammate >= teammates.length}
              className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={learningProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="progress" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Registered Courses</h3>
        <ul className="divide-y divide-gray-200">
          {registeredCourses.map(course => (
            <li key={course.id} className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  <span>{course.title}</span>
                </div>
                {course.level === 'Beginner' && <FontAwesomeIcon icon={faBook} className="text-blue-500 ml-2" />}
                {course.level === 'Intermediate' && <FontAwesomeIcon icon={faGraduationCap} className="text-yellow-500 ml-2" />}
                {course.level === 'Advanced' && <FontAwesomeIcon icon={faCertificate} className="text-red-500 ml-2" />}
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-md mt-2">
                <div className="h-full rounded-md" style={{ width: `${course.progress}%`, backgroundColor: course.progress >= 90 ? '#10B981' : course.progress >= 50 ? '#FBBF24' : '#EF4444' }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Achievements</h3>
        <ul className="divide-y divide-gray-200">
        {achievements.map((achievement, index) => (
          <li key={achievement.id} className="py-2 flex justify-between items-center">
            <span>{achievement.title}</span>
            {index < achievementIcons.length && (
              <FontAwesomeIcon icon={achievementIcons[index].icon} className={`text-${achievementIcons[index].color}-500`} />
            )}
          </li>
        ))}
        </ul>
      </div>
    </div>
  </div>
</div>
);
}

export default Dashboard;
