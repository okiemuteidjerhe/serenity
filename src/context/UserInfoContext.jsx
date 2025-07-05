import  { createContext, useReducer } from 'react'

export const UserInformationContext = createContext(null)
export const UserDispatchContext = createContext(null)

function userReducer(state, action){
    switch(action.type){
        case 'set_user': {
            return {...state, ...action.user}
        }
        default : 
            break;
    }
}

const intialInfo = {
    first_name: "",
    last_name: "",
    mood: "",
    role: "",
    email: ""
}

export default function UserInfoProvider(props){
    const [info, dispatch] = useReducer(userReducer, intialInfo)

    return(
        <UserInformationContext value={info}>
            <UserDispatchContext value={dispatch}>
                {props.children}
            </UserDispatchContext>
        </UserInformationContext>
    )
}