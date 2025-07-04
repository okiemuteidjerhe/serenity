import  { createContext, useReducer } from 'react'

export const UserInformationContext = createContext(null)
export const UserDispatchContext = createContext(null)

function userReducer(state, action){
    switch(action.type){
        case 'set_user': {
            return {...state, userInfo: action.user}
        }
        default : 
            break;
    }
}

export default function UserInfoProvider(props){
    const [info, dispatch] = useReducer(userReducer, null)

    return(
        <UserInformationContext value={info}>
            <UserDispatchContext value={dispatch}>
                {props.children}
            </UserDispatchContext>
        </UserInformationContext>
    )
}