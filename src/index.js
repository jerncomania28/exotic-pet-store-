import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

//components
import App from "./App";

//styles
import "./index.scss";

//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { far, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faSquareCheck,
  faHouse,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

library.add(far,faCircleChevronRight, faCircleChevronLeft ,faSquareCheck ,faHouse ,faBriefcase , faCircleCheck);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
