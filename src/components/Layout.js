import  { Outlet } from 'react-router';

const Layout = () => {
    return (
        <>
            <header />
            <main>
                <Outlet />
            </main>
            <footer />
        </>
    );
};

export default Layout;