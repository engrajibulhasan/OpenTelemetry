import ReactDOM from "react-dom/client";
import App from "./App";
import "./tracing"; // ⚠️ Import before React app is mounted

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
