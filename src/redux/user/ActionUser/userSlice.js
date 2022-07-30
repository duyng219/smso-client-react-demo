import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../UserService";
import history from "../../history";


export const getAllUserList = createAsyncThunk(
    "/users/fetchUser",
    async (_, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            const response = await userService.getAllUsers();
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getOneUser = createAsyncThunk(
    "/users/getOneUser",
    async (id, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            const response = await userService.getOneUser(id);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "/users/deleteUser",
    async (id, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;

        try {
            await userService.deleteUser(id);
            // notiFunc("success", "Xóa thành công");
            setTimeout(() => {
            }, 500);
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    "/users/updateUser",
    async (data, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            // dispatch(showLoading());
            // await userService.updateUser(data.id, data.inputValue);
            // dispatch(hideLoading());
            // notiFunc("success", "Cập nhật thành công");
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState = {
    userList: [],
    user: {},
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUserList.fulfilled.type]: (state, action) => {
            state.userList = action.payload;
        },
        [getOneUser.fulfilled.type]: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;
