import React, { createContext, useState } from "react"

export const DocumentContext = createContext(null)

export const DocumentProvider= (props)=>{
    const[recipients,setRecipients] =useState([])
    return (
        <DocumentContext.Provider value={{recipients,setRecipients}}>
            {props.children}
        </DocumentContext.Provider>
    )
}