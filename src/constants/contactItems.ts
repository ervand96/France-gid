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
    value: "+33-609-57-27-80",
    sub: "Availability",
  },
  {
    icon: emailIcon,
    key: "Email",
    value: "garik@france-gid.ru",
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
    value: "+33-609-57-27-80",
    sub: "QuickResponses",
  },
];
