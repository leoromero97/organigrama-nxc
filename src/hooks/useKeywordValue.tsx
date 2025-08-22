import { KeywordValueContext } from "@/context/keywordSearchContext";
import { useContext } from "react";

export function useKeywordValue() {
  const { keyword, setKeyword } = useContext(KeywordValueContext);
  const keywordValue = keyword.toLowerCase() ?? "";

  return { keywordValue, setKeyword };
}
