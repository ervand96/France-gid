import { StaticImageData } from "next/image";
import phoneIcon from "@/assets/contacts/phone.png";
import emailIcon from "@/assets/contacts/email.png";
import locationIcon from "@/assets/contacts/location.png";
import whatsAppIcon from "@/assets/contacts/wp.png";

export type ContactItem = {
  icon: StaticImageData;
  key: string;
  value: string;
  sub: string;
};

export const contactData: ContactItem[] = [
  {
    icon: phoneIcon,
    key: "Phone",
    value: "+33 1 23 45 67 89",
    sub: "Availability",
  },
  {
    icon: emailIcon,
    key: "Email",
    value: "contact@eliteparisguide.com",
    sub: "Response",
  },
  {
    icon: locationIcon,
    key: "Location",
    value: "12 Rue de Rivoli, 75001 Paris",
    sub: "Appointment",
  },
  {
    icon: whatsAppIcon,
    key: "WhatsApp",
    value: "+33 6 12 34 56 78",
    sub: "QuickResponses",
  },
];
