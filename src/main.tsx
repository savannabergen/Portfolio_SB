import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

document.title = "Savanna's Portfolio";

const metaDescription = document.createElement("meta");
metaDescription.setAttribute("name", "description");
metaDescription.content = "Web Design and Development";
document.head.appendChild(metaDescription);

const metaImage = document.createElement("meta");
metaImage.setAttribute("property", "og:image");
metaImage.content = "/welcome.gif";
document.head.appendChild(metaImage);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

