import { CallAPIProps, getApiUrl } from "../../hooks/useAPI"
import { userSlice } from "./userSlice"

export const LoginUser: CallAPIProps = {
    url: getApiUrl('member/login'),
    method: "POST",
    displayNotification:true,
    successDispatch: userSlice.actions.login
}

export const RegisterUser: CallAPIProps = {
    url: getApiUrl('member/register'),
    method: "POST",
    displayNotification:true
}