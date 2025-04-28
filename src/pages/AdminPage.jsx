import AdminPanel from '@/components/admin/AdminPanel';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <>
    <div className="min-h-screen flex flex-row cabin-font">
        <div className="fixed top-0 left-0">
        <AdminPanel />
        </div>
        <div className="ml-64 flex-grow">
        <Outlet />
        </div>
    </div>
    </>

  )};

export default AdminPage;
