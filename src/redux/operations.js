import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, get } from 'firebase/database';

export const fetchTeachers = createAsyncThunk(
  'data/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const db = getDatabase();
      const dataRef = ref(db);
      const snapshot = await get(dataRef);
      const data = snapshot.val();
      if (data) {
        return Object.keys(data).map(key => ({ id: key, ...data[key] }));
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
