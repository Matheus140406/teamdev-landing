import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import CookiesPage from "@/pages/CookiesPage"
import "@/styles/main.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesPage />
  </StrictMode>,
)
