// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>

        <p>
          Pocket Heist turns your workplace into a playground. Create sneaky little
          missions, assign them to your colleagues, and watch the chaos unfold — one
          sticky note, stolen stapler, or rearranged desk at a time.
        </p>

        <ul>
          <li>Create heists and set them loose on your team</li>
          <li>Accept missions assigned to you and complete them before time runs out</li>
          <li>Track active, assigned, and expired heists from your dashboard</li>
        </ul>

        <p>Sign in to join the mayhem, or create an account to start your first heist.</p>
      </div>
    </div>
  )
}
