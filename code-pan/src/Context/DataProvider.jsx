import { createContext, useState } from "react";
export const DataContext = createContext()
export const DataProvider = ({children})=>{
    const [html , sethtml]  =useState('');
    const [css , setcss]  =useState('');

    const [js , setjs]  = useState('');

    return( <DataContext.Provider value={{
            html,sethtml,css,setcss,js,setjs
        }}>{children}


        </DataContext.Provider>
    )
        
       
    
}

