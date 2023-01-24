import { createContext } from "react";

const initial = () => {
    let user = JSON.parse(localStorage.getItem('user') as string);
    if (!user) { user = {} };
    return user;
};

export const wordleContext = createContext(initial());