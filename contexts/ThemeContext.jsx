import { Children, createContext } from "react";
import { useState } from "react";

export const Themecontext = createContext()


export function ThemeProvider ({children}){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    
    // return <Themecontext.Provider></Themecontext.Provider>
    // return <div>{children}</div>

    return <Themecontext.Provider value={[isDark, setIsDark]}>{children}</Themecontext.Provider>
}