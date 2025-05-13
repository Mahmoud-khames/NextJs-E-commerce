import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "@/server";

// Define the product type
interface Product {
  id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  oldProductPrice?: number;
  productColors: string[];
  productSizes: string[];
  productCategory: string;
  productQuantity: number;
  productStatus: boolean;
  productRating: number;
  productReviews: string[];
  productImage: string;
  productImages: string[];
}

// Define the state
interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await getProducts();
  console.log(response.data.data)
  return response.data.data; // Adjusted to match backend response structure
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default productsSlice.reducer; 

