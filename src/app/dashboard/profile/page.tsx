'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';

const UserProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Damia',
    location: 'Nigeria',
    email: 'damia@example.com',
    education: 'Bachelor of Science in Computer Science',
    university: 'Example University',
    graduationYear: '2023',
    profilePicture: '/profile-pic.jpg',
  });

  const linkStyle = {
    borderBottom: '3px solid #2D97B9',
  }

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="bg-white px-4 pt-4">
        <div className="flex align-middle justify-between">
          <h1 className='font-aeonik text-xl text-purple-900'>Welcome Back Damia!</h1>

          <div className="flex items-center gap-4">
            <h4 className="font-aeonik text-center text-sm text-gray-700">7:00am</h4>

            <div className="flex align-middle gap-2">
              <img src={profileData.profilePicture} alt="profile-img" className='relative w-12 h-12 rounded-full overflow-hidden'/>

              <div>
                <h6 className="text-sm text-slate-800">John Doe</h6>
                <h6 className="text-sm text-slate-800">johndoe123@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>

        <aside className="flex gap-3">
          <Link
            className="text-purple-900 text-lg"
            href="message"
            // style={ location.pathname === "/dashboard/talent/message" ? linkStyle : {} }
            >
              Course
          </Link>

          <Link
            className="text-purple-900 text-lg"
            href="interview"
            // style={ location.pathname === "/dashboard/talent/interview" ? linkStyle : {} }
            >
              
          </Link>

          <Link
            className="text-purple-900 text-lg"
            href="interview"
            // style={ location.pathname === "/dashboard/talent/interview" ? linkStyle : {} }
            >
              Leaderboard
          </Link>
        </aside>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 p-2">
        <div className="relative w-32 h-32 md:w-48 md:h-48 md:mr-4 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={profileData.profilePicture}
            alt="Profile Picture"
          />
          <label
            htmlFor="profilePicture"
            className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureUpload}
            />
          </label>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg flex-1">
          <div>
            <h2 className="text-xl font-bold mb-2">Personal Information</h2>
            <p>Name: {profileData.name}</p>
            <p>Location: {profileData.location}</p>
            <p>Email: {profileData.email}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <p>Degree: {profileData.education}</p>
            <p>University: {profileData.university}</p>
            <p>Year of Graduation: {profileData.graduationYear}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleEditProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
