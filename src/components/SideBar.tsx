'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faBell, faFileAlt, faStar, faCog, faSignOutAlt, faHandshake, faRss, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = () => {
    const isActive = usePathname();

    return ( 
        <header className="bg-white text-gray-900 flex flex-col gap-4 w-64 min-w-min sticky top-0 h-screen shadow-lg">
            <Link href="/" className="site-logo font-bold text-2xl mt-10 mb-4 px-4 text-blue-600">Team</Link>
            
            <label htmlFor="search" className="px-4">
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="Search" 
                    className="bg-blue-100 text-gray-900 w-full p-2 rounded outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </label>

            <hr className="line border-t-2 border-gray-300" />

            <nav className="flex flex-col gap-2">
                <Link href="/dashboard" className={`site-link py-2 px-4 ${isActive === '/dashboard' ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faRss} /> Feeds
                </Link>

                <Link href="/dashboard/profile" className={`site-link py-2 px-4 ${isActive === '/dashboard/profile' ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faUser} /> Profile
                </Link>

                <Link href="/dashboard/match" className={`site-link py-2 px-4 ${isActive === "/dashboard/match" ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faHandshake} /> Match
                </Link>

                <Link href="/dashboard/staff" className={`site-link py-2 px-4 ${isActive === '/dashboard/staff' ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faUsers} /> Team
                </Link>

                <Link href="/dashboard/notification" className={`site-link py-2 px-4 ${isActive === '/dashboard/notification' ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faBell} /> Notification
                </Link>
            </nav>

            <hr className="line border-t-2 border-gray-300" />

            <div className="flex flex-col align-middle">
                <Link href="/dashboard/settings" className={`site-link py-2 px-4 ${isActive === '/dashboard/settings' ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faCog} /> Settings
                </Link>
                <Link href="/dashboard/signup" className={`site-link py-2 px-4 ${isActive === '/dashboard/signup' ? 'text-blue-600' : 'text-gray-900 hover:bg-blue-100'}`}>
                    <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} /> Log out
                </Link>
            </div>
        </header>
    );
}
 
export default SideBar;
