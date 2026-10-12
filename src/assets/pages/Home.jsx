import BestSeller from "../component/BestSeller";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import LatestCollection from "../component/LatestCollection";
import Navbar from "../component/Navbar";
import NewsLetter from "../component/NewsLetter";
import OurPolicy from "../component/OurPolicy";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;