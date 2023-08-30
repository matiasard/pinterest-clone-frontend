import "./App.css";

import { AppRouter } from "./router/AppRouter.jsx";
// type Photo = {
//   id: number;
//   width: number;
//   height: number;
//   urls: { large: string; regular: string; raw: string; small: string };
//   color: string | null;
//   user: {
//     username: string;
//     name: string;
//   };
// };

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
