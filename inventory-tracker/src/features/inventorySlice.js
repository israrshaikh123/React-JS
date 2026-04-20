import { createSlice } from '@reduxjs/toolkit';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    
    setInventory: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  },
});

export const { setInventory, setStatus } = inventorySlice.actions;

export const startInventoryListener = () => (dispatch) => {
  dispatch(setStatus('loading'));
  const productsRef = ref(db, 'products');

  onValue(productsRef, (snapshot) => {
    const data = snapshot.val();
    const productsList = data 
      ? Object.entries(data).map(([id, value]) => ({ id, ...value })) 
      : [];
    
    dispatch(setInventory(productsList));
  });
};

export default inventorySlice.reducer;