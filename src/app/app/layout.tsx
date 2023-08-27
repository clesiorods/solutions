import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { SideBarProvider } from "@/context/responsive.sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SideBarProvider>
      <div className="flex h-screen w-screen overflow-hidden" >
        <SideBar />
        <div className="flex flex-col w-full">
          <TopBar />
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </SideBarProvider>
  );
}
