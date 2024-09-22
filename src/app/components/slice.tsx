import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
interface Rating {
  rate: number;
  count: number;
}

interface Product {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface UserState {
  cart: Product[];
  products: Product[];
}
export const getProducts = createAsyncThunk("cart/getProducts", async () => {
  const result = await axios.get("https://fakestoreapi.com/products");
  return result.data;
});
const initialState: UserState = {
  cart: [],
  products: [],
};

export const UserSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const currentState = current(state);
      const isExist = currentState.cart.find((item) => {
        return item.id === action.payload.id;
      });
      if (!isExist) {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      } else {
        const updated = currentState?.cart?.map((item) => {
          if (item?.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        state.cart = updated;
      }
    },
    removeFromCart: (state, action) => {
      const currentState = current(state);
      const isExist = currentState.cart.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExist?.quantity===1) {

         state.cart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
      } else {
        const updated = currentState?.cart?.map((item) => {
          if (item?.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        state.cart = updated;
      }
    },
     
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addToCart ,removeFromCart} = UserSlice.actions;

export default UserSlice.reducer;
