import About from "./About/page";
import Features from "./components/Features";
import Services from "./Services/page";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
    <About />
    <Features />
    <Services />
    <Footer />
    </div>
  );
}
