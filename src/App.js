import React, { Suspense } from "react";
import UserWelcome from "./Components/UserWelcome";
import Todos from "./Components/Todos";

const App = () => {
  return (
    <span>
      <h2>Simple Todo</h2>
      <Suspense revealOrder="forwards">
        <Suspense fallback={<p>Loading user details...</p>}>
          <UserWelcome />
        </Suspense>

        <Suspense fallback={<p>Loading Todos...</p>}>
          <Todos />
        </Suspense>
      </Suspense>
    </span>
  );
};
export default App;
