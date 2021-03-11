import React from 'react';
import Header from "../Navbar";

const Layout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
};

export default Layout;