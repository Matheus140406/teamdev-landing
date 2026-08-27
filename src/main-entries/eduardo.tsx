import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import TeamMemberPage from "@/pages/TeamMemberPage"
import "@/styles/main.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TeamMemberPage slug="eduardo" />
  </StrictMode>,
)
