import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { clearCart, fetchCartItems } from "../cart/cartSlice";
import { clearWishlist } from "../wishList/wishlistSlice";
import { getUsers } from "@/server";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  token: string;
}

interface UserState {
  user: User | null;
  users: any[];
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: UserState = {
  user: null,
  users: [],
  isLoading: false,
  error: null,
  success: null,
};

// إضافة fetchUsers كـ createAsyncThunk
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsers();
      console.log(response.data.users);
      return response.data.users;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data;
      localStorage.setItem("token", action.payload.token);
      state.isLoading = false;
      state.error = null;
      state.success = "Login successful";
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.isLoading = false;
      state.error = null;
      state.success = "Logout successful";
      // Note: We can't dispatch clearWishlist() directly here
      // We'll handle this in the component that calls logout
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, logout, setIsLoading, setError, setSuccess } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState) => state.user;
