import { Routes, Route} from "react-router-dom";

// components

import Navigation from "./components/navigation-bar/navigation.component";

import Home from "./Routes/home/home.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={null} />
          <Route path="signin" element={null} />
          <Route path="signup" element={null} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
