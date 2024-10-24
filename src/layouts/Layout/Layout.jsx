import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Layout.css';

function Layout({ tab, setTab, product, cart, setToken }) {
    return (
        <div>
            <Header />
            <Navbar product={product} cart={cart} tab={tab} setTab={setTab} setToken={setToken} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;