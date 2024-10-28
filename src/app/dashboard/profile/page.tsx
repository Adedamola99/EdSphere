'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMapMarkerAlt, faMedal  } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
  const userInfo = {
    name: 'John Doe',
    timezone: 'GMT+1',
    phone: '+1234567890',
    email: 'john.doe@example.com',
    rank: 'Gold',
    subscriptionPlan: 'Premium',
    location: 'New York, USA',
    about: 'I am a frontend developer who loves collaborating with teams and mentoring new developers.',
    interests: 'Web Development, Machine Learning, Music'
  };

  const badges = [
    { id: 1, icon: faMedal, color: 'green', title: 'Team Leader' },
    { id: 2, icon: faMedal, color: 'blue', title: 'Mentor of the Month' },
    { id: 3, icon: faMedal, color: 'yellow', title: 'Top Performer' },
  ];

  const [teammates, setTeammates] = useState([
    { id: 1, name: 'Alice Smith', role: 'Developer', img: '/images/Capture 2.PNG' },
    { id: 2, name: 'Bob Johnson', role: 'Designer', img: '/images/Capture 4.PNG' },
    { id: 3, name: 'Charlie Brown', role: 'Project Manager', img: '/images/Capture 5.PNG' },
    { id: 4, name: 'Diana Clark', role: 'Engineer', img: '/images/Capture 6.PNG' },
    { id: 5, name: 'Ella Garcia', role: 'Data Analyst', img: '/images/Capture 7.PNG' },
    { id: 6, name: 'Franklin Lee', role: 'Marketing Manager', img: '/images/Capture 8.PNG' },
  ]);


  const [currentPage, setCurrentPage] = useState(1);
  const teammatesPerPage = 2;
  const indexOfLastTeammate = currentPage * teammatesPerPage;
  const indexOfFirstTeammate = indexOfLastTeammate - teammatesPerPage;
  const currentTeammates = teammates.slice(indexOfFirstTeammate, indexOfLastTeammate);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Perform any side effects here
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <Head>
        <title>Profile</title>
      </Head>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Create Team
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/images/Capture 1.PNG" alt="Profile Image" layout="fill" className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-500" />
                {userInfo.location}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-lg">About</h3>
            <p className="text-gray-700">{userInfo.about}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Interests</h3>
            <p className="text-gray-700">{userInfo.interests}</p>
          </div>
        </div>


        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Favourite Mates</h3>
          <ul className="grid grid-cols-1 gap-4">
            {currentTeammates.map(teammate => (
              <li key={teammate.id} className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={teammate.img} alt={teammate.name} layout="fill" className="object-cover" />
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

        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <ul className="grid grid-cols-1 gap-4">
            {badges.map(badge => (
              <li key={badge.id} className="flex items-center">
                <FontAwesomeIcon icon={badge.icon} className={`text-${badge.color}-500 text-xl`} />
                <p className="ml-3 text-gray-700">{badge.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Current Team Info</h3>
          <p className="text-gray-600">You are part of The Dev Masters team, working on a frontend project. As a mentor, you are guiding two junior developers in mastering React.js and CSS frameworks.</p>
          <ul className="list-disc list-inside mt-4">
            <li>Project Name: DevHub</li>
            <li>Mentor: John Doe</li>
            <li>Team Members: 5</li>
            <li>Next Milestone: Complete landing page design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
