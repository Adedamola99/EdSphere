'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
    const isActive = usePathname();

    return ( 
        <header className="side-bar">
            <Link className="site-logo" href="/">EduSphere</Link>

            <label htmlFor="search">
                <input type="search" name="search" id="search" placeholder="search"/>
            </label>

            <hr className="line"/>

            <nav>
                <Link href="/" className={`site-link ${isActive === '/' ? 'active' : ''}`}>Home</Link>
                <Link href="/dashboard" className={`site-link ${isActive ==="/dashboard" ? 'active' : ''}`}>DashBoard</Link>
                <Link href="#" className={`site-link ${isActive === '/overview' ? 'active' : ''}`}>Notification</Link>
                <Link href="#" className={`site-link ${isActive === '/leaderboard' ? 'active' : ''}`}>Staff</Link>
                <Link href="/sign" className={`site-link ${isActive === '/signup' ? 'active' : ''}`}>Signup / Login</Link>
            </nav>


            <hr className="line"/>

            <div className="primary-nav">
                <Link href="#" className={`site-link ${isActive === '/starred' ? 'active' : ''}`}>Starred</Link>

                <div className="inner-nav">
                    <Link href="#" className={`site-link ${isActive === '/user' ? 'active' : ''}`}>User</Link>
                    <Link href="#" className={`site-link ${isActive === '/settings' ? 'active' : ''}`}>Settings</Link>
                </div>
            </div>
        </header>
    );
}
 
export default SideBar;