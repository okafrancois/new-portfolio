import Header from "./layout/Header.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";

export const customCubic = "cubic-bezier(.36,.85,.18,.97)";

function App() {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;