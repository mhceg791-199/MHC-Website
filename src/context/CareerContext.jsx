import { createContext, useState } from "react";

// Create the context
export const careerModalContext = createContext(null);

export default function CareerModelProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <careerModalContext.Provider value={{ open, setOpen }}>
      {children}
    </careerModalContext.Provider>
  );
}
