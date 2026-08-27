import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import PrivacyPage from "@/pages/PrivacyPage"
import "@/styles/main.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)
