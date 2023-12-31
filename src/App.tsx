import Header from "./layout/Header.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const customCubic = "cubic-bezier(.36,.85,.18,.97)";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;