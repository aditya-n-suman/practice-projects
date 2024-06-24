import { createRoot } from "react-dom/client";
import App from "./app";
import "./main.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
