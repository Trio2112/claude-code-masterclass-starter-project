// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react";

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />
          cket Heist
        </h1>
        <div>Your office. Their problem.</div>

        <p>
          Assign sneaky missions to your colleagues. Watch the chaos unfold.
          Deny everything.
        </p>

        <ul>
          <li>Dream up heists and unleash them on your unsuspecting team</li>
          <li>
            Accept missions and complete them before time — or your cover — runs
            out
          </li>
          <li>
            Track every active, assigned, and expired heist from your dashboard
          </li>
        </ul>

        <p>
          Sign in to cause trouble, or create an account to start your first
          heist.
        </p>
      </div>
    </div>
  );
}
