import { RootState } from "../configureStore";

export const selectCount = (state: RootState) => state.counter.value;
