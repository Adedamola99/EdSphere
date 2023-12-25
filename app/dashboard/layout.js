'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DashBoardLayout = ({ children }) => {
    const isActive = usePathname();

    return ( 
        <div>
            <h1>DashBoard</h1>
                <div className="dashboard-container">
                    <aside className= "dashboard_container_link">
                        <Link href="/dashboard/profile" className={`dashboard-link ${isActive === '/dashboard/profile' ? 'dashboard_active' : ''}`} >Profile</Link>
                        <Link href="/dashboard/grade" className={`dashboard-link ${isActive === '/dashboard/grade' ? 'dashboard_active' : ''}`} >Grade</Link>
                        <Link href="/dashboard/transaction" className={`dashboard-link ${isActive === '/dashboard/transaction' ? 'dashboard_active' : ''}`} >Transaction</Link>
                    </aside>

                    <div className="info_container">
                        {children}
                    </div>
            </div>
        </div>
     );
}
 
export default DashBoardLayout;