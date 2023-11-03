declare module "mainApp/store" {
  const useTabState: () => [TabType, SetAtom<[SetStateAction<TabType>], void>];
  export default useTabState;
}
