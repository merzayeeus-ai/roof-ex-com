import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";


window.addEventListener("error", (event) => {
  if (!event.error || event.message === "ResizeObserver loop limit exceeded" ||
      event.message === "Script error." || event.message === "ResizeObserver loop completed with undelivered notifications.") {
    event.preventDefault();
    return;
  }
});

window.addEventListener("unhandledrejection", (event) => {
  if (!event.reason || (typeof event.reason === "string" && event.reason === "")) {
    event.preventDefault();
    return;
  }
});

createRoot(document.getElementById("root")!).render(<App />);
