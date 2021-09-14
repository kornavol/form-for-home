import { FC } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Wizard from "./pages/TenantsWizzard";
AOS.init();

const App: FC = () => {
  return (
    <div className="wrapper">
      <Wizard />
    </div>
  );
};

export default App;
