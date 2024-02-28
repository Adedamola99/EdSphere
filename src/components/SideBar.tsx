'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faBell, faFileAlt, faTachometerAlt, faStar, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
    const isActive = usePathname();

    return ( 
        <header className="bg-gray-900 text-white flex flex-col gap-4 w-64 min-w-min sticky top-0 h-screen">
            <Link href="/" className="site-logo font-bold text-xl mt-10 mb-4 px-4">EduSphere</Link>
            
            <label htmlFor="search" className="px-4">
                <input type="search" name="search" id="search" placeholder="Search" className="bg-purple-900 text-white w-full p-2 rounded outline-none" />
            </label>

            <hr className="line border-t-2 border-gray-700" />

            <nav className="flex flex-col gap-2">
                <Link href="/dashboard" className={`site-link py-2 px-4 ${isActive === '/dashboard' ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faTachometerAlt} />Dashboard
                </Link>

                <Link href="/dashboard/profile" className={`site-link py-2 px-4 ${isActive ==="/dashboard/profile" ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faUser} />Profile
                </Link>

                <Link href="/dashboard/notification" className={`site-link py-2 px-4 ${isActive === '/dashboard/notification' ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faBell} />Notification
                </Link>

                <Link href="/dashboard/report" className={`site-link py-2 px-4 ${isActive ==="/dashboard/report" ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faFileAlt} />Report
                </Link>

                <Link href="/dashboard/staff" className={`site-link py-2 px-4 ${isActive === '/dashboard/staff' ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faUsers} />Staff
                </Link>

                <Link href="/dashboard/starred" className={`site-link py-2 px-4 ${isActive === '/dashboard/starred' ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faStar} />Starred
                </Link>
            </nav>

            <hr className="line border-t-2 border-gray-700" />

            <div className="flex flex-col align-middle">
                <Link href="/dashboard/settings" className={`site-link py-2 px-4 ${isActive === '/dashboard/settings' ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faCog} /> Settings
                </Link>
                <Link href="/dashboard/signup" className={`site-link py-2 px-4 ${isActive === '/dashboard/signup' ? 'active' : ''}`}>
                    <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} /> Log out
                </Link>
            </div>
        </header>
    );
}
 
export default SideBar; 
