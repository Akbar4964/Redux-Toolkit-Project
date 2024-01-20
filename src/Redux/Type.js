import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants";

export const allUserGet = createAsyncThunk("allUserGet/get", async () => {
  return await axios
    .get(BASE_URL + "/users")
    .then((res) => res)
    .catch((error) => console.log(error));
});

export const addOneUser = createAsyncThunk("addOneUser/post", async (data) => {
  return await axios.post(BASE_URL + "/users", data).then((res) => res.data);
});

export const deleteOneUser = createAsyncThunk(
  "deleteOneUser/delete",
  async (deletedUserId) => {
    return await axios
      .delete(BASE_URL + "/users/" + deletedUserId)
      .then((res) => res.data);
  }
);

export const editOneUser = createAsyncThunk(
  "editOneUser/put",
  async ({ id, data }) => {
    console.log(data);
    return await axios
      .put(BASE_URL + "/users/" + id, data)
      .then((res) => res.data);
  }
);
