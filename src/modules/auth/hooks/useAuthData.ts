import { useSelector } from "react-redux";
import { selectAuthData } from "../redux";

export function useAuthData() {
  return useSelector(selectAuthData);
}
