import CallToAction from "@/app/features/CallToAction";
import Navbar from "../../shared/Navbar";
import GetInTouch from "@/app/shared/getInTouch";
import Footer from "@/app/shared/Footer";

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
      <Footer />
    </>
  );
}
