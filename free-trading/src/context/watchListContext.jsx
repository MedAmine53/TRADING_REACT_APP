import { createContext } from "react";

export const watchListContext = createContext();

export const watchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["GOOGLE","MICROSOFT","AMAZON"]);

  return <watchListContext.Provider value={watchList}>

  </watchListContext.Provider>
}