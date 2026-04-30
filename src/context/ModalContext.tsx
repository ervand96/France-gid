"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  isContactOpen: false,
  openContact: () => {},
  closeContact: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isContactOpen,
        openContact: () => setIsContactOpen(true),
        closeContact: () => setIsContactOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => useContext(ModalContext);
