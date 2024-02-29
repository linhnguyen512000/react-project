import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// Phần này dùng để tạo store chứa thông tin về trạng thái login và thông tin sản phẩm
const a = JSON.stringify({ isLogin: false });

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState: JSON.parse(localStorage.getItem("isLogin") ?? a),
  reducers: {
    login(state) {
      state.isLogin = true;
      localStorage.setItem("islogin", JSON.stringify(state));
    },
    logout(state) {
      state.isLogin = false;
      localStorage.setItem("islogin", JSON.stringify(state));
    },
  },
});

const b = JSON.stringify({ itemArr: [] });

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("itemArr") ?? b),
  reducers: {
    addCart(state, action) {
      let data = [];
      if (state.itemArr.length === 0) {
        data = [];
      } else {
        data = state.itemArr.filter(
          (item) => item.name === action.payload.name
        );
      }

      if (data.length === 0) {
        state.itemArr.push(action.payload);
        localStorage.setItem("itemArr", JSON.stringify(state));
      } else {
        state.itemArr = state.itemArr.map((item) => {
          if (item.name === action.payload.name) {
            item.number = item.number + action.payload.number;
            return item;
          } else return item;
        });
        localStorage.setItem("itemArr", JSON.stringify(state));
      }
    },
    updateCart(state, action) {
      state.itemArr = state.itemArr.map((item) => {
        if (item.name === action.payload.name) {
          item.number = action.payload.number;
          return item;
        } else return item;
      });
      localStorage.setItem("itemArr", JSON.stringify(state));
    },
    deleteCart(state, action) {
      state.itemArr = state.itemArr.filter(
        (item) => item.name !== action.payload
      );
      localStorage.setItem("itemArr", JSON.stringify(state));
    },
  },
});

const store = configureStore({
  reducer: { isLogin: isLoginSlice.reducer, cart: cartSlice.reducer },
});

export const isLoginActions = isLoginSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
