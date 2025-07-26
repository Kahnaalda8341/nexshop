import { useContext } from "react";
import { Themecontext } from "../contexts/ThemeContext";

// export function useTheme(){
//     const [isDark, setDark] = useContext(Themecontext)
//     return [isDark, setDark]
// }

export const useTheme = ()=> useContext(Themecontext)