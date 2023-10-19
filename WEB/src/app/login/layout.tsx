import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { SideBarProvider } from "@/context/responsive.sidebar";
import NextAuthSessionProvider from "../providers/sessionProvider";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(nextAuthOptions)
  if (session) {
    redirect('/app/financeiro')
  }

  return (
    <div>
      { children }
    </div>
  );
}
