import NextCom from "@/components/NextCom"
import SubMenu from "@/components/SubMenu"
import TopNav from "@/components/TopNav"

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <TopNav />
      <SubMenu />
      <NextCom />
    </main>
  )
}
