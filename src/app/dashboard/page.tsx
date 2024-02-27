import React from "react";
import Link from "next/link";

interface User {
  username: string;
  completedCourses: string[];
  recommendedCourses: string[];
  progress: number;
}

const DashboardPage: React.FC = () => {
  const user: User = {
    username: "damia",
    completedCourses: ["Course 1", "Course 2", "Course 3"],
    recommendedCourses: ["Recommended Course 1", "Recommended Course 2", "Recommended Course 3"],
    progress: 75,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {user.username}!</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Learning Progress</h2>
        <p className="text-gray-600">You've completed {user.progress}% of your learning journey.</p>
        <div className="bg-gray-200 h-6 w-full mt-2 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full" style={{ width: `${user.progress}%` }}></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Completed Courses</h2>
        {user.completedCourses.length > 0 ? (
          <ul>
            {user.completedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You haven't completed any courses yet.</p>
        )}
      </div>

      {/* Recommended Courses */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recommended Courses</h2>
        {user.recommendedCourses.length > 0 ? (
          <ul>
            {user.recommendedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recommended courses at the moment. Check back later!</p>
        )}
      </div>

      {/* Optional: Add links to navigate to other sections of the app */}
      <div className="mt-8">
        <Link href="/courses" className="text-blue-500 hover:underline">
          Browse All Courses
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
