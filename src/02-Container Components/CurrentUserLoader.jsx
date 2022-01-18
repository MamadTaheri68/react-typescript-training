import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://localhost:3333/current-user' );
            setUser(response.data);
        })();
    }, []);
    
    return (
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }

                return child;
            })}
        </>
    )
};

export default CurrentUserLoader;