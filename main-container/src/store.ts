import { atom, useAtom } from "jotai";

export type TabType = "Dashboard" | "Table";

export const TabState = atom<TabType>("Dashboard");

const useTabState = () => useAtom(TabState);

export default useTabState;
