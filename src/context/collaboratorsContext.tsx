import { createContext, ReactNode, useState } from "react"

export const CollaboratorsContext = createContext({})

export type ContextProps = {
  children: ReactNode
}
export const CollaboratorsContextProvider  = ({children }: ContextProps) => {
  const [collaborators, setCollaborators] = useState([]);

  return (
    <CollaboratorsContext.Provider value={{ collaborators, setCollaborators }}>
      {children}
    </CollaboratorsContext.Provider>
  );
}