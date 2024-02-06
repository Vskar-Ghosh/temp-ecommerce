import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import chatReducer from "./Reducers/chatReducer";
import produtReducer from "./Reducers/produtReducer";
import sellerReducer from "./Reducers/sellerReducer";
const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: produtReducer,
  seller: sellerReducer,
  chat: chatReducer,
};
export default rootReducer;
