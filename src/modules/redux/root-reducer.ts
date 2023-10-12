import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthSlice } from "../auth";

const persistConfig = {
  storage,
  key: "root",
};

const rootReducer = combineReducers({
  authData: AuthSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
