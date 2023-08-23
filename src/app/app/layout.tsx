import SideBar from "@/components/SideBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="flex h-screen w-screen" >
      <SideBar/>
        {children}
    </main>
  );

}
