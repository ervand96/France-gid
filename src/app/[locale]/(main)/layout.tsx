import CallToAction from "@/app/features/CallToAction";
import Navbar from "../../shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <CallToAction />
    </>
  );
}
