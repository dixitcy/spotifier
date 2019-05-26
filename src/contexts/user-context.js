import React from 'react'


const userContext = React.createContext({
    user : {},
    isAuthenticated : false,
    setUser : (user) => {
        this.user = user;
    },
    setAuth : (auth) => {
        this.auth = auth;
    }
});

const UserConsumer = userContext.Consumer;
const UserProvider = userContext.Provider;

export {UserProvider , UserConsumer} ;

