import { createStore } from "redux";
import reducer from "./counter/reducers";
const store = createStore(reducer);

export default store;
