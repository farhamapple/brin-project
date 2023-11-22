import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("global_slice/config", async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
      name: data.name,
      roles: data.company?.bs,
    };
  } catch (error) {
    console.log(error);
  }
});
