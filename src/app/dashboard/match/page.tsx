'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faUsers } from '@fortawesome/free-solid-svg-icons';
import Team from '../../../../public/images/team.jpg';
import { useRouter } from 'next/navigation';
import { teamsData, TeamType } from '../../../../data';

const MatchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilters, setCategoryFilters] = useState<{ [key: string]: boolean }>({
    'Web Development': false,
    'Data Science': false,
    'Artificial Intelligence': false,
    'Mobile Development': false,
    'Education': false,
  });
  const [availableSlots, setAvailableSlots] = useState<string>('');
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const teams: TeamType[] = teamsData; 

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (Object.keys(categoryFilters).some(cat => categoryFilters[cat]) ? categoryFilters[team.category] : true) &&
    (availableSlots === '' ? true : team.availableSlots < 5 ? availableSlots === '< 5' : availableSlots === '> 5')
  );

  const toggleCategoryFilter = (category: string) => {
    setCategoryFilters(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const router = useRouter();

  const handleJoin = (teamId: number) => {
    router.push(`match/${teamId}`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Your Team or Learning Partner</h1>

      <div className="flex justify-between mb-6">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search for teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          </div>
        </div>

        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FontAwesomeIcon icon={faFilter} className="mr-1" /> Filters
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowSidebar(false)} />

      {/* Sidebar for Filters */}
      <div className={`fixed right-0 top-0 h-full bg-white w-80 shadow-lg transition-transform transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-xl font-semibold">Filters</h2>
          <h3 className="font-semibold mt-4">Categories</h3>
          {Object.keys(categoryFilters).map(category => (
            <label key={category} className="flex items-center mt-2">
              <input 
                type="checkbox"
                checked={categoryFilters[category]}
                onChange={() => toggleCategoryFilter(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
          <h3 className="font-semibold mt-4">Available Slots</h3>
          <label className="flex items-center mt-2">
            <input 
              type="checkbox"
              checked={availableSlots === '< 5'}
              onChange={() => setAvailableSlots(availableSlots === '< 5' ? '' : '< 5')}
              className="mr-2"
            />
            <span>&lt; 5</span>
          </label>
          <label className="flex items-center mt-2">
            <input 
              type="checkbox"
              checked={availableSlots === '> 5'}
              onChange={() => setAvailableSlots(availableSlots === '> 5' ? '' : '> 5')}
              className="mr-2"
            />
            <span>&gt; 5</span>
          </label>
        </div>
      </div>

      {/* Teams Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map(team => (
          <div key={team.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={team.img} alt={team.name} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{team.name}</h2>
              <p className="text-gray-600">Members: {team.members}</p>
              <p className="text-gray-600">Available Slots: {team.availableSlots}</p>
              <p className="text-gray-600">Category: {team.category}</p>
              <p className="mt-2">Goal: {team.goal}</p>
              <p className={`mt-2 font-bold ${team.status === 'Open' ? 'text-green-500' : 'text-red-500'}`}>Status: {team.status}</p>
              <button className="mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600" onClick={() => handleJoin(team.id)}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchPage;
