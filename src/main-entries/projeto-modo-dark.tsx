import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import ProjectDetailPage from "@/pages/ProjectDetailPage"
import "@/styles/main.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectDetailPage slug="modo-dark" />
  </StrictMode>,
)
