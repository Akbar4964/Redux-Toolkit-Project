import { createSlice } from "@reduxjs/toolkit";
import {
  addOneUser,
  allUserGet,
  deleteOneUser,
  editOneUser,
} from "../Redux/Type";
import { toast } from "react-toastify";

export const counterSlice = createSlice({
  name: "users",
  initialState: {
    count: 0,
    users: [],
    isLoadingGet: true,
    isLoadingAdd: false,
    isLoadingDel: false,
    isLoadingEdit: false,
  },
  reducers: {
    plus: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allUserGet.pending, (state, action) => {
        state.isLoadingGet = false;
      })
      .addCase(allUserGet.fulfilled, (state, action) => {
        state.users = action.payload.data;
      })
      .addCase(allUserGet.rejected, (state, action) => {
        state.isLoadingGet = false;
      });
    builder
      .addCase(addOneUser.pending, (state, action) => {
        state.isLoadingAdd = true;
      })
      .addCase(addOneUser.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
        state.isLoadingAdd = false;
        toast.success("Added successfuly", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .addCase(addOneUser.rejected, (state, action) => {
        state.isLoadingAdd = false;
        toast.error("Bunday url mavjud emas!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    builder
      .addCase(deleteOneUser.pending, (state, action) => {
        state.isLoadingDel = true;
      })
      .addCase(deleteOneUser.fulfilled, (state, action) => {
        const deletedUser = state.users.filter((user) => {
          return user.id !== action.meta.arg;
        });
        state.users = deletedUser;
        state.isLoadingDel = false;
        toast.success("Deleted successfuly", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .addCase(deleteOneUser.rejected, (state, action) => {
        state.isLoadingDel = false;
        toast.error("Bunday url mavjud emas!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    builder
      .addCase(editOneUser.pending, (state, action) => {
        state.isLoadingEdit = true;
      })
      .addCase(editOneUser.fulfilled, (state, action) => {
        const editedUsers = state.users.map((user) => {
          if (user.id == action.payload.id) {
            return action.payload;
          }
          return user;
        });
        state.users = editedUsers;
        state.isLoadingEdit = false;
        toast.success("Edited successfuly", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .addCase(editOneUser.rejected, (state, action) => {
        state.isLoadingEdit = false;
        toast.error("Bunday url mavjud emas!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  },
});

export const { plus, minus, editUsers } = counterSlice.actions;
