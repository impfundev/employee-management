import { atom } from "jotai";

export const queryAtom = atom({
  search: "",
  page: "",
  limit: "",
  order: "",
});
