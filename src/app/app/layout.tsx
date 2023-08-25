import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex h-screen w-screen" >
      <SideBar />
      <div className="flex flex-col w-full ">
        <TopBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
