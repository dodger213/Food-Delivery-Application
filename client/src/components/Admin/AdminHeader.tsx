import UserProfile from "@/Layout/Header/UserProfile/UserProfile";

export default function AdminHeader() {
  return (
    <section className="flex h-14 items-center justify-end border-b px-4 lg:h-[60px] lg:px-12">
        <UserProfile />
    </section>
  )
}
