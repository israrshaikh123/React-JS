import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice({
  name: "leaves",
  initialState: {
    leaves: [],
    loading: false,
    error: null,
  },
  reducers: {
    addLeave: (state, action) => {
      state.leaves.push(action.payload);
    },
    deleteLeave: (state, action) => {
      state.leaves = state.leaves.filter(
        (leave) => leave.id !== action.payload
      );
    },
    updateLeave: (state, action) => {
      state.leaves = state.leaves.map((leave) =>
        leave.id === action.payload.id ? action.payload : leave
      );
    },
    updateStatus: (state, action) => {
      state.leaves = state.leaves.map((leave) =>
        leave.id === action.payload.id
          ? { ...leave, status: action.payload.status }
          : leave
      );
    },
  },
});

export const { addLeave, deleteLeave, updateLeave, updateStatus } =
  leaveSlice.actions;

export default leaveSlice.reducer;
