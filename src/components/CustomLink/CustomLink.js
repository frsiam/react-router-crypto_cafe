import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
    let resolved = useResolvedPath(to); 
    //useResolved ekta object return kore jekhane {pathname: to, search: '', hash: ''}
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link style={{ color: match ? "blueviolet" : "black" }} to={to} {...props}>
            {children}
        </Link>
    );
};

export default CustomLink;