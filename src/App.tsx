import Header from "./layout/Header.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Analytics />
    </>
  );
}

export default App;