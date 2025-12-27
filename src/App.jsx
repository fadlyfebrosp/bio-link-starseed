import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Social } from "./components/Social";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base-100 flex justify-center">
      <div className="w-full max-w-md min-h-screen flex flex-col">
        <Header />
        <Profile />
        <Social />
        <Links />

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
