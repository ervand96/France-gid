"use client";
import { useModals } from "@/context/ModalContext";
import ContactModal from "../ContactModal";

export default function ContactModalWrapper() {
  const { isContactOpen, closeContact } = useModals();

  return <ContactModal isOpen={isContactOpen} onClose={closeContact} />;
}
