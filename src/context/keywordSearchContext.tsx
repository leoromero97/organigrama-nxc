import { createContext, ReactNode, useMemo, useState, Dispatch, SetStateAction } from "react";

export const KeywordValueContext = createContext<{
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}>({
  keyword: localStorage.getItem("lastKeyword") ?? "",
  setKeyword: () => {}
});

export type ContextProps = {
  children: ReactNode;
};

export const KeywordValueProvider = ({ children }: ContextProps) => {
  const [keyword, setKeyword] = useState(
    localStorage.getItem("lastKeyword") || ""
  );

  const value = useMemo(() => ({ keyword, setKeyword }), [keyword, setKeyword]);

  return (
    <KeywordValueContext.Provider value={value}>
      {children}
    </KeywordValueContext.Provider>
  );
};
