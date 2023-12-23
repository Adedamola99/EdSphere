import Link from "next/link";

const DashBoardLayout = ({ children }) => {
    return ( 
        <div>
            <h1>DashBoard</h1>
                <div className="dashboard-container">
                    <aside className="sidebar">
                        <Link href="/dashboard/account" className="dashboard-link">Account</Link>
                        <Link href="/dashboard/analytics" className="dashboard-link">Analytics</Link>
                        <Link href="/dashboard/settings" className="dashboard-link">Settings</Link>
                    </aside>

                    <div className="info-container">
                        {children}
                    </div>
            </div>
        </div>
     );
}
 
export default DashBoardLayout;