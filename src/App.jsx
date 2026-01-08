import { useState } from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Social } from "./components/Social";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";
import { InfoModal } from "./components/Modal";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkTheme ? "bg-neutral-950 text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      <Header
        darkTheme={darkTheme}
        toggleTheme={() => setDarkTheme(!darkTheme)}
        openInfo={() => setOpenInfo(true)}
      />

      <main className="mx-auto w-full max-w-md px-4 flex flex-col flex-1">
        <Profile darkTheme={darkTheme} />
        <Social darkTheme={darkTheme} />
        <Links darkTheme={darkTheme} />
        <Footer />
      </main>

      <InfoModal
        open={openInfo}
        onClose={() => setOpenInfo(false)}
        darkTheme={darkTheme}
      />
    </div>
  );
}
