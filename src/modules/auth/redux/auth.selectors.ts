import { RootState } from "../../redux/root-reducer";

export function selectAuthData(state: RootState) {
  return state.authData;
}
