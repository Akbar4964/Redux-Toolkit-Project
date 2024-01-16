import { createSlice } from "@reduxjs/toolkit";
import {
  addOneUser,
  allUserGet,
  deleteOneUser,
  editOneUser,
} from "../Redux/Type";

export const counterSlice = createSlice({
  name: "users",
  initialState: {
    count: 0,
    users: [],
  },
  reducers: {
    // userDelete: (state, action) => {
    //   const deletedUser = state.users.filter((user) => {
    //     return user.id !== action.payload;
    //   });
    //   return { ...state, users: deletedUser };
    // },
    // editUsers: (state, action) => {]
    plus: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allUserGet.pending, (state, action) => {})
      .addCase(allUserGet.fulfilled, (state, action) => {
        state.users = action.payload.data;
      })
      .addCase(allUserGet.rejected, (state, action) => {});
    builder
      .addCase(addOneUser.pending, (state, action) => {})
      .addCase(addOneUser.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
      })
      .addCase(addOneUser.rejected, (state, action) => {});
    builder
      .addCase(deleteOneUser.pending, (state, action) => {})
      .addCase(deleteOneUser.fulfilled, (state, action) => {
        const deletedUser = state.users.filter((user) => {
          return user.id !== action.meta.arg;
        });
        state.users = deletedUser;
      })
      .addCase(deleteOneUser.rejected, (state, action) => {});
    builder
      .addCase(editOneUser.pending, (state, action) => {})
      .addCase(editOneUser.fulfilled, (state, action) => {
        const editedUsers = state.users.map((user) => {
          if (user.id == action.payload.id) {
            return action.payload;
          }
          return user;
        });
        state.users = editedUsers;
      })
      .addCase(editOneUser.rejected, (state, action) => {
        console.log("action.payload rejected", action.error.message);
      });
  },
});

export const { plus, minus, editUsers } = counterSlice.actions;
