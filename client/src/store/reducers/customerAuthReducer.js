import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode as jwt } from "jwt-decode";

export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.post("/customer/customer-register", info);
      localStorage.setItem("customerToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const customer_login = createAsyncThunk(
  "auth/customer_login",
  async (info, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.post("/customer/customer-login", info);
      localStorage.setItem("customerToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const decodeToken = (token) => {
  if (token) {
    const userInfo = jwt(token);
    return userInfo;
  } else {
    return "";
  }
};

export const customerAuthReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: decodeToken(localStorage.getItem("customerToken")),
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customer_register.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(customer_register.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(customer_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        const userInfo = decodeToken(payload.token);
        state.userInfo = userInfo;
      })
      .addCase(customer_login.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(customer_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(customer_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        const userInfo = decodeToken(payload.token);
        state.userInfo = userInfo;
      });
  },
});

export const { messageClear } = customerAuthReducer.actions;
export default customerAuthReducer.reducer;
