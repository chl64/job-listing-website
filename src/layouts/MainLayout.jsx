import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
// Notify the user that a record has indeed been created or deleted.
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default MainLayout