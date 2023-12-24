import Link from "next/link";

const DashBoardLayout = ({ children }) => {
    return ( 
        <div>
            <h1>DashBoard</h1>
                <div className="dashboard-container">
                    <aside className="sidebar">
                        <Link href="/dashboard/profile" className="dashboard-link">Profile</Link>
                        <Link href="/dashboard/grade" className="dashboard-link">Grade</Link>
                        <Link href="/dashboard/transaction" className="dashboard-link">Transaction</Link>
                    </aside>

                    <div className="info-container">
                        {children}
                    </div>
            </div>
        </div>
     );
}
 
export default DashBoardLayout;