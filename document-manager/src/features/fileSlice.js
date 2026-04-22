import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";
import { ref, push, onValue, remove, update } from "firebase/database";


export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async ({ file, category, description }) => {

  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "document_manager");

    const cloudinaryRes = await fetch(
      "https://api.cloudinary.com/v1_1/dikfbbb9d/auto/upload",
      { method: "POST", body: formData }
    );
    const cloudinaryData = await cloudinaryRes.json();

   
    const fileData = {
      name: file.name,
      type: file.type,
      size: file.size,
      category: category || "General",
      description: description || "",
      url: cloudinaryData.secure_url,
      uploadDate: new Date().toLocaleDateString(),
    };

    const dbRef = ref(db, "files");
    await push(dbRef, fileData);

    return fileData;
  }
);

export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async () => {
    return new Promise((resolve) => {
      const dbRef = ref(db, "files");
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const files = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          resolve(files);
        } else {
          resolve([]);
        }
      });
    });
  }
);

export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async (id) => {
    const dbRef = ref(db, `files/${id}`);
    await remove(dbRef);
    return id;
  }
);

export const updateFile = createAsyncThunk(
  "files/updateFile",
  async ({ id, updates }) => {
    const dbRef = ref(db, `files/${id}`);
    await update(dbRef, updates);
    return { id, updates };
  }
);

const fileSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.files = action.payload;
      })

      .addCase(deleteFile.fulfilled, (state, action) => {
        state.files = state.files.filter((f) => f.id !== action.payload);
      })

      
      .addCase(updateFile.fulfilled, (state, action) => {
        const { id, updates } = action.payload;
        const file = state.files.find((f) => f.id === id);
        if (file) {
          Object.assign(file, updates);
        }
      });
  },
});

export default fileSlice.reducer;