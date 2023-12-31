import { createSlice } from "@reduxjs/toolkit";


export const loginAuthentication = createSlice({
    name: 'LoginAuth',
    initialState: {
        email: "",
        password: '',
        userId: '',
        userName: "",
        userProfile: ""
    },
    reducers: {
        loginAuth: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
            state.userId = action.payload.userId
            state.userName = action.payload.userName
            state.userProfile = action.payload.userProfile
        }

    }
})
export const allUserDataList = createSlice({
    name: "AllUserData",
    initialState: { userData: {} },
    reducers: {
        allUserDetails: (state, action) => {
            state.userData = action.payload
        }
    }
})
export const { loginAuth } = loginAuthentication.actions
export const { allUserDetails } = allUserDataList.actions