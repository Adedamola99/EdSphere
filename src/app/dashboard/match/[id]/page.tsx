'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBook, faTimesCircle, faInfoCircle, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { teamsData, TeamType } from '../../../../../data';
import Modal from '@/components/Modal';
import { useParams } from 'next/navigation';

const TeamDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const [showModal, setShowModal] = useState(false);
  const [team, setTeam] = useState<TeamType | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundTeam = teamsData.find((t) => t.id === Number(id));
      setTeam(foundTeam);
    }
  }, [id]);

  const handleJoinClick = () => {
    setShowModal(true);
  };

  if (!team) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading team details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">{team.name}</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-800">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-blue-500" />
          Details
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Creator:</strong> {team.creator}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {team.description}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Category:</strong> {team.category}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Goal:</strong> {team.goal}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Aim:</strong> {team.aim}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Objectives:</strong>
          <ul className="list-disc ml-5">
            {team.objectives?.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </p>

        <h3 className="flex items-center font-bold text-lg mb-3">
          <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-green-500" />
          Team Members:
        </h3>
        <ul className="space-y-2">
          {team.memberDetails?.map((member) => (
            <li key={member.username} className="flex items-center text-gray-800">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-gray-500" />
              <a href={member.profileLink} className="text-blue-500 hover:underline">
                {member.name} (@{member.username})
              </a>
            </li>
          ))}
        </ul>

        <h3 className="flex items-center font-bold text-lg mt-6 mb-3">
          <FontAwesomeIcon icon={faBook} className="mr-2 text-purple-500" />
          Programming Stacks/Books:
        </h3>
        <ul className="list-disc ml-5 space-y-1">
          {team.programmingStacks?.map((stack) => (
            <li key={stack} className="text-gray-800">
              <FontAwesomeIcon icon={faBook} className="mr-2 text-gray-500" />
              {stack}
            </li>
          ))}
        </ul>

        <button
          onClick={handleJoinClick}
          className="mt-6 w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-200"
        >
          Join Team
        </button>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-6 text-center">
            <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Join Request Sent!</h2>
            <p className="text-gray-700 mb-4">
              You must be accepted by the creator ({team.creator}) before joining this team.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-600 text-white rounded-lg py-2 px-6 hover:bg-blue-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TeamDetailsPage;
