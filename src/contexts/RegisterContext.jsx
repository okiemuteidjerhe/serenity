import {createContext, useState} from 'react'

export const RegisterContext = createContext();

export function RegisterProvider(props){
    const [registerData, setRegisterData] = useState({})

    return (
        <RegisterContext.Provider value = {{registerData, setRegisterData}}>
            {props.children}
        </RegisterContext.Provider>
    )
}