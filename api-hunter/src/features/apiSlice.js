import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk(
  "api/fetchApi",
  async ({ url, method, body }) => {
    const options = {
      method: method,
      headers: { "Content-Type": "application/json" },
    };

    if (method === "POST" && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url , options);
    const data = await response.json();

    return {
      status: response.status,
      data: data,
      url: url,
      method: method,
    };
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    data: null,
    error: null,
    status: null,
    url: "",
    method: "GET",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
        state.url = action.payload.url;
        state.method = action.payload.method;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;