// preview page for newly created UI components
import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <section className="mt-10">
        <h3>Avatar</h3>
        <div className="flex gap-4 mt-4 items-center">
          {/* Single-word name — shows first letter */}
          <Avatar name="alice" />
          {/* Single-word capitalised — shows first letter */}
          <Avatar name="Alice" />
          {/* PascalCase — shows first two uppercase letters */}
          <Avatar name="JohnDoe" />
          <Avatar name="HeistMaster" />
        </div>
      </section>
    </div>
  )
}
