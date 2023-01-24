import { createContext } from "react";
JSON.parse(localStorage.getItem('user') as string)
export const userContext = createContext({});