import AdminPanel from '@/components/admin/AdminPanel';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
        <>
            <div className="min-h-screen flex flex-row cabin-font">
                <AdminPanel />
                <div className="flex-grow">
                    <Outlet />
                </div>
            </div>
        </>
  )};

export default AdminPage;
