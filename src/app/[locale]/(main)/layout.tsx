import CallToAction from "@/app/features/CallToAction";
import Navbar from "../../shared/Navbar";
import GetInTouch from "@/app/shared/getInTouch";

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
      <GetInTouch />
    </>
  );
}
